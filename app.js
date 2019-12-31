const ui = new UI;
const params = new URLSearchParams(document.location.search.substring(1));

if (params.get("v") !== null) {
    ui.setSearchInput(params.get("q"));

    gapi.load('client', async () => {
        await initClient();
        const request = watch(params.get("v"));
        ui.displayVideo(request);
    });

} else if (params.get("q") !== null) {
    ui.setSearchInput(params.get("q"));

    gapi.load('client', async () => {
        await initClient();
        const request = search(params.get("q"));
        await ui.displaySearchResults(request);

        ui.results_row.childNodes.forEach(outer_div => {
            const card = outer_div.childNodes[1];

            card.addEventListener(("click"), (e) => {
                e.preventDefault();
                const search_params = new URLSearchParams();
                search_params.append("v", card.id);
                search_params.append("q", params.get("q"));
                window.location = `watch.html?${search_params.toString()}`
            })
        });
    });
}


ui.search_button.addEventListener("click", (e) => {
    if (ui.getSearchInput() !== "") {
        e.preventDefault();
        const search_params = new URLSearchParams();
        search_params.append("q", ui.getSearchInput());
        window.location = `results.html?${search_params.toString()}`;
    } else {
        e.preventDefault();
        window.location = 'index.html';
    }
    
});

ui.search_box.addEventListener("keydown", (e) => {
    if (e.keyCode === 13 && ui.getSearchInput() !== "") {
        e.preventDefault();
        const searchParams = new URLSearchParams();
        searchParams.append("q", ui.getSearchInput());
        window.location = `results.html?${searchParams.toString()}`;
    } else if (e.keyCode === 13 && ui.getSearchInput() === "") {
        e.preventDefault();
        window.location = 'index.html';
    }
});

async function initClient() {
    gapi.client.setApiKey("AIzaSyD8eHtwlHkLxiivOycFs4gbKWZNCELO1fw");
    await gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(() => {
            console.log("GAPI client loaded")})
        .catch((err) => console.error("Error loading GAPI client", err));
}

async function search(term) {
    const request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        maxResults: 9,
        q: term
    });
    return request;
}

async function watch(id) {
    const request = gapi.client.youtube.videos.list({
        part: "snippet",
        id: id
    });
    return request;
}