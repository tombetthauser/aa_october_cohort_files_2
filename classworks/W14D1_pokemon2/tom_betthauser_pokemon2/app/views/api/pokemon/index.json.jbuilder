# json.entities do
#     json.pokemon do
        @pokemon.each do |pokemon| 
            json.set! pokemon.id do
                json.extract! pokemon, :id, :name
                json.image_url asset_path("pokemon_snaps/#{pokemon.image_url}")
            end
        end
#     end
# end