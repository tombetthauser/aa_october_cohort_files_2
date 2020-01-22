class Pokemon < ApplicationRecord
  TYPES = [
    'fire',
    'electric',
    'normal',
    'ghost',
    'psychic',
    'water',
    'bug',
    'dragon',
    'grass',
    'fighting',
    'ice',
    'flying',
    'poison',
    'ground',
    'rock',
    'steel'
  ].sort.freeze

  validates :attack, :defense, :image_url, :name, :poke_type, presence: true
  validates :name, uniqueness: true
  validates :attack, :defense, numericality: true
  validates :poke_type, inclusion: { in: TYPES }

  has_many :items
end

# == Schema Information
#
# Table name: pokemons
#
#  id         :integer(8)      not null, primary key
#  name       :string          not null
#  attack     :integer(4)      not null
#  defense    :integer(4)      not null
#  poke_type  :string          not null
#  moves      :string          default("{}"), not null
#  image_url  :string          not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

