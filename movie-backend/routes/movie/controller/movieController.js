const Movie = require('../model/Movie.js');

module.exports = {
    createMovie: async (req, res) => {
        try {
            let newMovie = new Movie({
                Movie: req.body.movie,
            });
            let savedMovieItem = await newMovie.save();
            
            res.json({
                data: savedMovieItem
            });
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    },
getAllMovie: async (req, res) => {

    try {
        let getAllMovie = await Movie.find({});

        res.json({
            data: getAllMovie,
        })
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
},


deleteByID: async (req, res) =>{
    try{
        let deletedMovie = await Movie.findByIdAndDelete({
            _id: req.params.id,
        });
        res.json({
            data: deletedMovie,
        })
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
},
updateMovieByID: async (req, res) => {
    try {
    let updatedMovie = await Movie.findByIdAndUpdate(
        { _id: req.params.id },
        { Movie: req.body},
        { new: true }
    );

    res.status(200).json({
        message: "successfully updated",
        updatedMovie: updatedMovie,
    });
    } catch (e) {
    res.status(500).json({ error: e.message });
    }
},
    };