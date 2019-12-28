class SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        username = params[:user][:username]
        password = params[:user][:password]

        user = User.find_by_credentials(username, password)

        if user
            login(user)
            redirect_to links_url
        else
            flash[:errors] = ["No go on the username or password."]
            render :new
        end
    end

    def destroy
        logout
        redirect_to new_session_url
    end

end

# 3.7min no bugs, no notes, talked through methods
# 2.8min no bugs, no notes, talked through methods
# 3min no bugs, no notes, talked through methods





























# # class SessionsController < ApplicationController

#     # logically, we wont need to run require login before any of these actions

#     # the first method in the specs is #new
#     # here all we have to do is render our new.html.erb view in our sessions views sub-folder
#     # we don't need to create a new session instance or anythgin like that
#     # because we dont have a sessions model to worry about, its just a route, a controller and a single view

#     def new
#         # render :new
#     end

#     # next the specs tell us to write a create method with standard functionality
#     # well need to log in the user if it's valid

#     # first well create a user by running our find_by_credentials method defined in the User model
#     # well do this by passing in the username nested in user and similarly the password nested in user both from our params

#     # if this user returns not as nil it exists in our database
#     # so we can log them in using our login method with the user passed in
#     # then we can redirect to our links index url

#     # if the user does return as nil then it isn't in our database, at least not with that password
#     # well flash.now the errors as a single array string describing the problem
#     # we do this since we dont have any session class or db table that we can create an instance of and try to persist
#     # with this new error flashed we can render our new view in our sessions sub-folder
#     # this will allow them to keep trying to sign in but not necessarily sign up a new user
#     # for this they might have to retur to the root page unless we include a link in our new session view
    
#     def create
#         user = User.find_by_credentials(
#             params[:user][:username],            
#             params[:user][:password]                
#         )

#         if user
#             login(user)
#             redirect_to links_url
#         else
#             flash.now[:errors] = ["Invalid username and/or password."]
#             render :new
#         end
#     end

#     # finally the specs tell us to write a destroy method
#     # all this has to do according to the specs is log the user out
#     # we can use the logout method we defined in our application controller, with no arguments, nice and simple
#     # after this we can assume that we'll redirect to our new_session_url, asking the user to log in again
    
#     def destroy
#         logout
#         redirect_to new_session_url
#     end
    

# # end
