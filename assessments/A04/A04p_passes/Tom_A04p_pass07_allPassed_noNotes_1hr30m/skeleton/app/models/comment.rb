class Comment < ApplicationRecord

    validates :body, :link_id, :user_id, presence: true
    belongs_to :user
    belongs_to :link

end
