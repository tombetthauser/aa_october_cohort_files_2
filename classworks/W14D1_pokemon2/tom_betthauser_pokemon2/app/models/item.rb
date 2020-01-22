class Item < ApplicationRecord
  validates :happiness, :image_url, :name, :price, presence: true
  validates :happiness, :price, numericality: true

  belongs_to :pokemon
end

# == Schema Information
#
# Table name: items
#
#  id         :integer(8)      not null, primary key
#  pokemon_id :integer(4)      not null
#  name       :string          not null
#  price      :integer(4)      not null
#  happiness  :integer(4)      not null
#  image_url  :string          not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

