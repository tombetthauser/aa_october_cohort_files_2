class SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        if @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
            login!(@user)
            redirect_to user_url(@user.id)
        else
            flash.now[:errors] = ["Invalid login information"]
            render :new
        end
    end

    def destroy
    end

end
