class Api::PokemonController < ApplicationController

    def index
        @pokemon = Pokemon.all
    end

    def show
        @pokemon = Pokemon.includes(:items).find(params[:id])
    end

end

