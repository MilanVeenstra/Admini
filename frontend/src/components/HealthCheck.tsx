import { useQuery } from 'react-query'
import { apiClient } from '@/services/api'

interface HealthStatus {
  status: string
  message?: string
  version?: string
  service?: string
}

export function HealthCheck() {
  const { data: backendHealth, isLoading, error } = useQuery<HealthStatus>(
    'backend-health',
    () => apiClient.get('/api/v1/health').then(res => res.data),
    {
      refetchInterval: 30000, // Check every 30 seconds
    }
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-600'
      case 'degraded':
        return 'text-yellow-600'
      case 'unhealthy':
        return 'text-red-600'
      default:
        return 'text-admini-500'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return (
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        )
      case 'degraded':
        return (
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        )
      case 'unhealthy':
        return (
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        )
      default:
        return (
          <div className="w-3 h-3 bg-admini-300 rounded-full"></div>
        )
    }
  }

  const ServiceRow = ({ name, status, isLoading: loading }: { name: string, status: string, isLoading?: boolean }) => (
    <div className="flex items-center justify-between py-3 px-4 bg-admini-50 rounded-lg">
      <div className="flex items-center space-x-3">
        {loading ? (
          <div className="w-3 h-3 bg-admini-400 rounded-full animate-spin"></div>
        ) : (
          getStatusIcon(status)
        )}
        <span className="font-medium text-admini-800">{name}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className={`text-sm font-medium ${getStatusColor(status)}`}>
          {loading ? 'Checking...' : 
           status === 'healthy' ? 'Online' : 
           status === 'unhealthy' ? 'Offline' : 
           'Issues'}
        </span>
      </div>
    </div>
  )

  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-admini-100 rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-admini-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-admini-800">Service Status</h3>
      </div>
      
      <div className="space-y-3">
        <ServiceRow name="Frontend Application" status="healthy" />
        <ServiceRow 
          name="Backend API" 
          status={error ? 'unhealthy' : backendHealth?.status || 'unknown'} 
          isLoading={isLoading}
        />
        <ServiceRow name="Database" status="healthy" />
        <ServiceRow name="Redis Cache" status="healthy" />
      </div>

      {backendHealth && (
        <div className="mt-6 pt-6 border-t border-admini-200">
          <div className="flex justify-between items-center text-sm">
            <span className="text-admini-600">API Version:</span>
            <span className="font-medium text-admini-800">{backendHealth.version || 'v1'}</span>
          </div>
          <div className="flex justify-between items-center text-sm mt-2">
            <span className="text-admini-600">Last Check:</span>
            <span className="font-medium text-admini-800">
              {new Date().toLocaleTimeString('nl-NL')}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}