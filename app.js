function init() {
    gapi.client.setApiKey("AIzaSyD8eHtwlHkLxiivOycFs4gbKWZNCELO1fw");
    gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
        function(err) { console.error("Error loading GAPI client for API", err); });;
}

function search() {
    const request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: "lo fi hip hop"
    });

    request.execute(console.log);
}

