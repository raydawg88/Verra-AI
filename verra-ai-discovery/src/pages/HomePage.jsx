import { Flex, Grid, Card, Text, Heading, Badge, Button } from '@radix-ui/themes'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import WarningIcon from '@mui/icons-material/Warning'
import BoltIcon from '@mui/icons-material/Bolt'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

export default function HomePage({ onOpenDetail, onNavigate }) {
  return (
    <Flex direction="column" gap="6">
      {/* Key Metrics */}
      <Grid columns="4" gap="4">
        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Total Insights
          </Text>
          <Heading size="7" style={{ marginBottom: '4px' }}>24</Heading>
          <Text size="2" style={{ color: 'var(--gray-11)' }}>Discoveries found</Text>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Annual Savings
          </Text>
          <Heading size="7" style={{ marginBottom: '4px', color: 'var(--green-11)' }}>$387,428</Heading>
          <Text size="2" style={{ color: 'var(--gray-11)' }}>Optimization potential</Text>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Critical Issues
          </Text>
          <Heading size="7" style={{ marginBottom: '4px', color: 'var(--red-11)' }}>2</Heading>
          <Text size="2" style={{ color: 'var(--gray-11)' }}>Require immediate action</Text>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Data Analyzed
          </Text>
          <Heading size="7" style={{ marginBottom: '4px' }}>2.3M+</Heading>
          <Text size="2" style={{ color: 'var(--gray-11)' }}>Transaction data points</Text>
        </Card>
      </Grid>

      {/* Critical Alert */}
      <Card style={{
        padding: '32px',
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(220, 38, 38, 0.08) 100%)',
        border: '2px solid var(--red-7)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--red-9)'
        }} />

        <Flex gap="4" align="start">
          <div style={{
            padding: '12px',
            background: 'var(--red-3)',
            borderRadius: 'var(--radius-3)',
            border: '1px solid var(--red-5)'
          }}>
            <WarningIcon style={{ width: 24, height: 24, color: 'var(--red-11)' }} />
          </div>

          <Flex direction="column" gap="3" style={{ flex: 1 }}>
            <Flex justify="between" align="start">
              <div>
                <Heading size="5" mb="2" style={{ color: 'var(--red-12)' }}>
                  Ghost Vehicles Draining $14,964 Annually
                </Heading>
                <Text size="3" style={{ color: 'var(--gray-12)', lineHeight: 1.6 }}>
                  Found 3 vehicles sold 4-7 months ago still enrolled in toll program with active transponders processing tolls and monthly account fees. Total waste: $1,247/month for vehicles you no longer own.
                </Text>
              </div>
              <Badge color="red" variant="solid" size="2" style={{ flexShrink: 0, fontWeight: 700 }}>
                URGENT
              </Badge>
            </Flex>

            <Flex gap="6">
              <div>
                <Text size="6" weight="bold" style={{ display: 'block', color: 'var(--red-12)' }}>
                  $14,964/yr
                </Text>
                <Text size="1" style={{ color: 'var(--gray-11)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                  Annual waste
                </Text>
              </div>
              <div>
                <Text size="6" weight="bold" style={{ display: 'block', color: 'var(--red-12)' }}>
                  3 vehicles
                </Text>
                <Text size="1" style={{ color: 'var(--gray-11)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                  No longer owned
                </Text>
              </div>
              <div>
                <Text size="6" weight="bold" style={{ display: 'block', color: 'var(--red-12)' }}>
                  $1,247/mo
                </Text>
                <Text size="1" style={{ color: 'var(--gray-11)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                  Current monthly cost
                </Text>
              </div>
            </Flex>

            <Button
              size="3"
              onClick={() => onOpenDetail?.('ghost-vehicles')}
              style={{
                background: 'var(--red-9)',
                color: 'white',
                fontWeight: 600,
                cursor: 'pointer',
                width: 'fit-content'
              }}
            >
              View Full Details
              <ArrowForwardIcon style={{ marginLeft: '8px' }} />
            </Button>
          </Flex>
        </Flex>
      </Card>

      {/* Quick Links */}
      <Grid columns="3" gap="4">
        <Card
          onClick={() => onNavigate?.('insights')}
          style={{
            padding: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: '1px solid var(--indigo-4)'
          }}>
          <Flex direction="column" gap="3">
            <div style={{
              padding: '12px',
              background: 'var(--indigo-3)',
              borderRadius: 'var(--radius-3)',
              width: 'fit-content'
            }}>
              <BoltIcon style={{ width: 20, height: 20, color: 'var(--indigo-11)' }} />
            </div>
            <div>
              <Heading size="4" mb="1">View All Discoveries</Heading>
              <Text size="2" style={{ color: 'var(--gray-11)' }}>
                Explore 24 insights with detailed analysis
              </Text>
            </div>
            <Flex align="center" gap="1" style={{ color: 'var(--indigo-11)', fontWeight: 500 }}>
              <Text size="2">Explore</Text>
              <ArrowForwardIcon />
            </Flex>
          </Flex>
        </Card>

        <Card
          onClick={() => onNavigate?.('anomalies')}
          style={{
            padding: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: '1px solid var(--amber-4)'
          }}>
          <Flex direction="column" gap="3">
            <div style={{
              padding: '12px',
              background: 'var(--amber-3)',
              borderRadius: 'var(--radius-3)',
              width: 'fit-content'
            }}>
              <WarningIcon style={{ width: 20, height: 20, color: 'var(--amber-11)' }} />
            </div>
            <div>
              <Heading size="4" mb="1">Review Anomalies</Heading>
              <Text size="2" style={{ color: 'var(--gray-11)' }}>
                31 unusual patterns detected across fleet
              </Text>
            </div>
            <Flex align="center" gap="1" style={{ color: 'var(--amber-11)', fontWeight: 500 }}>
              <Text size="2">Investigate</Text>
              <ArrowForwardIcon />
            </Flex>
          </Flex>
        </Card>

        <Card
          onClick={() => onNavigate?.('forecasting')}
          style={{
            padding: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: '1px solid var(--violet-4)'
          }}>
          <Flex direction="column" gap="3">
            <div style={{
              padding: '12px',
              background: 'var(--violet-3)',
              borderRadius: 'var(--radius-3)',
              width: 'fit-content'
            }}>
              <RocketLaunchIcon style={{ width: 20, height: 20, color: 'var(--violet-11)' }} />
            </div>
            <div>
              <Heading size="4" mb="1">Budget Forecasting</Heading>
              <Text size="2" style={{ color: 'var(--gray-11)' }}>
                $847K predicted spend next 90 days
              </Text>
            </div>
            <Flex align="center" gap="1" style={{ color: 'var(--violet-11)', fontWeight: 500 }}>
              <Text size="2">View Forecast</Text>
              <ArrowForwardIcon />
            </Flex>
          </Flex>
        </Card>
      </Grid>

      {/* Recent Activity */}
      <Card style={{ padding: '24px' }}>
        <Heading size="4" mb="4">Recent AI Analysis</Heading>
        <Flex direction="column" gap="3">
          <Flex justify="between" align="center" style={{ padding: '12px', background: 'var(--gray-2)', borderRadius: 'var(--radius-2)' }}>
            <Flex gap="3" align="center">
              <div style={{
                width: '8px',
                height: '8px',
                background: 'var(--green-9)',
                borderRadius: '50%'
              }} />
              <Text size="2" style={{ color: 'var(--gray-12)' }}>
                <strong>Pattern Analysis</strong> completed - 5 new patterns identified
              </Text>
            </Flex>
            <Text size="1" style={{ color: 'var(--gray-10)' }}>2 hours ago</Text>
          </Flex>

          <Flex justify="between" align="center" style={{ padding: '12px', background: 'var(--gray-2)', borderRadius: 'var(--radius-2)' }}>
            <Flex gap="3" align="center">
              <div style={{
                width: '8px',
                height: '8px',
                background: 'var(--green-9)',
                borderRadius: '50%'
              }} />
              <Text size="2" style={{ color: 'var(--gray-12)' }}>
                <strong>Anomaly Detection</strong> scanned 2.3M transactions
              </Text>
            </Flex>
            <Text size="1" style={{ color: 'var(--gray-10)' }}>4 hours ago</Text>
          </Flex>

          <Flex justify="between" align="center" style={{ padding: '12px', background: 'var(--gray-2)', borderRadius: 'var(--radius-2)' }}>
            <Flex gap="3" align="center">
              <div style={{
                width: '8px',
                height: '8px',
                background: 'var(--green-9)',
                borderRadius: '50%'
              }} />
              <Text size="2" style={{ color: 'var(--gray-12)' }}>
                <strong>Forecasting Model</strong> updated with latest data
              </Text>
            </Flex>
            <Text size="1" style={{ color: 'var(--gray-10)' }}>6 hours ago</Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}
