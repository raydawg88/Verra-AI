import { useState } from 'react'
import { Box, Flex, Text } from '@radix-ui/themes'
import HomeIcon from '@mui/icons-material/Home'
import BoltIcon from '@mui/icons-material/Bolt'
import WarningIcon from '@mui/icons-material/Warning'
import CategoryIcon from '@mui/icons-material/Category'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import TrafficIcon from '@mui/icons-material/Traffic'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import SavingsIcon from '@mui/icons-material/Savings'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export default function SidebarNavFull({ activePage, onNavigate }) {
  const [tollingExpanded, setTollingExpanded] = useState(true)
  const [violationsExpanded, setViolationsExpanded] = useState(true)

  const aiNavItems = [
    { id: 'overview', label: 'AI Home', icon: HomeIcon },
    { id: 'insights', label: 'Discovery', icon: BoltIcon },
    { id: 'anomalies', label: 'Anomalies', icon: WarningIcon },
    { id: 'patterns', label: 'Patterns', icon: CategoryIcon },
    { id: 'forecasting', label: 'Forecasting', icon: RocketLaunchIcon }
  ]

  const renderNavButton = (item, isSubItem = false) => {
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
          paddingLeft: isSubItem ? '36px' : '12px',
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
        {Icon && <Icon style={{ width: 16, height: 16, flexShrink: 0 }} />}
        <span>{item.label}</span>
      </button>
    )
  }

  const renderCollapsibleSection = (title, icon, isExpanded, setExpanded, children) => {
    const Icon = icon
    const hasActiveChild = children.some(child => activePage === child.id)

    return (
      <Box>
        <button
          onClick={() => setExpanded(!isExpanded)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 12px',
            borderRadius: 'var(--radius-3)',
            border: 'none',
            background: hasActiveChild ? 'var(--accent-3)' : 'transparent',
            color: hasActiveChild ? 'var(--accent-11)' : 'var(--gray-11)',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            width: '100%',
            textAlign: 'left'
          }}
          onMouseEnter={(e) => {
            if (!hasActiveChild) {
              e.currentTarget.style.background = 'var(--gray-3)'
            }
          }}
          onMouseLeave={(e) => {
            if (!hasActiveChild) {
              e.currentTarget.style.background = 'transparent'
            }
          }}
        >
          <Icon style={{ width: 16, height: 16, flexShrink: 0 }} />
          <span style={{ flex: 1 }}>{title}</span>
          {isExpanded ? (
            <ExpandMoreIcon style={{ width: 16, height: 16 }} />
          ) : (
            <ChevronRightIcon style={{ width: 16, height: 16 }} />
          )}
        </button>

        {isExpanded && (
          <Flex direction="column" gap="1" mt="1">
            {children.map(child => renderNavButton(child, true))}
          </Flex>
        )}
      </Box>
    )
  }

  return (
    <Flex direction="column" gap="2" style={{ height: '100%' }}>
      {/* AI Sections */}
      <Flex direction="column" gap="1">
        {aiNavItems.map((item) => renderNavButton(item))}
      </Flex>

      {/* Divider */}
      <Box my="3" style={{ height: '1px', background: 'var(--gray-4)' }} />

      {/* Traditional Sections */}
      <Flex direction="column" gap="1">
        {/* Tolling Section */}
        {renderCollapsibleSection(
          'Tolling',
          LocalShippingIcon,
          tollingExpanded,
          setTollingExpanded,
          [
            { id: 'tolling-overview', label: 'Overview' },
            { id: 'tolling-deep-dive', label: 'Deep Dive' }
          ]
        )}

        {/* Violations Section */}
        {renderCollapsibleSection(
          'Violations',
          TrafficIcon,
          violationsExpanded,
          setViolationsExpanded,
          [
            { id: 'violations-overview', label: 'Overview' },
            { id: 'violations-deep-dive', label: 'Deep Dive' }
          ]
        )}

        {/* Standalone Items */}
        {renderNavButton({ id: 'transactions', label: 'Transactions', icon: ReceiptLongIcon })}
        {renderNavButton({ id: 'savings', label: 'Savings', icon: SavingsIcon })}
      </Flex>

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
              Full AI Experience
            </Text>
            <Text size="2" style={{ color: 'var(--gray-11)', lineHeight: 1.5, display: 'block' }}>
              All AI insights combined with traditional MIRA sections.
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
            View Features
          </button>
        </Box>
      </Box>
    </Flex>
  )
}
