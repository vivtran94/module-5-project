class UsersController < ApplicationController

    def create 
        token = JWT.encode( { id: user.id, role: 'user' }, 'YOUR SECRET')
        if User.find_by({ username: params[:username]})
            render json: { failed: true, message: "Username already taken. Try another one."}
        else
            user = User.create(
                first_name: params[:firstName],
                last_name: params[:lastName],
                date_of_birth: params[:dateOfBirth],
                street_address: params[:streetAddress],
                street_city: params[:city,],
                street_state: params[:state],
                street_zipcode: params[:zipCode],
                phone_number: params[:phoneNumber],
                email: params[:email],
                driver_license: params[:driverLicense],
                username: params[:username],
                password: params[:password]
            )
            render json: {user: user, token: token}
        end
    end

    def login
        user = User.find_by({username: params[:username]})
        token = JWT.encode( { id: user.id, role: 'user' }, 'YOUR SECRET')
        if user.authenticate(params[:password])
            render json: {user: user, token: token}, 
                include: [ pets: {
                    include: [ :appointments, :notes ]
                }, tasks: {} ] 
        else
            render json: { failed: true, message: 'Incorrect username or password'}
        end
    
    end

    def get_user
        user = self.current_user
        token = JWT.encode( { id: user.id, role: 'user' }, 'YOUR SECRET')
        render json: {user: user, token: token}, 
            include: [ pets: {
                include: [ :appointments, :notes ]
            }, tasks: {} ] 
    end

    def index
        users = User.all
        render json: users
    end

end