# Panduan Deployment Lengkap

Panduan detail untuk deploy aplikasi MFA Authentication ke berbagai platform cloud.

## 📋 Prerequisites

Sebelum deploy, pastikan:
- ✅ Repository sudah di-push ke GitHub
- ✅ Aplikasi berjalan dengan baik di local (`npm run dev`)
- ✅ Build production berhasil (`npm run build`)
- ✅ Auth0 application sudah dibuat

## ⚠️ PENTING: Update Auth0 Configuration

**WAJIB** update URL di Auth0 sebelum deploy ke production!

1. Login ke [Auth0 Dashboard](https://manage.auth0.com/)
2. Go to **Applications** → Pilih aplikasi Anda → **Settings**
3. Scroll ke bagian **Application URIs**
4. Update URL berikut (ganti `yourdomain.com` dengan domain production Anda):

   **Allowed Callback URLs:**
   ```
   http://localhost:5173, https://yourdomain.com
   ```

   **Allowed Logout URLs:**
   ```
   http://localhost:5173, https://yourdomain.com
   ```

   **Allowed Web Origins:**
   ```
   http://localhost:5173, https://yourdomain.com
   ```

5. ⚠️ **WAJIB**: Klik **"Save Changes"** setelah mengubah!

## 🚀 Vercel (Recommended - Paling Mudah)

### Cara 1: Via Dashboard (Recommended)

1. **Login ke Vercel**:
   - Kunjungi [vercel.com](https://vercel.com)
   - Login dengan GitHub account

2. **Import Project**:
   - Klik **"Add New..."** → **"Project"**
   - Pilih repository GitHub Anda
   - Klik **"Import"**

3. **Configure Project**:
   - Framework Preset: **Vite** (otomatis terdeteksi)
   - Build Command: `npm run build` (otomatis)
   - Output Directory: `dist` (otomatis)
   - Install Command: `npm install` (otomatis)

4. **Set Environment Variables**:
   - Scroll ke bagian **"Environment Variables"**
   - Tambahkan satu per satu:
     - Name: `VITE_AUTH0_DOMAIN`, Value: `your-domain.auth0.com`
     - Name: `VITE_AUTH0_CLIENT_ID`, Value: `your-client-id`
     - Name: `VITE_AUTH0_AUDIENCE`, Value: `your-domain.auth0.com`

5. **Deploy**:
   - Klik **"Deploy"**
   - Tunggu hingga build selesai
   - Aplikasi akan live di URL: `https://your-project.vercel.app`

6. **Update Auth0 URLs**:
   - Copy URL dari Vercel (misalnya: `https://mfa-auth-app.vercel.app`)
   - Update di Auth0 Dashboard dengan URL tersebut
   - Redeploy di Vercel jika perlu

### Cara 2: Via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Untuk production
vercel --prod
```

Set environment variables via dashboard setelah deploy pertama.

---

## 🌐 Netlify

### Cara 1: Via Dashboard

1. **Login ke Netlify**:
   - Kunjungi [netlify.com](https://netlify.com)
   - Login dengan GitHub account

2. **New Site from Git**:
   - Klik **"Add new site"** → **"Import an existing project"**
   - Pilih **"GitHub"**
   - Pilih repository Anda
   - Klik **"Connect"**

3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Klik **"Show advanced"** jika perlu

4. **Set Environment Variables**:
   - Klik **"Show advanced"** → **"New variable"**
   - Tambahkan:
     - `VITE_AUTH0_DOMAIN` = `your-domain.auth0.com`
     - `VITE_AUTH0_CLIENT_ID` = `your-client-id`
     - `VITE_AUTH0_AUDIENCE` = `your-domain.auth0.com`

5. **Deploy**:
   - Klik **"Deploy site"**
   - Tunggu hingga build selesai
   - Aplikasi akan live di: `https://your-project.netlify.app`

### Cara 2: Via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## ☁️ Cloudflare Pages

1. **Login ke Cloudflare**:
   - Kunjungi [dash.cloudflare.com](https://dash.cloudflare.com)
   - Login dengan account Cloudflare

2. **Create Pages Project**:
   - Go to **Pages** → **Create a project**
   - Klik **"Connect to Git"**
   - Pilih GitHub dan authorize
   - Pilih repository Anda

3. **Configure Build Settings**:
   - Framework preset: **Vite** (atau pilih "None" dan isi manual)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (default)

4. **Set Environment Variables**:
   - Di halaman project → **Settings** → **Environment Variables**
   - Tambahkan:
     - `VITE_AUTH0_DOMAIN` = `your-domain.auth0.com`
     - `VITE_AUTH0_CLIENT_ID` = `your-client-id`
     - `VITE_AUTH0_AUDIENCE` = `your-domain.auth0.com`

5. **Save and Deploy**:
   - Klik **"Save and Deploy"**
   - Aplikasi akan live di: `https://your-project.pages.dev`

---

## 🔧 Manual Deployment (VPS/Server)

Jika Anda ingin deploy ke server sendiri (VPS, AWS EC2, dll):

### 1. Build Project

```bash
npm run build
```

### 2. Setup Server

**Install Nginx** (contoh untuk Ubuntu):

```bash
sudo apt update
sudo apt install nginx
```

### 3. Configure Nginx

Edit file `/etc/nginx/sites-available/default`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/mfa-app/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 4. Copy Files

```bash
sudo cp -r dist/* /var/www/mfa-app/dist/
sudo chown -R www-data:www-data /var/www/mfa-app
```

### 5. Setup SSL dengan Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

### 6. Environment Variables

Karena build sudah static, environment variables perlu di-set saat build:

```bash
VITE_AUTH0_DOMAIN=your-domain.auth0.com \
VITE_AUTH0_CLIENT_ID=your-client-id \
VITE_AUTH0_AUDIENCE=your-domain.auth0.com \
npm run build
```

Atau gunakan `.env.production`:

```bash
# .env.production
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_AUTH0_AUDIENCE=your-domain.auth0.com
```

Lalu build:
```bash
npm run build
```

---

## ✅ Verifikasi Deployment

Setelah deploy, verifikasi:

1. **Akses aplikasi** di production URL
2. **Test login flow**:
   - Klik tombol "Login"
   - Pastikan redirect ke Auth0 berhasil
   - Login dengan credentials
   - Pastikan MFA challenge muncul
   - Verifikasi dengan authenticator app
   - Pastikan redirect kembali ke aplikasi
3. **Test protected routes**:
   - Akses `/dashboard` dan `/profile`
   - Pastikan hanya bisa diakses setelah login
4. **Cek browser console** untuk error

---

## 🐛 Troubleshooting Deployment

### Error: Missing Auth0 configuration

**Penyebab**: Environment variables tidak ter-set di platform deployment.

**Solusi**:
- Pastikan environment variables sudah di-set di platform (Vercel/Netlify/Cloudflare)
- Pastikan nama variable benar: `VITE_AUTH0_DOMAIN`, `VITE_AUTH0_CLIENT_ID`, `VITE_AUTH0_AUDIENCE`
- Redeploy aplikasi setelah set environment variables

### Error: Callback URL mismatch

**Penyebab**: URL production belum ditambahkan di Auth0.

**Solusi**:
1. Login ke Auth0 Dashboard
2. Applications → Settings → Application URIs
3. Tambahkan production URL:
   - Allowed Callback URLs: `https://yourdomain.com`
   - Allowed Logout URLs: `https://yourdomain.com`
   - Allowed Web Origins: `https://yourdomain.com`
4. Klik "Save Changes"
5. Coba login lagi

### Error: CORS atau Web Origin error

**Penyebab**: Allowed Web Origins belum di-set di Auth0.

**Solusi**:
- Pastikan `Allowed Web Origins` di Auth0 sudah include production URL
- Format: `https://yourdomain.com` (tanpa trailing slash)

### Build Failed

**Penyebab**: Dependencies atau build configuration issue.

**Solusi**:
- Pastikan Node.js version sesuai (18+)
- Pastikan `package.json` sudah commit ke repository
- Cek build logs di platform deployment
- Test build lokal: `npm run build`

---

## 📝 Checklist Deployment

Sebelum deploy, pastikan:

- [ ] Repository sudah di-push ke GitHub
- [ ] Build lokal berhasil (`npm run build`)
- [ ] Auth0 application sudah dibuat
- [ ] Environment variables sudah siap (Domain, Client ID, Audience)
- [ ] Sudah siap update Auth0 URLs dengan production domain
- [ ] Sudah pilih platform deployment (Vercel/Netlify/Cloudflare)
- [ ] Sudah siap untuk testing setelah deploy

Setelah deploy:

- [ ] Update Auth0 URLs dengan production domain
- [ ] Set environment variables di platform deployment
- [ ] Redeploy aplikasi (jika perlu)
- [ ] Test login flow
- [ ] Test MFA flow
- [ ] Test protected routes
- [ ] Cek browser console untuk errors

---

## 🎉 Selesai!

Setelah semua langkah selesai, aplikasi Anda sudah live di cloud! 🚀

Jika ada pertanyaan atau masalah, cek section Troubleshooting di atas atau buat issue di repository.

