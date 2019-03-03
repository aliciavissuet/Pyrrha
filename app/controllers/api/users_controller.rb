class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)
        @stations = {}
        if @user.save 
            login!(@user)
            render '/api/users/show'
        else 
           render json: @user.errors.full_messages, status: 422 
        end
    end
    def show 
        @user = User.find(params[:id])
        @stations = (@user.stations) ? @user.stations : {}
        render '/api/users/show'
    end

    def update 
        type = params[:user][:type]
        id = params[:user][:mediaId]
        userId = params[:user][:userId]
        if type == 'Track'
            t = TrackFollow.new(user_id: userId, track_id: id)
            t.save
        elsif type== 'Artist'
            a = ArtistFollow.new(user_id: userId, artist_id: id)
            a.save
        elsif type == 'Album'
            al = AlbumFollow.new(user_id: userId, album_id: id)
            al.save
        end
        @user = User.includes(:stations, :tracks, :albums, :artists).find(userId)
        render '/api/users/show' 
    end

    def user_params 
        params.require(:user).permit(:username, :email, :password)
    end
end
