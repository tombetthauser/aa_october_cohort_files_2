class Link < ApplicationRecord

    validates :title, :url, :user, presence: true

    belongs_to :user
    has_many :comments

end
