const express = require("express");
const router = express.Router();

const filmsController = require("../controllers/films.controller");


const { getFilm } = require("../controllers/films.controller");
//http://localhost:3000/api/film/Inception
router.get("/film/:title", getFilm);
//http://localhost:3000/api/film/
/*{
  "Title": "Test Movie",
  "Author": "Test Author",
  "Description": "Test Description",
  "Src": "test.png"
} */
router.post("/film/", filmsController.createFilm);
//http://localhost:3000/api/film/
/* {
  "id": 123,
  "Title": "Updated Test Movie",
  "Author": "Updated Test Author",
  "Description": "Updated Test Description",
  "Src": "updated_test.png"
}*/
router.put("/film/", filmsController.updateFilm);
//http://localhost:3000/api/film/
router.delete("/film/", filmsController.deleteFilm);

module.exports = router;