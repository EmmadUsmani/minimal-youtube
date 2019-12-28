class Youtube {
    constructor() {
        this.api_client = this.init();
    }

    async init() {
        gapi.client.setApiKey("AIzaSyDKkyJaZmoJWDOENOAGK2KMepIQOMzJdsI");
        await gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(() => console.log("GAPI client loaded for API"))
            .catch(() => console.error("Error loading GAPI client for API", err));
        return gapi.client;
    }

    async search(term) {
        const request = await this.api_client
            .then(api_client => {
                const request = api_client.youtube.search.list({
                    part: "snippet",
                    type: "video",
                    maxResults: 3,
                    q: term,
                });

                return request;
            })
        return request;        
    }
}
