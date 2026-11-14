function ambil(id) {
  return document.getElementById(id);
}

if (ambil("ilham_tahun")) {
  ambil("ilham_tahun").textContent = new Date().getFullYear();
}

var tombolMenu = ambil("ilham_tombol_menu");
if (tombolMenu) {
  tombolMenu.addEventListener("click", function () {
    ambil("ilham_menu").classList.toggle("ilham_tampil");
  });
}

var tempatSalam = ambil("ilham_salam");
if (tempatSalam) {
  var jam = new Date().getHours();
  var salam;
  if (jam >= 4 && jam < 11) {
    salam = "Selamat pagi";
  } else if (jam >= 11 && jam < 15) {
    salam = "Selamat siang";
  } else if (jam >= 15 && jam < 18) {
    salam = "Selamat sore";
  } else {
    salam = "Selamat malam";
  }
  tempatSalam.textContent = salam + ", selamat datang di";
}

var daftarTanya = document.querySelectorAll(".ilham_faq_tanya");
for (var j = 0; j < daftarTanya.length; j++) {
  daftarTanya[j].addEventListener("click", function () {
    this.parentElement.classList.toggle("ilham_buka");
  });
}

var kolomPesan = ambil("ilham_pesan");
if (kolomPesan) {
  kolomPesan.addEventListener("input", function () {
    ambil("ilham_hitung").textContent = kolomPesan.value.length + " / 200";
  });
}

var formKontak = ambil("ilham_form_kontak");
if (formKontak) {
  formKontak.addEventListener("submit", function (e) {
    e.preventDefault();
    var nama = ambil("ilham_nama").value.trim();
    var email = ambil("ilham_email").value.trim();
    var pesan = ambil("ilham_pesan").value.trim();
    var galat = ambil("ilham_galat");
    var sukses = ambil("ilham_sukses");
    sukses.textContent = "";

    if (nama === "") {
      galat.textContent = "Nama harus diisi.";
    } else if (email === "") {
      galat.textContent = "Email harus diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      galat.textContent = "Format email tidak valid. Contoh: nama@email.com";
    } else if (pesan === "") {
      galat.textContent = "Pesan harus diisi.";
    } else {
      galat.textContent = "";
      var nomorWA = "628111091890";
      var teks = "Halo Apotek Canna,\n\nNama: " + nama + "\nEmail: " + email + "\n\nPesan:\n" + pesan;
      var alamatWA = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(teks);
      var jendela = window.open(alamatWA, "_blank");
      if (!jendela) {
        window.location.href = alamatWA;
      }
      sukses.textContent = "Terima kasih, " + nama + ". WhatsApp akan dibuka dengan pesan yang sudah Anda isi. Tekan tombol Kirim di WhatsApp agar pesan Anda sampai ke Apotek Canna.";
      formKontak.reset();
      ambil("ilham_hitung").textContent = "0 / 200";
    }
  });
}