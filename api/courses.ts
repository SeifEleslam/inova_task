const BASE_URL = "http://3.65.32.166";

export async function getCourses() {
  let data = await getData(
    BASE_URL +
      "/api/v2/storefront/products?filter[sub_product_type]=course&filter[product_type]=digital"
  );
  console.log(data);

  return data;
}
export const getCousre = () => {};
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
