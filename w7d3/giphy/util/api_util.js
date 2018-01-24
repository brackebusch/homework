export const fetchSearchGiphys = searchWord => (
    $.ajax({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=dc6zaTOxFJmzC&limit=2`
    })
);