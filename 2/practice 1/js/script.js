"use strict";

const numberOfFilms = +prompt("How much files you watched?", "1");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

const a = prompt("Last watched film?", ""),
      b = prompt("Rate it", ""),
      c = prompt("Last watched film?", ""),
      d = prompt("Rate it", "");
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);