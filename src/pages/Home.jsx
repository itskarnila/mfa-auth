import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center animate-fade-in">
        {/* Auth0 Branding */}
        <div className="mb-8 flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-gray-700">Auth0</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent mb-6 animate-slide-up">
          Multi-Factor Authentication
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
          Penerapan Multi-Factor Authentication (MFA) pada Aplikasi Cloud
          Menggunakan Auth0 Free Tier
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Implementasi MFA menggunakan Auth0 Free Tier. Dapatkan keamanan
          tambahan dengan autentikasi dua faktor untuk melindungi akun Anda.
          Dikembangkan menggunakan Auth0 Free Tier.
        </p>

        {!isAuthenticated && (
          <div className="space-y-6 animate-scale-in">
            <button
              onClick={() => loginWithRedirect()}
              className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-12 py-5 rounded-xl text-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <svg
                  className="w-6 h-6 transition-transform group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Mulai dengan Login</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
            <p className="text-sm text-gray-500 mt-4">
              🔒 Login aman dengan OAuth 2.0 dan OpenID Connect
            </p>
          </div>
        )}

        <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
              🔒
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Secure Login
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Login yang aman dengan OAuth 2.0 dan OpenID Connect melalui Auth0
              - standar industri untuk autentikasi modern
            </p>
          </div>
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
              🛡️
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              MFA Protection
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Perlindungan ekstra dengan Multi-Factor Authentication untuk
              keamanan maksimal dan perlindungan dari akses tidak sah
            </p>
          </div>
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
              ☁️
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Cloud Ready
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Siap digunakan untuk aplikasi cloud dengan skalabilitas tinggi dan
              performa optimal
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl text-left border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Fitur Utama
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start group">
              <span className="text-green-500 mr-3 text-xl group-hover:scale-125 transition-transform">
                ✓
              </span>
              <span className="text-lg">
                Autentikasi pengguna dengan Auth0 - Platform terpercaya
              </span>
            </li>
            <li className="flex items-start group">
              <span className="text-green-500 mr-3 text-xl group-hover:scale-125 transition-transform">
                ✓
              </span>
              <span className="text-lg">
                Multi-Factor Authentication (MFA) support dengan berbagai metode
              </span>
            </li>
            <li className="flex items-start group">
              <span className="text-green-500 mr-3 text-xl group-hover:scale-125 transition-transform">
                ✓
              </span>
              <span className="text-lg">
                Protected routes dengan React Router untuk keamanan optimal
              </span>
            </li>
            <li className="flex items-start group">
              <span className="text-green-500 mr-3 text-xl group-hover:scale-125 transition-transform">
                ✓
              </span>
              <span className="text-lg">
                Profile management yang intuitif dan mudah digunakan
              </span>
            </li>
            <li className="flex items-start group">
              <span className="text-green-500 mr-3 text-xl group-hover:scale-125 transition-transform">
                ✓
              </span>
              <span className="text-lg">
                UI modern dengan Tailwind CSS dan animasi halus
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
