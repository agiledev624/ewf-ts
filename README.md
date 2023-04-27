## Energy Web - JavaScript/TypeScript Developer recruitment task

### Explanation for time complexity

The time complexity of this algorithm depends on the size of the movie database and the length of the genres array. In the worst case, the getMovies function would need to retrieve all movies in the database, which would take O(N) time, where N is the number of movies. The removeDuplicates function would also take O(N) time in the worst case, where N is the number of movies returned by getMovies. The rest of the algorithm involves iterating over the movies and adding them to sets, which takes O(M) time, where M is the number of movies returned by getMovies. Finally, the result array is constructed by concatenating the sets, which takes O(N) time in the worst case due to the removeDuplicates step. Therefore, the overall time complexity of the algorithm is O(N + M), where N is the number of movies and M is the number of movies that match the requested genres.

## Before start
1. Please remove `.git` folder and initialize your own repository using this repository as a starting point
2. Please install all dependencies using `npm i`


## TODO'S
1. Write an algorithm that would help us find the right movie: 
  * If we provide genres [Comedy, Fantasy, Crime] then the top hits should be movies that have all three of them, then there should be movies that have one of [Comedy, Fantasy], [Comedy, Crime], [Fantasy, Crime] and then those with Comedy only, Fantasy only and Crime only. Similarly applies when the requested array of genres is shorter.

  * Of course we don't want to have duplicates.

  * If we provide an empty list, then we should get a single random movie. (return type should be a array with single movie)

2. The algorithm needs to as efficient as possible, so please also provide its complexity using "Big O" notation with some explanation how you've calculated it. 

To make it easier we've also provided a set of tests to make sure your solution works as expected. You can find them in `./src/__tests__`. To run them just use:
```bash
npm t
```

### Rules
* Please not use any outside library like `lodash` etc.
* We require code in git repository
* All tests needs to pass


