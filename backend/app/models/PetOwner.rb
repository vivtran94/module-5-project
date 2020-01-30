class PetOwner < ActiveRecord::Base
    
    has_many :pets
    
    has_many :tasks
    has_many :employees, through: :tasks

  end