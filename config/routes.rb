Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:show]
    resources :tracks, only: [:show]
    resources :albums, only: [:show]
    resources :stations, only: [:index, :show, :create, :update, :destroy]
    resources :searches, only: [:index]
  end
end
