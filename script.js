d3.selectAll("body").on("change", updatePage);

function updatePage() {
    var dropdownMenu = d3.selectAll("#selectOption").node();
    var dropdownMenuID = dropdownMenu.id;
    var selectOption = dropdownMenu.value;

    console.log(dropdownMenuID);
    console.log(selectOption);
};