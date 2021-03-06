class Api::SessionsController < ApplicationController
    def create
        @user = User.includes(:stations, :tracks, :albums, :artists).find_by_credentials(params[:user][:email], params[:user][:password])
        # @stations = (@user && @user.stations) ? @user.stations : {};
        if @user 
            login!(@user)
            render '/api/users/show' 
        else 
            render json: ['invalid credentials'], status: 422 
        end 
    end

    def destroy
        if current_user 
            logout!
            render json: {}, status: 200
        else
            render json: {}, status: 404
        end
    end

end
