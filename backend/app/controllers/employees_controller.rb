class EmployeesController < ApplicationController

    ##FIX CREATE METHOD TO THE CORRECT PARAMS FOR EMPLOYEES
    def create 
        token = JWT.encode( { id: employee.id, role: 'employee' }, 'YOUR SECRET')
        if Employee.find_by({ username: params[:username]})
            render json: { failed: true, message: "Username already taken. Try another one."}
        else
            employee = Employee.create(
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
            render json: {employee: employee, token: token}
        end
    end

    def login
        employee = Employee.find_by({username: params[:username]})
        token = JWT.encode( { id: employee.id, role: 'employee'}, 'YOUR SECRET')
        if employee.authenticate(params[:password])
            render json: {employee: employee, token: token}
        else
            render json: { failed: true, message: 'Incorrect username or password'}
        end
    
    end

    def index
        employees = Employee.all
        render json: employees
    end

end