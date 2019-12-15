# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#  id          :integer      not null, primary key
#  movie_id    :integer      not null
#  actor_id    :integer      not null
#  ord         :integer

# IMPORTANT:
# For all of the following problems return an ActiveRecord::Association unless
# otherwise specified. 

def find_the_ship
  # Find the id, year and the score of Titanic
  Movie.select(:id, :yr, :score).where(title: 'Titanic')
end

def lowest_score
  # Find the id and title of movies with a scores lower than 2
  Movie.select(:id, :title).where('score < 2')
end

def god_father_movies
  # Find the id, title and year of each Godfather movie
  Movie.select(:id, :title, :yr).where("title LIKE '%Godfather%'")
end

def stewart_movies
  # Find the id, title, and score of all the movies the actor "Patrick Stewart"
  # was in.
  Movie.select(:id, :title, :score).joins(:actors).where(actors: {name: 'Patrick Stewart'})
end


def meg_movies
  # Find the id, title, and year of movies Meg Ryan has acted in.
  # Order them in ascending order by year.
  Movie
    .select(:id, :title, :yr)
    .joins(:actors)
    .where(actors: {name: 'Meg Ryan'})
    .order(:yr)
end


def actor_ids_from_blade_runner
  # Return an array (NOT an ActiveRecord:Association) of the `ids` of 
  # all the actors that were in the movie "Blade Runner"

end

def al_pacino_not_number_one
  # Find the id and title of all movies in which Al Pacino
  # appeared but not as a lead actor.

  # Reminder: In the castings table the lead actor for a movie will
  # have an ord = 1 

end

def harrying_times
  # Return an array of the year(s) (NOT an ActiveRecord:Association) in which
  # Harrison Ford made at least 2 movies. 

end

def biggest_cast
  # Find the id and title of the 3 movies with the
  # largest casts (i.e most actors)

end


def vain_directors
# Below we've provided a SQL statement:
# SELECT movies.id, movies.title, actors.name
# FROM "movies"
# INNER JOIN "castings" ON "castings"."movie_id" = "movies"."id"
# INNER JOIN "actors" ON "actors"."id" = "castings"."actor_id"
# WHERE (director_id = actors.id) AND (castings.ord = 1)

# Below write an Active Record method that will return the same results
# as the above SQL query.


end
