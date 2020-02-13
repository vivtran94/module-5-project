class PetsController < ApplicationController

    def create
        user = current_user
        pet = Pet.create(
            user: user,
            name: params[:name],
            date_of_birth: params[:dateOfBirth],
            gender: params[:gender],
            breed: params[:breed],
            color: params[:color]
        )
        render json: { pet: pet, token: JWT.encode( { id: user.id, role: 'user' }, 'YOUR SECRET')}
    end


end