const fetchFilms = require("../utils/fetchFilms");

async function getFilm(req, res) {
  const title = req.params.title;

  try {
    const film = await fetchFilms(title);

    if (!film) {
      return res.status(404).json({
        message: "Film not found"
      });
    }

    res.status(200).json(film);

  } catch (error) {
    res.status(500).json({
      message: "Error al obtener película"
    });
  }
}
async function createFilm(req, res) {
  const film = req.body;

  res.status(200).json({
    message: `Se ha guardado ${film.Title}`
  });
}
function updateFilm(req, res) {
  const film = req.body;

  res.status(200).json({
    message: `Se ha actualizado ${film.Title}`
  });
}
function deleteFilm(req, res) {
  const film = req.body;

  res.status(200).json({
    message: `Se ha borrado la película con ID: ${film.id}`
  });
}
module.exports = {
  getFilm,
  createFilm,
  updateFilm,
  deleteFilm
};