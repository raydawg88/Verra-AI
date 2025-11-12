import { useState } from 'react'
import { Theme } from '@radix-ui/themes'
import MIRADashboard from './pages/MIRADashboard'
import ConsentPage from './pages/ConsentPage'
import AIDiscoveryPage from './components/AIDiscoveryPage'
import './App.css'

function App() {
  // Flow state: 'dashboard' → 'consent' → 'ai-beta'
  const [currentView, setCurrentView] = useState('dashboard')

  const handleNavigateToConsent = () => {
    setCurrentView('consent')
  }

  const handleAcceptConsent = () => {
    setCurrentView('ai-beta')
  }

  const handleDeclineConsent = () => {
    setCurrentView('dashboard')
  }

  const handleBackToDashboard = () => {
    setCurrentView('dashboard')
  }

  return (
    <Theme
      accentColor="indigo"
      grayColor="slate"
      radius="large"
      scaling="100%"
    >
      {currentView === 'dashboard' && (
        <MIRADashboard onNavigateToConsent={handleNavigateToConsent} />
      )}

      {currentView === 'consent' && (
        <ConsentPage
          onAccept={handleAcceptConsent}
          onDecline={handleDeclineConsent}
        />
      )}

      {currentView === 'ai-beta' && (
        <AIDiscoveryPage onBackToDashboard={handleBackToDashboard} />
      )}
    </Theme>
  )
}

export default App
