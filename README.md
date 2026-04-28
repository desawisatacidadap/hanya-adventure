# 🏔️ Hanya Adventure — Website Setup Guide

Website SEO-ready untuk GitHub Pages, target pasar domestik + internasional.

---

## 📁 STRUKTUR FILE

```
hanya-adventure/
├── index.html       ← Website utama (bilingual EN/ID)
├── sitemap.xml      ← Peta website untuk Google
├── robots.txt       ← Instruksi untuk crawler Google
└── README.md        ← Panduan ini
```

---

## 🚀 LANGKAH 1 — BUAT AKUN & REPO GITHUB

1. Buka https://github.com → klik **Sign Up**
2. Buat username (contoh: `hanya-adventure` atau nama Anda)
3. Setelah login, klik **"+"** pojok kanan atas → **New repository**
4. Isi:
   - Repository name: `hanya-adventure`
   - Visibility: ✅ **Public**
   - ✅ Add a README file
5. Klik **Create repository**

---

## 🚀 LANGKAH 2 — UPLOAD FILE

1. Di halaman repo, klik **"Add file"** → **Upload files**
2. Drag & drop semua file: `index.html`, `sitemap.xml`, `robots.txt`
3. Scroll bawah → klik **Commit changes**

---

## 🚀 LANGKAH 3 — AKTIFKAN GITHUB PAGES

1. Di repo Anda → klik tab **Settings**
2. Di sidebar kiri → klik **Pages**
3. Di bagian **Source** → pilih:
   - Branch: `main`
   - Folder: `/ (root)`
4. Klik **Save**
5. Tunggu 2–3 menit → website live di:
   **`https://YOUR-USERNAME.github.io/hanya-adventure/`**

---

## ✏️ LANGKAH 4 — GANTI DATA PENTING DI index.html

Buka `index.html` dan cari-ganti teks berikut:

| Cari teks ini | Ganti dengan |
|---|---|
| `YOUR-USERNAME` | Username GitHub Anda |
| `62YOURNUMBER` | No WA Anda, contoh: `6281234567890` |
| `YOUR-HANDLE` | Username Instagram / TikTok Anda |
| `+62 XXX-XXXX-XXXX` | Nomor WA yang tampil di website |
| `→ Update with your exact address` | Alamat lengkap lokasi Anda |
| `IDR 350K`, `IDR 750K` | Harga paket Anda yang sebenarnya |

Lakukan hal yang sama di `sitemap.xml` dan `robots.txt` — ganti semua `YOUR-USERNAME`.

---

## 🔍 LANGKAH 5 — DAFTAR DI GOOGLE SEARCH CONSOLE

1. Buka https://search.google.com/search-console
2. Klik **"Add property"**
3. Pilih **URL prefix**
4. Masukkan: `https://YOUR-USERNAME.github.io/hanya-adventure/`
5. Klik **Continue**
6. Pilih metode verifikasi: **HTML tag**
7. Copy kode yang diberikan, contoh:
   ```html
   <meta name="google-site-verification" content="KODE_ANDA_DI_SINI" />
   ```
8. Buka `index.html` → cari baris ini:
   ```html
   <!-- <meta name="google-site-verification" content="YOUR_CODE_HERE" /> -->
   ```
9. Hapus `<!--` dan `-->` (uncomment), lalu ganti `YOUR_CODE_HERE` dengan kode Anda
10. Upload ulang `index.html` ke GitHub
11. Kembali ke Search Console → klik **Verify**

---

## 🗺️ LANGKAH 6 — SUBMIT SITEMAP KE GOOGLE

Setelah terverifikasi di Search Console:

1. Di sidebar kiri → klik **Sitemaps**
2. Di kolom "Add a new sitemap" → ketik:
   ```
   sitemap.xml
   ```
3. Klik **Submit**
4. Status harus berubah menjadi **"Success"**

---

## 🗺️ LANGKAH 7 — GANTI PETA GOOGLE MAPS

Di `index.html`, cari bagian ini:
```html
<iframe src="https://www.google.com/maps/embed?pb=...
```

Cara mendapatkan embed link lokasi Anda:
1. Buka Google Maps → cari lokasi Hanya Adventure Anda
2. Klik **Share** → tab **Embed a map**
3. Copy seluruh kode `<iframe>` yang diberikan
4. Ganti iframe di `index.html` dengan kode tersebut

---

## 🖼️ LANGKAH 8 — TAMBAH FOTO NYATA (Opsional tapi Sangat Penting)

Upload foto-foto kegiatan Anda ke repo GitHub, lalu di `index.html`:
- Ganti div `.act-bg` dengan tag `<img>` yang sebenarnya
- Tambahkan foto hero sebagai background di `.hero-bg`

Contoh menambahkan foto ATV:
```html
<!-- Sebelum: -->
<div class="act-bg act-bg-1"><div class="act-icon-wrap">🏎️</div></div>

<!-- Sesudah: -->
<div class="act-bg" style="background-image:url('foto-atv.jpg');background-size:cover;background-position:center;"></div>
```

---

## 📊 DATA YANG PERLU ANDA SIAPKAN

### 🔴 WAJIB (untuk website bisa live):
- [ ] Nomor WhatsApp aktif
- [ ] Alamat lengkap lokasi
- [ ] Harga paket yang sebenarnya
- [ ] Username GitHub

### 🟡 PENTING (untuk SEO & kepercayaan):
- [ ] 10–20 foto kegiatan berkualitas tinggi (ATV, rafting, jeep, team building)
- [ ] 1 foto hero/banner landscape (1920×1080px minimum)
- [ ] Logo Hanya Adventure (PNG transparan)
- [ ] Koordinat GPS lokasi yang tepat

### 🟢 UNTUK RANKING INTERNATIONAL:
- [ ] Ulasan nyata dari tamu (screenshot Google Maps / TripAdvisor)
- [ ] Sertifikat keselamatan / izin usaha (scan)
- [ ] Daftar di Google Business Profile (gratis)
- [ ] Daftar di TripAdvisor (gratis)
- [ ] Daftar di GetYourGuide atau Klook (komisi ~20%)

---

## 🎯 STRATEGI KATA KUNCI (Focus Area)

### Internasional (target wisatawan asing):
- `adventure near jakarta`
- `things to do in puncak`
- `ATV puncak bogor`
- `team building indonesia`
- `jakarta day trip nature`
- `white water rafting west java`

### Domestik:
- `outbound puncak bogor`
- `ATV puncak murah`
- `team building jakarta`
- `wisata alam bogor`

---

## 📈 KENAPA ANDA BISA UNGGULI KOMPETITOR

Dari analisis highlandexperience.co.id (foto yang Anda kirim):
- DR hanya 11 → sangat lemah
- Referring domains hanya 92 → mudah disaingi
- Organic traffic **sedang turun**
- Tidak ada strategi internasional

**Keunggulan Anda:**
1. Website bilingual (EN + ID) → langsung dua pasar
2. Schema markup lengkap → Google bisa baca data bisnis
3. Sitemap + robots.txt → Google index lebih cepat
4. WhatsApp booking → konversi lebih tinggi
5. Fokus corporate outbound → nilai transaksi lebih besar

---

## 📞 CHECKLIST SETELAH WEBSITE LIVE

- [ ] Submit sitemap di Google Search Console
- [ ] Daftar Google Business Profile → https://business.google.com
- [ ] Tambahkan link website ke semua bio sosmed
- [ ] Post konten TikTok/Reels dengan mention website
- [ ] Minta tamu yang puas untuk review di Google Maps

---

*Dibuat oleh Claude untuk Hanya Adventure — April 2025*
