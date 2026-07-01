export async function product() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("product");
    }, 2000);
  });
  return (
    <>
      <h1>Product</h1>
    </>
  );
}
