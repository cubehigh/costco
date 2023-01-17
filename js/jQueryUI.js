$(function () {
  $(".price_range").slider({
    range: true,
    min: 200000,
    max: 10000000,
    values: [200000, 5000000],
    slide: function (event, ui) {
      $("#below").val(ui.values[0].toLocaleString("en"));
      $("#over").val(ui.values[1].toLocaleString("en"));
    },
  });
  $("#below").val($(".price_range").slider("values", 0).toLocaleString("en"));
  $("#over").val($(".price_range").slider("values", 1).toLocaleString("en"));

  $("#below").change(function () {
    let userValue = $(this).val();
    $(".price_range").slider("values", 0, userValue);
  });
  $("#over").change(function () {
    let userValue = $(this).val();
    $(".price_range").slider("values", 1, userValue);
  }); //filter
});
