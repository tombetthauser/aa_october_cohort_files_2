class ApplicationController < ActionController::Base

    # icrlo

    def login(user)
        # set current session token using input user method
        # set a current_user instance variable to the input user
        session[:session_token] = user.reset_session_token
        @current_user = user
    end

    def current_user
        # return the @current_user
        # lazy assign it to the user from the db with the current session's session token
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def requre_login
        # redirect to the login page url (the new session url) unless someone is logged in
        redirect_to new_session_url unless logged_in?
    end

    def logged_in?
        # return a boolean indicating whether or not there is a current_user
        !!current_user
    end

    def logout
        # reset the session token of the current user in the db
        # set the session token in the session cookie to nil
        current_user.reset_session_token
        session[:session_token] = nil
    end

end
