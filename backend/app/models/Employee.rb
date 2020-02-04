class Employee < ActiveRecord::Base

    has_many :appointments
    has_many :pets, through: :appointments

    has_many :notes
    has_many :pets, through: :notes

    has_many :tasks
    has_many :users, through: :tasks

    has_secure_password
    
  end
  