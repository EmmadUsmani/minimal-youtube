class Youtube {
    constructor(term) {
        if(term) {
            gapi.load('client', () => {
                this.init();
                this.search(term);
            })
        } else {
            gapi.load('client', this.init);
        }
    }

    init() {
        gapi.client.setApiKey("AIzaSyDKkyJaZmoJWDOENOAGK2KMepIQOMzJdsI");
        gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(() => console.log("GAPI client loaded"))
            .catch(() => console.error("Error loading GAPI client", err));     
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

    async watch(id) {
        const request = await gapi.client.youtube.videos.list({
            part: "snippet",
            id: id
        });
       return request;
    }
}