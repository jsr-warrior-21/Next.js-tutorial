type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

async function getUserPosts(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return res.json();
}

async function getUserAlbums(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  
  // this is sequencial fetching - time taken 2 cause one after second
  //  const posts: Post[] = await getUserPosts(userId);
  // const albums: Album[] = await getUserAlbums(userId);

  // this is parallel fetching - time taken 1 case runnig parallely

  const postsData = getUserPosts(userId);
  const albumsData = getUserAlbums(userId);
  const [posts, albums] = await Promise.all([postsData, albumsData]);
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <div className="space-y-4">
            {posts.map((post: Post) => (
              <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Albums</h2>
          <div className="space-y-4">
            {albums.map((album: Album) => (
              <div key={album.id} className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-700">{album.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}




// ============================================
// QUICK COMPARISON: Promise.all vs allSettled vs race vs any
// ============================================

// Promise.all
// Resolves when: all resolve
// Rejects when:  any one rejects
// Use case:      need everything, fail together
// const p1 = Promise.all([promiseA, promiseB]);

// Promise.allSettled
// Resolves when: all settle (success or fail)
// Rejects when:  never
// Use case:      need everything, tolerate partial failure
// const p2 = Promise.allSettled([promiseA, promiseB]);

// Promise.race
// Resolves when: first one settles
// Rejects when:  first one settles (if it's a rejection)
// Use case:      timeout, "whichever is fastest"
// const p3 = Promise.race([promiseA, promiseB]);

// Promise.any
// Resolves when: first one succeeds
// Rejects when:  all reject
// Use case:      fallback/redundant sources
// const p4 = Promise.any([promiseA, promiseB]);



// why not using Album and Post type

// case one - using like this

// async function getUserPosts(userId: string): Promise<Post[]> {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
//   );
//   return res.json();
// }

// async function getUserAlbums(userId: string): Promise<Album[]> {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
//   );
//   return res.json();
// }

// second case --

// const [posts, albums]: [Post[], Album[]] = await Promise.all([postsData, albumsData]);

// third case - which i have used during the mapping of the element