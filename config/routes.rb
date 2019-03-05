Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:show, :index]
    resources :tracks, only: [:show, :index]
    resources :albums, only: [:show, :index]
    resources :stations, only: [:index, :show, :create, :update, :destroy]
    resources :searches, only: [:index]
    resources :album_follows, only: [:destroy]
    resources :artist_follows, only: [:destroy]
    resources :track_follows, only: [:destroy]
    resources :playlists, only: [:create, :show, :destroy, :index, :update]
    resources :playlist_tracks, only: [:create, :destroy]
  end
end
