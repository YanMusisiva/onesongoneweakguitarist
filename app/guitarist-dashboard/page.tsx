'use client';
export default function GuitaristDashboard() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Bienvenue sur le dashboard Guitarist !
        </h1>
        {/* Section Présentation */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Présentation de votre travail</h2>
          <div className="bg-blue-50 rounded-lg p-4 shadow-inner">
            <p className="text-gray-700">
              Ici, vous pouvez présenter votre parcours, vos styles de jeu, vos expériences ou vos dernières réalisations. 
              Mettez en avant ce qui vous rend unique en tant que guitariste !
            </p>
          </div>
        </section>
        {/* Section Chansons demandées */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Chansons demandées par les learners</h2>
          <div className="bg-blue-50 rounded-lg p-4 shadow-inner">
            <ul className="list-disc pl-5 text-gray-700">
              <li>Shape of You - Ed Sheeran</li>
              <li>Let It Be - The Beatles</li>
              <li>Wonderwall - Oasis</li>
              {/* Remplace par des données dynamiques si besoin */}
            </ul>
          </div>
        </section>
        {/* Section Envoyer un mail */}
        <section className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Envoyer votre travail</h2>
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition mb-2"
            onClick={() => window.location.href = 'mailto:contact@onesong1weakguitar.com'}
          >
            Envoyer mon travail par mail
          </button>
          <span className="text-gray-500 text-sm">Cliquez pour nous envoyer vos enregistrements ou vos retours.</span>
        </section>
      </div>
      <footer className="mt-8 text-gray-400 text-sm text-center">
        © 2025 One Song, One Weak Guitar. Tous droits réservés.
      </footer>
    </main>
  );
}