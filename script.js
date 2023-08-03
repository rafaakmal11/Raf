const tampilJdwl = document.getElementById('tampilJdwl');
const tutupJdwl = document.getElementById('tutupJdwl');
const tabelPelajaran = document.getElementById('tabelPelajaran');

//fungsi untuk menampilkan tabel
function tampilkanTabel() {
    tabelPelajaran.style.display = 'table';
}

//fungsi untuk menyembunyikan tabel
function sembunyikanTabel() {
    tabelPelajaran.style.display = 'none';
}

//menambahkan even listener pada tombol Lihat Jadwal dan Tutup Jadwal
tampilJdwl.addEventListener('click', tampilkanTabel);
tutupJdwl.addEventListener('click', sembunyikanTabel);