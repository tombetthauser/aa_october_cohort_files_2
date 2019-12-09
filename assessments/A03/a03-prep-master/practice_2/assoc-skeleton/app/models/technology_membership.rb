# == Schema Information
#
# Table name: technology_memberships
#
#  id               :integer          not null, primary key
#  technology_id    :integer          not null
#  final_project_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class TechnologyMembership < ApplicationRecord


    belongs_to :technology,
        foreign_key: :technology_id,
        class_name: :Technology

    belongs_to :final_project,
        foreign_key: :final_project_id,
        class_name: :FinalProject

    # belongs_to :,
    #     foreign_key: :,
    #     class_name: :

end
