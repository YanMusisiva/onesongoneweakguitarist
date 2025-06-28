'use client';

export default function LearnerDashboard() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-5xl w-full border border-yellow-300">
        <h1 className="text-4xl font-extrabold text-yellow-700 mb-8 text-center tracking-tight">
          Bienvenue sur votre espace d&apos;apprentissage 🎸
        </h1>
        {/* Section Présentation */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <span className="inline-block bg-yellow-400 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" />
              </svg>
            </span>
            <h2 className="text-2xl font-bold text-yellow-800">Présentation</h2>
          </div>
          <div className="bg-yellow-50 rounded-lg p-5 shadow-inner border border-yellow-200">
            <p className="text-gray-700 text-lg">
              Retrouvez ici toutes vos formations et chansons à apprendre. Suivez vos progrès, découvrez de nouveaux morceaux et demandez des formations personnalisées, comme sur Amazon pour les livres ou les cours !
            </p>
          </div>
        </section>
        {/* Section Chansons prêtes à être apprises */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <span className="inline-block bg-yellow-400 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </span>
            <h2 className="text-2xl font-bold text-yellow-800">Formations disponibles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Carte de formation */}
            <div className="bg-white border border-yellow-200 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <img src="/standbyme.jpg" alt="Stand by Me" className="w-24 h-24 object-cover rounded mb-3" />
              <h3 className="font-semibold text-lg text-yellow-700 mb-1">Stand by Me</h3>
              <span className="text-gray-600 mb-2">Ben E. King</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-2">Formation disponible</span>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition text-sm">
                Voir la formation
              </button>
            </div>
            <div className="bg-white border border-yellow-200 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <img src="/knockin.jpg" alt="Knockin' on Heaven's Door" className="w-24 h-24 object-cover rounded mb-3" />
              <h3 className="font-semibold text-lg text-yellow-700 mb-1">Knockin&apos; on Heaven&apos;s Door</h3>
              <span className="text-gray-600 mb-2">Bob Dylan</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-2">Formation disponible</span>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition text-sm">
                Voir la formation
              </button>
            </div>
            <div className="bg-white border border-yellow-200 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <img src="/jetepromets.jpg" alt="Je te promets" className="w-24 h-24 object-cover rounded mb-3" />
              <h3 className="font-semibold text-lg text-yellow-700 mb-1">Je te promets</h3>
              <span className="text-gray-600 mb-2">Johnny Hallyday</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-2">Formation disponible</span>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition text-sm">
                Voir la formation
              </button>
            </div>
          </div>
        </section>
        {/* Section Demande de formation */}
        <section className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <span className="inline-block bg-yellow-400 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" />
              </svg>
            </span>
            <h2 className="text-2xl font-bold text-yellow-800">Demander une formation particulière</h2>
          </div>
          <button
            className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-yellow-600 transition mb-2"
            onClick={() => window.location.href = 'mailto:contact@onesong1weakguitar.com?subject=Demande%20de%20formation%20guitare'}
          >
            Demander une formation
          </button>
          <span className="text-gray-500 text-sm">Cliquez pour nous envoyer votre demande de chanson ou de formation personnalisée.</span>
        </section>
      </div>
      <footer className="mt-8 text-gray-400 text-sm text-center">
        © 2025 One Song, One Weak Guitar. Tous droits réservés.
      </footer>
    </main>
  );
}