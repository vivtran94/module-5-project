class AppointmentsController < ApplicationController


    def create
        user = current_user
        appointment = Appointment.create(
            pet_id: params[:pet_id],
            employee_id: params[:employee_id],
            date: params[:date],
            start_time: params[:start_time]
        )
        render json: { appointment: appointment, token: JWT.encode( { id: user.id, role: 'user' }, 'YOUR SECRET')}
    end

    def update
        appointment = Appointment.find_by(id: params[:id])
        appointment.update(user_confirmed: true)
    end

    def employee_confirms_appt
        appointment = Appointment.find_by(id: params[:id])
        appointment.update(employee_confirmed: true)
    end
        
    def employee_create_appt
        employee = current_user
        appointment = Appointment.create(
            pet_id: params[:pet_id],
            employee: employee,
            date: params[:date],
            start_time: params[:start_time]
        )
        render json: { appointment: appointment, token: JWT.encode( { id: employee.id, role: 'employee' }, 'YOUR SECRET')}
    end
    

end