class Link < ApplicationRecord

    validates :title, :url, :user_id, presence: true

    belongs_to :user
    has_many :comments

end

# about a minute - no bugs no notes - basically dictated 1:1 from specs