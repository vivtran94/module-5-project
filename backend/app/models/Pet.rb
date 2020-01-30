class Pet < ActiveRecord::Base

    belongs_to :user
    
    has_many :appointments
    has_many :employees, through: :appointments

    has_many :notes
    has_many :employees, through: :notes

    has_many :prescriptions
    has_many :medications, through: :prescriptions

  end