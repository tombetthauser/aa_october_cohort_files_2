class UsersController < ApplicationController

    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            redirect_to links_url
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end

end




# ~7min no timer no notes, one bug - forgot login(@user) - quick fix from reading specs - talked out methods
# 4.8min no notes, no bugs, talked through methods
# 3.5min no notes, one trivial bug 2sec fix off rspec, talked through methods























# class UsersController < ApplicationController

#     # although our users controller has a relationship to a model like our links and comments controllers
#     # we dont run require_login using our inheritted before_action method
#     # as this would cause a feedback look kind of scenario when trying to render our new route?

#     # in any case new is the first method we see appearing in our specs
#     # all it needs to do is create a new empty user and pass it to our new view
#     # by storing it in an instance variable @user
#     # this seemeingly is just so we can run User methods off it?
#     # we can incude or omit the render :new view as is assumed 

#     def new
#         @user = User.new
#     end

#     # next on our specs seems to be a pretty standard create route
#     # for this well make a new user using our permitted user params defined privately
#     # then well attempt to save it to the database
#     # if its successful we'll run login from our application controller, passing in our @user instance, nice
#     # then well redirect to our links_url index view to see all the links from everyone
#     # if unsuccessful well flash.now the errors in the @user and render our :new view again

#     def create
#         @user = User.new(user_params)
#         if @user.save
#             login(@user)
#             redirect_to links_url
#         else
#             flash.now[:errors] = @user.errors.full_messages
#             render :new
#         end
#     end

#     # our user_params method is, as usual, not on the specs but necessary
#     # this is not as predictable as the comments and links permitted params
#     # logically though we want to permit a user to define / redefine their username and password (if allowed in a form input)
#     # but not their session_token or password_digest, that's none of their business

#     def user_params
#         params.require(:user).permit(:username, :password)
#     end

# end
