const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies"); // same as importing movie model
  const { movie_name, info, rating, description } = req.body;

  //Validations... 

  
    //if (!movie_name) throw "Movie name is required!";
    if (!info) throw "Info must be provided!";
    if (!rating) throw "Ratiing is not provided!";
    if (rating < 1 || rating > 10) throw "Rating must be between 1-10";
  

  //Success

  
    const createdMovie = await moviesModel.create({
      movie_name: movie_name,
      info: info,
      rating: rating,
      description: description,
    });
   // console.log(createdMovie);
  

  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
  });
};

module.exports = addMovie;
