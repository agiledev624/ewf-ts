import { DB, Genre, Movie } from "./index.types"
import fs from 'fs';

declare global {
  interface Set<T> {
    hasAll(set: Set<T>): boolean;
    hasAny(set: Set<T>): boolean;
  }
}

Set.prototype.hasAll = function<T>(set: Set<T>): boolean {
  for (let item of set) {
    if (!this.has(item)) {
      return false;
    }
  }
  return true;
};

Set.prototype.hasAny = function<T>(set: Set<T>): boolean {
  for (let item of set) {
    if (this.has(item)) {
      return true;
    }
  }
  return false;
};


export const getFilteredMovies = ({ genres }: { genres: Genre[] }): Movie[] => {
  let movies = getMovies("src/db.json");

  if (genres.length === 0) {
    return [getRandomMovie(movies)];
  }
  
  let allGenres = new Set<Genre>(genres);
  let threeGenres = new Set<Movie>();
  let twoGenres = new Set<Movie>();
  let oneGenre = new Set<Movie>();
  
  for (let movie of movies) {
    let movieGenres: Set<Genre> = new Set<Genre>(movie.genres);
    
    if (allGenres.hasAll(movieGenres) && movieGenres.size === 3) {
      threeGenres.add(movie);
    } else if (allGenres.hasAll(movieGenres) && movieGenres.size === 2) {
      twoGenres.add(movie);
    } else if (allGenres.hasAll(movieGenres) && movieGenres.size === 1) {
      oneGenre.add(movie);
    } 
  }

  let result: Movie[] = [];
  result.push(...threeGenres);
  result.push(...twoGenres);
  result.push(...oneGenre);
  result = removeDuplicates(result);
  console.log(result)
  return result;
}

const getMovies = (filePath: string): Movie[] => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const obj: DB = JSON.parse(data);
    return obj.movies;
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
}

const getRandomMovie = (array: Movie[]): Movie => {
  return array[Math.floor(Math.random() * array.length)];
}

const removeDuplicates = (array: Movie[]): Movie[] => {
  return Array.from(new Set(array));
}