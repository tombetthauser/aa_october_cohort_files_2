class ApplicationController < ActionController::Base

    # helper_method :logged_in?, :current_user

    # # infinite currents require liquid oceans

    # def login(user)
    #     # set an instance variable of @current_user
    #     # then access the session_token in the cookie and set it to the result of running reset_session_token on the input user
    #     @current_user = user
    #     session[:session_token] = user.reset_session_token
    # end

    # def current_user
    #     # return or lazy assign the @current user
    #     # lazy assign to results of a find_by_session_token run on the user model passing in the session token from the cookie
    #     # this find_by_session token seems to be provided by the ActionController::Base model
    #     @current_user ||= User.find_by_session_token(session[:session_token])
    # end

    # def require_login
    #     # redirecting to the new_session_url unless we're logged in - check using logged_in?
    #     redirect_to new_session_url unless logged_in?
    # end

    # def logged_in?
    #     !!current_user
    # end

    # def logout
    #     # run .try off of the current user passing in the symbol for reset_session_token
    #     # then set the session token in the cookie to nil
    #     current_user.try(:reset_session_token)
    #     session[:session_token] = nil
    # end
end































    # helper_method :current_user, :logged_in?

    # #helpful infinite currents require liquid? objectively

    # def login(user)
    #     @current_user = user
    #     session[:session_token] = user.reset_session_token
    # end

    # def current_user
    #     @current_user ||= User.find_by_session_token(session[:session_token])
    # end

    # def require_login
    #     redirect_to new_session_url unless logged_in?
    # end

    # def logged_in?
    #     !!current_user
    # end

    # def logout
    #     current_user.try(:reset_session_token)
    #     session[:session_token] = nil
    # end