import { Card, Flex, Text, Heading, Badge, Button } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function DiscoveryCard({
  title,
  description,
  badge,
  stats,
  badgeColor = 'red',
  sparklineData = null
}) {
  return (
    <Card style={{
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid var(--gray-6)',
      padding: '24px'
    }}
    className="discovery-card">
      {/* Accent line based on badge color */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: badgeColor === 'red' ? 'var(--red-9)' :
                   badgeColor === 'amber' ? 'var(--amber-9)' :
                   badgeColor === 'violet' ? 'var(--violet-9)' :
                   badgeColor === 'blue' ? 'var(--blue-9)' :
                   badgeColor === 'green' ? '#9fc908' : 'var(--gray-9)',
        opacity: 0.8
      }} />

      <Flex direction="column" gap="4">
        {/* Header */}
        <Flex justify="between" align="start" gap="3">
          <Box style={{ flex: 1 }}>
            <Heading size="4" mb="2" style={{ lineHeight: 1.3 }}>
              {title}
            </Heading>
            <Text size="2" style={{ color: 'var(--gray-11)', lineHeight: 1.6 }}>
              {description}
            </Text>
          </Box>
          {badge && (
            <Badge
              color={badgeColor}
              variant="soft"
              size="2"
              style={{
                marginLeft: '12px',
                flexShrink: 0,
                fontWeight: 600
              }}
            >
              {badge}
            </Badge>
          )}
        </Flex>

        {/* Mini sparkline visualization */}
        {sparklineData && (
          <div style={{
            height: '48px',
            background: 'var(--gray-2)',
            borderRadius: '8px',
            padding: '10px',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '3px',
            marginTop: '4px'
          }}>
            {sparklineData.map((value, i) => (
              <div key={i} style={{
                flex: 1,
                height: `${value}%`,
                background: badgeColor === 'red' ? 'var(--red-9)' :
                           badgeColor === 'amber' ? 'var(--amber-9)' :
                           badgeColor === 'violet' ? 'var(--violet-9)' :
                           badgeColor === 'blue' ? 'var(--blue-9)' : '#9fc908',
                borderRadius: '3px',
                opacity: 0.85,
                transition: 'all 0.2s ease',
                minHeight: '4px'
              }}
              className="sparkline-bar" />
            ))}
          </div>
        )}

        {/* Stats */}
        {stats && stats.length > 0 && (
          <Flex gap="6" style={{ marginTop: '4px' }}>
            {stats.map((stat, idx) => (
              <Box key={idx}>
                <Text size="6" weight="bold" style={{
                  display: 'block',
                  lineHeight: 1.2,
                  fontVariantNumeric: 'tabular-nums'
                }}>
                  {stat.value}
                </Text>
                <Text size="1" style={{
                  color: 'var(--gray-10)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontSize: '10px',
                  fontWeight: 600
                }}>
                  {stat.label}
                </Text>
              </Box>
            ))}
          </Flex>
        )}

        {/* Action */}
        <Flex>
          <Button
            variant="ghost"
            size="2"
            style={{
              padding: 0,
              height: 'auto',
              color: 'var(--indigo-11)',
              fontWeight: 500
            }}
            className="discovery-card-button"
          >
            View details
            <ArrowRightIcon style={{ marginLeft: '4px' }} />
          </Button>
        </Flex>
      </Flex>
    </Card>
  )
}

function Box({ children, style, ...props }) {
  return <div style={style} {...props}>{children}</div>
}
