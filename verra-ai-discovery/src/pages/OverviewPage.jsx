import { Flex, Grid, Card, Text, Heading } from '@radix-ui/themes'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import WarningIcon from '@mui/icons-material/Warning'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import BarChartIcon from '@mui/icons-material/BarChart'
import DiscoveryCard from '../components/DiscoveryCard'

export default function OverviewPage({ onOpenDetail }) {
  return (
    <Flex direction="column" gap="6">
      {/* Hero Metrics */}
      <Grid columns="3" gap="6">
        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px' }}>
            Total Annual Savings Identified
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>$92,211</Heading>
          <Flex align="center" gap="1">
            <Text size="1" style={{ color: 'var(--green-10)' }}>Across 5 actionable opportunities</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px' }}>
            Immediate Recovery Available
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>$7,847</Heading>
          <Flex align="center" gap="1">
            <Text size="1" style={{ color: 'var(--amber-10)' }}>Billing errors ready to dispute</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px' }}>
            Critical Issues Detected
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>2</Heading>
          <Flex align="center" gap="1">
            <Text size="1" style={{ color: 'var(--red-10)' }}>Require immediate action</Text>
          </Flex>
        </Card>
      </Grid>

      {/* Discovery Cards */}
      <Flex direction="column" gap="6">
        <DiscoveryCard
          title={<><AttachMoneyIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Ghost Vehicles Draining $14,964 Annually</>}
          description="Found 3 vehicles sold 4-7 months ago still enrolled in toll program: 2019 Ford F-150 (Plate: CA-8XYZ123, sold May 2024), 2020 Chevy Silverado (Plate: CA-7ABC456, sold March 2024), 2018 Ram 1500 (Plate: CA-9DEF789, sold February 2024). Transponders active and processing tolls + $45/mo account fees for vehicles you don't own. Total waste: $1,247/month."
          badge="Immediate Action Required"
          badgeColor="red"
          stats={[
            { value: '$14,964/yr', label: 'Annual waste' },
            { value: '3 vehicles', label: 'No longer owned' },
            { value: '$387', label: 'Monthly fees alone' }
          ]}
          sparklineData={[1200, 1247, 1235, 1260, 1240, 1255, 1230, 1250, 0, 0, 0, 0]}
          chartType="area"
          chartLabel="Monthly Cost (Last 12 months)"
          chartYAxis="$1,260"
          onOpenDetail={onOpenDetail}
          insightId="ghost-vehicles"
        />

        <DiscoveryCard
          title={<><WarningIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Personal Use Pattern: Driver J. Martinez</>}
          description="Vehicle #2847 (2021 Ford Transit, Plate: CA-4MRT892) assigned to Jorge Martinez shows 47 weekend toll transactions over 90 days—all at residential locations in San Jose, 58 miles from service territory. Saturday pattern: Golden Gate Bridge southbound 8:47 AM, returns northbound 11:32 PM. Sunday pattern: I-880 tolls near family address cross-referenced to DMV records. Total personal use: $892 in tolls + estimated 2,840 unauthorized miles. Martinez hired 14 months ago, clean record until this pattern emerged 3 months ago."
          badge="Policy Violation - HR Review"
          badgeColor="red"
          stats={[
            { value: '$892', label: '90-day personal tolls' },
            { value: '47', label: 'Weekend trips detected' },
            { value: '2,840 mi', label: 'Unauthorized mileage' }
          ]}
          sparklineData={[5, 8, 12, 10, 15, 280, 340, 18, 12, 8, 15, 10, 290, 310]}
          chartType="bar"
          chartLabel="Daily Toll Charges (2 weeks)"
          chartYAxis="$340"
          onOpenDetail={onOpenDetail}
          insightId="personal-use-martinez"
        />

        <DiscoveryCard
          title={<><LightbulbIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Avoidable Toll Routes: $31,680 Annual Opportunity</>}
          description="Detected 8 drivers making 2,847 annual trips on I-90 Massachusetts Turnpike between exits 10-14 ($11.15/trip) when parallel Route 9 adds only 6.2 minutes and is toll-free. These routes happen during non-peak hours (avg 11:47 AM) when time savings don't justify cost. Affected vehicles: #1204 (Ram ProMaster), #1831 (Ford Transit), #2156 (Chevy Express), #2847 (Ford Transit), #3401 (Mercedes Sprinter), #3782 (Ram ProMaster), #4122 (Ford Transit), #4509 (Chevy Express). Total recoverable: $31,680/year. Recommend: Update GPS routing to prefer Route 9 for non-urgent deliveries between 10 AM-3 PM."
          badge="Route Optimization"
          badgeColor="amber"
          stats={[
            { value: '$31,680/yr', label: 'Recoverable spend' },
            { value: '2,847', label: 'Avoidable toll trips' },
            { value: '6.2 min', label: 'Avg time penalty' }
          ]}
          sparklineData={[1100, 1180, 1150, 1200, 1165, 1210, 1190, 1175, 1205, 1160, 1195, 1185]}
          chartType="line"
          chartLabel="Daily Toll Spend (Last 12 days)"
          chartYAxis="$1,210"
          onOpenDetail={onOpenDetail}
          insightId="avoidable-toll-routes"
        />

        <DiscoveryCard
          title={<><BarChartIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />New Driver Training Gap: $18,900 Annual Waste</>}
          description="Analyzed 23 drivers hired in past 8 months—their toll costs are 4.7x higher than veteran drivers ($47.30 vs $10.10 per delivery route). New drivers default to GPS highway routing without understanding local toll-free alternatives. Example: Driver Sarah Chen (hired June 2024, vehicle #3891) averages $387/week in tolls vs comparable routes by 5-year veteran Michael Torres ($82/week) covering same territory. Pattern consistent across all new hires. Root cause: Onboarding focuses on safety/compliance, zero route training. Recommend: 2-hour route optimization workshop showing toll vs non-toll options for each service zone. Expected ROI: $18,900 annual savings + improved delivery efficiency."
          badge="Training Program ROI"
          badgeColor="blue"
          stats={[
            { value: '4.7x', label: 'New driver cost premium' },
            { value: '$18,900/yr', label: 'Training program ROI' },
            { value: '23', label: 'Undertrained drivers' }
          ]}
          sparklineData={[950, 920, 880, 830, 760, 680, 580, 490, 410, 360, 325, 310]}
          chartType="area"
          chartLabel="Avg Cost per Delivery by Driver Experience (months)"
          chartYAxis="$950"
          onOpenDetail={onOpenDetail}
          insightId="new-driver-training"
        />

        <DiscoveryCard
          title="⚠️ Systematic Billing Errors: $7,847 Recoverable"
          description="Cross-referenced toll authority billing against GPS timestamps and found 127 erroneous charges across 18 vehicles in past 6 months. Categories: (1) 47 duplicate charges—same plaza/time charged twice due to transponder read errors, primarily at I-90 Exit 12 westbound between 7-9 AM; (2) 31 charges for tolls during vehicle maintenance periods with service bay GPS confirms; (3) 28 charges on Mass Pike during proven vacation periods (drivers on PTO, vehicles in lot); (4) 21 charges at rates exceeding published toll schedule—system applied commercial peak rate to registered passenger vehicles. Documentation automatically generated with GPS evidence, maintenance logs, PTO records. Submit dispute package to E-ZPass MA and Bay State Toll Authority. Expected recovery: $7,847 within 60-90 days."
          badge="Revenue Recovery"
          badgeColor="green"
          stats={[
            { value: '$7,847', label: 'Total recoverable' },
            { value: '127', label: 'Erroneous charges' },
            { value: '18', label: 'Affected vehicles' }
          ]}
          sparklineData={[85, 0, 125, 45, 0, 210, 95, 35, 165, 0, 110, 245, 75, 40, 185, 120, 0, 155]}
          chartType="bar"
          chartLabel="Duplicate Charge Occurrences (Last 90 days by week)"
          chartYAxis="$245"
          onOpenDetail={onOpenDetail}
          insightId="billing-errors"
        />
      </Flex>
    </Flex>
  )
}
