class UsersController < ApplicationController

    def show
        @user = User.find_by(params[:id])
        render :show
    end

    def new
        render :new
    end

    def create
        @user = User.new(user_info)
        if @user.save
            login!(@user)
            redirect_to user_url(@user.id)
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    private

    def user_info
        params.require(:user).permit(:username, :password)
    end

end
