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
    first_name: "Levi",
    last_name: "Woods",
    role: "admin",
    phone_number: "111-222-3333",
    email: "vivian@haloclinic.com"
    )

    admin1 = Employee.create(
    username: "b",
    password: "b",
    street_address: "11093 Rocky Road",
    street_state: "Texas",
    street_zipcode: "77039",
    first_name: "Jordan",
    last_name: "Pine",
    role: "admin",
    phone_number: "998-111-9322",
    email: "jordan@haloclinic.com"
    )
    
user1 = User.create(
    first_name: "Frosty",
    last_name: "Snowman",
    date_of_birth: "06-15-1996",
    street_address: "11903 Clear Creek Lane",
    street_city: "Houston",
    street_state: "TX",
    street_zipcode: "77093",
    phone_number: "932-394-3920",
    email: "frosty@gmail.com",
    driver_license: "1234567890",
    username: "1",
    password: "1"
)

user2 = User.create(
    first_name: "Kungfu",
    last_name: "Panda",
    date_of_birth: "09-20-1996",
    street_address: "2213 Rail Road",
    street_city: "Houston",
    street_state: "TX",
    street_zipcode: "77023",
    phone_number: "320-224-2211",
    email: "kungfu@gmail.com",
    driver_license: "1234567890",
    username: "2",
    password: "2"
)

user3 = User.create(
    first_name: "Teddy",
    last_name: "Bear",
    date_of_birth: "06-15-1996",
    street_address: "93002 Candy Lane",
    street_city: "Houston",
    street_state: "TX",
    street_zipcode: "77022",
    phone_number: "902-485-2218",
    email: "teddy@gmail.com",
    driver_license: "1234567890",
    username: "3",
    password: "3"
)



pet1 = Pet.create(
    user: user1,
    name: "Suki",
    date_of_birth: "05-23-2017",
    gender: "F",
    breed: "Pembroke Welsh Corgi",
    color: "Tri-color"
)

pet2 = Pet.create(
    user: user2,
    name: "Rover",
    date_of_birth: "03-02-2005",
    gender: "M",
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
    date: "03-03-2020",
    start_time: "9:00 AM"
)

note1 = Note.create(
    pet: pet1,
    employee: admin1,
    note_title: "Annual Exam",
    note_body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
)

note2 = Note.create(
    pet: pet1,
    employee: admin1,
    note_title: "Sick Visit",
    note_body: "SICK VISIT Lorem Ipsum is simply dummy text of the printing and typesetting industry."
)

note3 = Note.create(
    pet: pet1,
    employee: admin1,
    note_title: "Surgery",
    note_body: "SURGERY Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
)