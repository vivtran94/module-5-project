class Employee < ActiveRecord::Base

    has_many :appointments
    has_many :pets, through: :appointments

    has_many :notes
    has_many :pets, through: :notes

    has_secure_password
    
  end
  