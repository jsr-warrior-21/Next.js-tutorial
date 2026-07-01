export const dynamicParams = false;

export async function generateStaticParams(){
    return [{id:"1"},{id:"2"},{id:"3"}];
}

export default async function productDetails({params}:{params:Promise<{id:string}>}){
    const id =  (await params).id;
    return(
        <>
            <h1>Details of Product with product id : {id} created on {new Date().toLocaleTimeString()}</h1>       
        </>
    )
}