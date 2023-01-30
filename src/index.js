import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

//! tek bir şey seçiyorsam direkt ona event listener ekliyorum:
let otobusResmi = document.querySelector(".intro img");
otobusResmi.addEventListener("click", () => {
  otobusResmi.setAttribute("style", "filter:grayscale(100%)");
});
//!queryselectorall ile birden fazla seçim yapıyorsam ve her cisme
//!event listener eklemek istiyorsam foreach kullanmalıyım:

//! fonksiyona bir parametre vermeyince target demeden seçebiliyorum
//! ama parametre verirsem hangisini seçeceğimi göstermek için
//! parametreninismi.target demeliyim
let resimler = document.querySelectorAll("img");
resimler.forEach((resim) => {
  resim.addEventListener("click", () => {
    //! iki farklı şekilde style ekleyebiliriz: tırnak içinde yazarken css te gibi yazıyoruz
    resim.setAttribute("style", "filter:grayscale(100%)");
    resim.style.borderRadius = "25px";
  });
  resim.addEventListener("dblclick", () => {
    resim.style.removeProperty("filter");
  });
});

let menu = document.querySelectorAll(".nav-link");
menu.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.color = "red";

    //!normalde css te font-weight: bold; şeklinde
    //! js için : yerine =, - yerine Camel case. ='den sonra tırnak ekle
    //!aşağıdaki gibi:
    item.style.fontWeight = "bold";
  });

  //! bir foreach içinde birden fazla eventlistener eklenebiliyor:
  item.addEventListener("mouseover", () => {
    item.style.color = "pink";
  });
  item.addEventListener("mouseout", () => {
    item.style.color = "black";
  });
});

//!queryselectorall ile seçtiklerimden spesifik birine ekleme yapmak için
menu[0].addEventListener("mouseout", () => {
  //! en son yazdığım yukarıdaki rengin üstünü çizdi
  menu[0].style.color = "yellow";
});

resimler.forEach((resim) => {
  window.addEventListener("resize", () => {
    console.log(resim.width);
    if (resim.width < 400) {
      resim.style.boxShadow = "10px 20px 30px blue";
    } else {
      resim.style.boxShadow = "10px 20px 30px pink";
    }
  });
});

const newInput = document.createElement("input");
document.querySelector(".content-section").appendChild(newInput);

const newButton = document.createElement("button");
document.querySelector(".content-section").appendChild(newButton);

newButton.style.backgroundColor = "black";
newButton.style.color = "white";
newButton.textContent = "buton";

//!ikisi aynı : fuction(){} veya ()=>{}
// newButton.addEventListener("click", function () {
//   newInput.focus();
// });

// newButton.addEventListener("click", () => {
//   newInput.focus();
// });

//!aşağıda ilk tıklamada focus oluyor
//!ikinci tıklamada focusta istenen style özelliklerini yapıyor
// newButton.addEventListener("click", () => {
//   newInput.focus();
//   newInput.addEventListener("focus", (olay) => {
//     olay.target.style.backgroundColor = "red";
//     olay.target.style.color = "white";
//   });
// });

//!böyle aynı anda yapıyor
newButton.addEventListener("click", () => {
  newInput.focus();
});

newInput.addEventListener("focus", (olay) => {
  olay.target.style.backgroundColor = "red";
  olay.target.style.color = "white";
});

document.addEventListener("keydown", function (event) {
  newInput.value = event.key + " tuşuna basıldı";
});

newInput.addEventListener("select", (olay) => {
  olay.target.style.color = "black";
});
