import serverFunction from "@/utils/server-utils"

export default function serverRoute(){
    const result = serverFunction();
    return(
        <>
        <h1>Server-Route : {result}</h1>
        </>
    )
}