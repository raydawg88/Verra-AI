import { Flex, Grid, Card, Text, Heading, Badge, Button } from '@radix-ui/themes'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import SavingsIcon from '@mui/icons-material/Savings'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RouteIcon from '@mui/icons-material/Route'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import DiscountIcon from '@mui/icons-material/Discount'
import ScheduleIcon from '@mui/icons-material/Schedule'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export default function SavingsPageFull({ onOpenDetail }) {
  const savingsOpportunities = [
    {
      title: 'Route Optimization',
      description: '5 routes using unnecessary toll roads when free alternatives save only 4 minutes average. Eliminate tolls with minimal operational impact.',
      icon: RouteIcon,
      annualSavings: 12400,
      implementation: 'Low complexity',
      timeframe: '2 weeks',
      status: 'ready',
      color: 'green'
    },
    {
      title: 'Volume Discount Enrollment',
      description: 'Current volume qualifies for 15% discount tier with toll authority. Not currently enrolled in program.',
      icon: DiscountIcon,
      annualSavings: 8200,
      implementation: 'Quick win',
      timeframe: '1 week',
      status: 'ready',
      color: 'green'
    },
    {
      title: 'Off-Peak Scheduling',
      description: 'Shifting 3 routes by 45 minutes avoids peak toll pricing with minimal operational impact.',
      icon: ScheduleIcon,
      annualSavings: 5600,
      implementation: 'Medium complexity',
      timeframe: '4 weeks',
      status: 'planning',
      color: 'blue'
    },
    {
      title: 'Transponder Consolidation',
      description: 'Maintaining 12 more transponders than active vehicles. Reduce account fees and administrative overhead.',
      icon: AttachMoneyIcon,
      annualSavings: 4800,
      implementation: 'Low complexity',
      timeframe: '1 week',
      status: 'ready',
      color: 'green'
    },
    {
      title: 'Billing Error Recovery',
      description: 'Found $2,340 in duplicate charges from past 12 months. Documentation ready for dispute submission.',
      icon: ErrorOutlineIcon,
      annualSavings: 2340,
      implementation: 'Quick win',
      timeframe: 'Immediate',
      status: 'ready',
      color: 'green'
    }
  ]

  const cumulativeSavings = [34500, 52800, 71200, 89300, 112700, 138400, 167900, 184200]

  const totalAnnualSavings = savingsOpportunities.reduce((sum, opp) => sum + opp.annualSavings, 0)

  return (
    <Flex direction="column" gap="6">
      {/* Hero Metrics */}
      <Grid columns="3" gap="6">
        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Total Savings Identified
          </Text>
          <Heading size="7" style={{ marginBottom: '12px', color: 'var(--green-11)' }}>
            ${(totalAnnualSavings / 1000).toFixed(1)}K
          </Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--green-10)' }} />
            <Text size="1" style={{ color: 'var(--green-10)' }}>Annual opportunity</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Quick Wins Available
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>4</Heading>
          <Flex align="center" gap="1">
            <CheckCircleIcon style={{ width: 16, height: 16, color: 'var(--green-10)' }} />
            <Text size="1" style={{ color: 'var(--green-10)' }}>Ready to implement</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Highest Impact
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>$12.4K</Heading>
          <Flex align="center" gap="1">
            <LightbulbIcon style={{ width: 16, height: 16, color: 'var(--amber-10)' }} />
            <Text size="1" style={{ color: 'var(--amber-10)' }}>Route optimization</Text>
          </Flex>
        </Card>
      </Grid>

      {/* Cumulative Savings Forecast */}
      <Card style={{ padding: '32px' }}>
        <Heading size="5" mb="4">
          <TrendingUpOutlinedIcon style={{ width: 20, height: 20, marginRight: '8px', verticalAlign: 'text-bottom' }} />
          Cumulative Savings Forecast (Next 8 Quarters)
        </Heading>
        <Flex gap="2" align="end" style={{ height: '220px', marginTop: '24px' }}>
          {cumulativeSavings.map((value, idx) => (
            <Flex key={idx} direction="column" align="center" gap="2" style={{ flex: 1 }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: `${(value / 184200) * 180}px`,
                background: 'linear-gradient(180deg, var(--green-9) 0%, var(--green-11) 100%)',
                borderRadius: 'var(--radius-2)',
                transition: 'all 0.3s'
              }}>
                <Text size="1" weight="bold" style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'var(--green-11)',
                  whiteSpace: 'nowrap',
                  fontSize: '11px'
                }}>
                  ${(value / 1000).toFixed(0)}K
                </Text>
              </div>
              <Text size="1" style={{ color: 'var(--gray-10)' }}>
                {['Q1', 'Q2', 'Q3', 'Q4', 'Q1 25', 'Q2 25', 'Q3 25', 'Q4 25'][idx]}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Card>

      {/* Savings Opportunities (Ranked by ROI) */}
      <Heading size="5" mb="4">
        <SavingsIcon style={{ width: 20, height: 20, marginRight: '8px', verticalAlign: 'text-bottom' }} />
        Savings Opportunities (Ranked by ROI)
      </Heading>

      <Flex direction="column" gap="4">
        {savingsOpportunities.map((opportunity, idx) => {
          const Icon = opportunity.icon
          return (
            <Card key={idx} style={{
              padding: '32px',
              background: `linear-gradient(135deg, var(--${opportunity.color}-1) 0%, var(--${opportunity.color}-2) 100%)`,
              border: `2px solid var(--${opportunity.color}-4)`
            }}>
              <Flex gap="4" align="start">
                {/* Icon */}
                <div style={{
                  padding: '16px',
                  background: `var(--${opportunity.color}-3)`,
                  borderRadius: 'var(--radius-3)',
                  border: `1px solid var(--${opportunity.color}-5)`
                }}>
                  <Icon style={{ width: 32, height: 32, color: `var(--${opportunity.color}-11)` }} />
                </div>

                {/* Content */}
                <Flex direction="column" gap="3" style={{ flex: 1 }}>
                  <Flex justify="between" align="start">
                    <div>
                      <Heading size="5" mb="2" style={{ color: 'var(--gray-12)' }}>
                        {opportunity.title}
                      </Heading>
                      <Text size="3" style={{ color: 'var(--gray-11)', lineHeight: 1.6 }}>
                        {opportunity.description}
                      </Text>
                    </div>
                    <Badge
                      color={opportunity.color}
                      variant="solid"
                      size="3"
                      style={{ flexShrink: 0, fontWeight: 700, fontSize: '16px', padding: '8px 16px' }}
                    >
                      ${(opportunity.annualSavings / 1000).toFixed(1)}K/yr
                    </Badge>
                  </Flex>

                  <Flex gap="6">
                    <div>
                      <Text size="1" style={{ display: 'block', color: 'var(--gray-10)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, marginBottom: '4px' }}>
                        Implementation
                      </Text>
                      <Badge color="gray" variant="soft" size="2">
                        {opportunity.implementation}
                      </Badge>
                    </div>
                    <div>
                      <Text size="1" style={{ display: 'block', color: 'var(--gray-10)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, marginBottom: '4px' }}>
                        Timeframe
                      </Text>
                      <Badge color="gray" variant="soft" size="2">
                        {opportunity.timeframe}
                      </Badge>
                    </div>
                    <div>
                      <Text size="1" style={{ display: 'block', color: 'var(--gray-10)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, marginBottom: '4px' }}>
                        Status
                      </Text>
                      <Badge
                        color={opportunity.status === 'ready' ? 'green' : 'blue'}
                        variant="soft"
                        size="2"
                      >
                        {opportunity.status.toUpperCase()}
                      </Badge>
                    </div>
                  </Flex>

                  <Flex gap="2">
                    <Button
                      size="3"
                      style={{
                        background: `var(--${opportunity.color}-9)`,
                        color: 'white',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      View Implementation Plan
                    </Button>
                    <Button
                      size="3"
                      variant="soft"
                      style={{
                        cursor: 'pointer'
                      }}
                    >
                      Calculate ROI
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          )
        })}
      </Flex>
    </Flex>
  )
}
