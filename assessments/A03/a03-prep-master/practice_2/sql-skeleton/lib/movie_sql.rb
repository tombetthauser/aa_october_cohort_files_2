require 'singleton'
require 'sqlite3'

class MovieDatabase < SQLite3::Database
  include Singleton

  def initialize
    super(File.dirname(__FILE__) + '/../movie.db')

    self.results_as_hash = true
    self.type_translation = true
  end

  def self.execute(*args)
    self.instance.execute(*args)
  end
end

# 1. Obtain the cast list for the movie "Days of Being Wild"; order by the
# actors' name.
def days_of_being_wild_cast
  MovieDatabase.execute(<<-SQL)

    SELECT actors.name
    FROM actors
    JOIN castings ON castings.actor_id = actors.id
    JOIN movies ON castings.movie_id = movies.id
    WHERE movies.title = 'Days of Being Wild'
    ORDER BY actors.name

  SQL
end

# 2. List the films 'Tsui Hark' has directed; order by
# movie title.
def tsui_hark_films
  MovieDatabase.execute(<<-SQL)

    SELECT DISTINCT movies.title
    FROM actors
    JOIN castings ON castings.actor_id = actors.id
    JOIN movies ON castings.movie_id = movies.id
    WHERE movies.director IN (
      SELECT actors.id
      FROM actors
      WHERE actors.name = 'Tsui Hark'
      )
    ORDER BY movies.title

  SQL
end

# 3. List the films where actors with a last name
# of 'Kent' have appeared, but not in the star role.
# List the movie title and the actor name. Order by movie title.
# Note: The last name must exactly be 'Kent'. Hyphenated lasted names
# (e.g. 'Mary-Kent') should not count.
def kent_supporting_actor_films
  MovieDatabase.execute(<<-SQL)

    SELECT movies.title, actors.name
    FROM actors
    JOIN castings ON castings.actor_id = actors.id
    JOIN movies ON castings.movie_id = movies.id
    WHERE castings.ord > 1 AND actors.name LIKE '% Kent'
    ORDER BY movies.title

  SQL
end

# 4. List the films together with the leading star for all 1943
# films. Order by the actor's name.
def leading_star_for_1943_films
  MovieDatabase.execute(<<-SQL)

    SELECT movies.title, actors.name
    FROM actors
    JOIN castings ON castings.actor_id = actors.id
    JOIN movies ON castings.movie_id = movies.id
    WHERE castings.ord = 1 AND movies.yr = 1943
    ORDER BY actors.name
  
  SQL
end

# 5. There is a movie from 1920 in our database for which there is no
#    associated casting information. Give the title of this movie.
def no_casting_info
  MovieDatabase.execute(<<-SQL)

    SELECT movies.title
    FROM movies
    LEFT OUTER JOIN castings ON castings.movie_id = movies.id
    LEFT OUTER JOIN actors ON castings.actor_id = actors.id
    WHERE castings.actor_id IS NULL AND movies.yr = 1920

  SQL
end

# 6. Obtain a list in alphabetical order of actors who've had >=26
# starring roles. Order by actor name.
def biggest_stars
  MovieDatabase.execute(<<-SQL)

    SELECT actors.name, COUNT(*) AS count
    FROM movies
    JOIN castings ON castings.movie_id = movies.id
    JOIN actors ON castings.actor_id = actors.id
    WHERE castings.ord = 1
    GROUP BY actors.name
    HAVING COUNT(*) >= 26
    ORDER BY actors.name

  SQL
end

# 7. List the movie year, movie title, and supporting actor (ord = 2)
# for all of the films in which Will Smith played the star role
# (ord = 1). Order by the name of the supporting actors.
def will_smith_supporting_actors
  MovieDatabase.execute(<<-SQL)

    SELECT movies.yr, movies.title, actors.name
    FROM movies
    JOIN castings ON castings.movie_id = movies.id
    JOIN actors ON castings.actor_id = actors.id
    WHERE castings.ord = 2 AND movies.id IN (
      SELECT movies.id
      FROM movies
      JOIN castings ON castings.movie_id = movies.id
      JOIN actors ON castings.actor_id = actors.id
      WHERE actors.name = 'Will Smith' AND castings.ord = 1
    )
    ORDER BY actors.name

  SQL
end

# 8. There is a movie in which 'Barrie Ingham' plays two roles. Write a
# query that returns the title of this movie.
def barrie_ingham_multiple_roles
  MovieDatabase.execute(<<-SQL)

    SELECT movies.title
    FROM movies
    JOIN castings ON castings.movie_id = movies.id
    JOIN actors ON castings.actor_id = actors.id
    WHERE castings.ord = 1 AND actors.name = 'Barrie Ingham' AND movies.id IN (
      SELECT movies.id
      FROM movies
      JOIN castings ON castings.movie_id = movies.id
      JOIN actors ON castings.actor_id = actors.id
      WHERE actors.name = 'Barrie Ingham' AND castings.ord != 1
    )

  SQL
end
