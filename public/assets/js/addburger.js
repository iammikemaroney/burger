$(function () {
    $(".devour-button").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var curStatus = $(this).data("status");
 
        if (curStatus === 0) {
            curStatus = true;
        }
        var newDevourStatus = {
            devoured: curStatus
        };
 
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourStatus
        }).then(
          function () {
              console.log("changed status to", newDevourStatus);
              // Reload the page to get the updated list
              location.reload();
          }
        );
    });
 
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log($("#new_burger").val().trim());
        var newBurger = {
            name: $("#new_burger").val().trim(),
        };
 
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
          function () {
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
          }
        );
    });
 });