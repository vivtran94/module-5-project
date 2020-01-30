class Pet < ActiveRecord::Base

    belongs_to :pet_owner
    
    has_many :appointments
    has_many :employees, through: :appointments

    has_many :medical_notes
    has_many :employees, through: :medical_notes

    has_many :prescriptions
    has_many :medications, through: :prescriptions

  end