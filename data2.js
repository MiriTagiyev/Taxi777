/* ! Sifre unutmusam divi funksiya */

$(".dord a").click(function () {
  $(".dark").show();
  $(".forgetpass").show();
  $(".forgetpass").css("background", "yellow");
  $(".part1 i").click(function () {
    $(".forgetpass").hide();
    $(".dark").hide();
  });
});

/* ! Sifre unutmusam divi funksiya */

/* ! ferdi koprotiv background */
$(".korporativ").click(function () {
  $(".korporativ").css("background", "#f9d41e");
  $(".ferdi").css("background", "gainsboro");
});
$(".ferdi").click(function () {
  $(".ferdi").css("background", "#f9d41e");
  $(".korporativ").css("background", "gainsboro");
});

/* ! ferdi koprotiv background */

/* ! qeydiyyat divi funksiya */
$(".copy").hide();
$(".test .bes a").click(function () {
  $(".copy").show();
  $(".test").hide();
});

$(".copy .bes a").click(function () {
  $(".test").show();
  $(".copy").hide();
});

/* ! qeydiyyat divi funksiya */
