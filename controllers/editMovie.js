const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_id, movie_name, info, rating, description } = req.body;

  if (!movie_id) throw "Movie id is require!";

  await moviesModel.updateOne(
    {
      _id: movie_id,
    },
    {
      movie_name: movie_name,
      rating: rating,
      info: info,
      description: description,
    },
    {
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "Success!",
    message: "MOvie updated successfully",
  });
};

module.exports = editMovie;
