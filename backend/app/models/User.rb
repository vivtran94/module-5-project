class User < ActiveRecord::Base
    
    has_many :pets
    
    has_many :tasks
    has_many :employees, through: :tasks

    has_secure_password

  end