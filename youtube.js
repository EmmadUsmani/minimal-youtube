class Youtube {
    constructor() {
        gapi.load('client', this.init);
    }

    init() {
        gapi.client.setApiKey("AIzaSyDKkyJaZmoJWDOENOAGK2KMepIQOMzJdsI");
        gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(() => console.log("GAPI client loaded for API"))
            .catch(() => console.error("Error loading GAPI client for API", err));     
    }

    async search(term) {
        const request = await gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            maxResults: 1,
            q: term
        });
        return request;
    }
}
