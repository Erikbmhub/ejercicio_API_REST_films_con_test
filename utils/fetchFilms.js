require("dotenv").config();

const API_KEY = process.env.API_KEY;

async function fetchFilms(title) {
  const res = await fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`
  );
 const data = await res.json();

if (data.Response === "False") {
  return null;
}

return data;
}

module.exports = fetchFilms;