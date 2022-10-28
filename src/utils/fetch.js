export default async function fetchAPI(endpoint = '') {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}?populate=deep`);
  const result = await response.json();
  const { data: { attributes: data } } = result;
  return data;
}