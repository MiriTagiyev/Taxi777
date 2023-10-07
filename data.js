const categories = ["EKONOM", "KOMFORT", "MİKROAVTOBUS", "AVTOBUS"];
const items = [
  {
    src: "/1.jpg",
    category: "SUPER EKONOM",
    basliq: "Minimal gediş haqqı",
    basliq2: "5 km",
    basliq3: "10 km",
    tarif1: "1.89",
    tarif2: "3.5",
    tarif3: "6",
  },

  {
    src: "/1.png",
    category: "EKONOM",
    basliq: "Minimal gediş haqqı",
    basliq2: "5 km",
    basliq3: "10 km",
    tarif1: "3",
    tarif2: "4.4",
    tarif3: "7",
  },

  {
    src: "/3.jpg",
    category: "KOMFORT",
    basliq: "Minimal gediş haqqı",
    basliq2: "5 km",
    basliq3: "10 km",
    tarif1: "3.3 ",
    tarif2: "4.8",
    tarif3: "7.7",
  },
  {
    src: "/4.png",
    category: "MİKROAVTOBUS",
    basliq: "Minimal gediş haqqı",
    basliq2: "5 km",
    basliq3: "10 km",
    tarif1: "6",
    tarif2: "9",
    tarif3: "15.2",
  },
  {
    src: "/5.png",
    category: "AVTOBUS",
    basliq: "Minimal gediş haqqı",
    basliq2: "5 km",
    basliq3: "10 km",
    tarif1: "12",
    tarif2: "15",
    tarif3: "18",
  },
];

categories.forEach((c) => {
  document.querySelector(".filter ul").innerHTML += `
        <li onclick='filterle(this)'>${c}</li>
    `;
});

function filterle(x) {
  document.querySelector(".items").innerHTML = "";
  items
    .filter((item) => {
      return item.category === x.innerText;
    })
    .forEach((item, i) => {
      document.querySelector(".items").innerHTML += `
            <div class="item">
                <img src="${item.src}" alt="">
            </div>
        `;
      document.querySelector(".tarif1").innerHTML = `

              <div class="tarifs">
              <p>${item.basliq}</p>
             <h2>${item.tarif1}&nbsp;<img src="/azn.png" alt="" /></h2>
             </div>

          `;

      document.querySelector(".tarif2").innerHTML = `

          <div class="tarifss">
          <p>${item.basliq2}</p>
         <h2>${item.tarif2}&nbsp;<img src="/azn.png" alt="" /></h2>
         </div>

      `;
      document.querySelector(".tarif3").innerHTML = `

      <div class="tarifsss">
      <p>${item.basliq3}</p>
      <h2>${item.tarif3}&nbsp;<img src="/azn.png" alt="" /></h2>
      </div>

      `;
    });
}

$(".qosul").click(function () {
  $(".abune").show();
  $(".taxi-menu").css("opacity", "0.5");
});

$("#seven").click(function () {
  $(".abune").show();
  $(".taxi-menu").css("opacity", "0.5");
  $(".list-menu").hide();
  $(".bi-x-circle").hide();
  $(".bi-list").show();
});

$(".abune-header i").click(function () {
  $(".abune").hide();
  $(".taxi-menu").css("opacity", "1.1");
});

$(".list-menu").hide();
$(".bi-x-circle").hide();
$(".list i").click(function () {
  $(".list-menu").show();
});

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
