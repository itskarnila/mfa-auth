import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Profil Pengguna
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          {user.picture && (
            <img
              src={user.picture}
              alt={user.name || "User"}
              className="h-32 w-32 rounded-full border-4 border-indigo-500"
            />
          )}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {user.name || "User"}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Informasi Akun
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {user.email && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <p className="text-gray-900 bg-gray-50 p-2 rounded">
                    {user.email}
                  </p>
                </div>
              )}

              {user.email_verified !== undefined && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status Email
                  </label>
                  <p
                    className={`p-2 rounded ${
                      user.email_verified
                        ? "bg-green-50 text-green-700"
                        : "bg-yellow-50 text-yellow-700"
                    }`}
                  >
                    {user.email_verified
                      ? "✓ Terverifikasi"
                      : "⚠ Belum Terverifikasi"}
                  </p>
                </div>
              )}

              {user.sub && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    User ID
                  </label>
                  <p className="text-gray-900 bg-gray-50 p-2 rounded break-all">
                    {user.sub}
                  </p>
                </div>
              )}

              {user.updated_at && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Terakhir Diupdate
                  </label>
                  <p className="text-gray-900 bg-gray-50 p-2 rounded">
                    {new Date(user.updated_at).toLocaleString("id-ID")}
                  </p>
                </div>
              )}
            </div>
          </div>

          {Object.keys(user).length > 0 && (
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Data Pengguna (JSON)
              </h3>
              <pre className="bg-gray-50 p-4 rounded-lg overflow-auto text-sm">
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
