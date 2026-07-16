export const dynamicParams = false;

// false aur true means --- jitne id's ke liye maine generateStaticParams kiya hai 
// agar ye true hai -- to bss yahi 3 ke liye hi chalegi baki 4 or 5 and soo one ke liye ye error dega aur na hi on demand page generate hoga
// agar false hua -- to inn 3 ke liye build time prr hi static page generate hoga sath sath agar 3 ke alawa kisi page prr visit kroge to on demand bhi page generate hoga

export async function generateStaticParams(){
    return [{id:"1"},{id:"2"},{id:"3"}];
}

// generateStaticParams for multiple page
//  --- /product/[category]/[product]/page.tsx
// export async function generateStaticParams(){
//     return [
// {category:"phone",product:"iphone"}, --- static rendering for the route -- /product/phone/iphone
// {category:"laptop",product:"HP victue"}, --- /product/laptop/Hp victus
// {category:"electronic",product:"oven"}
// ];
// }

export default async function productDetails({params}:{params:Promise<{id:string}>}){
    const id =  (await params).id;
    return(
        <>
            <h1>Details of Product with product id : {id} created on {new Date().toLocaleTimeString()}</h1>       
        </>
    )
}