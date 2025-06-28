'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [role, setRole] = useState('learner');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const endpoint = role === 'guitarist' ? '/api/guitarist/login' : '/api/learner/login';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Erreur de connexion');
        return;
      }

      // Stocke le token JWT (ici dans localStorage, à sécuriser en prod)
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', role);

      // Redirige selon le rôle
      if (role === 'guitarist') {
        router.push('/guitarist-dashboard');
      } else {
        router.push('/learner-dashboard');
      }
    } catch (err) {
      setError('Erreur serveur' + (err instanceof Error ? `: ${err.message}` : ''));
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Connexion</h2>
        <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="border rounded px-4 py-2 w-full text-black"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="border rounded px-4 py-2 w-full text-black"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className="flex space-x-4 items-center">
            <label>
              <input
              className='text-blue-600'
                type="radio"
                name="role"
                value="learner"
                checked={role === 'learner'}
                onChange={() => setRole('learner')}
              />{' '}
              Learner
            </label>
            <label>
              <input
              className='text-blue-600'
                type="radio"
                name="role"
                value="guitarist"
                checked={role === 'guitarist'}
                onChange={() => setRole('guitarist')}
              />{' '}
              Guitarist
            </label>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
            Se connecter
          </button>
          {error && <div className="text-red-500 text-sm">{error}</div>}
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Pas encore de compte ?{' '}
          <Link href="/signup" className="text-blue-600 hover:underline">
            S&apos;inscrire
          </Link>
        </p>
      </div>
    </main>
  );
}