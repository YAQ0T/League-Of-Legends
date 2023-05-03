$("#search").on("input", function () {
  var a = $(this).val();
  $(".searchField").empty();
  $.post("/search", { searchFelid: a }).then(function (data) {
    data.map((d) => {
      $(".searchField").append(`<button class = "searchRes">${d}</button>`);
    });
  });
});

$(".searchField").on("click", "button", function () {
  var userName = $(this).text();
  window.location.href = `/userPage/${userName}`;
});
$("#signUp").on("click", function () {
  window.location.href = `/newUser`;
});
$("#login").on("click", function () {
  window.location.href = `/login`;
});
