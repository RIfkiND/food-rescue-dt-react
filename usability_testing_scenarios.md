# Dokumen Skenario Usability Testing - Food Rescue

Dokumen ini disusun untuk pengujian purwarupa (prototype) aplikasi Food Rescue berdasarkan metodologi *Design Thinking*. Tabel pengujian ini dibagi menjadi dua aktor utama: **Konsumen (Pembeli)** dan **Mitra (Penjual/Penyedia Makanan)**.

Format ini dirancang agar mudah disalin ke dalam *Spreadsheet* (Excel/Google Sheets) untuk dicatat secara langsung saat menguji di lapangan. 

---

## 1. Skenario Pengujian: Aktor MITRA (Penyedia Makanan)
Berikan konteks kepada user (Mitra): *"Anda adalah pemilik toko roti/restoran yang memiliki beberapa makanan berlebih hari ini. Anda ingin menjualnya dengan harga murah agar tidak terbuang."*

| No | Skenario Pengujian | Fungsi Utama | Tahapan / Instruksi untuk Responden | Kategori Tahapan (Ekspektasi) |
|:---|:---|:---|:---|:---|
| M1 | Melakukan Login / Autentikasi | Autentikasi (OTP) | 1. Buka halaman Login.<br>2. Masukkan nomor telepon dummy (misal: 81234567890).<br>3. Klik "Dapatkan Kode Verifikasi".<br>4. Masukkan kode OTP 6 digit apa saja.<br>5. Masuk ke halaman Dashboard Mitra. | **Tercapai** (User berhasil login hingga masuk ke Dashboard utama tanpa kebingungan) |
| M2 | Menambahkan Daftar Makanan (Listing) Baru | Manajemen Inventaris (Create) | 1. Dari Dashboard, navigasi ke halaman "Surplus Makanan".<br>2. Klik tombol "Tambah Daftar Baru".<br>3. Isi formulir detail makanan (Nama, Kategori, Harga Asli, Harga Diskon).<br>4. Simpan / Terbitkan Daftar. | **Tercapai** (User berhasil menemukan form dan mengisinya dengan benar) |
| M3 | Membuat Kupon Diskon | Manajemen Promosi | 1. Buka menu "Kupon & Diskon" dari sidebar.<br>2. Klik "Buat Kupon".<br>3. Generate kode kupon otomatis atau ketik manual.<br>4. Atur batas penggunaan dan tanggal kedaluwarsa.<br>5. Simpan Kupon. | **Tercapai** (User paham cara memberikan insentif/diskon kepada konsumen) |
| M4 | Melihat Analitik Penjualan & Riwayat | Analitik Dashboard | 1. Buka halaman "Analitik".<br>2. Perhatikan grafik "Tren Penyelamatan Sampah" dan total "Pendapatan Tersimpan".<br>3. Buka halaman "Riwayat Distribusi" untuk melihat status pesanan yang telah 'Selesai' atau 'Dalam Perjalanan'. | **Tercapai** (User mengerti cara membaca data penjualan dan riwayat transaksi mereka) |
| M5 | Mengedit Profil Toko | Pengaturan Profil | 1. Buka menu "Pengaturan Profil" (Sidebar bawah).<br>2. Navigasi ke bagian "Profil Toko" / "Alamat Toko".<br>3. Ubah deksripsi atau jam operasional, lalu simpan. | **Tercapai** (User mengerti cara mengatur informasi dasar dari tokonya) |

---

## 2. Skenario Pengujian: Aktor KONSUMEN (Penyelamat Makanan)
Berikan konteks kepada user (Konsumen): *"Anda adalah seorang mahasiswa yang sedang mencari makanan dengan harga miring di sekitar kos/kampus Anda untuk diselamatkan dari pembuangan."*

| No | Skenario Pengujian | Fungsi Utama | Tahapan / Instruksi untuk Responden | Kategori Tahapan (Ekspektasi) |
|:---|:---|:---|:---|:---|
| K1 | Mengeksplorasi Makanan di Sekitar | Eksplorasi (Explore) | 1. Buka halaman Beranda / Explore.<br>2. Gunakan fitur filter atau *scroll* untuk melihat penawaran "Surprise Bag" atau "Makanan Siap Saji".<br>3. Klik salah satu kartu makanan untuk melihat detailnya. | **Tercapai** (User berhasil menemukan list makanan yang tersedia) |
| K2 | Mencari Makanan via Peta (Map) | Pencarian Geografis | 1. Buka halaman Peta (Map Page).<br>2. Lihat pin/lokasi mitra yang berdekatan dengan lokasi saat ini.<br>3. Klik salah satu pin untuk melihat nama toko dan jaraknya. | **Tercapai** (User paham cara menggunakan map untuk mencari toko terdekat) |
| K3 | Melakukan Checkout Pesanan | Transaksi & Checkout | 1. Setelah memilih makanan di halaman detail item, klik tombol "Pesan" atau "Checkout".<br>2. Periksa detail total harga dan metode pengambilan.<br>3. Konfirmasi pesanan / Bayar. | **Tercapai** (User berhasil menyelesaikan proses pemesanan dari awal hingga selesai) |
| K4 | Memantau Status Pesanan (Order History) | Pelacakan Pesanan | 1. Buka menu Profil Konsumen.<br>2. Navigasi ke halaman "Pesanan Saya" (Orders).<br>3. Cek status pesanan yang baru saja dibuat (misal: 'Dalam Proses' atau 'Menunggu Pengambilan'). | **Tercapai** (User tahu cara melacak status pembelian mereka) |
| K5 | Mengecek Dompet (Wallet) & Saldo | Pengaturan Finansial | 1. Dari Dashboard Profil, buka menu "Dompet" (Wallet).<br>2. Lihat total penghematan atau saldo yang bisa ditarik/digunakan kembali. | **Tercapai** (User memahami tabungan hasil penyelamatan makanan) |

---

## Panduan Penilaian untuk Penguji (Tester)
Saat responden sedang mencoba prototype berdasarkan skenario di atas, catat hasil mereka menggunakan 3 metrik berikut ke dalam buku catatan atau Excel Anda:

1. **Berhasil Tanpa Kendala (Success):** Pengguna dapat menyelesaikan tugas dengan cepat tanpa bertanya.
2. **Berhasil dengan Kendala (Success with difficulty):** Pengguna agak bingung, membutuhkan waktu yang lebih lama, atau sempat salah klik, namun akhirnya berhasil menyelesaikan tugas.
3. **Gagal (Failed):** Pengguna menyerah atau tidak dapat menyelesaikan tugas sama sekali tanpa bantuan eksternal.

**Tips Pengujian Lapangan:**
- *Think Aloud:* Minta responden untuk mengucapkan apa yang mereka pikirkan saat mengklik sesuatu (Contoh: "Oh, saya kira tombol tambah makanan ada di profil, ternyata ada di menu inventory").
- *Jangan Dibantu:* Biarkan mereka mencoba mengoperasikan prototype terlebih dahulu sebelum Anda memberikan petunjuk.
- *Observasi:* Perhatikan gerakan mouse/jari mereka. Apakah mereka mencari tombol di tempat yang salah? Jika iya, ini adalah masukan (*feedback*) berharga untuk *redesign* UI selanjutnya.
