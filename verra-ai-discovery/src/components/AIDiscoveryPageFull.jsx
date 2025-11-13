import { useState, useEffect } from 'react'
import { Box, Flex, Badge, Heading, Text, Button } from '@radix-ui/themes'
import SidebarNavFull from './SidebarNavFull'
import ChatPanel from './ChatPanel'
import HomePage from '../pages/HomePage'
import OverviewPage from '../pages/OverviewPage'
import AnomaliesPage from '../pages/AnomaliesPage'
import PatternsPage from '../pages/PatternsPage'
import ForecastingPage from '../pages/ForecastingPage'
import TollingOverviewPageFull from '../pages/full/TollingOverviewPageFull'
import TollingDeepDivePageFull from '../pages/full/TollingDeepDivePageFull'
import ViolationsOverviewPageFull from '../pages/full/ViolationsOverviewPageFull'
import ViolationsDeepDivePageFull from '../pages/full/ViolationsDeepDivePageFull'
import TransactionsPageFull from '../pages/full/TransactionsPageFull'
import SavingsPageFull from '../pages/full/SavingsPageFull'
import InsightDetailView from './InsightDetailView'
import { insightDetails } from '../data/insightDetails'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function AIDiscoveryPageFull({ onNavigateToClassic }) {
  const [activePage, setActivePage] = useState('overview')
  const [activeDetailView, setActiveDetailView] = useState(null)

  // Scroll to top whenever page or detail view changes
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [activePage, activeDetailView])

  // Handle navigation
  const handleNavigation = (pageId) => {
    setActivePage(pageId)
    setActiveDetailView(null)
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
          title: 'Welcome back, Jadine',
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
      case 'tolling-overview':
        return {
          title: 'Tolling Overview',
          subtitle: 'High-level toll spending metrics and insights across your fleet.'
        }
      case 'tolling-deep-dive':
        return {
          title: 'Tolling Deep Dive',
          subtitle: 'Detailed toll transaction analysis and route efficiency insights.'
        }
      case 'violations-overview':
        return {
          title: 'Violations Overview',
          subtitle: 'Fleet-wide violation metrics and driver safety performance.'
        }
      case 'violations-deep-dive':
        return {
          title: 'Violations Deep Dive',
          subtitle: 'Detailed violation analysis and driver-specific performance data.'
        }
      case 'transactions':
        return {
          title: 'Transactions',
          subtitle: 'Search and analyze your complete transaction history.'
        }
      case 'savings':
        return {
          title: 'Savings Opportunities',
          subtitle: 'Ranked optimization opportunities with ROI analysis.'
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
      case 'tolling-overview':
        return <TollingOverviewPageFull onOpenDetail={handleOpenDetail} />
      case 'tolling-deep-dive':
        return <TollingDeepDivePageFull onOpenDetail={handleOpenDetail} />
      case 'violations-overview':
        return <ViolationsOverviewPageFull onOpenDetail={handleOpenDetail} />
      case 'violations-deep-dive':
        return <ViolationsDeepDivePageFull onOpenDetail={handleOpenDetail} />
      case 'transactions':
        return <TransactionsPageFull onOpenDetail={handleOpenDetail} />
      case 'savings':
        return <SavingsPageFull onOpenDetail={handleOpenDetail} />
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
            <Button
              variant="outline"
              size="2"
              color="green"
              onClick={onNavigateToClassic}
              style={{
                marginLeft: '16px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              <ArrowBackIcon style={{ width: 16, height: 16, marginRight: '4px' }} />
              Switch to Classic View
            </Button>
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
            <SidebarNavFull activePage={activePage} onNavigate={handleNavigation} />
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

              {/* Chat Panel - 30% - Show on ALL pages */}
              <Box style={{
                flex: '0 0 30%',
                minWidth: '400px',
                maxWidth: '500px',
                position: 'sticky',
                top: '120px'
              }}>
                <ChatPanel activePage={activePage} />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
