export async function review() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("review");
    }, 4000);
  });
  return (
    <>
      <h1>Review</h1>
    </>
  );
}
