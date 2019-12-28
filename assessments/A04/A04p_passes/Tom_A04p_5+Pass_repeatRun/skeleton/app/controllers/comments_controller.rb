class CommentsController < ApplicationController

    before_action :require_login

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy

        redirect_to link_url(@comment.link_id)
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        @comment.link_id = params[:link_id]
        @comment.save

        flash[:errors] = @comment.errors.full_messages
        redirect_to link_url(@comment.link_id)
    end

    def comment_params
        params.require(:comment).permit(:body)
    end

end

# 30min with full notes breakdown and talk through
# 7.2min no bugs no notes talked through methods
# 4.75 min no bugs no notes talked through methods



















# # use the before_action method passed down from ApplicationController::Base
# # pass in require_login
# # this ensures that we're logged in before a user can look at or change anything on our site
# # we will start all our regular controllers with this (session and application arent regular because they don't have models)
#     before_action :require_login


# # running rails routes in our console shows all the methods we have to write here
# # the logical one to start with is create

# # for create we want to define an inst variable that will be a new instance of our Comment model
# # we will pass in our filtered comment params that we define privately
# # now we add our foreign keys to this instance, keeping them safe from the user input
# # the @comment.user_id will be set by calling the current_user method that we've inherited from application_controller and pulling it's id
# # the @comment.link_id will be set by keying into the params
# # then we call save on the @comment, persisting it to our db

# # then we flash any errors using full_messages
# # finally we redirect to our link_url, passing in our @comment.link_id
# # this will show us the link the user has commented on along with all other comments

#     def create
#         @comment = Comment.new(comment_params)
#         @comment.user_id = current_user.id
#         @comment.link_id = params[:link_id]
#         @comment.save

#         flash[:errors] = @comment.errors.full_messages
#         redirect_to link_url(@comment.link_id)
#     end

# # looking again at our routes we see the only other method to write for our comments controller is destroy
# # for this we'll want to again define a comment inst variable 
# # this time however we'll use Comment.find passing in the :id in our params
# # this will give us the correct comment instance linked to our database
# # now we can simply call destroy on this instance
# # again we'll finish by redirecting to our link_url, passing in the link_id from the @comment

#     def destroy
#         @comment = Comment.find(params[:id])
#         @comment.destroy
#         redirect_to link_url(@comment.link_id)
#     end

# # by convention we'll create a comment_params method to be used instead of passing in params directly to our Comment.new
# # for these projects we'll just be permitting anything that isn't an id, foreign key or timestamp, which of course users should not be allowed to change
# # we'll do this for our our regular controllers

#     def comment_params
#         params.require(:comment).permit(:body)
#     end















