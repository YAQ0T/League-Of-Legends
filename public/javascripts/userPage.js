$(document).ready(function () {
  $("img").each(function () {
    var altValue = $(this).attr("alt");
    if (altValue === "") {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
});
