class ApplicationController < ActionController::Base

    helper_method :logged_in?, :current_user

    def login(user)
        @current_user = user
        self.session[:session_token] = user.reset_session_token
    end

    def current_user
        @current_user ||= User.find_by_session_token(self.session[:session_token])
    end

    def require_login
        redirect_to new_session_url unless self.logged_in?
    end

    def logged_in?
        !!self.current_user
    end

    def logout
        self.current_user.reset_session_token
        self.session[:session_token] = nil
    end

end

# 10.5min with notes and written breakdowns
# 5.5min no notes no bugs talked through methods
# 3.3min no notes no bugs talked through methods
