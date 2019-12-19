class ApplicationController < ActionController::Base

    # ALL CL

    def login!(user)
        session[:session_token] = User.reset_session_token
    end

    def logout!
        current_user.reset_session_token
        session[:session_token] = nil
    end

    def current_user
    end

    def logged_in?
        !!@current_user
    end


end
