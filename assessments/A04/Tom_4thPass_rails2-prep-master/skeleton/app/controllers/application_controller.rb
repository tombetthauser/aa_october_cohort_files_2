class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    #helpful infinite currents require liquid? objectively

    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token
    end

    def current_user
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def require_login
        redirect_to new_session_url unless logged_in?
    end

    def logged_in?
        !!current_user
    end

    def logout
        current_user.try(:reset_session_token)
        session[:session_token] = nil
    end

end
