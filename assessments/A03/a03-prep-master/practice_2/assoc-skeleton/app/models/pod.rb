# == Schema Information
#
# Table name: pods
#
#  id              :integer          not null, primary key
#  pod_leader_id   :integer          not null
#  name            :string           not null
#  coolness_rating :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Pod < ApplicationRecord

    belongs_to :pod_leader,
        foreign_key: :pod_leader_id,
        class_name: :Developer



    
    has_many :circles,
        foreign_key: :pod_id,
        class_name: :Circle


    has_many :students,
        foreign_key: :student_pod_id,
        class_name: :Developer


    has_many :teaching_assistant_memberships,
        foreign_key: :pod_id,
        class_name: :TeachingAssistantMembership
        
    
    has_many :teaching_assistants,
        through: :teaching_assistant_memberships,
        source: :teaching_assistant

end
