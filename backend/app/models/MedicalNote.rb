class MedicalNote < ActiveRecord::Base

    belongs_to :pet
    belongs_to :employee
    
end