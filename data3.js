$(".list-menu").hide();
$(".bi-x-circle").hide();

$(".bi-list").click(function () {
  $(".bi-list").hide();
  $(".bi-x-circle").show();
  $(".list-menu").show();
});

$(".bi-x-circle").click(function () {
  $(".bi-x-circle").hide();
  $(".bi-list").show();
  $(".list-menu").hide();
});

$(".modal").hide();
$(".secret").hide();
$(".novbeti").click(function () {
  if ($("#vehicle1").prop("checked") == true) {
    $(".secret").show();
  }
});

$(".before").click(function () {
  $(".secret").hide();
  $(".scroll").show();
});

$(".after").click(function () {
  if ($(".secrets input").val() == "") {
    $(".secrets input").css("border-color", "red");
  } else {
    $("table tbody").append(
      `
        <tr>
        <td>${$("#Ad").eq(0).val()}</td>
        <td>${$("#Soyad").eq(1).val()}</td>
        <td>${$("#Mobil").eq(2).val()}</td>
        <td>${$("#Qeydiyyat").eq(3).val()}</td>
        <td>${$("#Faktiki").eq(4).val()}</td>
        
        </tr>
        `
    );

    $(".modal").show();
    $(".secret").hide();
  }
});
