//POPUP SELAMAT DATANG 
const modalAlert = document.getElementById('modal-alert');
const tombolTutup = document.getElementById('tombol-tutup');

function tampilkanModalAlert() {
  modalAlert.classList.remove("hidden");
}
function tutupModalAlert() {
  modalAlert.classList.add("hidden");
}
document.addEventListener('DOMContentLoaded', tampilkanModalAlert);
tombolTutup.addEventListener("click", tutupModalAlert);


//POPUP GAMBAR 
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
document.querySelectorAll('.popup-img').forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;
    imageModal.classList.remove('hidden');
  });
});
imageModal.addEventListener('click', () => {
  imageModal.classList.add('hidden');
});


//POPUP VIDEO
const videoModal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
document.querySelectorAll('.video-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const videoUrl = wrapper.dataset.video;
    modalVideo.src = videoUrl;
    videoModal.classList.remove('hidden');
  });
});
videoModal.addEventListener('click', () => {
  modalVideo.src = ''; // Stop video
  videoModal.classList.add('hidden');
});

// mengaktifkan javascript pada saat halaman dimuat/ load
document.addEventListener("DOMContentLoaded", ()=>{
// daftarkan variable burgerBtn
const burgerBtn = document.getElementById("burgerBtn");
// daftarkan variabel navLinks
const navLinks = document.getElementById("navLinks");
//daftarkan variabel dropdowns
const dropdowns = document.getElementById("dropdown");
//daftarkan variable tombol light/darkmode
const themeToggle = document.getElementById ("themeToggle")

// tampilkan nav ketika tombol diklik
burgerBtn.addEventListener("click", ()=>{
    // tampilkan kembali navLinks
    navLinks.classList.toggle("show");
    // jika navLinks nya tidak aktif, maka tutup dropdown nya
    if(!navLinks.classList.contains("show")) {
        dropdowns.forEach((d) => d.classList.remove("open"));
    }
});

//dark mode
//cek prerefensi sebelumnya
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add ("dark-mode");
    themeToggle.textContent = "☀️";
}


//tombol toggel mode
themeToggle.addEventListener ("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark =  document.body.classList.contains ("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

});