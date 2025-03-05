function showPage(pageNumber) {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");

    document.getElementById("page" + pageNumber).classList.remove("hidden");
}
