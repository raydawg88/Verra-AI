import { Flex, Grid, Card, Text, Heading, Badge } from '@radix-ui/themes'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import WarningIcon from '@mui/icons-material/Warning'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import DiscoveryCard from '../../components/DiscoveryCard'

export default function TollingOverviewPageFull({ onOpenDetail }) {
  return (
    <Flex direction="column" gap="6">
      {/* Hero Metrics */}
      <Grid columns="4" gap="6">
        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Total Toll Spend
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>$2.4M</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--green-10)' }} />
            <Text size="1" style={{ color: 'var(--green-10)' }}>12.3% vs last month</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Active Tolling Assets
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>2,555</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--green-10)' }} />
            <Text size="1" style={{ color: 'var(--green-10)' }}>47.4% vs last year</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Avg Cost Per Vehicle
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>$939</Heading>
          <Flex align="center" gap="1">
            <TrendingDownIcon style={{ width: 16, height: 16, color: 'var(--red-10)' }} />
            <Text size="1" style={{ color: 'var(--red-10)' }}>8.2% efficiency loss</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Trend vs Last Month
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>+$287K</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--amber-10)' }} />
            <Text size="1" style={{ color: 'var(--amber-10)' }}>Investigate increase</Text>
          </Flex>
        </Card>
      </Grid>

      {/* Top Toll Spenders Table */}
      <Card style={{ padding: '32px' }}>
        <Heading size="5" mb="4" style={{ color: 'var(--gray-12)' }}>
          <LocalShippingIcon style={{ width: 20, height: 20, marginRight: '8px', verticalAlign: 'text-bottom' }} />
          Top Clients by Toll Count
        </Heading>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--gray-4)' }}>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Client ID</th>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Company</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>2023</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>2024</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>2025</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'CC0002', company: 'COMPANY C', y2023: 48579, y2024: 98607, y2025: 96198 },
              { id: 'CD0003', company: 'COMPANY D', y2023: 4721, y2024: 7074, y2025: 7967 },
              { id: 'CE0004', company: 'COMPANY E', y2023: 23795, y2024: 44252, y2025: 41224 },
              { id: 'CF0005', company: 'COMPANY F', y2023: 1640, y2024: 7525, y2025: 8512 },
              { id: 'CJ0009', company: 'COMPANY J', y2023: 73736, y2024: 106033, y2025: 92306 },
              { id: 'CK0010', company: 'COMPANY K', y2023: 18218, y2024: 27026, y2025: 20379 }
            ].map((row) => (
              <tr key={row.id} style={{ borderBottom: '1px solid var(--gray-3)' }}>
                <td style={{ padding: '14px', color: 'var(--gray-11)', fontWeight: 500, fontSize: '14px' }}>{row.id}</td>
                <td style={{ padding: '14px', color: 'var(--gray-12)', fontWeight: 600, fontSize: '14px' }}>{row.company}</td>
                <td style={{ padding: '14px', textAlign: 'right', color: 'var(--gray-12)', fontSize: '14px', fontFamily: 'monospace' }}>{row.y2023.toLocaleString()}</td>
                <td style={{ padding: '14px', textAlign: 'right', color: 'var(--gray-12)', fontSize: '14px', fontFamily: 'monospace' }}>{row.y2024.toLocaleString()}</td>
                <td style={{ padding: '14px', textAlign: 'right', color: 'var(--gray-12)', fontSize: '14px', fontFamily: 'monospace', fontWeight: 600 }}>{row.y2025.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Toll Volume Trends Mini Chart */}
      <Card style={{ padding: '32px' }}>
        <Heading size="5" mb="4">Toll Volume Trends (Last 12 Months)</Heading>
        <Flex gap="2" align="end" style={{ height: '180px' }}>
          {[67, 71, 74, 69, 78, 82, 85, 88, 84, 91, 96, 98].map((value, idx) => (
            <Flex key={idx} direction="column" align="center" gap="2" style={{ flex: 1 }}>
              <div style={{
                width: '100%',
                height: `${(value / 100) * 160}px`,
                background: 'linear-gradient(180deg, var(--indigo-9) 0%, var(--indigo-11) 100%)',
                borderRadius: 'var(--radius-2)',
                transition: 'all 0.3s'
              }} />
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
          title={<><AttachMoneyIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Ghost Vehicles Draining $14,964 Annually</>}
          description="Found 3 vehicles sold 4-7 months ago still enrolled in toll program with active transponders processing tolls and monthly fees for vehicles you no longer own."
          badge="Immediate Action Required"
          badgeColor="red"
          stats={[
            { value: '$14,964/yr', label: 'Annual waste' },
            { value: '3 vehicles', label: 'No longer owned' },
            { value: '$1,247/mo', label: 'Current cost' }
          ]}
          sparklineData={[1200, 1247, 1235, 1260, 1240, 1255, 1230, 1250, 0, 0, 0, 0]}
          chartType="area"
          chartLabel="Monthly Cost (Last 12 months)"
          chartYAxis="$1,260"
          onOpenDetail={onOpenDetail}
          insightId="ghost-vehicles"
        />

        <DiscoveryCard
          title={<><LightbulbIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Avoidable Toll Routes: $31,680 Annual Opportunity</>}
          description="Detected 8 drivers making 2,847 annual trips on tolled highways when parallel free routes add only 6.2 minutes during non-peak hours. Total recoverable: $31,680/year."
          badge="Route Optimization"
          badgeColor="amber"
          stats={[
            { value: '$31,680/yr', label: 'Recoverable spend' },
            { value: '2,847', label: 'Avoidable trips' },
            { value: '6.2 min', label: 'Time penalty' }
          ]}
          sparklineData={[1100, 1180, 1150, 1200, 1165, 1210, 1190, 1175, 1205, 1160, 1195, 1185]}
          chartType="line"
          chartLabel="Daily Toll Spend (Last 12 days)"
          chartYAxis="$1,210"
          onOpenDetail={onOpenDetail}
          insightId="avoidable-toll-routes"
        />

        <DiscoveryCard
          title={<><WarningIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Systematic Billing Errors: $7,847 Recoverable</>}
          description="Cross-referenced toll authority billing against GPS timestamps and found 127 erroneous charges across 18 vehicles in past 6 months. Documentation automatically generated with GPS evidence."
          badge="Revenue Recovery"
          badgeColor="green"
          stats={[
            { value: '$7,847', label: 'Total recoverable' },
            { value: '127', label: 'Erroneous charges' },
            { value: '18', label: 'Affected vehicles' }
          ]}
          sparklineData={[85, 0, 125, 45, 0, 210, 95, 35, 165, 0, 110, 245, 75, 40, 185, 120, 0, 155]}
          chartType="bar"
          chartLabel="Duplicate Charge Occurrences (Last 18 weeks)"
          chartYAxis="$245"
          onOpenDetail={onOpenDetail}
          insightId="billing-errors"
        />
      </Flex>
    </Flex>
  )
}
