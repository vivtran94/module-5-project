Rails.application.routes.draw do
  default_url_options :host => 'localhost:3000'
  resources :users
  resources :employees
  resources :pets
  resources :appointments
  resources :tasks
  resources :notes

  # USER ROUTES
  post('/login', { to: 'users#login'})
  get('/get_user', { to: 'users#get_user'})
  
  
  # EMPLOYEE ROUTES
  post('/employees/login', { to: 'employees#login'})
  get('/get_employee', { to: 'employees#get_employee'})
  patch('/employee/appointments/:id', { to: 'appointments#employee_confirms_appt'})
  post('/employee/create_task', { to: 'tasks#employee_create_task'})
  post('/employee/create_appt', { to: 'appointments#employee_create_appt'})
end
