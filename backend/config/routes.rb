Rails.application.routes.draw do
  resources :users
  resources :employees
  resources :pets
  resources :appointments
  resources :tasks
  resources :notes

  post('/login', { to: 'users#login'})
  get('/get_user', { to: 'users#get_user'})
  post('/employees/login', { to: 'employees#login'})
  patch('/employee/appointments/:id', { to: 'appointments#employee_confirms'})
  get('/get_employee', { to: 'employees#get_employee'})
  
end
