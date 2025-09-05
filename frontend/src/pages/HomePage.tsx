import { HealthCheck } from '@/components/HealthCheck'

export function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welkom bij Dutch AI Accounting
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-gedreven boekhoud- en administratiesysteem speciaal ontworpen voor Nederlandse ondernemers.
          Automatiseer je boekhouding, blijf compliant met Nederlandse BTW-regels, en krijg real-time financiële inzichten.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="card">
          <h3 className="text-lg font-semibold text-dutch-blue-700 mb-2">
            📄 Document Verwerking
          </h3>
          <p className="text-gray-600">
            Upload bonnetjes en facturen. Onze AI extraheert automatisch alle belangrijke gegevens.
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-dutch-blue-700 mb-2">
            🏦 Bank Integratie
          </h3>
          <p className="text-gray-600">
            Automatische synchronisatie met je bankrekening via PSD2. Real-time transacties.
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-dutch-blue-700 mb-2">
            📊 BTW Compliance
          </h3>
          <p className="text-gray-600">
            Automatische BTW-berekening volgens Nederlandse regels. Eenvoudig aangifte doen.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">System Status</h2>
        <HealthCheck />
      </div>
    </div>
  )
}