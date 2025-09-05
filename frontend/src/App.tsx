import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { HomePage } from '@/pages/HomePage'
import { HealthCheck } from '@/components/HealthCheck'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health" element={<HealthCheck />} />
      </Routes>
    </Layout>
  )
}

export default App