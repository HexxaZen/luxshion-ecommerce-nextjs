'use client';

import { AuthComponents } from '../generalComponents/authComponents';
import { useAppContext } from '../context/AppContext';

export default function AuthPage() {
  const { auth } = useAppContext();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-lg">
        <AuthComponents />

        {auth.user && (
          <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Anda sudah login
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {auth.user.name} ({auth.user.role})
            </p>
            <button
              onClick={auth.logout}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
