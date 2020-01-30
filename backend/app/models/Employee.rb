class Employee < ActiveRecord::Base

    has_many :appointments
    has_many :pets, through: :appointments

    has_many :medical_notes
    has_many :pets, through: :medical_notes
    
  end
  