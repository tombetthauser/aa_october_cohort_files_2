class LinksController < ApplicationController

    before_action :require_login

    def new
        @link = Link.new
    end

    def create
        @link = Link.new(link_params)
        @link.user_id = current_user.id
        if @link.save
           redirect_to link_url(@link.id) 
        else
            flash.now[:errors] = @link.errors.full_messages
            render :new
        end
    end

    def index
        @links = Link.all
    end

    def show
        @link = Link.find(params[:id])
    end

    def edit
        @link = Link.find(params[:id])
    end

    def update
        @link = current_user.links.find(params[:id])
        if @link.update_attributes(link_params)
            redirect_to link_url(@link.id)
        else
            flash.now[:errors] = @link.errors.full_messages
            render :edit
        end
    end

    def link_params
        params.require(:link).permit(:title, :url)
    end

end

# 9.8min no bugs no notes off specs only after long break talked through methods
# 8.2min no notes one trivial bug 2sec fix talked through methods
# 7.4min no notes one trivial bug 2sec fix talked through methods


































# class LinksController < ApplicationController
    
#     # from our specs we can see that we'll have to account for a full spread of routes for this controller
#     # these default methods are new to show the form to create a new link, create to actually create it in the db
#     # index to show all links, show to show one link
#     # edit to get the form to edit an existing link, update to actually edit that link in the db
#     # these are 6 in total, notably we are not including delete, but of course we could, it would just require that we code a means to delete all subsequent comments
#     # this is also probably why we aren't writing a delete method for our users controller

#     # first we want to again require that someone is logged in or redirect them to the login page before allowing any of these controlled routes
#     # we do this by using the before_action method inheritted from our ApplicationController::Base model
#     # we pass in require_login from our custom ApplicationController methods as a symbol

#     before_action :require_login

#     # first we can write index, new, show and edit, all one liners

#     # for index we want to just create a instance variable links that pulls all links from our link model using .all
#     # we can explicitly write out a render passing in the index view as a symbol, but this is assumed if we leave it out

#     def index
#         @links = Link.all
#         render :index
#     end

#     # new is very similar but we'll create a single link as an instance varialble and put a frest instance of Link in there with no params.
#     # this will allow us to run methods off the Link class but this link will never go to the database
#     # the link that goes to the db will be the one we make in create using the params from our form in the create new view
#     # again render :new is implied if left out but can be included

#     def new
#         @link = Link.new
#         render :new
#     end

#     # the show method will start by creating a link instance variable
#     # this time however well find a link using the :id in our params
#     # then well pass this variable into our show view and render it
    
#     def show
#         @link = Link.find(params[:id])
#         render :show
#     end

#     # edit will do the exact same thing as show but render the edit view which will include a form that will work off the instance we've pulled from the database
    
#     def edit
#         @link = Link.find(params[:id])
#         render :edit
#     end
    
#     # create will act as the compliment of new
#     # first well create a new link instance using our permitted link_params defined privately, storing it in a link instance variable
#     # then well set the user_id of that instance explicitly so the user cant using our current_user method from our custom application controller methods, pulling its id
#     # then well attempt to save this link instance variable to the database
#     # if its successful well redirect to the new link_url, passing in the whole @link instance to specify which one we want
#         # as a side note it makes more sense to pass in the @link.id to the link_url, but we can just pass in the whole instance and trust that rails will know what we mean
#     # if our save is unsuccessful the user must have filled out some input illegally
#     # if this is the case will flash all the full messages from the errors in our @link instance variable
#     # we'll use flash.now as we'll be rendering rather than redirecting, as the specs specify
#     # then we'll just render our new view
#     # this might just be part of the test to make sure we understand flash.now, it seems like redirecting to new_link_url would be fine too

#     def create
#         @link = Link.new(link_params)
#         @link.user_id = current_user.id
#         if @link.save
#             redirect_to link_url(@link.id)
#         else
#             flash.now[:errors] = @link.errors.full_messages
#             render :new
#         end
#     end

#     # for our update well create an link instance variable
#     # in this well use the current_user method from our application controller to find all the current users links
#     # then from this we'll use .find passing in the :id from the params to get the proper link instance
#     # we could just use Link.find(params[:id]) but that would let users edit eachothers links
    
#     # now we can just use the applicationController::Base method #update_attributes passing in the permitted link_params
#     # this will update the changed columns in our database
#     # if this #update_attributes method is successful in the db we'll redirect to the link_url, passing in the @link.id

#     # if the #update_attributes call is unsuccessful in the database then well do the same thing we did in our #create
#     # flash.now the errors and render the :edit view, which will use the @link inst var and the errors

#     def update
#         @link = current_user.links.find(params[:id])
#         if @link.update_attributes(link_params)
#             redirect_to link_url(@link.id)
#         else
#             flash.now[:errors] = @link.errors.full_messages
#             render :edit
#             # flash[:errors] = @link.errors.full_messages
#             # redirect_to edit_link_url
#         end
#     end

#     # lastly we should make sure we define our permitted link_params
#     # again we permit everything that's not an id or timestamp
#     # in this case just title and url

#     def link_params
#         params.require(:link).permit(:title, :url)
#     end

# end
