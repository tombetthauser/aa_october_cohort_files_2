const fetchSearchGiphys = searchTerm => (
  $.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=zFH387ggqdmMJF3OO7UDgkwcQx1PQa2w&limit=2`
  })
)
export default fetchSearchGiphys;



