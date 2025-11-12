import { useState } from 'react'
import { Box, Flex, Badge, Button, Heading, Text } from '@radix-ui/themes'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import SidebarNav from './SidebarNav'
import ChatPanel from './ChatPanel'
import OverviewPage from '../pages/OverviewPage'

export default function AIDiscoveryPage({ onBackToDashboard }) {
  const [activePage, setActivePage] = useState('overview')

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
            <Badge color="indigo" variant="soft" size="2">AI BETA</Badge>
          </Flex>
          <Button variant="ghost" size="2" onClick={onBackToDashboard}>
            <ArrowLeftIcon />
            Back to Classic View
          </Button>
        </Flex>
      </Box>

      {/* Main Content - Full Width 3 Column Layout */}
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
            <SidebarNav activePage={activePage} onNavigate={setActivePage} />
          </Box>

          {/* Right Side Container - 90% (Welcome Section + Content + Chat) */}
          <Flex direction="column" gap="6" style={{ flex: 1 }}>
            {/* Welcome Section - Spans columns 2 & 3 */}
            <Box>
              <Heading size="8" mb="3" style={{ fontWeight: 700, color: 'var(--gray-12)' }}>
                Welcome back, Matt
              </Heading>
              <Text size="5" style={{ color: 'var(--gray-11)' }}>
                We found <strong style={{ color: 'var(--gray-12)' }}>5 things</strong> you should take a look at with the last round of analysis.
              </Text>
            </Box>

            {/* Content + Chat Row */}
            <Flex gap="6" style={{ alignItems: 'flex-start' }}>
              {/* Main Content - 60% */}
              <Box style={{
                flex: '1 1 60%'
              }}>
                <OverviewPage />
              </Box>

              {/* Chat Panel - 30% */}
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
