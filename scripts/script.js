// kode untuk mengatur nav bar
const hmButton = document.querySelector(".hm-btn");
const menu = document.querySelector(".menu");
const menuList = document.querySelectorAll(".menu a");
hmButton.addEventListener("click", () => {
  hmButton.classList.toggle("hm-btn-active");
  menu.classList.toggle("menu-active");
});

menuList.forEach(list => {
  list.addEventListener("click", () => {
    hmButton.classList.remove("hm-btn-active");
    menu.classList.remove("menu-active");
  })
});


// funsi untuk handel data setiap kota
const cityData = (kota, negara, tagline, deskripsi, waktu) => {
  const text = `<div class="city">
        <img src="./assets/icon/location.png" alt="" />
        <div>
          <h1>${kota}</h1>
          <p>${tagline}</p>
        </div>
      </div>
      <hr />
      <div class="additional-information">
        <div class="country">
          <img src="./assets/icon/country.png" alt="" />
          <p>${negara}</p>
        </div>
        <div class="kalender">
          <img src="./assets/icon/calender.png" alt="" />
          <p>${waktu}</p>
        </div>
      </div>
      <p class="detail-text">
      ${deskripsi}
      </p>`

  return text;
}


//data untuk setiap kota
const destinasi = [
  {
    image: "./assets/city/paris.jpg",
    kota: "Paris",
    negara: "Prancis",
    tagline: "Kota Cinta dan Seni",
    waktu: "3-5 hari",
    deskripsi:
      "Paris memikat dengan arsitektur klasik seperti Menara Eiffel, museum terkenal seperti Louvre, dan suasana romantis yang menyelimuti jalan-jalan bersejarah serta kafe-kafe yang menawan.",
    rute: "https://maps.app.goo.gl/cLbRbUCc9FegCtoA9",
  },
  {
    image: "./assets/city/kyoto.jpg",
    kota: "Kyoto",
    negara: "Jepang",
    tagline: "Kota Tradisi dan Kuil",
    waktu: "2-4 hari",
    deskripsi:
      "Kyoto menawarkan ketenangan kuil-kuil kuno seperti Fushimi Inari, keindahan alam di Arashiyama, dan pesona budaya tradisional di distrik Gion yang penuh sejarah.",
    rute: "https://maps.app.goo.gl/7Wj9W6fe8mxaa9DW8",
  },
  {
    image: "./assets/city/roma.jpg",
    kota: "Roma",
    negara: "Italia",
    tagline: "Kota Abadi",
    waktu: "3-5 hari",
    deskripsi:
      "Roma adalah pusat peradaban kuno, dipenuhi monumen monumental seperti Colosseum, Pantheon, dan Air Mancur Trevi, memadukan sejarah megah dengan suasana modern yang hidup.",
    rute: "https://maps.app.goo.gl/R6ve4kafL8uNUpDG6",
  },
  {
    image: "./assets/city/cape-town.jpg",
    kota: "Cape Town",
    negara: "Afrika Selatan",
    tagline: "Kota di Ujung Dunia",
    waktu: "4-6 hari",
    deskripsi:
      "Cape Town memukau dengan pemandangan Table Mountain, pantai-pantai indah, sejarah Robben Island, dan pesona alam di Kirstenbosch Gardens yang menjadikannya destinasi wisata yang menawan.",
    rute: "https://maps.app.goo.gl/Hhv2yaAXMZ3dnnjm8",
  },
  {
    image: "./assets/city/sydney.jpg",
    kota: "Sydney",
    negara: "Australia",
    tagline: "Kota Pantai dan Opera",
    waktu: "3-5 hari",
    deskripsi:
      "Sydney adalah kota dengan kehidupan pantai yang ikonik, arsitektur spektakuler seperti Opera House, serta lingkungan alam yang mempesona di Royal Botanic Gardens dan Bondi Beach.",
    rute: "https://maps.app.goo.gl/MX1MEmC5oT1gwRmH7",
  },
  {
    image: "./assets/city/rio-de-jeneiro.jpg",
    kota: "Rio de Janeiro",
    negara: "Brasil",
    tagline: "Kota Samba dan Pantai",
    waktu: "3-5 hari",
    deskripsi:
      "Rio de Janeiro menawarkan perpaduan pemandangan spektakuler seperti Patung Cristo Redentor dan Gunung Sugarloaf, dengan suasana semarak Pantai Copacabana dan budaya samba yang hidup.",
    rute: "https://maps.app.goo.gl/8yhQVwqyGfJdyXmh9",
  },
];

// kode untuk mengubah tampilan di header
const header = document.querySelector("header");
const deskription = document.querySelector(".description")
const explore = document.querySelector(".explore a");

let count = 0;

setInterval(() => {
  count > 5 ? count = 0 : count++;
  const data = destinasi[count];

  header.style.background = `linear-gradient(
            to bottom,
            rgba(25, 25, 25, 0.42) 50%,
            rgba(14, 12, 33, 0.974) 85%,
            rgb(14, 12, 33)
          ),
          url('${data.image}') center / cover`

  const detailText = cityData(data.kota, data.negara, data.tagline, data.deskripsi, data.waktu);
  deskription.innerHTML = detailText
  explore.setAttribute("href", `#${count}`)
}, 10000);

// kode untuk memunculkan detail
const detail = document.querySelector(".detail")
const citys = document.querySelectorAll(".city")
const exit = document.querySelector(".exit")
const detailInfo = document.querySelector(".detail-info")

citys.forEach(city => {
  city.addEventListener("click", (e) => {
    const id = e.target.id;
    const data = destinasi[id];

    const rute = `<div class="rute">
    <a href="${data.rute}"
      >show rute in map</a
    >
  </div>`

    const detailText = cityData(data.kota, data.negara, data.tagline, data.deskripsi, data.waktu);

    console.log(data.image);
    detail.classList.add("detail-active");

    detailInfo.innerHTML = detailText + rute
  })
});

exit.addEventListener("click", (e) => {
  detail.classList.remove("detail-active");
})



// const destinasi = [
//   {
//     kota: "nama kota",
//     negara: "nama negara",
//     tagline: "tagline",
//     waktu: "lama waktu berkunjung",
//     deskripsi: "deskripsi kota",
//     rute: "string kosong",
//   },
// ];