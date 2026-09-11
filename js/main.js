(function () {
  var gate = document.getElementById("gate");
  if (gate && (localStorage.getItem("mx_age") === "1" || sessionStorage.getItem("mx18") === "1")) {
    gate.hidden = true;
    gate.classList.add("hide");
  }
  document.querySelectorAll("[data-age]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.getAttribute("data-age") === "yes") {
        localStorage.setItem("mx_age", "1");
        sessionStorage.setItem("mx18", "1");
        if (gate) { gate.hidden = true; gate.classList.add("hide"); }
      } else {
        window.location.href = "https://www.google.at";
      }
    });
  });

  var video = document.getElementById("hero-video");
  if (video) {
    var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    var slow = window.matchMedia("(max-width: 900px)").matches || (conn && (conn.saveData || /2g|slow-2g|3g/i.test(conn.effectiveType || "")));
    var base = "https://www.maximus-graz.at/frontend/static/maximus_graz/media/";
    video.src = base + (slow ? "hero-main-mobile.mp4" : "hero-main.mp4");
    video.muted = true;
    video.playsInline = true;
    var p = video.play();
    if (p && p.catch) p.catch(function () {});
  }

  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightbox-img");
  document.querySelectorAll(".girl-photo img").forEach(function (img) {
    img.addEventListener("click", function () {
      if (!lb || !lbImg) return;
      lbImg.src = img.getAttribute("data-full") || img.src.replace("/upload/w505/", "/upload/");
      lb.classList.add("on");
    });
  });
  if (lb) lb.addEventListener("click", function () { lb.classList.remove("on"); });
})();
