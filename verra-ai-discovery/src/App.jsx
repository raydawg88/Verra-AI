import { useState } from 'react'
import { Theme } from '@radix-ui/themes'
import ProductSelectionPage from './pages/ProductSelectionPage'
import MIRADashboard from './pages/MIRADashboard'
import ConsentPage from './pages/ConsentPage'
import AIDiscoveryPage from './components/AIDiscoveryPage'
import AIDiscoveryPageLite from './components/AIDiscoveryPageLite'
import AILoadingScreen from './components/AILoadingScreen'
import './App.css'

function App() {
  // Product flow type: 'full' or 'lite'
  const [productFlow, setProductFlow] = useState(null)

  // View state depends on which flow is selected
  const [currentView, setCurrentView] = useState('product-selection')

  // Track which MIRA dashboard section to show (for Lite flow)
  const [dashboardSection, setDashboardSection] = useState(null)

  // Product Selection Handlers
  const handleSelectFull = () => {
    setProductFlow('full')
    setCurrentView('dashboard')
  }

  const handleSelectLite = () => {
    setProductFlow('lite')
    setCurrentView('consent-lite')
  }

  // Full Flow Handlers (dashboard → consent → loading → ai-beta)
  const handleNavigateToConsent = () => {
    setCurrentView('consent')
  }

  const handleAcceptConsent = () => {
    setCurrentView('loading')
  }

  const handleLoadingComplete = () => {
    setCurrentView('ai-beta')
  }

  const handleDeclineConsent = () => {
    setCurrentView('dashboard')
  }

  const handleBackToDashboard = () => {
    setCurrentView('dashboard')
  }

  // Lite Flow Handlers (consent → loading → ai-insights)
  const handleAcceptConsentLite = () => {
    setCurrentView('loading-lite')
  }

  const handleLoadingCompleteLite = () => {
    setCurrentView('ai-insights')
  }

  const handleDeclineConsentLite = () => {
    setCurrentView('product-selection')
  }

  const handleBackToMIRADashboard = (section) => {
    setDashboardSection(section)
    setCurrentView('dashboard-lite')
  }

  const handleBackToAIInsights = () => {
    setCurrentView('ai-insights')
  }

  return (
    <Theme
      accentColor="indigo"
      grayColor="slate"
      radius="large"
      scaling="100%"
    >
      {/* Product Selection Page */}
      {currentView === 'product-selection' && (
        <ProductSelectionPage
          onSelectFull={handleSelectFull}
          onSelectLite={handleSelectLite}
        />
      )}

      {/* FULL FLOW: dashboard → consent → ai-beta */}
      {productFlow === 'full' && currentView === 'dashboard' && (
        <MIRADashboard onNavigateToConsent={handleNavigateToConsent} />
      )}

      {productFlow === 'full' && currentView === 'consent' && (
        <ConsentPage
          onAccept={handleAcceptConsent}
          onDecline={handleDeclineConsent}
        />
      )}

      {productFlow === 'full' && currentView === 'loading' && (
        <AILoadingScreen onComplete={handleLoadingComplete} />
      )}

      {productFlow === 'full' && currentView === 'ai-beta' && (
        <AIDiscoveryPage onBackToDashboard={handleBackToDashboard} />
      )}

      {/* LITE FLOW: consent → loading → ai-insights ↔ mira dashboard */}
      {productFlow === 'lite' && currentView === 'consent-lite' && (
        <ConsentPage
          onAccept={handleAcceptConsentLite}
          onDecline={handleDeclineConsentLite}
        />
      )}

      {productFlow === 'lite' && currentView === 'loading-lite' && (
        <AILoadingScreen onComplete={handleLoadingCompleteLite} />
      )}

      {productFlow === 'lite' && currentView === 'ai-insights' && (
        <AIDiscoveryPageLite onNavigateToMIRA={handleBackToMIRADashboard} />
      )}

      {productFlow === 'lite' && currentView === 'dashboard-lite' && (
        <MIRADashboard
          section={dashboardSection}
          onNavigateToAI={handleBackToAIInsights}
        />
      )}
    </Theme>
  )
}

export default App
