import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full flex flex-col items-center">
        <Image width={100} height={100} src="/guitar-logo.svg" alt="Logo guitare" className="w-20 h-20 mb-4" />
        <h1 className="text-4xl font-bold text-blue-800 mb-2">One Song, One Weak Guitar</h1>
        <p className="text-gray-700 text-center mb-6">
          Apprenez la guitare facilement, étape par étape.<br />
          Notre plateforme vous guide pour jouer vos premières chansons, même si vous débutez.<br />
          Rejoignez une communauté de passionnés et progressez à votre rythme.
        </p>
        <div className="flex space-x-4 w-full justify-center">
          <Link href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
            Se connecter
          </Link>
          <Link href="/signup" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
            S&apos;inscrire
          </Link>
        </div>
      </div>
      <footer className="mt-8 text-gray-400 text-sm">
        © 2025 One Song, One Weak Guitar. Tous droits réservés.
      </footer>
    </main>
  );
}