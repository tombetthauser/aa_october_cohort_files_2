class SessionsController < ApplicationController
    
    def create
        user = User.find_by_credentials(
            params[:user][:username],            
            params[:user][:password]                
        )

        if user
            login(user)
            redirect_to links_url
        else
            flash.now[:errors] = ["Invalid username and/or password."]
            render :new
        end
    end
    
    def destroy
        logout
        redirect_to new_session_url
    end
    
    def new
        # render :new
    end

end
