User.destroy_all
Pet.destroy_all
Prescription.destroy_all
Medication.destroy_all
Task.destroy_all
Appointment.destroy_all
Note.destroy_all
Employee.destroy_all

admin = Employee.create(
    username: "a",
    password: "a",
    street_address: "12345 Rainbow Road",
    street_state: "Texas",
    street_zipcode: "77089",
    first_name: "Vivian",
    last_name: "Tran",
    role: "admin",
    phone_number: "1112223333",
    phone_number_type: "Cell",
    email: "viviantran@vetclinic.com"
    )
    

