class PetOwnersController < ApplicationController

    def create 
        if PetOwner.find_by({ username: params[:username]})
            render json: { failed: true, message: "Username already taken. Try another one."}
        else
            user = PetOwner.create(
                first_name: params[:firstName],
                last_name: params[:lastName],
                date_of_birth: params[:dateOfBirth],
                street_address: params[:streetAddress],
                street_state: params[:state],
                street_zipcode: params[:zipCode],
                phone_number: params[:phoneNumber],
                phone_number_type: params[:phoneNumberType],
                email: params[:email],
                driver_license: params[:driverLicense],
                username: params[:username],
                password: params[:password]
            )
            render json: {user: user, token: JWT.encode( { id: user.id }, 'YOUR SECRET')}
        end
    end

    def login
        user = PetOwner.find_by({username: params[:username]})
        if user.authenticate(params[:password])
            render json: {user: user, token: JWT.encode( { id: user.id }, 'YOUR SECRET')}
        end
    end




end