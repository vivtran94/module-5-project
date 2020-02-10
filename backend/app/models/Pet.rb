class Pet < ActiveRecord::Base
  include Rails.application.routes.url_helpers 

    belongs_to :user
    has_one_attached :profile_pic

    def profile_url
      begin
          url_for(self.profile_pic)
      rescue => error
          ""
      end
    end
    
    has_many :appointments
    has_many :employees, through: :appointments

    has_many :notes
    has_many :employees, through: :notes

    has_many :prescriptions
    has_many :medications, through: :prescriptions

  end