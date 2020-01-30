class Task < ActiveRecord::Base

    belongs_to :pet_owner
    belongs_to :employee

end