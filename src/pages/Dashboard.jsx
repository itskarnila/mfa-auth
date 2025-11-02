import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-indigo-900 mb-2">
              Status Autentikasi
            </h2>
            <p className="text-green-600 font-medium">
              ✓ Terautentikasi dengan MFA
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              Level Keamanan
            </h2>
            <p className="text-blue-600 font-medium">
              🔒 Tinggi (Multi-Factor Enabled)
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Informasi Sesi
          </h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Email:</span> {user?.email}
            </p>
            {user?.email_verified && (
              <p className="text-gray-700">
                <span className="font-medium">Email Verified:</span>{" "}
                <span className="text-green-600">✓ Verified</span>
              </p>
            )}
            {user?.sub && (
              <p className="text-gray-700">
                <span className="font-medium">User ID:</span> {user.sub}
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">
            💡 Tentang MFA
          </h3>
          <p className="text-yellow-800">
            Multi-Factor Authentication (MFA) telah diaktifkan untuk akun Anda.
            Ini berarti setiap kali Anda login, Anda akan diminta untuk
            verifikasi identitas Anda melalui metode tambahan (seperti kode dari
            aplikasi authenticator atau SMS), memberikan lapisan keamanan ekstra
            untuk melindungi akun Anda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
