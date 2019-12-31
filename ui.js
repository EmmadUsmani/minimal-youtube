class UI {
    constructor() {
        this.search_box = document.querySelector("#search_box");
        this.search_button = document.querySelector(".search_button");
        this.results_row = document.querySelector("#results_row");
        this.footer = document.querySelector(".footer");
    }

    getSearchInput() {
        return this.search_box.value;
    }

    setSearchInput(term) {
        this.search_box.value = term;
    }

    clear() {
        this.results_row.innerHTML = '';
        this.footer.style.position = "absolute";
    }

    async displaySearchResults(request) {
        this.clear();
        this.footer.style.position = "relative";
        await request.then(request => {
            const videos = request.result.items;
            videos.forEach(video => {
                const id = video.id.videoId;
                const thumbnail = video.snippet.thumbnails.high.url;
                const title = video.snippet.title;
                const channel = video.snippet.channelTitle;
                const description = video.snippet.description;

                let outer_div = document.createElement("div");
                outer_div.className = "video col-12 col-md-6 col-lg-4 mb-5";
                outer_div.innerHTML = `
                <div class="card h-100" id="${id}">
                    <img src="${thumbnail}" alt="" class="card-img-top search-result-card">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${channel}</h6>
                        <p class="card-text text-muted">${description}</p>
                        <a href="#" class="stretched-link"> </a>
                    </div>
                </div>
                `;
                this.results_row.appendChild(outer_div);
            });
        });
    }

    displayVideo(request) {
        this.clear();
        this.footer.style.position = "relative";
        request.then(request => {
            const video = request.result.items[0];
            const id = video.id;
            const title = video.snippet.title;
            const channel = video.snippet.channelTitle;
            const date = video.snippet.publishedAt;
            const description = video.snippet.description;

            let outer_div = document.createElement("div");
            outer_div.className = "card video-card mb-5";
            outer_div.innerHTML = `
            <div class="card-img-top embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${id}?rel=0" allowfullscreen></iframe>
            </div>
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${channel}</h6>
                <p class="card-text text-muted description">}</p>
            </div>
            `;
            outer_div.querySelector(".description").innerText = description;
            this.results_row.appendChild(outer_div);
        });
    }

   
}