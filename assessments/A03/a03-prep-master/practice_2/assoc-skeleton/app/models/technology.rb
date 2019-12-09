# == Schema Information
#
# Table name: technologies
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Technology < ApplicationRecord


    has_many :technology_memberships,
        foreign_key: :technology_id,
        class_name: :TechnologyMembership

    has_many :projects,
        through: :technology_memberships,
        source: :final_project
            
end
