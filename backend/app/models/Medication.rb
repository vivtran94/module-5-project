class Medication < ActiveRecord::Base

    has_many :prescriptions
    has_many :pets, through: :prescriptions
    
end