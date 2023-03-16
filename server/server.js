const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://theresagri:XcsNUtaP9GJdX3i@cluster0.jycu5sj.mongodb.net/sample_mflix"
);

let Movie = require("./model/Movie.js");

async function imdbRating(rating) {
  try {
    const movieWithGreaterImdbRating = await Movie.find({
      "imdb.rating": { $gte: rating },
    });
    console.log(movieWithGreaterImdbRating);
  } catch (error) {
    console.error(error);
  }
}

/* imdbRating(8.5);
 */
async function sortMoviesAscending(amount) {
  try {
    let movies = await Movie.find()
      .sort({ year: 1 })
      .skip(amount * 100)
      .limit(100);
    console.log(movies);
  } catch (error) {
    console.error(error);
  }
}

/* sortMoviesAscending(0);
  sortMoviesAscending(1); */

async function findMoviesWithActor(actor, amount) {
  try{
    let movies = await Movie.find({cast: {$in: actor}}).skip(amount*10).limit(10);
    console.log(movies);

  } catch(error) {
    console.error(error);
  }

}
findMoviesWithActor(["Tom Hanks"],1);

