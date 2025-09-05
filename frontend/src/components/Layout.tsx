import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-admini-50">
      <header className="bg-white shadow-sm border-b border-admini-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <img 
                src="/admini-logo.png" 
                alt="Admini Logo" 
                className="h-8 w-auto"
              />
              <div className="hidden sm:block h-6 w-px bg-admini-300"></div>
              <span className="text-sm text-admini-600 hidden sm:block font-medium">
                AI-driven Dutch Accounting
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a 
                href="/" 
                className="text-admini-600 hover:text-admini-800 font-medium transition-colors duration-200"
              >
                Dashboard
              </a>
              <a 
                href="/health" 
                className="text-admini-600 hover:text-admini-800 font-medium transition-colors duration-200"
              >
                Status
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
      
      <footer className="bg-white border-t border-admini-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/admini-logo.png" 
                alt="Admini" 
                className="h-6 w-auto opacity-60"
              />
              <span className="text-admini-700 font-semibold">Admini</span>
            </div>
            <p className="text-center text-admini-500 text-sm">
              © 2024 Admini - Professional accounting made simple for Dutch entrepreneurs
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}