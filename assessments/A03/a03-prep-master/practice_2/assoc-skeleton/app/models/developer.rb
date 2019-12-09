# == Schema Information
#
# Table name: developers
#
#  id                :integer          not null, primary key
#  student_pod_id    :integer
#  student_circle_id :integer
#  name              :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Developer < ApplicationRecord

    belongs_to :pod,
        foreign_key: :student_pod_id,
        class_name: :Pod,
        optional: true

    belongs_to :circle,
        foreign_key: :student_circle_id,
        class_name: :Circle,
        optional: true

    



    has_many :circles,
        foreign_key: :circle_leader_id,
        class_name: :Circle

    has_one :final_project,
        foreign_key: :student_id,
        class_name: :FinalProject
    
    has_many :supervising_projects,
        foreign_key: :supervisor_id,
        class_name: :FinalProject

    has_many :pods,
        foreign_key: :pod_leader_id,
        class_name: :Pod

    has_many :teaching_assistant_memberships,
        foreign_key: :teaching_assistant_id,
        class_name: :TeachingAssistantMembership





    has_one :pod_leader,
        through: :pod,
        source: :pod_leader

    has_many :students,
        through: :pods,
        source: :students
    
    has_many :led_circles,
        through: :students,
        source: :circle

    has_many :technological_skills,
        through: :final_project,
        source: :technologies

    




end
