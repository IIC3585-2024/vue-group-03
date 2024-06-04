export async function fetchNews(category) {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`);
    const data = await response.json();
    return data;
}