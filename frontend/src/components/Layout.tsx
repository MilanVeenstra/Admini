import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-dutch-blue-700">
                Dutch AI Accounting
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-dutch-blue-600">
                Dashboard
              </a>
              <a href="/health" className="text-gray-600 hover:text-dutch-blue-600">
                Status
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-600 text-sm">
            © 2024 Dutch AI Accounting System - Made for Dutch entrepreneurs
          </p>
        </div>
      </footer>
    </div>
  )
}