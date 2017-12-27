Rails.application.routes.draw do
  namespace :api do
    get 'pokemon_controller/index'
  end

  namespace :api do
    get 'pokemon_controller/create'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :pokemon
  end
end

# the defaults: { format: :json } tell the controller to look for a json.jbuilder file
# instead of an html erb file
