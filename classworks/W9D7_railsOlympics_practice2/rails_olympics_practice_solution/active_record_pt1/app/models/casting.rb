# == Schema Information
#
# Table name: castings
#
#  id       :bigint           not null, primary key
#  actor_id :integer          not null
#  movie_id :integer          not null
#  ord      :integer          not null
#

class Casting < ApplicationRecord

end
