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

# 3min notes at end to check
# 4min with check and resource / resources bug
# 2.5 min with no end bug
# 2.33 min with no bugs and no copy/paste
# 1.2 min with copy / paste