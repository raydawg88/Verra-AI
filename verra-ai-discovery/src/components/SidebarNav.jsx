import { useState } from 'react'
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
  CubeIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DashboardIcon,
  ActivityLogIcon,
  BackpackIcon,
  FileIcon,
  CalendarIcon,
  CaretDownIcon,
  CaretRightIcon,
  MagicWandIcon
} from '@radix-ui/react-icons'

export default function SidebarNav({ activePage, onNavigate }) {
  const navItems = [
    { id: 'overview', label: 'AI Home', icon: HomeIcon },
    { id: 'insights', label: 'Discovery', icon: LightningBoltIcon },
    { id: 'anomalies', label: 'Anomalies', icon: ExclamationTriangleIcon },
    { id: 'patterns', label: 'Patterns', icon: StackIcon },
    { id: 'forecasting', label: 'Forecasting', icon: RocketIcon }
  ]

  return (
    <Flex direction="column" gap="2" style={{ height: '100%' }}>
      <Flex direction="column" gap="1">
        {navItems.map((item) => {
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
                padding: '10px 12px',
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

      {/* Back to Dashboard Link */}
      <Box mt="4" pt="4" style={{ borderTop: '1px solid var(--gray-4)' }}>
        <button
          onClick={() => onNavigate('dashboard')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 12px',
            borderRadius: 'var(--radius-3)',
            border: 'none',
            background: 'transparent',
            color: 'var(--gray-11)',
            fontSize: '14px',
            fontWeight: 400,
            cursor: 'pointer',
            transition: 'all 0.2s',
            width: '100%',
            textAlign: 'left'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gray-3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <Text size="2" style={{ color: 'var(--gray-11)' }}>
            ← BACK TO DASHBOARD
          </Text>
        </button>
      </Box>

      {/* AI Insights Upgrade CTA */}
      <Box mt="auto" pt="4">
        <Box style={{
          padding: '20px',
          background: 'linear-gradient(135deg, var(--indigo-3) 0%, var(--purple-3) 100%)',
          borderRadius: 'var(--radius-4)',
          border: '1px solid var(--indigo-4)'
        }}>
          <Box mb="3">
            <Text size="3" weight="bold" style={{ display: 'block', marginBottom: '8px' }}>
              Upgrade to AI Insights
            </Text>
            <Text size="2" style={{ color: 'var(--gray-11)', lineHeight: 1.5, display: 'block' }}>
              Unlock advanced AI features, insights, reporting, and answers.
            </Text>
          </Box>
          <button style={{
            width: '100%',
            padding: '10px 16px',
            background: 'var(--gray-12)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-3)',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--gray-11)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--gray-12)'}
          >
            View Pricing
          </button>
        </Box>
      </Box>
    </Flex>
  )
}
