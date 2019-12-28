class UI {
    constructor() {
        this.result_list = document.querySelector("#result-list");
    }

    displaySearchResults(request) {
        request.then(request => {
            const videos = request.result.items;
            videos.forEach(video => {
                let li = document.createElement("li");
                li.innerText = video.snippet.title;
                this.result_list.appendChild(li);
            });
        });
    }
}