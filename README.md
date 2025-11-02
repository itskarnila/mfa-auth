# MFA Authentication App

Aplikasi web untuk implementasi **Multi-Factor Authentication (MFA)** menggunakan **Auth0 Free Tier**. Dibangun dengan React, TypeScript, dan Tailwind CSS untuk memberikan pengalaman pengguna yang modern dan aman.

## 🚀 Fitur

- ✅ Autentikasi pengguna dengan Auth0
- ✅ Multi-Factor Authentication (MFA) support
- ✅ Protected routes dengan React Router
- ✅ Profile management
- ✅ UI modern dengan Tailwind CSS
- ✅ Responsive design

## 📋 Prerequisites

- Node.js 18+
- npm atau yarn
- Akun Auth0 (Free Tier)

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

### 3. Setup Auth0

1. Login ke [Auth0 Dashboard](https://manage.auth0.com/)
2. Buat aplikasi baru:

   - Pilih **"Single Page Web Applications"**
   - Klik **"Create"**

3. **PENTING: Konfigurasi URL di Auth0 Dashboard**

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

4. Copy nilai-nilai berikut dari aplikasi:
   - **Domain** - Domain Auth0 Anda (contoh: `dev-abc123.auth0.com`)
   - **Client ID** - Public identifier untuk aplikasi Anda
   - **Audience** (opsional) - Hanya jika Anda menggunakan API Auth0

**⚠️ PENTING tentang Client Secret:**

- Untuk aplikasi **Single Page Application (SPA)** seperti React, **Client Secret TIDAK diperlukan**
- Client Secret hanya digunakan untuk aplikasi **server-side** (Regular Web Apps, M2M Apps)
- Aplikasi ini menggunakan **PKCE** (Proof Key for Code Exchange) untuk keamanan, bukan Client Secret
- Jika Anda melihat referensi Client Secret di dokumentasi Auth0, itu untuk aplikasi backend, bukan SPA

### 4. Enable Multi-Factor Authentication

1. Di Auth0 Dashboard, navigasi ke **Security** → **Multi-factor Auth**
2. Enable salah satu metode MFA:
   - **Authenticator App** (disarankan)
   - **SMS** (memerlukan Twilio untuk production)
   - **Email**
3. Atur MFA policy:
   - Pilih "Always" atau "Conditional" berdasarkan kebutuhan
   - Untuk testing, gunakan "Always" agar MFA selalu diminta

### 5. Environment Variables

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

### 6. Run Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

## 📖 Penggunaan

1. **Login**: Klik tombol "Login" di homepage
2. **MFA Setup**: Saat pertama kali login, Auth0 akan meminta setup MFA
3. **Dashboard**: Setelah login, akses dashboard untuk melihat status autentikasi
4. **Profile**: Lihat informasi profil pengguna di halaman Profile

## 🏗️ Struktur Project

```
mfa-authentication-app/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Loading.tsx          # Loading component
│   │   └── ProtectedRoute.tsx   # Route protection
│   ├── pages/
│   │   ├── Home.tsx             # Homepage
│   │   ├── Dashboard.tsx        # Protected dashboard
│   │   └── Profile.tsx          # User profile
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── style.css                # Global styles
├── .env.example                 # Environment variables template
├── README.md                    # This file
└── package.json
```

## 🔐 Konfigurasi MFA di Auth0

### Menggunakan Authenticator App (TOTP)

1. Di Auth0 Dashboard → **Security** → **Multi-factor Auth**
2. Aktifkan **Google Authenticator** atau **Auth0 Guardian**
3. User akan diminta setup saat login pertama kali

### Menggunakan SMS

1. Aktifkan **SMS** di MFA settings
2. Konfigurasi Twilio (untuk production) atau gunakan Auth0 Phone Provider
3. User akan menerima kode via SMS

### Conditional MFA

Untuk mengaktifkan MFA hanya pada kondisi tertentu:

1. Di Auth0 Dashboard → **Security** → **Multi-factor Auth**
2. Pilih **Conditional** policy
3. Konfigurasi rules berdasarkan:
   - IP address
   - Geographic location
   - Device fingerprinting
   - Dll.

## 🛠️ Build untuk Production

```bash
npm run build
```

File build akan ada di folder `dist/`

## 📝 Catatan Penting

- **Free Tier Limitations**: Auth0 Free Tier memiliki batasan tertentu (misalnya jumlah user aktif)
- **MFA Methods**: Beberapa metode MFA mungkin memerlukan konfigurasi tambahan
- **Security**: Pastikan untuk tidak commit file `.env` ke repository

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

## 📚 Resources

- [Auth0 Documentation](https://auth0.com/docs)
- [Auth0 React SDK](https://auth0.com/docs/quickstart/spa/react)
- [Multi-Factor Authentication Guide](https://auth0.com/docs/secure/multi-factor-authentication)

## 📄 License

MIT
