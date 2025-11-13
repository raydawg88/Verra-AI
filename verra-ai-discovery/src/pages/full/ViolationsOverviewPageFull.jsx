import { Flex, Grid, Card, Text, Heading, Badge } from '@radix-ui/themes'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import WarningIcon from '@mui/icons-material/Warning'
import ErrorIcon from '@mui/icons-material/Error'
import SpeedIcon from '@mui/icons-material/Speed'
import TrafficIcon from '@mui/icons-material/Traffic'
import LocalParkingIcon from '@mui/icons-material/LocalParking'
import DiscoveryCard from '../../components/DiscoveryCard'

export default function ViolationsOverviewPageFull({ onOpenDetail }) {
  const violationTypes = [
    { type: 'Speeding', count: 847, color: 'var(--red-9)', percentage: 68 },
    { type: 'Red Light', count: 312, color: 'var(--orange-9)', percentage: 25 },
    { type: 'Parking', count: 88, color: 'var(--amber-9)', percentage: 7 }
  ]

  const monthlyTrend = [87, 92, 98, 103, 110, 115, 108, 121, 118, 125, 132, 128]

  return (
    <Flex direction="column" gap="6">
      {/* Hero Metrics */}
      <Grid columns="4" gap="6">
        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Total Violations
          </Text>
          <Heading size="7" style={{ marginBottom: '12px', color: 'var(--red-11)' }}>1,247</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--red-10)' }} />
            <Text size="1" style={{ color: 'var(--red-10)' }}>15.3% increase</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            High-Risk Drivers
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>34</Heading>
          <Flex align="center" gap="1">
            <TrendingDownIcon style={{ width: 16, height: 16, color: 'var(--green-10)' }} />
            <Text size="1" style={{ color: 'var(--green-10)' }}>12% improvement</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Violation Cost
          </Text>
          <Heading size="7" style={{ marginBottom: '12px', color: 'var(--red-11)' }}>$84.2K</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--red-10)' }} />
            <Text size="1" style={{ color: 'var(--red-10)' }}>18.7% increase</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Citations Pending
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>67</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--amber-10)' }} />
            <Text size="1" style={{ color: 'var(--amber-10)' }}>Review needed</Text>
          </Flex>
        </Card>
      </Grid>

      {/* Violations by Type */}
      <Card style={{ padding: '32px' }}>
        <Heading size="5" mb="4">
          <WarningIcon style={{ width: 20, height: 20, marginRight: '8px', verticalAlign: 'text-bottom' }} />
          Violations by Type
        </Heading>
        <Grid columns="3" gap="4" style={{ marginTop: '24px' }}>
          <Flex direction="column" gap="3" align="center" style={{ padding: '24px', background: 'var(--red-2)', borderRadius: 'var(--radius-3)', border: '1px solid var(--red-4)' }}>
            <SpeedIcon style={{ width: 40, height: 40, color: 'var(--red-9)' }} />
            <Heading size="6" style={{ color: 'var(--red-11)' }}>847</Heading>
            <Text size="2" style={{ color: 'var(--gray-11)', textAlign: 'center' }}>Speeding Violations</Text>
            <Badge color="red" variant="soft" size="2">68% of total</Badge>
          </Flex>

          <Flex direction="column" gap="3" align="center" style={{ padding: '24px', background: 'var(--orange-2)', borderRadius: 'var(--radius-3)', border: '1px solid var(--orange-4)' }}>
            <TrafficIcon style={{ width: 40, height: 40, color: 'var(--orange-9)' }} />
            <Heading size="6" style={{ color: 'var(--orange-11)' }}>312</Heading>
            <Text size="2" style={{ color: 'var(--gray-11)', textAlign: 'center' }}>Red Light Violations</Text>
            <Badge color="orange" variant="soft" size="2">25% of total</Badge>
          </Flex>

          <Flex direction="column" gap="3" align="center" style={{ padding: '24px', background: 'var(--amber-2)', borderRadius: 'var(--radius-3)', border: '1px solid var(--amber-4)' }}>
            <LocalParkingIcon style={{ width: 40, height: 40, color: 'var(--amber-9)' }} />
            <Heading size="6" style={{ color: 'var(--amber-11)' }}>88</Heading>
            <Text size="2" style={{ color: 'var(--gray-11)', textAlign: 'center' }}>Parking Violations</Text>
            <Badge color="amber" variant="soft" size="2">7% of total</Badge>
          </Flex>
        </Grid>
      </Card>

      {/* Violation Trends */}
      <Card style={{ padding: '32px' }}>
        <Heading size="5" mb="4">Violation Trends (Last 12 Months)</Heading>
        <Flex gap="2" align="end" style={{ height: '200px', marginTop: '24px' }}>
          {monthlyTrend.map((value, idx) => (
            <Flex key={idx} direction="column" align="center" gap="2" style={{ flex: 1 }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: `${(value / 135) * 170}px`,
                background: 'linear-gradient(180deg, var(--red-8) 0%, var(--red-10) 100%)',
                borderRadius: 'var(--radius-2)',
                transition: 'all 0.3s'
              }}>
                <Text size="1" weight="bold" style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'var(--gray-11)'
                }}>
                  {value}
                </Text>
              </div>
              <Text size="1" style={{ color: 'var(--gray-10)' }}>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][idx]}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Card>

      {/* Discovery Cards */}
      <Flex direction="column" gap="6">
        <DiscoveryCard
          title={<><ErrorIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Repeat Speeding Offender: Driver #423</>}
          description="Driver #423 has 12 speeding violations in 30 days, all on same route segment. Escalating pattern suggests need for immediate coaching or route reassignment."
          badge="Safety Risk"
          badgeColor="red"
          stats={[
            { value: '12', label: 'Violations in 30 days' },
            { value: '$2,400', label: 'Total fines' },
            { value: 'High', label: 'Insurance risk' }
          ]}
          sparklineData={[1, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 5]}
          chartType="bar"
          chartLabel="Violations per week (Last 12 weeks)"
          chartYAxis="5"
          onOpenDetail={onOpenDetail}
          insightId="repeat-speeding"
        />

        <DiscoveryCard
          title={<><WarningIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Location-Based Violation Pattern</>}
          description="87% of speeding violations occur on Route 45 between exits 12-15. Speed limit signage may be unclear or enforcement cameras newly installed. Recommend route training."
          badge="Pattern Detected"
          badgeColor="amber"
          stats={[
            { value: '87%', label: 'Violations on one route' },
            { value: 'Route 45', label: 'Hotspot location' },
            { value: '14', label: 'Drivers affected' }
          ]}
          sparklineData={[45, 52, 48, 67, 73, 89, 94, 87, 92, 88, 95, 101]}
          chartType="line"
          chartLabel="Route 45 violations trend (weeks)"
          chartYAxis="101"
          onOpenDetail={onOpenDetail}
          insightId="location-pattern"
        />

        <DiscoveryCard
          title={<><WarningIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Unpaid Violation Accumulation</>}
          description="23 violations unpaid for more than 60 days. Late fees adding $840/month. Total outstanding: $4,200. Recommend immediate payment to avoid escalation."
          badge="Payment Required"
          badgeColor="amber"
          stats={[
            { value: '23', label: 'Unpaid violations' },
            { value: '$4,200', label: 'Total outstanding' },
            { value: '$840/mo', label: 'Late fee cost' }
          ]}
          sparklineData={[2100, 2340, 2580, 2890, 3120, 3420, 3680, 3890, 4020, 4150, 4200, 4200]}
          chartType="area"
          chartLabel="Outstanding balance growth (months)"
          chartYAxis="$4,200"
          onOpenDetail={onOpenDetail}
          insightId="unpaid-violations"
        />
      </Flex>
    </Flex>
  )
}
