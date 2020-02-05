User.destroy_all
Pet.destroy_all
Prescription.destroy_all
Medication.destroy_all
Task.destroy_all
Appointment.destroy_all
Note.destroy_all
Employee.destroy_all

admin1 = Employee.create(
    username: "a",
    password: "a",
    street_address: "12345 Rainbow Road",
    street_state: "Texas",
    street_zipcode: "77089",
    first_name: "Vivian",
    last_name: "Tran",
    role: "admin",
    phone_number: "111-222-3333",
    email: "viviantran@vetclinic.com"
    )
    
user1 = User.create(
    first_name: "Jack",
    last_name: "Frost",
    date_of_birth: "06-15-1996",
    street_address: "11903 Clear Creek Lane",
    street_city: "Houston",
    street_state: "TX",
    street_zipcode: "77093",
    phone_number: "932-394-3920",
    email: "jack@gmail.com",
    driver_license: "1234567890",
    username: "123",
    password: "123"
)

pet1 = Pet.create(
    user: user1,
    name: "Jill",
    date_of_birth: "03-02-2005",
    gender: "F",
    breed: "Terrier",
    color: "Brown"
)

task1 = Task.create(
    user: user1,
    employee: admin1,
    task_title: "Refill Request",
    task_body: "Can you refill my dog's heartworm medicine.", 
    user_sent: true
) 

appointment1 = Appointment.create(
    pet: pet1,
    employee: admin1,
    date: "01-01-2020",
    start_time: "10:00 AM"
)

note1 = Note.create(
    pet: pet1,
    employee: admin1,
    note_title: "Annual Exam",
    note_body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
)
