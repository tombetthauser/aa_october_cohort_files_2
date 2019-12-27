Rails.application.routes.draw do
  get 'users/hello'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    resource :session, only: [:new, :create, :destroy]

    resources :users, only: [:new, :create]
    resources :comments, only: [:destroy]
    resources :links do
      resources :comments, only: [:create]
    end

end