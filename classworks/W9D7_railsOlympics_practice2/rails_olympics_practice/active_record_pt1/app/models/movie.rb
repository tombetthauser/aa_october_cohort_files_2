# == Schema Information
#
# Table name: movies
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  yr          :integer          not null
#  score       :float            not null
#  votes       :integer          not null
#  director_id :integer          not null
#

class Movie < ApplicationRecord
  belongs_to :director,
    class_name: :Actor,
    foreign_key: :director_id,
    primary_key: :id

  has_many :castings,
    class_name: :Casting,
    foreign_key: :movie_id,
    primary_key: :id

  has_many :actors,
    through: :castings,
    source: :actor

# N+1 PORTION OF THE EVALUATION HERE:

# Below write a method named `count_of_big_actors_roles`. This method will be called
# on a Movie model instance and will return a HASH (not an ActiveRecord:Relation) 
# with the name of the actors in the movie as the keys and the value will be how 
# many movies that actor has been in. 

# The hash should only contain actors who have been in *more* than ten movies.

# Naively solving this problem will inherently create an N+1 query. Full credit
# will only be given for methods that do NOT create an N+1 query.

# Scoring: 6 points maximum
#   3 points awarded for passing all four of the examples
#   3 additional points awarded if the implementation does not suffer from N+1

# This component of the evaluation is estimated to take 10 minutes.


# Use the below examples in the rails console:
# Examples:
#  Movie.find(18).count_of_big_actors_roles  => {"Bruce Willis"=>20}
#  Movie.find(1518).count_of_big_actors_roles => {"Clint Eastwood"=>20}
#  Movie.find(264).count_of_big_actors_roles  => {"Michael McKean"=>13, "Bruno Kirby"=>12}
#  Movie.find(567).count_of_big_actors_roles => {"Al Pacino"=>19, 
#                                                "Dustin Hoffman"=>16,
#                                                "Charles Durning"=>12}


end

