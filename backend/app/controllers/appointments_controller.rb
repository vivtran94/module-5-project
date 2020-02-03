class AppointmentsController < ApplicationController


    def create
        user = self.current_user
        appointment = Appointment.create(
            pet_id: params[:pet_id],
            employee_id: params[:employee_id],
            date: params[:date],
            start_time: params[:start_time],
            end_time: params[:end_time]
        )
        render json: { appointment: appointment, token: JWT.encode( { id: user.id, role: 'user' }, 'YOUR SECRET')}
    end
    

end