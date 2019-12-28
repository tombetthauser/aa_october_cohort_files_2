class Comment < ApplicationRecord

    validates :body, :user_id, :link_id, presence: true

    belongs_to :user
    belongs_to :link

end


# about a minute - no bugs no notes - basically dictated 1:1 from specs