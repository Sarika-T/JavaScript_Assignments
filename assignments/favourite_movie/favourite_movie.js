const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    if (operation === 'add') {
        movies.push(movie);
    } else if (operation === 'remove') {
        movies.pop();
    }
    return movies
        // movies
}


module.exports = favouriteMovie;