export async function load({ fetch }) {
  const fetchProducts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  };

  return {
    posts: fetchProducts(),
  };
}
