import { HealthCheck } from '@/components/HealthCheck'

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/admini-logo.png" 
            alt="Admini" 
            className="h-16 w-auto"
          />
        </div>
        <h1 className="text-5xl font-bold text-admini-900 mb-6">
          Welkom bij <span className="text-admini-700">Admini</span>
        </h1>
        <p className="text-xl text-admini-600 max-w-4xl mx-auto leading-relaxed">
          De slimste manier om je administratie te beheren. 
          AI-gedreven boekhoudkundige oplossingen speciaal ontworpen voor Nederlandse ondernemers.
          <br />
          <span className="font-medium text-admini-700">
            Automatisch, compliant, en altijd up-to-date.
          </span>
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            Start je gratis trial
          </button>
          <button className="btn-secondary">
            Bekijk demo
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card group hover:border-admini-400 transition-colors">
          <div className="w-12 h-12 bg-admini-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-admini-200 transition-colors">
            <svg className="w-6 h-6 text-admini-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-admini-800 mb-3">
            Slimme Document Herkenning
          </h3>
          <p className="text-admini-600 leading-relaxed">
            Upload bonnetjes en facturen. Onze AI extraheert automatisch alle belangrijke gegevens en categoriseert transacties.
          </p>
        </div>
        
        <div className="card group hover:border-admini-400 transition-colors">
          <div className="w-12 h-12 bg-admini-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-admini-200 transition-colors">
            <svg className="w-6 h-6 text-admini-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-admini-800 mb-3">
            Bank Integratie
          </h3>
          <p className="text-admini-600 leading-relaxed">
            Automatische synchronisatie met alle Nederlandse banken via PSD2. Real-time transacties en reconciliatie.
          </p>
        </div>
        
        <div className="card group hover:border-admini-400 transition-colors">
          <div className="w-12 h-12 bg-admini-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-admini-200 transition-colors">
            <svg className="w-6 h-6 text-admini-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-admini-800 mb-3">
            BTW Compliance
          </h3>
          <p className="text-admini-600 leading-relaxed">
            Automatische BTW-berekening volgens Nederlandse regelgeving. Eenvoudige aangifte met één klik.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="admini-gradient rounded-2xl p-8 text-white">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-admini-200">Automatisatie</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">5 min</div>
            <div className="text-admini-200">Setup tijd</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-admini-200">BTW Compliant</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-admini-200">AI Assistent</div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div>
        <h2 className="text-3xl font-bold text-admini-900 mb-8 text-center">System Status</h2>
        <div className="max-w-3xl mx-auto">
          <HealthCheck />
        </div>
      </div>
    </div>
  )
}