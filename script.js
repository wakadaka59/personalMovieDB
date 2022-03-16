"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
    movieName = prompt('Один из последних просмотренных фильмов?', ''),
    movieScore = +prompt('На сколько оцените его?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[movieName] = movieScore;
