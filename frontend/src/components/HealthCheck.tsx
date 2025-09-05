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
        return 'text-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return '✅'
      case 'degraded':
        return '⚠️'
      case 'unhealthy':
        return '❌'
      default:
        return '❓'
    }
  }

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Service Status</h3>
      
      <div className="space-y-3">
        {/* Frontend Status */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Frontend</span>
          <div className="flex items-center space-x-2">
            <span>✅</span>
            <span className="text-green-600">Healthy</span>
          </div>
        </div>

        {/* Backend Status */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Backend API</span>
          <div className="flex items-center space-x-2">
            {isLoading ? (
              <>
                <span>🔄</span>
                <span className="text-gray-600">Checking...</span>
              </>
            ) : error ? (
              <>
                <span>❌</span>
                <span className="text-red-600">Offline</span>
              </>
            ) : (
              <>
                <span>{getStatusIcon(backendHealth?.status || 'unknown')}</span>
                <span className={getStatusColor(backendHealth?.status || 'unknown')}>
                  {backendHealth?.status === 'healthy' ? 'Healthy' : 'Issues'}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Database Status */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Database</span>
          <div className="flex items-center space-x-2">
            <span>⏳</span>
            <span className="text-gray-600">Pending Setup</span>
          </div>
        </div>
      </div>

      {backendHealth && (
        <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
          API Version: {backendHealth.version || 'Unknown'}
        </div>
      )}
    </div>
  )
}