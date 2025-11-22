Smart Residence IoT - Web Dashboard

Dokumentasi Teknis & Panduan Instalasi

Proyek ini adalah Dashboard Monitoring & Controlling untuk sistem Smart Residence berbasis IoT (ESP32). Dashboard ini menggunakan arsitektur Serverless dengan Firebase sebagai backend.

1. Struktur Proyek

index.html: Dashboard Utama (Admin). Menampilkan ringkasan performa total (Hari ini vs Kemarin) dan grafik beban listrik.

kamar1.html: Detail Kamar 1 (Master). Dilengkapi kontrol Relay, Sensor Gas, dan 9 Grafik parameter listrik.

villa1.html & villa2.html: Monitoring unit Villa (Sensor Node).

manage.html: Manajemen Database Penghuni (Kartu RFID).

public-display.html: Tampilan khusus layar TV di lobi (Read-only).

login.html: Pintu masuk Admin.

2. Persiapan Firebase (Backend)

A. Membuat Database

Buka Firebase Console.

Buat project baru.

Menu Build -> Realtime Database -> Create Database.

Pilih lokasi (Singapore/Asia Southeast1).

Masuk ke tab Rules, ganti dengan aturan keamanan berikut:

{
  "rules": {
    ".read": true,
    ".write": "auth != null",
    "users": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}


B. Setting Akun Admin (PENTING)

Karena sistem ini tertutup (Private), pendaftaran user dilakukan manual:

Menu Build -> Authentication.

Tab Sign-in method -> Aktifkan Email/Password.

Tab Users -> Klik Add user.

Masukkan Email & Password untuk Admin (Contoh: admin@smartres.com).

Gunakan akun ini untuk login di login.html.

3. Hardware Integration (ESP32)

Pastikan ESP32 mengirim data dengan struktur path berikut di Realtime Database:

Monitoring Data:

monitoring/kamar1

monitoring/villa1

monitoring/villa2

Isi JSON: { watt, v, i, kwh, hz, pf, temp, hum, ppm (khusus kamar1), guestName }

Control Feedback (Relay):

monitoring/kamar1/relays/{0-3}

Isi JSON: { name: "Lampu", state: 0/1 }

4. Kalkulasi Matematika

Dashboard menggunakan logika Zero Exclusion dan Comparative Analysis:

Zero Exclusion: Nilai 0 (alat mati) diabaikan dalam perhitungan rata-rata agar data efisiensi tidak bias.

Comparative: Semua metrik (Watt, Ampere, Biaya) dibandingkan antara Hari Ini vs Kemarin untuk menghasilkan persentase tren (Hemat/Boros).

Estimasi Biaya: Total kWh * 30 Hari * Tarif Dasar Listrik.

Dibuat untuk Tugas Akhir Teknik Elektro/Informatika 2025