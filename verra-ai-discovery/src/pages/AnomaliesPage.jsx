import { Flex, Grid, Card, Text, Heading } from '@radix-ui/themes'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import ErrorIcon from '@mui/icons-material/Error'
import WarningIcon from '@mui/icons-material/Warning'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DiscoveryCard from '../components/DiscoveryCard'

export default function AnomaliesPage({ onOpenDetail }) {
  return (
    <Flex direction="column" gap="6">
      {/* Hero Metrics */}
      <Grid columns="3" gap="6">
        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px' }}>
            Anomalies Detected
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>31</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--red-10)' }} />
            <Text size="1" style={{ color: 'var(--red-10)' }}>12 new this week</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px' }}>
            Critical Issues Requiring Action
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>9</Heading>
          <Flex align="center" gap="1">
            <Text size="1" style={{ color: 'var(--red-10)' }}>Fraud, cloning, policy violations</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px' }}>
            Potential Fraud Loss Prevented
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>$52,340</Heading>
          <Flex align="center" gap="1">
            <Text size="1" style={{ color: 'var(--green-10)' }}>Annual impact from detected anomalies</Text>
          </Flex>
        </Card>
      </Grid>

      {/* Anomaly Cards */}
      <Flex direction="column" gap="6">
        <DiscoveryCard
          title={<><ErrorIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Transponder Cloning: Vehicle #4421 (2020 Ram ProMaster)</>}
          description="Detected 47 toll crossings in 58 minutes on October 18, 2024—physically impossible pattern suggesting transponder cloning fraud. Vehicle plate CA-2RAM421 recorded at I-90 Exit 12 (Worcester) at 2:47 PM, then I-90 Exit 18 (Sturbridge) at 2:51 PM (34 miles in 4 minutes = 510 mph impossible speed). Pattern repeated 23 times between 2:47-3:45 PM across 6 toll plazas spanning 180 miles. Legitimate driver Kevin Rodriguez confirmed vehicle was at warehouse loading dock entire afternoon—security footage and GPS telematics verify location. Clone transponder responsible for $3,847 in fraudulent charges past 30 days. MassDOT fraud case opened, transponder flagged, replacement issued. Estimated fraud started September 12 based on anomaly timeline."
          badge="Transponder Fraud - Law Enforcement Notified"
          badgeColor="red"
          stats={[
            { value: '$3,847', label: '30-day fraud charges' },
            { value: '47', label: 'Impossible crossings' },
            { value: '99.2%', label: 'Fraud confidence' }
          ]}
          sparklineData={[20, 25, 30, 85, 90, 95, 100, 95, 85, 30, 25, 20]}
          chartType="bar"
          chartLabel="Daily Fraudulent Charges (Last 14 days)"
          chartYAxis="$310"
          onOpenDetail={onOpenDetail}
          insightId="transponder-cloning-4421"
        />

        <DiscoveryCard
          title={<><ErrorIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Unauthorized After-Hours Vehicle Use: 5 Drivers</>}
          description="Five vehicles consistently using tolls between 2:00-4:30 AM, outside company operating hours (6 AM-10 PM policy). Vehicles involved: #3421 (2021 Ford Transit, plate CA-9TRN421, driver Lisa Chen), #2847 (2019 Chevy Express, plate CA-4EXP847, driver Mike Patterson), #4201 (2020 Ram ProMaster, plate CA-2PM4201, driver David Kim), #1893 (2018 Ford Transit, plate CA-7TRN893, driver Carlos Ruiz), #3156 (2022 Mercedes Sprinter, plate CA-1SPR156, driver Amanda Foster). Pattern shows 67 after-hours toll events past 60 days, primarily Thursday-Saturday nights. Chen's pattern: Golden Gate Bridge 2:47 AM, Bay Bridge 3:15 AM—route between San Francisco nightlife districts and East Bay residential area. Total unauthorized toll charges: $892 past 60 days. GPS telematics confirm vehicles leaving company lot 1:45-2:30 AM, returning 4:30-5:15 AM (before 6 AM shift start). Security footage shows drivers arriving for shifts in personal vehicles at 6 AM. Moonlighting for ride-share services suspected. HR investigation opened for policy violation (personal use of company assets, insurance liability)."
          badge="Policy Violation - HR Review Required"
          badgeColor="red"
          stats={[
            { value: '$892', label: '60-day unauthorized tolls' },
            { value: '67', label: 'After-hours events' },
            { value: '5', label: 'Drivers involved' }
          ]}
          sparklineData={[10, 15, 80, 85, 90, 88, 82, 15, 12, 10, 8, 5]}
          chartType="area"
          chartLabel="After-Hours Toll Activity by Week (Last 12 weeks)"
          chartYAxis="$90"
          onOpenDetail={onOpenDetail}
          insightId="after-hours-usage"
        />

        <DiscoveryCard
          title={<><WarningIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Duplicate Transponder Registration: 3 VINs with Multiple Active IDs</>}
          description="Three vehicles registered with multiple active transponder IDs simultaneously—administrative error or potential fraud setup. Vehicle #2847 (VIN: 1FTFW1E52LKE24891, 2020 Ford F-150, plate CA-8TRK847) has transponders E-ZPass #8847-2401-9982 AND #8847-3309-7721 both active and billing since August 2024. Vehicle #4201 (VIN: 3C6TRVDG5ME567234, 2021 Ram 3500, plate CA-5RAM201) has transponders #8847-4201-5563 AND #8847-4298-1147—one issued in company name, one personal account (billing to David Kim's home address). Vehicle #1556 (VIN: 1GCVKREC4FZ234567, 2015 Chevy 2500HD, plate CA-2CHV556) has THREE transponders active: #8847-1556-8821, #8847-1598-4429, #8847-9104-3381. Root cause analysis: Vehicle #2847 got replacement transponder but old one never deactivated. Vehicle #4201 driver using personal transponder for some trips to mask personal mileage. Vehicle #1556 historical admin error—transponders reissued twice without deactivation. Total duplicate charge exposure: $2,340 over past 4 months where tolls billed to multiple accounts for same crossing. Recommend: Audit all transponder assignments, deactivate duplicates, implement single-transponder-per-VIN policy with exception workflow."
          badge="Administrative Error & Fraud Risk"
          badgeColor="amber"
          stats={[
            { value: '3', label: 'Vehicles affected' },
            { value: '7', label: 'Active transponders' },
            { value: '$2,340', label: 'Duplicate charge exposure' }
          ]}
          sparklineData={[40, 42, 45, 60, 62, 65, 63, 60, 58, 55, 52, 50]}
          chartType="line"
          chartLabel="Monthly Duplicate Transponder Charges (Last 12 months)"
          chartYAxis="$65"
          onOpenDetail={onOpenDetail}
          insightId="duplicate-transponder-registration"
        />

        <DiscoveryCard
          title={<><WarningIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Weekend Personal Use: Driver Rachel Morrison (#847)</>}
          description="Vehicle #3401 (2021 Mercedes Sprinter, plate CA-6SPR401) assigned to driver Rachel Morrison shows systematic weekend toll pattern to residential areas inconsistent with business operations. Past 90 days: 31 weekend toll events, all Saturdays/Sundays. Pattern: Leaves company facility Oakland at 9:15 AM Saturday via Bay Bridge ($6), I-580 East ($4.50), arrives Livermore residential neighborhood (GPS shows 2-hour stop at 4847 Vineyard Ave—DMV records cross-reference to Morrison's mother's address). Returns Oakland 7:45 PM same route ($10.50 total per trip). Sunday pattern: Similar route to different Livermore address (873 Portola Ave), 4-hour stops. Total personal use tolls: $651 past 90 days (31 trips × avg $21/trip). Estimated unauthorized mileage: 3,720 miles (120 miles round-trip × 31 trips). Morrison hired 8 months ago, signed vehicle use policy prohibiting personal use. Additional concern: Insurance liability—personal trips not covered under commercial policy. GPS telematics confirm stops at residential addresses with engine off 2-4 hours (not service calls). Morrison's assigned routes are San Francisco/Oakland metro—Livermore is 35 miles outside service territory. Recommend: HR counseling, policy reinforcement, mileage reimbursement calculation."
          badge="Policy Violation - Personal Use"
          badgeColor="amber"
          stats={[
            { value: '$651', label: '90-day personal tolls' },
            { value: '31', label: 'Weekend incidents' },
            { value: '3,720 mi', label: 'Unauthorized mileage' }
          ]}
          sparklineData={[30, 35, 40, 70, 75, 78, 80, 75, 70, 65, 60, 55]}
          chartType="bar"
          chartLabel="Weekly Personal Use Toll Charges (Last 12 weeks)"
          chartYAxis="$80"
          onOpenDetail={onOpenDetail}
          insightId="personal-use-morrison"
        />

        <DiscoveryCard
          title={<><CheckCircleIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Impossible Location Violation: Plate Misread</>}
          description="Vehicle #3421 (2022 Ford F-150, plate IL-4TRK321, VIN: 1FTFW1E88NFB12847) received toll violation citation from NYC Port Authority George Washington Bridge on November 3, 2024 at 3:47 PM claiming unpaid toll and $45 administrative fee. GPS telematics data irrefutably shows vehicle was in Chicago, IL at that exact timestamp: 3:47 PM location 41.8781° N, 87.6298° W (West Loop warehouse district), stationary for delivery. Driver Thomas Reynolds confirmed delivery to Lou Malnati's warehouse, signed delivery receipt timestamped 3:42 PM, remained on-site until 4:15 PM. Distance Chicago to NYC George Washington Bridge: 789 miles—physically impossible. Root cause: Automated toll camera OCR misread different plate as IL-4TRK321. Submitted dispute package to Port Authority with GPS evidence, delivery receipt, telematics data export showing complete vehicle location history for November 3. Port Authority confirmed citation error, violation dismissed, $45 fee refunded. Additional action: Flagged automated OCR system issue—recommend Port Authority review camera at GWB upper level Plaza 14 (source of misread). This is 4th such occurrence across fleet in past 18 months, all dismissed upon GPS evidence submission. Recommend: Automated alert system for any toll violation >500 miles from GPS location to fast-track dispute process."
          badge="Violation Dismissed - OCR Error"
          badgeColor="green"
          stats={[
            { value: '789 mi', label: 'Impossible distance' },
            { value: '$45', label: 'Fee refunded' },
            { value: '100%', label: 'Dispute success rate' }
          ]}
          sparklineData={[20, 22, 25, 30, 32, 35, 33, 30, 28, 25, 23, 20]}
          chartType="area"
          chartLabel="Similar OCR Misread Incidents (Last 18 months)"
          chartYAxis="35 cases"
          onOpenDetail={onOpenDetail}
          insightId="impossible-location-ocr"
        />
      </Flex>
    </Flex>
  )
}
