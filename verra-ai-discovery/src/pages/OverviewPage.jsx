import { Flex, Grid, Card, Text, Heading } from '@radix-ui/themes'
import { ArrowUpIcon, ArrowDownIcon } from '@radix-ui/react-icons'
import DiscoveryCard from '../components/DiscoveryCard'

export default function OverviewPage() {
  return (
    <Flex direction="column" gap="6">
      {/* Hero Metrics */}
      <Grid columns="3" gap="6">
        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px' }}>
            Total Toll Spend
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>$247,832</Heading>
          <Flex align="center" gap="1">
            <ArrowDownIcon style={{ color: 'var(--green-10)' }} />
            <Text size="1" style={{ color: 'var(--green-10)' }}>12%</Text>
            <Text size="1" style={{ color: 'var(--gray-10)' }}>vs last period</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px' }}>
            Active Tolling Assets
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>2,555</Heading>
          <Flex align="center" gap="1">
            <ArrowUpIcon style={{ color: 'var(--blue-10)' }} />
            <Text size="1" style={{ color: 'var(--blue-10)' }}>3%</Text>
            <Text size="1" style={{ color: 'var(--gray-10)' }}>vs last period</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px' }}>
            Avg Cost Per Vehicle
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>$97.02</Heading>
          <Flex align="center" gap="1">
            <ArrowUpIcon style={{ color: 'var(--red-10)' }} />
            <Text size="1" style={{ color: 'var(--red-10)' }}>8%</Text>
            <Text size="1" style={{ color: 'var(--gray-10)' }}>vs last period</Text>
          </Flex>
        </Card>
      </Grid>

      {/* Discovery Cards */}
      <Flex direction="column" gap="6">
        <DiscoveryCard
          title="🔴 Impossible Toll Pattern"
          description="Vehicle #4421 had 47 toll crossings in one hour on I-90. Physically impossible - suggests transponder cloning."
          badge="Anomaly"
          badgeColor="red"
          stats={[
            { value: '$3,847/mo', label: 'Potential fraud' },
            { value: '97%', label: 'Confidence' }
          ]}
          sparklineData={[20, 25, 30, 85, 90, 95, 100, 95, 85, 30, 25, 20]}
        />

        <DiscoveryCard
          title="💡 Tuesday Toll Spikes"
          description="Toll costs spike 47% every Tuesday 2-4 PM. Hidden for 18 months, correlates with port schedules."
          badge="Pattern"
          badgeColor="amber"
          stats={[
            { value: '$67,000', label: 'Excess costs' },
            { value: '89%', label: 'Confidence' }
          ]}
          sparklineData={[40, 45, 100, 42, 38, 40, 95, 45, 40, 38, 92, 45, 40, 41]}
        />

        <DiscoveryCard
          title="👻 Duplicate Charges"
          description="Found 12 vehicles with duplicate toll charges. Same plaza, same time, charged twice."
          badge="Silent Drain"
          badgeColor="violet"
          stats={[
            { value: '$847/mo', label: 'Duplicate billing' },
            { value: '12', label: 'Vehicles' }
          ]}
          sparklineData={[30, 32, 35, 60, 58, 62, 65, 60, 58, 55, 52, 50]}
        />

        <DiscoveryCard
          title="🔮 Rate Increase Coming"
          description="Based on seasonal patterns, 23% rate increase expected in 14 days. Will add $4,200/month to costs."
          badge="Prediction"
          badgeColor="blue"
          stats={[
            { value: '+$4,200/mo', label: 'Impact' },
            { value: '14 days', label: 'Time frame' }
          ]}
          sparklineData={[45, 48, 52, 55, 60, 65, 70, 75, 80, 85, 90, 100]}
        />

        <DiscoveryCard
          title="🎯 Paying 34% More"
          description="Your cost per toll is 34% higher than similar fleets. Industry average: $2.43, Your average: $3.26"
          badge="Benchmark"
          badgeColor="green"
          stats={[
            { value: '$3.26', label: 'Your avg' },
            { value: '$2.43', label: 'Industry avg' }
          ]}
        />
      </Flex>
    </Flex>
  )
}
