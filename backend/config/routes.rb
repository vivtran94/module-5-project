Rails.application.routes.draw do
  resources :users
  resources :employees
  resources :pets

  post('/login', { to: 'users#login'})
  get('/get_user', { to: 'users#get_user'})
  post('/employees/login', { to: 'employees#login'})
  
end
