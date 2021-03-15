var express = require('express');
var router = express.Router();
var { 
    createMovie,
    getAllMovie,
    deleteByID,
    updateMovieByID,
} = require('./controller/movieController')

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Express' });
});

router.post("/create-movie", createMovie);

router.get("/get-all-movie", getAllMovie);

router.delete("/delete-by-id/:id", deleteByID);

router.put("/update-movie-by-id/:id", updateMovieByID);
module.exports = router;