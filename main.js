const youtube = new Youtube;
const ui = new UI;

ui.search_button.addEventListener("click", (e) => {
    e.preventDefault();
    ui.displaySearchResults(youtube.search(ui.getSearchInput()));
});

ui.search_box.addEventListener("keydown", (e) => {
    if (e.keyCode === 13 && ui.getSearchInput() != "") {
        e.preventDefault();
        ui.displaySearchResults(youtube.search(ui.getSearchInput()));
    }
});
