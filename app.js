const youtube = new Youtube;
const ui = new UI;

ui.search_button.addEventListener("click", (e) => {
    e.preventDefault();
    search();
});

ui.search_box.addEventListener("keydown", (e) => {
    if (e.keyCode === 13 && ui.getSearchInput() != "") {
        e.preventDefault();
        search();
    }
});

async function search() {
    await ui.displaySearchResults(youtube.search(ui.getSearchInput()));
    ui.results_row.childNodes.forEach(outer_div => {
        const card = outer_div.childNodes[1];
        card.addEventListener(("click"), (e) => {
            ui.displayVideo(youtube.watch(card.id));
        })
    });
}