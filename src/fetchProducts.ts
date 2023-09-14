export async function fetchData(category: string) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
