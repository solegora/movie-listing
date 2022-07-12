import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from '../src/Components/MovieList';
import MovieListHeading from '../src/Components/MovieListHeading';
import AddFavourites from '../src/Components/AddFavourite';
import RemoveFavourites from '../src/Components/RemoveFavourites';
import Box from '@mui/material/Box';


const App = () => {
    // list of Movies Array
    const [movies] = useState([

        {
            "id": 1,
            "Title": "The Cotton Club",
            "Year": "1984",
            "imdbID": "127",
            "Genres": [
                "Crime",
                "Drama",
                "Music"
            ],
            "Director": "Francis Ford Coppola",
            "Actors": "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
            "Plot": "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
        },

        {
            "id": 2,
            "Title": "Crocodile Dundee",
            "Year": "1986",
            "imdbID": "97",
            "Genres": [
                "Adventure",
                "Comedy"
            ],
            "Director": "Peter Faiman",
            "Actors": "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
            "Plot": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
        },

        {
            "id": 3,
            "Title": "Ratatouille",
            "Year": "1985",
            "imdbID": "111",
            "Genres": [
                "Animation",
                "Comedy",
                "Family"
            ],
            "Director": "Brad Bird, Jan Pinkava",
            "Actors": "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
            "Plot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
        },
        {
            "id": 4,
            "Title": "City of God",
            "Year": "1988",
            "imdbID": "130",
            "Genres": [
                "Crime",
                "Drama"
            ],
            "Director": "Fernando Meirelles, Kátia Lund",
            "Actors": "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
            "Plot": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
        },
        {
            "id": 5,
            "Title": "Stardust",
            "Year": "1978",
            "imdbID": "127",
            "Genres": [
                "Adventure",
                "Family",
                "Fantasy"
            ],
            "Director": "Matthew Vaughn",
            "Actors": "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
            "Plot": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
        },
        {
            "id": 6,
            "Title": "Apocalypto",
            "Year": "1988",
            "imdbID": "139",
            "Genres": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "Director": "Mel Gibson",
            "Actors": "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
            "Plot": "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
        },

        {
            "id": 7,
            "Title": "No Country for Old Men",
            "Year": "1966",
            "imdbID": "122",
            "Genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "Director": "Ethan Coen, Joel Coen",
            "Actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
            "Plot": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
        },

    ]);

    // state for fav movies
    const [favourites, setFavourites] = useState([]);

    // save movies to local storage
    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    // add fav movies and save to local storage
    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };
    //  remove movies from fav a
    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );

        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };



    return (
        <div>


            <Box>
                <MovieListHeading heading='Favourites' />
            </Box>
            <div className='row'>
                <MovieList movies={favourites}
                    handleFavouritesClick={removeFavouriteMovie}
                    favouriteComponent={RemoveFavourites} />
            </div>

            <Box className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='List Of 80s Movies' />
            </Box>
            <div className='row'>
                <MovieList
                    movies={movies}
                    favouriteComponent={AddFavourites}
                    handleFavouritesClick={addFavouriteMovie}
                />

            </div>


        </div>
    );
};

export default App;