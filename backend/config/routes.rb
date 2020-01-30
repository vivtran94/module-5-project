Rails.application.routes.draw do
  resources :users
  resources :employees
  resources :pets

  post('/login', { to: 'users#login'})
  
end
