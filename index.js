function main() {
    $("#js-shopping-list-form").submit(function (event) {
        event.preventDefault();
        const listItem = $("#shopping-list-entry").val();

        $("#shopping-list-entry").val("");

        let template = `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;

        $(".shopping-list").append(template);
    })

}

$(".shopping-list").on("click", ".shopping-item-delete", function (event) {
    $(this).closest("li").remove();
})

$(".shopping-list").on("click", ".shopping-item-toggle", function (event) {
    let title= $(this).parent().siblings();
    title.toggleClass("shopping-item__checked");
})

$(main);