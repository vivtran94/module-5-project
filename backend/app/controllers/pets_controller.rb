class PetsController < ApplicationController

    def create
        user = current_user
        imageio = StringIO.new(params[:profile_pic])
        pet = Pet.new(
            user: user,
            name: params[:name],
            date_of_birth: params[:dateOfBirth],
            gender: params[:gender],
            breed: params[:breed],
            color: params[:color]
        )
        pet.profile_pic.attach(io: params[:profile_pic], file_name: "test")
        pet.save()
        render json: { pet: pet, token: JWT.encode( { id: user.id, role: 'user' }, 'YOUR SECRET')}
    end


end