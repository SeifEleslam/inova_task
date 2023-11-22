const getCouses = () => {
  getData(
    "/api/v2/storefront/products?filter[sub_product_type]=course&filter[product_type]=digital"
  );
};
const getCouse = () => {};
async function getData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}
