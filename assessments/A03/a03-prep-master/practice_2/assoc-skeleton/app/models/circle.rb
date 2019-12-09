# == Schema Information
#
# Table name: circles
#
#  id               :integer          not null, primary key
#  circle_leader_id :integer          not null
#  pod_id           :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Circle < ApplicationRecord

    belongs_to :circle_leader,
        foreign_key: :circle_leader_id,
        class_name: :Developer

    belongs_to :pod,
        foreign_key: :pod_id,
        class_name: :Pod

    
    
    has_many :students,
        foreign_key: :student_circle_id,
        class_name: :Developer
        
            


end
