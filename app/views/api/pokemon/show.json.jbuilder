json.pokemon do #sets the top level key to pokemon
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url image_path(@pokemon.image_url)
end

json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.id item.id
      json.name item.name
      json.pokemon_id item.pokemon_id
      json.price item.price
      json.happiness item.happiness
      json.image_url asset_path(item.image_url)
    end
  end
  # json.image_url asset_path(@pokemon.items.image_url)
end
