import { Box, Flex, Text } from '@radix-ui/themes'
import {
  HomeIcon,
  LightningBoltIcon,
  ExclamationTriangleIcon,
  BarChartIcon,
  StackIcon,
  RocketIcon,
  CrossCircledIcon,
  FileTextIcon,
  PersonIcon,
  CubeIcon
} from '@radix-ui/react-icons'

export default function SidebarNav({ activePage, onNavigate }) {
  const navSections = [
    {
      title: 'DASHBOARD',
      items: [
        { id: 'overview', label: 'Overview', icon: HomeIcon }
      ]
    },
    {
      title: 'TOLLING',
      items: [
        { id: 'tolling-overview', label: 'Overview', icon: BarChartIcon },
        { id: 'tolling-deep-dive', label: 'Deep Dive', icon: StackIcon },
        { id: 'tolling-outliers', label: 'Outliers', icon: ExclamationTriangleIcon }
      ]
    },
    {
      title: 'VIOLATIONS',
      items: [
        { id: 'violations-overview', label: 'Overview', icon: CrossCircledIcon },
        { id: 'violations-deep-dive', label: 'Deep Dive', icon: StackIcon },
        { id: 'violations-outliers', label: 'Outliers', icon: ExclamationTriangleIcon }
      ]
    },
    {
      title: 'FINANCES',
      items: [
        { id: 'transactions', label: 'Transactions', icon: FileTextIcon },
        { id: 'savings', label: 'Savings', icon: RocketIcon },
        { id: 'forecasting', label: 'Forecasting', icon: BarChartIcon }
      ]
    },
    {
      title: 'MANAGEMENT',
      items: [
        { id: 'vehicles', label: 'Vehicles', icon: CubeIcon },
        { id: 'drivers', label: 'Drivers', icon: PersonIcon }
      ]
    },
    {
      title: 'AI-POWERED',
      items: [
        { id: 'insights', label: 'AI Insights', icon: LightningBoltIcon },
        { id: 'anomalies', label: 'Anomaly Detection', icon: ExclamationTriangleIcon },
        { id: 'patterns', label: 'Patterns & Trends', icon: StackIcon }
      ]
    }
  ]

  return (
    <Flex direction="column" gap="3">
      {navSections.map((section) => (
        <Box key={section.title}>
          <Text size="1" weight="bold" style={{
            color: 'var(--gray-9)',
            letterSpacing: '0.5px',
            marginBottom: '8px',
            display: 'block'
          }}>
            {section.title}
          </Text>
          <Flex direction="column" gap="1">
            {section.items.map((item) => {
              const Icon = item.icon
              const isActive = activePage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-3)',
                    border: 'none',
                    background: isActive ? 'var(--accent-3)' : 'transparent',
                    color: isActive ? 'var(--accent-11)' : 'var(--gray-11)',
                    fontSize: '14px',
                    fontWeight: isActive ? 500 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    width: '100%',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'var(--gray-3)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  <Icon style={{ width: 16, height: 16, flexShrink: 0 }} />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </Flex>
        </Box>
      ))}

      {/* Premium CTA */}
      <Box mt="auto" pt="4">
        <Box style={{
          padding: '16px',
          background: 'linear-gradient(135deg, var(--indigo-3) 0%, var(--purple-3) 100%)',
          borderRadius: 'var(--radius-4)',
          border: '1px solid var(--indigo-4)'
        }}>
          <Flex align="center" gap="2" mb="2">
            <Box style={{
              width: 28,
              height: 28,
              borderRadius: 'var(--radius-2)',
              background: 'linear-gradient(135deg, var(--indigo-9) 0%, var(--purple-9) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <LightningBoltIcon style={{ color: 'white', width: 16, height: 16 }} />
            </Box>
            <Text size="2" weight="bold">Join Premium</Text>
          </Flex>
          <Text size="1" style={{ color: 'var(--gray-11)', lineHeight: 1.4, display: 'block', marginBottom: '12px' }}>
            Unlock advanced AI features
          </Text>
          <button style={{
            width: '100%',
            padding: '6px 12px',
            background: 'var(--indigo-9)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-2)',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--indigo-10)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--indigo-9)'}
          >
            Explore plans
          </button>
        </Box>
      </Box>
    </Flex>
  )
}
