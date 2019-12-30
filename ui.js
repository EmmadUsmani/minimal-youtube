class UI {
    constructor() {
        this.search_box = document.querySelector("#search_box");
        this.search_button = document.querySelector(".search_button");
        this.results_row = document.querySelector("#results_row");
    }

    getSearchInput() {
        return this.search_box.value;
    }

    clearSearchResults() {
        this.results_row.innerHTML = '';
    }

    displaySearchResults(request) {
        this.clearSearchResults();
        request.then(request => {
            const videos = request.result.items;
            videos.forEach(video => {
                const thumbnail = video.snippet.thumbnails.high.url;
                const title = video.snippet.title;
                const channel = video.snippet.channelTitle;
                const description = video.snippet.description;

                let outer_div = document.createElement("div");
                outer_div.className = "col-12 col-md-6 col-lg-4 mb-5";
                outer_div.innerHTML = `
                <div class="card h-100">
                    <img src="${thumbnail}" alt="" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${channel}</h6>
                        <p class="card-text text-muted">${description}</p>
                    </div>
                </div>
                `;
                this.results_row.appendChild(outer_div);
            });
        });
    }

   
}