DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    movie_name VARCHAR(50) NOT NULL,
    movie_rate INT NOT NULL,
    date_watched DATE NOT NULL,
    poster_link VARCHAR(200) NOT NULL
);