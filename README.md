# Penerapan Multi-Factor Authentication (MFA) pada Aplikasi Cloud Menggunakan Auth0 Free Tier

Implementasi aplikasi web dengan sistem **Multi-Factor Authentication (MFA)** menggunakan **Auth0 Free Tier** untuk meningkatkan keamanan aplikasi cloud. Projek ini menggunakan React, Vite, dan Tailwind CSS untuk memberikan pengalaman pengguna yang modern, aman, dan responsif.

## 📌 Deskripsi Projek

Projek ini merupakan implementasi sistem autentikasi multi-faktor (MFA) pada aplikasi web cloud menggunakan Auth0 sebagai identity provider. Aplikasi ini dirancang untuk mendemonstrasikan penerapan keamanan lapis ganda (two-factor authentication) dalam aplikasi cloud, di mana pengguna harus melewati dua tahap verifikasi sebelum dapat mengakses aplikasi.

## 🎯 Tujuan Implementasi

1. **Keamanan Cloud**: Menerapkan lapisan keamanan tambahan pada aplikasi cloud untuk melindungi data dan akses pengguna
2. **Multi-Factor Authentication**: Mengimplementasikan autentikasi dua faktor menggunakan Auth0 sebagai solusi cloud-based
3. **Free Tier Solution**: Memanfaatkan Auth0 Free Tier sebagai solusi autentikasi yang cost-effective untuk aplikasi skala kecil hingga menengah
4. **User Experience**: Menyediakan pengalaman pengguna yang seamless dengan proses autentikasi yang aman namun tidak membebani pengguna

## 🚀 Fitur Utama

- ✅ **Autentikasi dengan Auth0**: Integrasi dengan Auth0 sebagai identity provider cloud
- ✅ **Multi-Factor Authentication (MFA)**: Dukungan TOTP (Time-based One-Time Password) melalui Authenticator App
- ✅ **Protected Routes**: Sistem routing yang dilindungi dengan React Router dan Auth0
- ✅ **Profile Management**: Halaman profil pengguna yang menampilkan informasi akun
- ✅ **Cloud-Based Solution**: Menggunakan Auth0 cloud service untuk autentikasi
- ✅ **Modern UI**: Interface modern dengan Tailwind CSS
- ✅ **Responsive Design**: Desain yang responsif untuk berbagai perangkat

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.1.7
- **Routing**: React Router DOM 7.9.5
- **Authentication**: Auth0 React SDK 2.8.0
- **Styling**: Tailwind CSS 4.0.0
- **Cloud Service**: Auth0 Free Tier

## 📋 Prerequisites

Sebelum memulai, pastikan Anda telah memiliki:

