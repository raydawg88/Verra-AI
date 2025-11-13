import { Box, Flex, Heading, Text, Card, Button } from '@radix-ui/themes'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import BoltIcon from '@mui/icons-material/Bolt'
import CheckIcon from '@mui/icons-material/Check'

export default function ProductSelectionPage({ onSelectFull, onSelectLite }) {
  return (
    <Box style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(159, 201, 8, 0.08) 0%, rgba(99, 201, 218, 0.12) 50%, rgba(255, 237, 160, 0.06) 100%)',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px'
    }}>
      <Flex direction="column" gap="6" style={{ maxWidth: '1200px', width: '100%' }}>
        {/* Header */}
        <Box style={{ textAlign: 'center', marginBottom: '24px' }}>
          <img
            src="https://www.verramobility.com/wp-content/uploads/2022/06/verra_logo_notagline.png"
            alt="Verra"
            style={{ height: '64px', marginBottom: '24px' }}
          />
          <Heading size="9" mb="3" style={{ fontWeight: 700, color: 'var(--gray-12)' }}>
            Choose Your AI Experience
          </Heading>
          <Text size="5" style={{ color: 'var(--gray-11)' }}>
            Select how you'd like to integrate AI-powered insights into your workflow
          </Text>
        </Box>

        {/* Product Cards */}
        <Flex gap="6" style={{ justifyContent: 'center' }}>
          {/* Full Experience */}
          <Card style={{
            padding: '48px',
            flex: '1',
            maxWidth: '500px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid var(--gray-6)',
            position: 'relative',
            overflow: 'hidden'
          }}
          className="product-card"
          onClick={onSelectFull}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(99, 102, 241, 0.2)'
            e.currentTarget.style.borderColor = 'var(--indigo-6)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.borderColor = 'var(--gray-6)'
          }}>
            {/* Badge */}
            <Box style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              padding: '6px 12px',
              background: 'linear-gradient(135deg, var(--indigo-9), var(--purple-9))',
              color: 'white',
              borderRadius: 'var(--radius-3)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Complete
            </Box>

            <Flex direction="column" gap="4" align="center" style={{ textAlign: 'center' }}>
              <Box style={{
                width: 80,
                height: 80,
                borderRadius: 'var(--radius-4)',
                background: 'linear-gradient(135deg, var(--indigo-3) 0%, var(--purple-3) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--indigo-6)'
              }}>
                <RocketLaunchIcon style={{ width: 40, height: 40, color: 'var(--indigo-11)' }} />
              </Box>

              <Box>
                <Heading size="6" mb="2">Full AI Experience</Heading>
                <Text size="2" style={{ color: 'var(--gray-11)', lineHeight: 1.6 }}>
                  Complete dashboard reimagined with AI-first design. Modern interface with built-in AI insights and conversational analytics.
                </Text>
              </Box>

              <Box style={{ width: '100%' }}>
                <Text size="2" weight="bold" style={{ color: 'var(--gray-12)', display: 'block', marginBottom: '12px' }}>
                  What you get:
                </Text>
                <Flex direction="column" gap="2" align="start">
                  <Text size="2" style={{ color: 'var(--gray-11)' }}><CheckIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Full dashboard redesign</Text>
                  <Text size="2" style={{ color: 'var(--gray-11)' }}><CheckIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />AI-powered insights</Text>
                  <Text size="2" style={{ color: 'var(--gray-11)' }}><CheckIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Conversational analytics</Text>
                  <Text size="2" style={{ color: 'var(--gray-11)' }}><CheckIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Discovery cards & patterns</Text>
                  <Text size="2" style={{ color: 'var(--gray-11)' }}><CheckIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Modern premium interface</Text>
                </Flex>
              </Box>

              <Button size="3" style={{
                width: '100%',
                background: 'linear-gradient(135deg, var(--indigo-9), var(--purple-9))',
                cursor: 'pointer'
              }}>
                Try Full Experience
              </Button>
            </Flex>
          </Card>

          {/* Lite Experience */}
          <Card style={{
            padding: '48px',
            flex: '1',
            maxWidth: '500px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid var(--gray-6)',
            position: 'relative',
            overflow: 'hidden'
          }}
          className="product-card"
          onClick={onSelectLite}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(159, 201, 8, 0.2)'
            e.currentTarget.style.borderColor = '#9fc908'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.borderColor = 'var(--gray-6)'
          }}>
            {/* Badge */}
            <Box style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              padding: '6px 12px',
              background: '#9fc908',
              color: 'white',
              borderRadius: 'var(--radius-3)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Supplement
            </Box>

            <Flex direction="column" gap="4" align="center" style={{ textAlign: 'center' }}>
              <Box style={{
                width: 80,
                height: 80,
                borderRadius: 'var(--radius-4)',
                background: 'linear-gradient(135deg, rgba(159, 201, 8, 0.1) 0%, rgba(99, 201, 218, 0.1) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #9fc908'
              }}>
                <BoltIcon style={{ width: 40, height: 40, color: '#7da706' }} />
              </Box>

              <Box>
                <Heading size="6" mb="2">Lite AI Add-On</Heading>
                <Text size="2" style={{ color: 'var(--gray-11)', lineHeight: 1.6 }}>
                  Keep your existing dashboard, add a new AI insights page. Quick integration, minimal change to current workflow.
                </Text>
              </Box>

              <Box style={{ width: '100%' }}>
                <Text size="2" weight="bold" style={{ color: 'var(--gray-12)', display: 'block', marginBottom: '12px' }}>
                  What you get:
                </Text>
                <Flex direction="column" gap="2" align="start">
                  <Text size="2" style={{ color: 'var(--gray-11)' }}><CheckIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Keep existing dashboard</Text>
                  <Text size="2" style={{ color: 'var(--gray-11)' }}><CheckIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />New AI insights page</Text>
                  <Text size="2" style={{ color: 'var(--gray-11)' }}><CheckIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Conversational analytics</Text>
                  <Text size="2" style={{ color: 'var(--gray-11)' }}><CheckIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Discovery cards & patterns</Text>
                  <Text size="2" style={{ color: 'var(--gray-11)' }}><CheckIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Easy to adopt</Text>
                </Flex>
              </Box>

              <Button size="3" style={{
                width: '100%',
                background: '#9fc908',
                cursor: 'pointer'
              }}>
                Try Lite Add-On
              </Button>
            </Flex>
          </Card>
        </Flex>

        {/* Footer Note */}
        <Text size="2" style={{ textAlign: 'center', color: 'var(--gray-10)', marginTop: '24px' }}>
          Both experiences include AI-powered conversational analytics. Choose based on your integration preference.
        </Text>
      </Flex>
    </Box>
  )
}
