import { Flex, Grid, Card, Text, Heading, TextField, Badge } from '@radix-ui/themes'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import RouteIcon from '@mui/icons-material/Route'
import SearchIcon from '@mui/icons-material/Search'

export default function TollingDeepDivePageFull({ onOpenDetail }) {
  const transactionsByTime = [
    { time: '6AM', value: 12340, height: 20 },
    { time: '9AM', value: 45670, height: 75 },
    { time: '12PM', value: 38900, height: 65 },
    { time: '3PM', value: 52340, height: 85 },
    { time: '6PM', value: 67890, height: 100 },
    { time: '9PM', value: 23450, height: 35 }
  ]

  const topRoutes = [
    { route: 'I-95 North', cost: 287500, trips: 12450, color: 'var(--indigo-9)' },
    { route: 'I-90 East', cost: 234800, trips: 10220, color: 'var(--indigo-8)' },
    { route: 'I-80 West', cost: 198600, trips: 8930, color: 'var(--indigo-7)' },
    { route: 'I-75 South', cost: 156300, trips: 7140, color: 'var(--indigo-6)' },
    { route: 'I-10 East', cost: 123900, trips: 5820, color: 'var(--indigo-5)' }
  ]

  const recentTransactions = [
    { date: '2025-11-13', vehicle: 'VH-2847', driver: 'J. Martinez', route: 'I-90 Exit 12', amount: 24.50, time: '08:47 AM' },
    { date: '2025-11-13', vehicle: 'VH-4421', driver: 'S. Chen', route: 'Golden Gate Bridge', amount: 8.20, time: '07:15 AM' },
    { date: '2025-11-12', vehicle: 'VH-1204', driver: 'M. Torres', route: 'I-95 Express', amount: 18.75, time: '05:30 PM' },
    { date: '2025-11-12', vehicle: 'VH-3891', driver: 'K. Johnson', route: 'Mass Pike WB', amount: 11.15, time: '02:45 PM' },
    { date: '2025-11-12', vehicle: 'VH-2156', driver: 'L. Anderson', route: 'I-80 Toll Plaza', amount: 15.30, time: '11:20 AM' }
  ]

  return (
    <Flex direction="column" gap="6">
      {/* Hero Metrics */}
      <Grid columns="3" gap="6">
        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Total Transactions
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>847,392</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--green-10)' }} />
            <Text size="1" style={{ color: 'var(--green-10)' }}>23.1% vs last period</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Avg Transaction Cost
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>$2.83</Heading>
          <Flex align="center" gap="1">
            <TrendingDownIcon style={{ width: 16, height: 16, color: 'var(--red-10)' }} />
            <Text size="1" style={{ color: 'var(--red-10)' }}>4.2% increase</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Peak Hour Transactions
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>42.7%</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--amber-10)' }} />
            <Text size="1" style={{ color: 'var(--amber-10)' }}>6.8% optimization opportunity</Text>
          </Flex>
        </Card>
      </Grid>

      {/* Transaction Volume by Time */}
      <Card style={{ padding: '32px' }}>
        <Heading size="5" mb="4">
          <AccessTimeIcon style={{ width: 20, height: 20, marginRight: '8px', verticalAlign: 'text-bottom' }} />
          Transaction Volume by Time of Day
        </Heading>
        <Flex gap="3" align="end" style={{ height: '240px', marginTop: '24px' }}>
          {transactionsByTime.map((item, idx) => (
            <Flex key={idx} direction="column" align="center" gap="3" style={{ flex: 1 }}>
              <Flex direction="column" align="center" gap="2" style={{ flex: 1, justifyContent: 'flex-end', width: '100%' }}>
                <Text size="1" weight="bold" style={{ color: 'var(--green-11)' }}>
                  {item.value.toLocaleString()}
                </Text>
                <div style={{
                  width: '100%',
                  height: `${(item.height / 100) * 180}px`,
                  background: 'linear-gradient(180deg, var(--green-9) 0%, var(--green-11) 100%)',
                  borderRadius: 'var(--radius-2)',
                  transition: 'all 0.3s'
                }} />
              </Flex>
              <Text size="2" weight="bold" style={{ color: 'var(--gray-11)' }}>
                {item.time}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Card>

      {/* Cost Distribution by Route */}
      <Card style={{ padding: '32px' }}>
        <Heading size="5" mb="4">
          <RouteIcon style={{ width: 20, height: 20, marginRight: '8px', verticalAlign: 'text-bottom' }} />
          Cost Distribution by Route
        </Heading>
        <Flex direction="column" gap="3" style={{ marginTop: '24px' }}>
          {topRoutes.map((route, idx) => (
            <Flex key={idx} direction="column" gap="2">
              <Flex justify="between" align="center">
                <Text size="3" weight="bold" style={{ color: 'var(--gray-12)' }}>
                  {route.route}
                </Text>
                <Text size="3" weight="bold" style={{ color: 'var(--gray-12)', fontFamily: 'monospace' }}>
                  ${route.cost.toLocaleString()}
                </Text>
              </Flex>
              <Flex gap="2" align="center">
                <div style={{
                  flex: 1,
                  height: '24px',
                  background: route.color,
                  borderRadius: 'var(--radius-2)',
                  position: 'relative',
                  width: `${(route.cost / 287500) * 100}%`
                }} />
                <Text size="2" style={{ color: 'var(--gray-10)', minWidth: '80px', textAlign: 'right' }}>
                  {route.trips.toLocaleString()} trips
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Card>

      {/* Recent Transactions Table */}
      <Card style={{ padding: '32px' }}>
        <Flex justify="between" align="center" mb="4">
          <Heading size="5">Recent Toll Transactions</Heading>
          <TextField.Root
            placeholder="Search transactions..."
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
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Date/Time</th>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Vehicle</th>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Driver</th>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Route/Plaza</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((txn, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid var(--gray-3)' }}>
                <td style={{ padding: '14px', color: 'var(--gray-11)', fontSize: '14px' }}>
                  <div>{txn.date}</div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-10)' }}>{txn.time}</div>
                </td>
                <td style={{ padding: '14px', color: 'var(--gray-12)', fontWeight: 500, fontSize: '14px' }}>{txn.vehicle}</td>
                <td style={{ padding: '14px', color: 'var(--gray-12)', fontSize: '14px' }}>{txn.driver}</td>
                <td style={{ padding: '14px', color: 'var(--gray-11)', fontSize: '14px' }}>{txn.route}</td>
                <td style={{ padding: '14px', textAlign: 'right', color: 'var(--gray-12)', fontSize: '14px', fontFamily: 'monospace', fontWeight: 600 }}>
                  ${txn.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Flex>
  )
}
