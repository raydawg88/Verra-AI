import { useState, useEffect } from 'react'
import { Box, Flex, Badge, Heading, Text } from '@radix-ui/themes'
import SidebarNav from './SidebarNav'
import ChatPanel from './ChatPanel'
import HomePage from '../pages/HomePage'
import OverviewPage from '../pages/OverviewPage'
import AnomaliesPage from '../pages/AnomaliesPage'
import PatternsPage from '../pages/PatternsPage'
import ForecastingPage from '../pages/ForecastingPage'
import InsightDetailView from './InsightDetailView'
import { insightDetails } from '../data/insightDetails'

export default function AIDiscoveryPageLite({ onNavigateToMIRA }) {
  const [activePage, setActivePage] = useState('overview')
  const [activeDetailView, setActiveDetailView] = useState(null)

  // Scroll to top whenever page or detail view changes
  useEffect(() => {
    // Scroll to top immediately (not smooth to ensure it happens)
    window.scrollTo(0, 0)
    // Also try to scroll the document element and body for better browser compatibility
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [activePage, activeDetailView])

  // When user clicks non-AI sections, go back to original MIRA dashboard
  const handleNavigation = (pageId) => {
    // AI-POWERED sections stay in this interface
    const aiSections = ['overview', 'insights', 'anomalies', 'patterns', 'forecasting']

    if (aiSections.includes(pageId)) {
      setActivePage(pageId)
      setActiveDetailView(null) // Close detail view when navigating
    } else {
      // Non-AI sections go back to original dashboard with that section
      onNavigateToMIRA(pageId)
    }
  }

  // Handle opening detail views
  const handleOpenDetail = (insightId) => {
    setActiveDetailView(insightId)
  }

  // Handle closing detail views
  const handleCloseDetail = () => {
    setActiveDetailView(null)
  }

  // Get page-specific header content
  const getPageHeader = () => {
    switch (activePage) {
      case 'overview':
        return {
          title: 'Welcome back, Matt',
          subtitle: 'AI analysis of your fleet has identified significant opportunities and urgent issues that need your attention.'
        }
      case 'insights':
        return {
          title: 'Discovery',
          subtitle: 'All insights and opportunities discovered in your fleet data.'
        }
      case 'anomalies':
        return {
          title: 'Anomaly Detection',
          subtitle: 'Unusual patterns and outliers that require your attention.'
        }
      case 'patterns':
        return {
          title: 'Pattern Analysis',
          subtitle: 'Hidden correlations and trends discovered across your fleet data.'
        }
      case 'forecasting':
        return {
          title: 'Predictive Insights',
          subtitle: 'AI-powered forecasts to help you plan ahead and prevent issues.'
        }
      default:
        return {
          title: 'AI Home',
          subtitle: 'Your fleet intelligence dashboard powered by Verra AI.'
        }
    }
  }

  // Render the appropriate page based on active selection
  const renderPage = () => {
    // If detail view is active, show it instead of the page
    if (activeDetailView && insightDetails[activeDetailView]) {
      return <InsightDetailView insight={insightDetails[activeDetailView]} onClose={handleCloseDetail} />
    }

    switch (activePage) {
      case 'overview':
        return <HomePage onOpenDetail={handleOpenDetail} onNavigate={handleNavigation} />
      case 'insights':
        return <OverviewPage onOpenDetail={handleOpenDetail} />
      case 'anomalies':
        return <AnomaliesPage onOpenDetail={handleOpenDetail} />
      case 'patterns':
        return <PatternsPage onOpenDetail={handleOpenDetail} />
      case 'forecasting':
        return <ForecastingPage onOpenDetail={handleOpenDetail} />
      default:
        return <HomePage onOpenDetail={handleOpenDetail} />
    }
  }

  const pageHeader = getPageHeader()

  return (
    <Box style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(159, 201, 8, 0.08) 0%, rgba(99, 201, 218, 0.12) 50%, rgba(255, 237, 160, 0.06) 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Top Header Bar - Full Width */}
      <Box style={{
        background: 'white',
        borderBottom: '1px solid var(--gray-4)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <Flex
          justify="between"
          align="center"
          px="6"
          py="3"
          style={{ maxWidth: '100%' }}
        >
          <Flex gap="3" align="center">
            <img
              src="https://www.verramobility.com/wp-content/uploads/2022/06/verra_logo_notagline.png"
              alt="Verra"
              style={{ height: '64px' }}
            />
            <Badge color="indigo" variant="soft" size="2" style={{ fontWeight: 700 }}>
              BETA
            </Badge>
          </Flex>
          <Flex align="center" gap="2">
            <Text size="2" style={{ color: 'var(--gray-10)', fontWeight: 500 }}>
              Powered by
            </Text>
            <img
              src="https://cdn.sanity.io/images/2p4wcjvv/production/b3e949fab126252c510e028e6fc71a735a0f62e9-987x372.png?auto=format&crop=focalpoint&fit=crop&w=2560"
              alt="Vin.li"
              style={{ height: '40px', marginLeft: '-4px' }}
            />
          </Flex>
        </Flex>
      </Box>

      {/* Main Content - 3 Column Layout with Navigation */}
      <Box px="6" py="6">
        <Flex
          gap="6"
          style={{
            maxWidth: '100%',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Navigation - 10% */}
          <Box style={{
            flex: '0 0 10%',
            minWidth: '160px',
            maxWidth: '200px',
            position: 'sticky',
            top: '120px'
          }}>
            <SidebarNav activePage={activePage} onNavigate={handleNavigation} />
          </Box>

          {/* Right Side Container - 90% (Welcome Section + Content + Chat) */}
          <Flex direction="column" gap="6" style={{ flex: 1 }}>
            {/* Welcome Section - Only show on list pages, hide on detail views */}
            {!activeDetailView && (
              <Box>
                <Heading size="8" mb="3" style={{ fontWeight: 700, color: 'var(--gray-12)' }}>
                  {pageHeader.title}
                </Heading>
                <Text size="5" style={{ color: 'var(--gray-11)' }}>
                  {pageHeader.subtitle}
                </Text>
              </Box>
            )}

            {/* Content + Chat Row */}
            <Flex gap="6" style={{ alignItems: 'flex-start' }}>
              {/* Main Content - 60% on list pages, 90% on detail views */}
              <Box style={{
                flex: activeDetailView ? '1 1 90%' : '1 1 60%'
              }}>
                {renderPage()}
              </Box>

              {/* Chat Panel - 30% - Only show on list pages, hide on detail views */}
              {!activeDetailView && (
                <Box style={{
                  flex: '0 0 30%',
                  minWidth: '400px',
                  maxWidth: '500px',
                  position: 'sticky',
                  top: '120px'
                }}>
                  <ChatPanel activePage={activePage} />
                </Box>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