- **Node.js** 18.0.0 atau lebih tinggi
- **npm** atau **yarn** atau **pnpm** (package manager)
- **Akun Auth0 Free Tier** (daftar gratis di [auth0.com](https://auth0.com))
- **Browser modern** (Chrome, Firefox, Safari, atau Edge terbaru)

## 🔧 Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd mfa-authentication-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Auth0 Free Tier

Auth0 Free Tier menyediakan hingga 7,000 active users dan 2 social identity providers gratis, cocok untuk pengembangan dan aplikasi skala kecil.

1. **Buat Akun Auth0** (jika belum punya):

   - Kunjungi [auth0.com](https://auth0.com) dan daftar akun gratis
   - Pilih region yang sesuai (US, EU, atau AU)
   - Verifikasi email Anda

2. **Login ke Auth0 Dashboard**:

   - Akses [Auth0 Dashboard](https://manage.auth0.com/)
   - Login menggunakan akun yang sudah dibuat

3. **Buat Aplikasi Baru**:

   - Navigasi ke **Applications** → **Applications** (di menu sidebar)
   - Klik tombol **"Create Application"**
   - Beri nama aplikasi (contoh: "MFA Authentication App")
   - Pilih aplikasi tipe **"Single Page Web Applications"**
   - Klik **"Create"**

4. **PENTING: Konfigurasi URL di Auth0 Dashboard**

   Setelah aplikasi dibuat, pergi ke tab **"Settings"** dan tambahkan URL berikut:

   **Allowed Callback URLs:**

   ```
   http://localhost:5173
   ```

   (Tambahkan koma untuk multiple URLs jika perlu, contoh: `http://localhost:5173, http://localhost:3000`)

   **Allowed Logout URLs:**

   ```
   http://localhost:5173
   ```

   **Allowed Web Origins:**

   ```
   http://localhost:5173
   ```

   **Jika akan deploy ke production**, tambahkan juga URL production:

   ```
   http://localhost:5173, https://yourdomain.com
   ```

   ⚠️ **Jangan lupa klik "Save Changes" setelah menambahkan URL!**

5. **Copy nilai-nilai berikut dari aplikasi**:
   - **Domain** - Domain Auth0 Anda (contoh: `dev-abc123.auth0.com`)
   - **Client ID** - Public identifier untuk aplikasi Anda
   - **Audience** (opsional) - Hanya jika Anda menggunakan API Auth0

**⚠️ PENTING tentang Client Secret:**

- Untuk aplikasi **Single Page Application (SPA)** seperti React, **Client Secret TIDAK diperlukan**
- Client Secret hanya digunakan untuk aplikasi **server-side** (Regular Web Apps, M2M Apps)
- Aplikasi ini menggunakan **PKCE** (Proof Key for Code Exchange) untuk keamanan, bukan Client Secret
- Jika Anda melihat referensi Client Secret di dokumentasi Auth0, itu untuk aplikasi backend, bukan SPA

### 5. Enable Multi-Factor Authentication

1. Di Auth0 Dashboard, navigasi ke **Security** → **Multi-factor Auth**
2. Enable salah satu metode MFA:
   - **Authenticator App** (disarankan)
   - **SMS** (memerlukan Twilio untuk production)
   - **Email**
3. Atur MFA policy:
   - Pilih "Always" atau "Conditional" berdasarkan kebutuhan
   - Untuk testing, gunakan "Always" agar MFA selalu diminta

### 6. Environment Variables

Buat file `.env` di root project:

```bash
cp .env.example .env
```

Isi file `.env` dengan nilai dari Auth0:

```env
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_AUTH0_AUDIENCE=your-api-audience
```

**Catatan:**

- `VITE_AUTH0_AUDIENCE` **OPSIONAL**:
  - Jika **TIDAK menggunakan API Auth0**: Bisa dikosongkan atau diisi dengan Domain Auth0 Anda
  - Jika **menggunakan API Auth0**: Isi dengan Identifier dari API (lihat panduan di bawah atau [AUDIENCE_GUIDE.md](./AUDIENCE_GUIDE.md))
- **TIDAK perlu Client Secret** untuk aplikasi React SPA ini
- Client Secret hanya untuk aplikasi backend/server-side, bukan untuk SPA

### Dimana mendapatkan nilai-nilai ini?

1. **Domain**:

   - Auth0 Dashboard → **Applications** → Pilih aplikasi Anda → **Settings** tab
   - Scroll ke bawah, cari **Domain** (contoh: `dev-abc123.us.auth0.com`)

2. **Client ID**:

   - Auth0 Dashboard → **Applications** → Pilih aplikasi Anda → **Settings** tab
   - Cari **Client ID** di bagian atas halaman

3. **Audience** (OPSIONAL - hanya jika menggunakan API Auth0):
   - **Jika TIDAK menggunakan API Auth0**: Bisa dikosongkan atau diisi dengan Domain Auth0 Anda (sama dengan Domain di atas)
   - **Jika menggunakan API Auth0**:
     1. Auth0 Dashboard → **Applications** → **APIs** (di menu kiri)
     2. Pilih API Anda atau klik **"Create API"** untuk membuat baru
     3. Di halaman API → **Settings** tab
     4. Copy nilai **Identifier** (contoh: `https://api.myapp.com` atau `my-api-identifier`)
     5. Nilai ini adalah **Audience** yang digunakan
   - 📖 **Lihat panduan lengkap di [AUDIENCE_GUIDE.md](./AUDIENCE_GUIDE.md)**

**Catatan tentang Audience:**

- Audience **OPSIONAL** untuk aplikasi SPA yang hanya melakukan autentikasi user
- Jika Anda tidak membuat/menggunakan API Auth0, bisa dikosongkan atau diisi dengan Domain Auth0
- Audience diperlukan jika Anda ingin:
  - Memanggil protected API endpoints
  - Mendapatkan access token dengan scope tertentu
  - Menggunakan API Auth0 untuk authorization

**Client Secret** (TIDAK diperlukan untuk SPA):

- Client Secret hanya muncul jika Anda membuat aplikasi tipe "Regular Web Application"
- Untuk aplikasi tipe "Single Page Web Applications" (seperti aplikasi ini), Client Secret tidak tersedia dan tidak diperlukan
- Auth0 menggunakan PKCE untuk autentikasi SPA, yang lebih aman tanpa perlu Client Secret

### 7. Run Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

## 📖 Cara Penggunaan Aplikasi

### Untuk Pengguna

1. **Akses Aplikasi**: Buka aplikasi di browser (`http://localhost:5173`)
2. **Login**: Klik tombol "Login" di homepage
3. **Autentikasi**: Anda akan diarahkan ke halaman login Auth0
   - Login menggunakan email/password atau social login (jika dikonfigurasi)
4. **Setup MFA**: Saat pertama kali login dengan MFA diaktifkan:
   - Scan QR code dengan aplikasi authenticator (Google Authenticator, Authy, Microsoft Authenticator)
   - Masukkan kode 6 digit untuk verifikasi
5. **Akses Dashboard**: Setelah berhasil login dan verifikasi MFA, Anda akan diarahkan ke dashboard
6. **Profil**: Akses halaman Profile untuk melihat informasi akun dan status MFA
7. **Logout**: Klik tombol Logout untuk keluar dari aplikasi

### Keamanan MFA

- Setiap kali login, pengguna akan diminta memasukkan kode dari authenticator app
- Kode akan berubah setiap 30 detik (TOTP standard)
- MFA menambahkan lapisan keamanan tambahan selain password

## 🏗️ Struktur Project

```
mfa-authentication-app/
├── public/
│   └── vite.svg                 # Vite logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar dengan Auth0 integration
│   │   ├── Loading.jsx          # Loading component saat autentikasi
│   │   └── ProtectedRoute.jsx   # Route protection wrapper
│   ├── pages/
│   │   ├── Home.jsx             # Homepage (public)
│   │   ├── Dashboard.jsx        # Protected dashboard page
│   │   └── Profile.jsx          # User profile page
│   ├── App.jsx                  # Main app component dengan routing
│   ├── main.jsx                 # Entry point aplikasi
│   └── style.css                # Global styles
├── .env.example                 # Template environment variables
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML entry point
├── package.json                 # Dependencies dan scripts
├── vite.config.js               # Vite configuration
└── README.md                    # Dokumentasi projek
```

## 🔄 Alur Autentikasi MFA

```
1. User mengakses aplikasi
   ↓
2. User klik "Login"
   ↓
3. Redirect ke Auth0 Universal Login
   ↓
4. User memasukkan credentials (email/password)
   ↓
5. Auth0 memverifikasi credentials
   ↓
6. MFA Challenge (jika MFA diaktifkan)
   ↓
7. User memasukkan kode dari Authenticator App
   ↓
8. Auth0 memverifikasi kode MFA
   ↓
9. User mendapatkan access token & ID token
   ↓
10. Redirect kembali ke aplikasi dengan token
    ↓
11. User dapat mengakses protected routes
```

## 🔐 Konfigurasi MFA di Auth0

### Mengaktifkan MFA di Auth0 Dashboard

1. **Navigasi ke MFA Settings**:

   - Login ke [Auth0 Dashboard](https://manage.auth0.com/)
   - Pilih **Security** → **Multi-factor Auth** (di menu sidebar)

2. **Pilih Metode MFA** (pilih salah satu atau kombinasi):

#### A. Authenticator App (TOTP) - **Disarankan**

- Aktifkan toggle **"Google Authenticator"** atau **"Guardian"**
- Metode ini menggunakan Time-based One-Time Password (TOTP)
- User perlu scan QR code dengan aplikasi authenticator
- Kode berubah setiap 30 detik
- **Keuntungan**: Gratis, tidak memerlukan nomor telepon, offline support

#### B. SMS Authentication

- Aktifkan toggle **"SMS"**
- Untuk production, perlu konfigurasi Twilio atau SMS provider lainnya
- User akan menerima kode via SMS
- **Catatan**: Auth0 Free Tier memiliki batasan untuk SMS

#### C. Email Authentication

- Aktifkan toggle **"Email"**
- User akan menerima kode via email
- Cocok untuk fallback method

### MFA Policy Configuration

Di halaman **Multi-factor Auth**, konfigurasi policy:

#### Option 1: Always Require MFA

- Pilih **"Always"** dari dropdown policy
- MFA akan selalu diminta untuk setiap login
- Cocok untuk testing dan aplikasi dengan keamanan tinggi

#### Option 2: Conditional MFA

- Pilih **"Conditional"** dari dropdown policy
- MFA hanya diminta pada kondisi tertentu
- Dapat dikonfigurasi berdasarkan:
  - IP address (misalnya, login dari IP baru)
  - Geographic location (login dari negara berbeda)
  - Device fingerprinting (perangkat baru)
  - Risk score (Auth0 Guardian)

### Best Practices untuk Production

1. **Gunakan Authenticator App**: Lebih aman dan tidak bergantung pada SMS/Email
2. **Enable Backup Codes**: Aktifkan recovery codes untuk situasi darurat
3. **Conditional MFA**: Gunakan conditional policy untuk balance antara UX dan security
4. **Monitor MFA Enrollments**: Pantau berapa banyak user yang sudah setup MFA

## 🛠️ Build untuk Production

```bash
npm run build
```

File build akan ada di folder `dist/`

## ⚠️ Catatan Penting

### Auth0 Free Tier Limitations

Auth0 Free Tier memiliki beberapa batasan:

- **7,000 active users** per bulan (gratis)
- **2 social identity providers** (Google, Facebook, dll)
- **Unlimited logins** dan **unlimited API calls**
- **Basic support** via community forum
- **SMS MFA**: Memerlukan SMS provider (Twilio) untuk production

Untuk kebutuhan lebih besar, pertimbangkan Auth0 paid plans.

### Security Best Practices

1. **Environment Variables**: Jangan pernah commit file `.env` ke repository
2. **HTTPS in Production**: Selalu gunakan HTTPS di production
3. **Domain Validation**: Validasi domain di Auth0 untuk production
4. **Token Storage**: Auth0 SDK menggunakan secure storage untuk tokens
5. **CORS Configuration**: Konfigurasi CORS dengan benar di Auth0

### Deployment Considerations

Untuk deploy aplikasi ke cloud (Vercel, Netlify, Cloudflare Pages, dll):

1. **Update Auth0 URLs**: Tambahkan production URL di Auth0 Dashboard

   - Allowed Callback URLs: `https://yourdomain.com`
   - Allowed Logout URLs: `https://yourdomain.com`
   - Allowed Web Origins: `https://yourdomain.com`

2. **Environment Variables**: Set environment variables di platform deployment

   - `VITE_AUTH0_DOMAIN`
   - `VITE_AUTH0_CLIENT_ID`
   - `VITE_AUTH0_AUDIENCE` (optional)

3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`

## 🐛 Troubleshooting

### Error: Missing Auth0 configuration

- Pastikan file `.env` sudah dibuat dan diisi dengan benar
- Restart development server setelah membuat/mengubah `.env`
- Pastikan hanya menggunakan **Client ID**, bukan Client Secret

### Error: Service not found / access_denied

**Error:** `error=access_denied&error_description=Service%20not%20found%3A%20your-domain.auth0.com`

**Solusi:**

1. Login ke [Auth0 Dashboard](https://manage.auth0.com/)
2. Pergi ke **Applications** → Pilih aplikasi Anda → **Settings**
3. Scroll ke bagian bawah, cari **Domain**
4. **Copy domain yang benar** - biasanya formatnya:
   - `your-tenant-name.us.auth0.com` (untuk US region)
   - `your-tenant-name.eu.auth0.com` (untuk EU region)
   - `your-tenant-name.au.auth0.com` (untuk AU region)
5. **PENTING**: Pastikan format domain **persis sama** dengan yang di Auth0 Dashboard
   - Jangan tambahkan `https://` atau `http://`
   - Jangan tambahkan path atau `/` di akhir
   - Contoh yang benar: `dev-abc123.us.auth0.com`
   - Contoh yang salah: `https://dev-abc123.us.auth0.com` atau `dev-abc123.us.auth0.com/`
6. Update file `.env` dengan domain yang benar:
   ```env
   VITE_AUTH0_DOMAIN=dev-abc123.us.auth0.com
   ```
7. **Restart development server** setelah mengubah `.env`
8. Clear cache browser (Ctrl+Shift+Delete atau Cmd+Shift+Delete) dan coba lagi

**Troubleshooting:**

- Jika domain Anda `karnila.us.auth0.com`, pastikan Anda menggunakan tenant Auth0 yang benar
- Cek apakah tenant name sudah benar di Auth0 Dashboard
- Pastikan tidak ada typo pada nama domain
- Jika menggunakan custom domain, pastikan sudah dikonfigurasi dengan benar di Auth0

### Dimana Client Secret?

**TIDAK PERLU Client Secret untuk aplikasi ini!** Aplikasi React SPA menggunakan PKCE, bukan Client Secret. Client Secret hanya untuk aplikasi backend/server-side. Jika Anda melihat referensi Client Secret, itu untuk keperluan lain (misalnya backend API), bukan untuk aplikasi frontend React ini.

### MFA tidak muncul saat login

- Cek apakah MFA sudah diaktifkan di Auth0 Dashboard
- Pastikan policy MFA diset ke "Always" untuk testing
- Cek browser console untuk error messages

### Callback URL mismatch / Redirect URI mismatch

**Error:** "The provided redirect_uri is not in the list of allowed callback URLs"

**Solusi:**

1. Login ke [Auth0 Dashboard](https://manage.auth0.com/)
2. Pilih aplikasi Anda → **Settings**
3. Scroll ke bagian **"Application URIs"**
4. Tambahkan URL berikut (sesuai dengan port yang digunakan aplikasi Anda):

   - **Allowed Callback URLs:** `http://localhost:5173`
   - **Allowed Logout URLs:** `http://localhost:5173`
   - **Allowed Web Origins:** `http://localhost:5173`

   **Catatan:** Jika Vite menggunakan port berbeda (misalnya 5174, 3000), ganti 5173 dengan port yang benar. Cek di terminal saat menjalankan `npm run dev`.

5. Scroll ke bawah dan klik **"Save Changes"** (WAJIB!)
6. Restart development server dan refresh browser, lalu coba login lagi

**Troubleshooting:**

- Pastikan URL yang ditambahkan **persis sama** dengan URL di browser (termasuk `http://` atau `https://`)
- Jangan ada spasi ekstra atau karakter yang salah
- Jangan ada `/` di akhir URL (contoh yang benar: `http://localhost:5173`)
- Jika masih error, cek console browser untuk melihat URL redirect yang digunakan
- Restart development server setelah mengubah konfigurasi Auth0

📖 **Lihat panduan lengkap step-by-step di [AUTH0_SETUP_GUIDE.md](./AUTH0_SETUP_GUIDE.md)**

## 📊 Testing dan Validasi

### Testing MFA Flow

1. **Test Login Normal**:

   - Pastikan user dapat login dengan email/password
   - Verifikasi redirect ke Auth0 Universal Login

2. **Test MFA Setup**:

   - Login sebagai user baru
   - Pastikan QR code muncul untuk setup authenticator
   - Scan QR code dengan authenticator app
   - Masukkan kode untuk verifikasi

3. **Test MFA Challenge**:

   - Logout dari aplikasi
   - Login lagi dengan user yang sudah setup MFA
   - Pastikan diminta kode MFA setelah memasukkan password
   - Masukkan kode dari authenticator app

4. **Test Protected Routes**:
   - Akses `/dashboard` dan `/profile` tanpa login (harus redirect)
   - Akses setelah login (harus dapat diakses)

### Validasi Keamanan

- ✅ Password tidak disimpan di aplikasi (handled by Auth0)
- ✅ Tokens disimpan securely di browser
- ✅ Protected routes tidak dapat diakses tanpa autentikasi
- ✅ MFA menambahkan lapisan keamanan tambahan
- ✅ Session management handled by Auth0

## 🚀 Deployment ke Cloud

Aplikasi ini dapat di-deploy ke berbagai platform cloud:

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Cloudflare Pages

- Connect repository ke Cloudflare Pages
- Set build command: `npm run build`
- Set output directory: `dist`

**Jangan lupa update Auth0 URLs setelah deploy!**

## 📚 Referensi dan Resources

### Dokumentasi Resmi

- [Auth0 Documentation](https://auth0.com/docs)
- [Auth0 React SDK](https://auth0.com/docs/quickstart/spa/react)
- [Auth0 Multi-Factor Authentication](https://auth0.com/docs/secure/multi-factor-authentication)
- [Auth0 Free Tier Information](https://auth0.com/pricing)

### Tutorial dan Guides

- [Getting Started with Auth0](https://auth0.com/docs/get-started)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Security Resources

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [NIST Guidelines on Multi-Factor Authentication](https://www.nist.gov/)

## 👥 Kontribusi

Projek ini dibuat sebagai implementasi tugas akademik. Untuk pertanyaan atau masukan, silakan buat issue di repository ini.

## 📄 License

MIT License - Lihat file [LICENSE](LICENSE) untuk detail lengkap.

---

**Dibuat dengan ❤️ menggunakan React, Auth0, dan Vite**
