# Penerapan Multi-Factor Authentication (MFA) pada Aplikasi Cloud Menggunakan Auth0 Free Tier

Implementasi aplikasi web dengan sistem **Multi-Factor Authentication (MFA)** menggunakan **Auth0 Free Tier** untuk meningkatkan keamanan aplikasi cloud. Projek ini menggunakan React, Vite, dan Tailwind CSS.

## 📌 Deskripsi Projek

Implementasi sistem autentikasi multi-faktor (MFA) pada aplikasi web cloud menggunakan Auth0 sebagai identity provider. Pengguna harus melewati dua tahap verifikasi (password + authenticator code) sebelum dapat mengakses aplikasi.

## 🎯 Tujuan Implementasi

1. Menerapkan lapisan keamanan tambahan pada aplikasi cloud
2. Mengimplementasikan autentikasi dua faktor menggunakan Auth0
3. Memanfaatkan Auth0 Free Tier sebagai solusi cost-effective
4. Menyediakan pengalaman pengguna yang seamless

## 🚀 Fitur Utama

- ✅ Autentikasi dengan Auth0
- ✅ Multi-Factor Authentication (MFA) dengan TOTP
- ✅ Protected Routes dengan React Router
- ✅ Profile Management
- ✅ Modern UI dengan Tailwind CSS
- ✅ Responsive Design

## 🛠️ Teknologi

- React 19.2.0
- Vite 7.1.7
- React Router DOM 7.9.5
- Auth0 React SDK 2.8.0
- Tailwind CSS 4.0.0

## 📋 Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- Akun Auth0 Free Tier ([auth0.com](https://auth0.com))

## 🔧 Setup

### 1. Clone Repository

```bash
git clone https://github.com/itskarnila/mfa-auth.git
cd mfa-authentication-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Auth0

1. Buat akun di [auth0.com](https://auth0.com)
2. Login ke [Auth0 Dashboard](https://manage.auth0.com/)
3. Buat aplikasi baru:

   - Pilih **"Single Page Web Applications"**
   - Copy **Domain** dan **Client ID**

4. Konfigurasi URL di Auth0 Dashboard → Settings:

   - **Allowed Callback URLs:** `http://localhost:5173`
   - **Allowed Logout URLs:** `http://localhost:5173`
   - **Allowed Web Origins:** `http://localhost:5173`
   - ⚠️ Jangan lupa klik **"Save Changes"**

5. Enable MFA:
   - Navigasi ke **Security** → **Multi-factor Auth**
   - Aktifkan **Authenticator App** (Google Authenticator)
   - Set policy ke **"Always"** untuk testing

### 4. Environment Variables

Buat file `.env` di root project:

```env
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_AUTH0_AUDIENCE=your-domain.auth0.com
```

**Catatan:** `VITE_AUTH0_AUDIENCE` bisa diisi dengan Domain Auth0 jika tidak menggunakan API Auth0.

### 5. Run Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

## 📖 Penggunaan

1. **Login**: Klik tombol "Login" di homepage
2. **Autentikasi**: Login menggunakan email/password di Auth0
3. **Setup MFA**: Scan QR code dengan authenticator app (Google Authenticator, Authy, dll)
4. **Verifikasi**: Masukkan kode 6 digit dari authenticator app
5. **Dashboard**: Akses dashboard dan profile setelah berhasil login

## 🏗️ Struktur Project

```
mfa-authentication-app/
├── src/
│   ├── components/      # Navbar, Loading, ProtectedRoute
│   ├── pages/          # Home, Dashboard, Profile
│   ├── App.jsx         # Main app dengan routing
│   └── main.jsx        # Entry point
├── .env                # Environment variables (jangan commit)
└── package.json
```

## 🔐 Konfigurasi MFA di Auth0

1. Auth0 Dashboard → **Security** → **Multi-factor Auth**
2. Aktifkan **Google Authenticator** (TOTP)
3. Set policy:
   - **"Always"**: MFA selalu diminta (untuk testing)
   - **"Conditional"**: MFA hanya pada kondisi tertentu (production)

## 🛠️ Build untuk Production

```bash
npm run build
```

File build akan ada di folder `dist/`

## ⚠️ Catatan Penting

### Auth0 Free Tier Limitations

- 7,000 active users per bulan
- 2 social identity providers
- Unlimited logins dan API calls
- SMS MFA memerlukan Twilio untuk production

### Security Best Practices

- Jangan commit file `.env` ke repository
- Gunakan HTTPS di production
- Update Auth0 URLs untuk production domain

## 🐛 Troubleshooting

### Error: Missing Auth0 configuration

- Pastikan file `.env` sudah dibuat dan diisi dengan benar
- Restart development server setelah membuat/mengubah `.env`

### Error: Service not found / access_denied

- Pastikan Domain di `.env` sesuai dengan Auth0 Dashboard
- Format: `your-tenant.us.auth0.com` (tanpa `https://` atau `/` di akhir)
- Restart development server setelah mengubah `.env`

### Callback URL mismatch

- Pastikan URL di Auth0 Dashboard → Settings sudah benar
- **Allowed Callback URLs:** `http://localhost:5173`
- **Allowed Logout URLs:** `http://localhost:5173`
- **Allowed Web Origins:** `http://localhost:5173`
- Klik **"Save Changes"** setelah mengubah

### MFA tidak muncul saat login

- Pastikan MFA sudah diaktifkan di Auth0 Dashboard
- Set policy MFA ke **"Always"** untuk testing
- Cek browser console untuk error messages

## 📚 Referensi

- [Auth0 Documentation](https://auth0.com/docs)
- [Auth0 React SDK](https://auth0.com/docs/quickstart/spa/react)
- [Multi-Factor Authentication Guide](https://auth0.com/docs/secure/multi-factor-authentication)

## 📄 License

MIT License

---

**Dibuat dengan ❤️ menggunakan React, Auth0, dan Vite**
