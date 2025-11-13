import { Flex, Grid, Card, Text, Heading, TextField, Button, Badge } from '@radix-ui/themes'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'

export default function TransactionsPageFull({ onOpenDetail }) {
  const transactions = [
    { id: 'TXN-89473', date: '2025-11-13', time: '08:47 AM', vehicle: 'VH-2847', driver: 'J. Martinez', type: 'Toll', location: 'I-90 Exit 12 WB', amount: 24.50, method: 'Transponder' },
    { id: 'TXN-89472', date: '2025-11-13', time: '07:15 AM', vehicle: 'VH-4421', driver: 'S. Chen', type: 'Toll', location: 'Golden Gate Bridge SB', amount: 8.20, method: 'Transponder' },
    { id: 'TXN-89471', date: '2025-11-12', time: '05:30 PM', vehicle: 'VH-1204', driver: 'M. Torres', type: 'Toll', location: 'I-95 Express Lanes', amount: 18.75, method: 'Transponder' },
    { id: 'TXN-89470', date: '2025-11-12', time: '02:45 PM', vehicle: 'VH-3891', driver: 'K. Johnson', type: 'Toll', location: 'Mass Pike WB Exit 14', amount: 11.15, method: 'Transponder' },
    { id: 'TXN-89469', date: '2025-11-12', time: '11:20 AM', vehicle: 'VH-2156', driver: 'L. Anderson', type: 'Toll', location: 'I-80 Toll Plaza', amount: 15.30, method: 'Transponder' },
    { id: 'TXN-89468', date: '2025-11-11', time: '09:15 PM', vehicle: 'VH-4509', driver: 'R. Williams', type: 'Violation', location: 'Red Light - Main & 5th', amount: 200.00, method: 'Camera' },
    { id: 'TXN-89467', date: '2025-11-11', time: '04:30 PM', vehicle: 'VH-3782', driver: 'D. Brown', type: 'Toll', location: 'I-90 Express EB', amount: 22.40, method: 'Transponder' },
    { id: 'TXN-89466', date: '2025-11-11', time: '01:45 PM', vehicle: 'VH-2847', driver: 'J. Martinez', type: 'Toll', location: 'I-90 Exit 14 EB', amount: 19.80, method: 'Transponder' },
    { id: 'TXN-89465', date: '2025-11-10', time: '10:20 AM', vehicle: 'VH-1831', driver: 'T. Garcia', type: 'Toll', location: 'Bay Bridge WB', amount: 7.00, method: 'Transponder' },
    { id: 'TXN-89464', date: '2025-11-10', time: '08:00 AM', vehicle: 'VH-4122', driver: 'P. Davis', type: 'Violation', location: 'Speeding - I-95 MP47', amount: 150.00, method: 'Radar' }
  ]

  const monthlyVolume = [
    { month: 'Jan', amount: 287400 },
    { month: 'Feb', amount: 298200 },
    { month: 'Mar', amount: 312500 },
    { month: 'Apr', amount: 305800 },
    { month: 'May', amount: 334900 },
    { month: 'Jun', amount: 347200 },
    { month: 'Jul', amount: 356800 },
    { month: 'Aug', amount: 371500 },
    { month: 'Sep', amount: 365400 },
    { month: 'Oct', amount: 389700 },
    { month: 'Nov', amount: 402300 },
    { month: 'Dec', amount: 395600 }
  ]

  return (
    <Flex direction="column" gap="6">
      {/* Hero Metrics */}
      <Grid columns="4" gap="6">
        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Total Transactions
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>125,847</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--green-10)' }} />
            <Text size="1" style={{ color: 'var(--green-10)' }}>18.2% vs last period</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Transaction Value
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>$3.2M</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--green-10)' }} />
            <Text size="1" style={{ color: 'var(--green-10)' }}>12.8% increase</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Failed Transactions
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>234</Heading>
          <Flex align="center" gap="1">
            <TrendingDownIcon style={{ width: 16, height: 16, color: 'var(--green-10)' }} />
            <Text size="1" style={{ color: 'var(--green-10)' }}>24% decrease</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Avg Daily Value
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>$8,767</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--indigo-10)' }} />
            <Text size="1" style={{ color: 'var(--indigo-10)' }}>Consistent trend</Text>
          </Flex>
        </Card>
      </Grid>

      {/* Transaction Volume Chart */}
      <Card style={{ padding: '32px' }}>
        <Heading size="5" mb="4">Transaction Volume Over Time (Last 12 Months)</Heading>
        <Flex gap="2" align="end" style={{ height: '200px', marginTop: '24px' }}>
          {monthlyVolume.map((item, idx) => (
            <Flex key={idx} direction="column" align="center" gap="2" style={{ flex: 1 }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: `${(item.amount / 402300) * 170}px`,
                background: 'linear-gradient(180deg, var(--indigo-8) 0%, var(--indigo-10) 100%)',
                borderRadius: 'var(--radius-2)',
                transition: 'all 0.3s'
              }}>
                <Text size="1" weight="bold" style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'var(--gray-11)',
                  whiteSpace: 'nowrap',
                  fontSize: '10px'
                }}>
                  ${(item.amount / 1000).toFixed(0)}K
                </Text>
              </div>
              <Text size="1" style={{ color: 'var(--gray-10)' }}>
                {item.month}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Card>

      {/* Search and Filter Section */}
      <Card style={{ padding: '32px' }}>
        <Flex justify="between" align="center" mb="4">
          <Heading size="5">
            <ReceiptLongIcon style={{ width: 20, height: 20, marginRight: '8px', verticalAlign: 'text-bottom' }} />
            Transaction Search
          </Heading>
          <Button variant="soft" size="2">
            <FileDownloadIcon style={{ width: 16, height: 16, marginRight: '4px' }} />
            Export Data
          </Button>
        </Flex>

        <Flex gap="3" mb="4">
          <TextField.Root
            placeholder="Search by transaction ID, vehicle, driver..."
            style={{ flex: 1 }}
          >
            <TextField.Slot>
              <SearchIcon style={{ width: 16, height: 16 }} />
            </TextField.Slot>
          </TextField.Root>
          <Button variant="soft" size="2">
            <FilterListIcon style={{ width: 16, height: 16, marginRight: '4px' }} />
            Filters
          </Button>
        </Flex>

        {/* Transaction Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--gray-4)' }}>
                <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>ID</th>
                <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Date/Time</th>
                <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Vehicle</th>
                <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Driver</th>
                <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Location</th>
                <th style={{ textAlign: 'right', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Amount</th>
                <th style={{ textAlign: 'center', padding: '12px', color: 'var(--gray-11)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Method</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--gray-3)' }}>
                  <td style={{ padding: '14px', color: 'var(--indigo-11)', fontWeight: 500, fontSize: '13px', fontFamily: 'monospace' }}>{txn.id}</td>
                  <td style={{ padding: '14px', color: 'var(--gray-11)', fontSize: '14px' }}>
                    <div>{txn.date}</div>
                    <div style={{ fontSize: '12px', color: 'var(--gray-10)' }}>{txn.time}</div>
                  </td>
                  <td style={{ padding: '14px', color: 'var(--gray-12)', fontWeight: 500, fontSize: '14px' }}>{txn.vehicle}</td>
                  <td style={{ padding: '14px', color: 'var(--gray-12)', fontSize: '14px' }}>{txn.driver}</td>
                  <td style={{ padding: '14px' }}>
                    <Badge
                      color={txn.type === 'Toll' ? 'blue' : 'red'}
                      variant="soft"
                      size="2"
                    >
                      {txn.type}
                    </Badge>
                  </td>
                  <td style={{ padding: '14px', color: 'var(--gray-11)', fontSize: '14px' }}>{txn.location}</td>
                  <td style={{ padding: '14px', textAlign: 'right', color: 'var(--gray-12)', fontSize: '14px', fontFamily: 'monospace', fontWeight: 600 }}>
                    ${txn.amount.toFixed(2)}
                  </td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--gray-11)', fontSize: '13px' }}>{txn.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Flex justify="between" align="center" style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--gray-4)' }}>
          <Text size="2" style={{ color: 'var(--gray-11)' }}>
            Showing 10 of 125,847 transactions
          </Text>
          <Flex gap="2">
            <Button variant="soft" size="2">Previous</Button>
            <Button variant="soft" size="2">Next</Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}
