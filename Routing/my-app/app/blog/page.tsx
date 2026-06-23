
export default async function blog(){
    await new Promise((resolve)=>{
        setTimeout(() => {
          resolve("promise resolved") 
        },2000);
    })
    return <h1>Welcome to My new blog.</h1>
}