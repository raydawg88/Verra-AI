import { Flex, Grid, Card, Text, Heading, Badge, TextField } from '@radix-ui/themes'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import PersonIcon from '@mui/icons-material/Person'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SearchIcon from '@mui/icons-material/Search'

export default function ViolationsDeepDivePageFull({ onOpenDetail }) {
  const driverSafetyScores = [
    { driver: 'Driver A', score: 95, violations: 2, status: 'excellent' },
    { driver: 'Driver B', score: 88, violations: 4, status: 'good' },
    { driver: 'Driver C', score: 82, violations: 7, status: 'good' },
    { driver: 'Driver D', score: 76, violations: 9, status: 'fair' },
    { driver: 'Driver E', score: 68, violations: 12, status: 'fair' },
    { driver: 'Driver F', score: 61, violations: 15, status: 'poor' },
    { driver: 'Driver G', score: 54, violations: 19, status: 'poor' },
    { driver: 'Driver H', score: 47, violations: 23, status: 'critical' }
  ]

  const violationHotspots = [
    { location: 'I-95 Mile 47', count: 247, severity: 'high' },
    { location: 'US-1 Downtown', count: 189, severity: 'high' },
    { location: 'I-90 Exit 12', count: 156, severity: 'medium' },
    { location: 'I-80 Toll Plaza', count: 134, severity: 'medium' },
    { location: 'I-75 Junction', count: 112, severity: 'medium' },
    { location: 'I-10 Commercial', count: 98, severity: 'low' },
    { location: 'US-101 Express', count: 87, severity: 'low' },
    { location: 'I-5 Corridor', count: 76, severity: 'low' }
  ]

  const recentViolations = [
    { date: '2025-11-12', vehicle: 'VH-2847', driver: 'J. Martinez', type: 'Speeding', location: 'I-95 Mile 47', fine: 150, status: 'Paid' },
    { date: '2025-11-11', vehicle: 'VH-4421', driver: 'S. Chen', type: 'Red Light', location: 'US-1 & Main St', fine: 200, status: 'Pending' },
    { date: '2025-11-10', vehicle: 'VH-1204', driver: 'M. Torres', type: 'Speeding', location: 'I-90 Exit 12', fine: 175, status: 'Paid' },
    { date: '2025-11-09', vehicle: 'VH-3891', driver: 'K. Johnson', type: 'Parking', location: 'Downtown Zone 4', fine: 65, status: 'Pending' },
    { date: '2025-11-08', vehicle: 'VH-2156', driver: 'L. Anderson', type: 'Speeding', location: 'I-95 Mile 47', fine: 150, status: 'Contested' }
  ]

  const getScoreColor = (score) => {
    if (score >= 90) return 'var(--green-9)'
    if (score >= 80) return 'var(--blue-9)'
    if (score >= 70) return 'var(--amber-9)'
    if (score >= 60) return 'var(--orange-9)'
    return 'var(--red-9)'
  }

  const getSeverityColor = (severity) => {
    if (severity === 'high') return 'var(--red-9)'
    if (severity === 'medium') return 'var(--amber-9)'
    return 'var(--blue-9)'
  }

  return (
    <Flex direction="column" gap="6">
      {/* Hero Metrics */}
      <Grid columns="3" gap="6">
        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Speeding Violations
          </Text>
          <Heading size="7" style={{ marginBottom: '12px', color: 'var(--red-11)' }}>847</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--red-10)' }} />
            <Text size="1" style={{ color: 'var(--red-10)' }}>22% increase</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Red Light Violations
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>312</Heading>
          <Flex align="center" gap="1">
            <TrendingDownIcon style={{ width: 16, height: 16, color: 'var(--green-10)' }} />
            <Text size="1" style={{ color: 'var(--green-10)' }}>8% decrease</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Parking Violations
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>88</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--amber-10)' }} />
            <Text size="1" style={{ color: 'var(--amber-10)' }}>14% increase</Text>
          </Flex>
        </Card>
      </Grid>

      {/* Driver Safety Scores */}
      <Card style={{ padding: '32px' }}>
        <Heading size="5" mb="4">
          <PersonIcon style={{ width: 20, height: 20, marginRight: '8px', verticalAlign: 'text-bottom' }} />
          Driver Safety Scores
        </Heading>
        <Flex direction="column" gap="3" style={{ marginTop: '24px' }}>
          {driverSafetyScores.map((driver, idx) => (
            <Flex key={idx} direction="column" gap="2">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Text size="3" weight="bold" style={{ color: 'var(--gray-12)', minWidth: '100px' }}>
                    {driver.driver}
                  </Text>
                  <Badge
                    color={driver.status === 'excellent' ? 'green' : driver.status === 'good' ? 'blue' : driver.status === 'fair' ? 'amber' : 'red'}
                    variant="soft"
                    size="2"
                  >
                    {driver.status.toUpperCase()}
                  </Badge>
                </Flex>
                <Flex gap="4" align="center">
                  <Text size="2" style={{ color: 'var(--gray-10)' }}>
                    {driver.violations} violations
                  </Text>
                  <Text size="3" weight="bold" style={{ color: getScoreColor(driver.score), fontFamily: 'monospace' }}>
                    {driver.score}
                  </Text>
                </Flex>
              </Flex>
              <div style={{
                width: '100%',
                height: '12px',
                background: 'var(--gray-3)',
                borderRadius: 'var(--radius-2)',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${driver.score}%`,
                  height: '100%',
                  background: getScoreColor(driver.score),
                  transition: 'width 0.3s'
                }} />
              </div>
            </Flex>
          ))}
        </Flex>
      </Card>

      {/* Violation Hotspots */}
      <Card style={{ padding: '32px' }}>
        <Heading size="5" mb="4">
          <LocationOnIcon style={{ width: 20, height: 20, marginRight: '8px', verticalAlign: 'text-bottom' }} />
          Violation Hotspots by Route
        </Heading>
        <Grid columns="2" gap="3" style={{ marginTop: '24px' }}>
          {violationHotspots.map((hotspot, idx) => (
            <Flex key={idx} direction="column" gap="2" style={{
              padding: '16px',
              background: 'var(--gray-2)',
              borderRadius: 'var(--radius-3)',
              border: `1px solid ${hotspot.severity === 'high' ? 'var(--red-5)' : hotspot.severity === 'medium' ? 'var(--amber-5)' : 'var(--blue-5)'}`
            }}>
              <Flex justify="between" align="start">
                <Flex direction="column" gap="1">
                  <Text size="3" weight="bold" style={{ color: 'var(--gray-12)' }}>
                    {hotspot.location}
                  </Text>
                  <Text size="2" style={{ color: 'var(--gray-10)' }}>
                    {hotspot.count} violations
                  </Text>
                </Flex>
                <Badge
                  color={hotspot.severity === 'high' ? 'red' : hotspot.severity === 'medium' ? 'amber' : 'blue'}
                  variant="soft"
                  size="2"
                >
                  {hotspot.severity.toUpperCase()}
                </Badge>
              </Flex>
              <div style={{
                width: '100%',
                height: '8px',
                background: 'var(--gray-4)',
                borderRadius: 'var(--radius-1)',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(hotspot.count / 247) * 100}%`,
                  height: '100%',
                  background: getSeverityColor(hotspot.severity)
                }} />
              </div>
            </Flex>
          ))}
        </Grid>
      </Card>

      {/* Recent Violations Table */}
      <Card style={{ padding: '32px' }}>
        <Flex justify="between" align="center" mb="4">
          <Heading size="5">Detailed Violation History</Heading>
          <TextField.Root
            placeholder="Search violations..."
            style={{ maxWidth: '300px' }}
          >
            <TextField.Slot>
              <SearchIcon style={{ width: 16, height: 16 }} />
            </TextField.Slot>
          </TextField.Root>
        </Flex>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--gray-4)' }}>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Date</th>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Vehicle</th>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Driver</th>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Location</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Fine</th>
              <th style={{ textAlign: 'center', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentViolations.map((violation, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid var(--gray-3)' }}>
                <td style={{ padding: '14px', color: 'var(--gray-11)', fontSize: '14px' }}>{violation.date}</td>
                <td style={{ padding: '14px', color: 'var(--gray-12)', fontWeight: 500, fontSize: '14px' }}>{violation.vehicle}</td>
                <td style={{ padding: '14px', color: 'var(--gray-12)', fontSize: '14px' }}>{violation.driver}</td>
                <td style={{ padding: '14px', color: 'var(--gray-11)', fontSize: '14px' }}>{violation.type}</td>
                <td style={{ padding: '14px', color: 'var(--gray-11)', fontSize: '14px' }}>{violation.location}</td>
                <td style={{ padding: '14px', textAlign: 'right', color: 'var(--gray-12)', fontSize: '14px', fontFamily: 'monospace', fontWeight: 600 }}>
                  ${violation.fine}
                </td>
                <td style={{ padding: '14px', textAlign: 'center' }}>
                  <Badge
                    color={violation.status === 'Paid' ? 'green' : violation.status === 'Contested' ? 'amber' : 'red'}
                    variant="soft"
                    size="2"
                  >
                    {violation.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Flex>
  )
}
