import { useState, useMemo } from 'react'
import { Card, Flex, Text, Heading, Badge, Button } from '@radix-ui/themes'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function Box({ children, style, ...props }) {
  return <div style={style} {...props}>{children}</div>
}

export default function DiscoveryCard({
  title,
  description,
  badge,
  stats,
  badgeColor = 'red',
  sparklineData = null,
  chartType = 'bar',
  chartLabel = '',
  chartYAxis = '',
  onOpenDetail = null,
  insightId = null
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const gradientId = useMemo(() => `gradient-${Math.random().toString(36).substr(2, 9)}`, [])

  const getColor = () => {
    switch(badgeColor) {
      case 'red': return '#e5484d'
      case 'amber': return '#f76b15'
      case 'violet': return '#8e4ec6'
      case 'blue': return '#0090ff'
      case 'orange': return '#f76b15'
      case 'green': return '#46a758'
      default: return '#e5484d'
    }
  }

  const color = getColor()

  const renderBarChart = () => {
    if (!sparklineData) return null

    const maxValue = Math.max(...sparklineData)
    const minValue = Math.min(...sparklineData)
    const range = maxValue - minValue

    return (
      <div style={{ height: '100%', position: 'relative' }}>
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((percent) => (
          <div key={percent} style={{
            position: 'absolute',
            bottom: `${percent}%`,
            left: 0,
            right: 0,
            height: '1px',
            background: '#e1e1e3',
            opacity: percent === 0 ? 0.8 : 0.4
          }} />
        ))}

        {/* Bars */}
        <div style={{
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '4px',
          position: 'relative'
        }}>
          {sparklineData.map((value, i) => {
            const normalizedHeight = range === 0 ? 50 : ((value - minValue) / range) * 100
            const heightPercent = Math.max(normalizedHeight, 5)
            const isHovered = hoveredIndex === i

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  flex: 1,
                  height: `${heightPercent}%`,
                  background: isHovered ? color : `${color}dd`,
                  borderRadius: '4px 4px 0 0',
                  transition: 'all 0.2s ease',
                  boxShadow: isHovered ? `0 -4px 8px ${color}33` : `0 -2px 4px ${color}22`,
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                {isHovered && (
                  <div style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '8px',
                    background: 'var(--gray-12)',
                    color: 'white',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 10,
                    pointerEvents: 'none'
                  }}>
                    ${value.toLocaleString()}
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '4px solid transparent',
                      borderRight: '4px solid transparent',
                      borderTop: '4px solid var(--gray-12)'
                    }} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderLineChart = () => {
    if (!sparklineData) return null

    const maxValue = Math.max(...sparklineData)
    const minValue = Math.min(...sparklineData)
    const range = maxValue - minValue

    return (
      <div style={{ height: '100%', position: 'relative' }}>
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((percent) => (
          <div key={percent} style={{
            position: 'absolute',
            bottom: `${percent}%`,
            left: 0,
            right: 0,
            height: '1px',
            background: '#e1e1e3',
            opacity: percent === 0 ? 0.8 : 0.4,
            zIndex: 0
          }} />
        ))}

        {/* SVG Line */}
        <svg width="100%" height="100%" style={{ position: 'relative', zIndex: 1 }}>
          <polyline
            points={sparklineData.map((value, i) => {
              const x = (i / (sparklineData.length - 1)) * 100
              const normalizedY = range === 0 ? 50 : ((value - minValue) / range) * 100
              const y = 100 - normalizedY
              return `${x}%,${y}%`
            }).join(' ')}
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {sparklineData.map((value, i) => {
            const x = (i / (sparklineData.length - 1)) * 100
            const normalizedY = range === 0 ? 50 : ((value - minValue) / range) * 100
            const y = 100 - normalizedY
            const isHovered = hoveredIndex === i

            return (
              <g key={i}>
                <circle
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r={isHovered ? "6" : "4"}
                  fill="white"
                  stroke={color}
                  strokeWidth="2.5"
                  style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
                {isHovered && (
                  <foreignObject
                    x={`${x}%`}
                    y={`${y}%`}
                    width="100"
                    height="40"
                    style={{ overflow: 'visible' }}
                  >
                    <div style={{
                      transform: 'translate(-50%, -120%)',
                      background: 'var(--gray-12)',
                      color: 'white',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      pointerEvents: 'none'
                    }}>
                      ${value.toLocaleString()}
                    </div>
                  </foreignObject>
                )}
              </g>
            )
          })}
        </svg>
      </div>
    )
  }

  const renderAreaChart = () => {
    if (!sparklineData) return null

    const maxValue = Math.max(...sparklineData)
    const minValue = Math.min(...sparklineData)
    const range = maxValue - minValue

    return (
      <div style={{ height: '100%', position: 'relative' }}>
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((percent) => (
          <div key={percent} style={{
            position: 'absolute',
            bottom: `${percent}%`,
            left: 0,
            right: 0,
            height: '1px',
            background: '#e1e1e3',
            opacity: percent === 0 ? 0.8 : 0.4,
            zIndex: 0
          }} />
        ))}

        {/* SVG Area */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'relative', zIndex: 1 }}>
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.5" />
              <stop offset="100%" stopColor={color} stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Area fill */}
          <polygon
            points={`0,100 ${sparklineData.map((value, i) => {
              const x = (i / (sparklineData.length - 1)) * 100
              const normalizedY = range === 0 ? 50 : ((value - minValue) / range) * 100
              const y = 100 - normalizedY
              return `${x},${y}`
            }).join(' ')} 100,100`}
            fill={`url(#${gradientId})`}
          />

          {/* Line */}
          <polyline
            points={sparklineData.map((value, i) => {
              const x = (i / (sparklineData.length - 1)) * 100
              const normalizedY = range === 0 ? 50 : ((value - minValue) / range) * 100
              const y = 100 - normalizedY
              return `${x},${y}`
            }).join(' ')}
            fill="none"
            stroke={color}
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {sparklineData.map((value, i) => {
            const x = (i / (sparklineData.length - 1)) * 100
            const normalizedY = range === 0 ? 50 : ((value - minValue) / range) * 100
            const y = 100 - normalizedY
            const isHovered = hoveredIndex === i

            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? "2" : "0"}
                  fill="white"
                  stroke={color}
                  strokeWidth="0.8"
                  vectorEffect="non-scaling-stroke"
                  style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
                {/* Invisible larger hit area */}
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="transparent"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
                {isHovered && (
                  <foreignObject
                    x={x - 50}
                    y={y - 50}
                    width="100"
                    height="50"
                    style={{ overflow: 'visible', pointerEvents: 'none' }}
                  >
                    <div style={{
                      transform: 'translateY(-100%)',
                      background: 'var(--gray-12)',
                      color: 'white',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      pointerEvents: 'none',
                      textAlign: 'center'
                    }}>
                      ${value.toLocaleString()}
                    </div>
                  </foreignObject>
                )}
              </g>
            )
          })}
        </svg>
      </div>
    )
  }

  return (
    <Card style={{
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid var(--gray-6)',
      padding: '24px',
      alignSelf: 'flex-start'
    }}>
      {/* Accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: color,
        opacity: 0.8
      }} />

      <Flex direction="column" gap="4">
        {/* Header */}
        <Flex direction="column" gap="3">
          <Flex justify="between" align="start" gap="3">
            <Heading size="6" style={{ lineHeight: 1.3, flex: 1 }}>
              {title}
            </Heading>
            {badge && (
              <Badge
                color={badgeColor}
                variant="soft"
                size="2"
                style={{
                  flexShrink: 0,
                  fontWeight: 600
                }}
              >
                {badge}
              </Badge>
            )}
          </Flex>
          <Text size="3" style={{ color: 'var(--gray-11)', lineHeight: 1.7 }}>
            {description}
          </Text>
        </Flex>

        {/* Chart */}
        {sparklineData && (
          <div style={{ marginTop: '12px' }}>
            {/* Chart labels */}
            <Flex justify="between" align="center" mb="2">
              {chartLabel && (
                <Text size="1" style={{ color: 'var(--gray-11)', fontWeight: 600 }}>
                  {chartLabel}
                </Text>
              )}
              {chartYAxis && (
                <Text size="1" style={{ color: 'var(--gray-10)', fontFamily: 'monospace' }}>
                  {chartYAxis}
                </Text>
              )}
            </Flex>

            {/* Chart container */}
            <div style={{
              height: '120px',
              background: 'white',
              borderRadius: 'var(--radius-2)',
              padding: '20px 16px 16px 16px',
              position: 'relative',
              border: '1px solid var(--gray-4)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
            }}>
              {chartType === 'bar' && renderBarChart()}
              {chartType === 'line' && renderLineChart()}
              {chartType === 'area' && renderAreaChart()}
            </div>
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
            onClick={() => onOpenDetail?.(insightId)}
            style={{
              padding: 0,
              height: 'auto',
              color: 'var(--indigo-11)',
              fontWeight: 500,
              cursor: 'pointer'
            }}
          >
            View details
            <ArrowForwardIcon style={{ marginLeft: '4px' }} />
          </Button>
        </Flex>
      </Flex>
    </Card>
  )
}
