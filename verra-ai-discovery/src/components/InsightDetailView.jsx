import { useState } from 'react'
import { Flex, Grid, Card, Text, Heading, Badge, Button, Separator, Tabs } from '@radix-ui/themes'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import BarChartIcon from '@mui/icons-material/BarChart'
import ChatIcon from '@mui/icons-material/Chat'
import ChatPanel from './ChatPanel'
import FloatingChatWidget from './FloatingChatWidget'

export default function InsightDetailView({ insight, onClose }) {
  const [activeTab, setActiveTab] = useState('analysis')
  const [chatQuestion, setChatQuestion] = useState(null)

  const handleExpandChat = (question) => {
    if (question) {
      setChatQuestion(question)
    }
    setActiveTab('chat')
  }

  if (!insight) return null

  return (
    <Flex direction="column" gap="6">
      {/* Header with back button */}
      <Flex justify="between" align="center">
        <Button
          variant="ghost"
          size="3"
          onClick={onClose}
          style={{
            cursor: 'pointer',
            color: 'var(--gray-11)',
            fontWeight: 500
          }}
        >
          <ArrowBackIcon style={{ marginRight: '8px' }} />
          Back to Overview
        </Button>
      </Flex>

      {/* Tabs */}
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List size="2">
          <Tabs.Trigger value="analysis" style={{ fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
            <BarChartIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />
            Detailed Analysis
          </Tabs.Trigger>
          <Tabs.Trigger value="chat" style={{ fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
            <ChatIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />
            Ask AI About This Insight
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="analysis" style={{ marginTop: '24px' }}>
          <Flex direction="column" gap="6">

      {/* Title Section */}
      <Card style={{
        padding: '48px',
        background: `linear-gradient(135deg, ${insight.gradientStart} 0%, ${insight.gradientEnd} 100%)`,
        border: `2px solid ${insight.borderColor}`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: insight.accentColor
        }} />

        <Flex direction="column" gap="4">
          <Flex justify="between" align="start">
            <div style={{ flex: 1 }}>
              <Heading size="8" mb="3" style={{ color: 'var(--gray-12)', lineHeight: 1.2 }}>
                {insight.title}
              </Heading>
              <Text size="5" style={{ color: 'var(--gray-11)', lineHeight: 1.6 }}>
                {insight.subtitle}
              </Text>
            </div>
            <Badge color={insight.badgeColor} variant="solid" size="3" style={{ fontWeight: 700, flexShrink: 0 }}>
              {insight.badge}
            </Badge>
          </Flex>

          {/* Key Metrics */}
          <Grid columns="4" gap="4" style={{ marginTop: '24px' }}>
            {insight.keyMetrics.map((metric, idx) => (
              <Card key={idx} style={{ padding: '20px', background: 'white' }}>
                <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                  {metric.label}
                </Text>
                <Heading size="7" style={{ color: metric.color || 'var(--gray-12)' }}>
                  {metric.value}
                </Heading>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Card>

      {/* Executive Summary */}
      <Card style={{ padding: '32px' }}>
        <Heading size="5" mb="3">Executive Summary</Heading>
        <Text size="3" style={{ color: 'var(--gray-11)', lineHeight: 1.8 }}>
          {insight.executiveSummary}
        </Text>
      </Card>

      {/* Detailed Analysis Sections */}
      {insight.sections.map((section, idx) => (
        <Card key={idx} style={{ padding: '32px' }}>
          <Heading size="5" mb="3">{section.title}</Heading>
          <Flex direction="column" gap="4">
            {section.content.map((item, itemIdx) => (
              <div key={itemIdx}>
                {item.type === 'text' && (
                  <Text size="3" style={{ color: 'var(--gray-11)', lineHeight: 1.8 }}>
                    {item.value}
                  </Text>
                )}
                {item.type === 'list' && (
                  <Flex direction="column" gap="2" style={{ paddingLeft: '20px' }}>
                    {item.items.map((listItem, listIdx) => (
                      <Flex key={listIdx} gap="2" align="start">
                        <Text size="3" style={{ color: 'var(--gray-11)', marginTop: '2px' }}>•</Text>
                        <Text size="3" style={{ color: 'var(--gray-11)', lineHeight: 1.7, flex: 1 }}>
                          {listItem}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                )}
                {item.type === 'table' && (
                  <div style={{
                    border: '1px solid var(--gray-6)',
                    borderRadius: 'var(--radius-2)',
                    overflow: 'hidden',
                    marginTop: '12px'
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ background: 'var(--gray-3)' }}>
                          {item.headers.map((header, hIdx) => (
                            <th key={hIdx} style={{
                              padding: '12px 16px',
                              textAlign: 'left',
                              fontWeight: 600,
                              fontSize: '13px',
                              color: 'var(--gray-11)',
                              borderBottom: '1px solid var(--gray-6)'
                            }}>
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {item.rows.map((row, rIdx) => (
                          <tr key={rIdx} style={{
                            borderBottom: rIdx < item.rows.length - 1 ? '1px solid var(--gray-4)' : 'none'
                          }}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} style={{
                                padding: '12px 16px',
                                fontSize: '14px',
                                color: 'var(--gray-12)',
                                fontFamily: cIdx > 0 ? 'monospace' : 'inherit'
                              }}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {item.type === 'metric-grid' && (
                  <Grid columns="3" gap="3" style={{ marginTop: '12px' }}>
                    {item.metrics.map((metric, mIdx) => (
                      <Card key={mIdx} style={{ padding: '16px', background: 'var(--gray-2)' }}>
                        <Text size="5" weight="bold" style={{ display: 'block', marginBottom: '4px', color: metric.color || 'var(--gray-12)' }}>
                          {metric.value}
                        </Text>
                        <Text size="2" style={{ color: 'var(--gray-11)' }}>
                          {metric.label}
                        </Text>
                      </Card>
                    ))}
                  </Grid>
                )}
              </div>
            ))}
          </Flex>
        </Card>
      ))}

      {/* Recommendations */}
      <Card style={{
        padding: '32px',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.08) 100%)',
        border: '1px solid var(--green-6)'
      }}>
        <Heading size="5" mb="3" style={{ color: 'var(--green-11)' }}>Recommended Actions</Heading>
        <Flex direction="column" gap="4">
          {insight.recommendations.map((rec, idx) => (
            <Card key={idx} style={{ padding: '20px', background: 'white' }}>
              <Flex gap="3">
                <div style={{
                  minWidth: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--green-3)',
                  border: '2px solid var(--green-7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  color: 'var(--green-11)',
                  fontSize: '14px'
                }}>
                  {idx + 1}
                </div>
                <Flex direction="column" gap="2" style={{ flex: 1 }}>
                  <Heading size="4">{rec.title}</Heading>
                  <Text size="3" style={{ color: 'var(--gray-11)', lineHeight: 1.7 }}>
                    {rec.description}
                  </Text>
                  {rec.impact && (
                    <Flex gap="4" style={{ marginTop: '8px' }}>
                      <Badge color="green" variant="soft" size="2">
                        Impact: {rec.impact}
                      </Badge>
                      {rec.effort && (
                        <Badge color="blue" variant="soft" size="2">
                          Effort: {rec.effort}
                        </Badge>
                      )}
                    </Flex>
                  )}
                </Flex>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Card>

      {/* ROI Analysis */}
      {insight.roiAnalysis && (
        <Card style={{ padding: '32px', background: 'var(--gray-2)' }}>
          <Heading size="5" mb="4">ROI Analysis</Heading>
          <Grid columns="2" gap="4">
            <Card style={{ padding: '24px', background: 'white' }}>
              <Text size="2" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 600 }}>
                Annual Cost (Current State)
              </Text>
              <Heading size="7" style={{ color: 'var(--red-11)' }}>
                {insight.roiAnalysis.currentCost}
              </Heading>
            </Card>
            <Card style={{ padding: '24px', background: 'white' }}>
              <Text size="2" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 600 }}>
                Annual Savings (After Fix)
              </Text>
              <Heading size="7" style={{ color: 'var(--green-11)' }}>
                {insight.roiAnalysis.savings}
              </Heading>
            </Card>
          </Grid>
          <Separator size="4" style={{ margin: '24px 0' }} />
          <Grid columns="3" gap="3">
            <div>
              <Text size="5" weight="bold" style={{ display: 'block', marginBottom: '4px' }}>
                {insight.roiAnalysis.paybackPeriod}
              </Text>
              <Text size="2" style={{ color: 'var(--gray-11)' }}>Payback Period</Text>
            </div>
            <div>
              <Text size="5" weight="bold" style={{ display: 'block', marginBottom: '4px' }}>
                {insight.roiAnalysis.implementationCost}
              </Text>
              <Text size="2" style={{ color: 'var(--gray-11)' }}>Implementation Cost</Text>
            </div>
            <div>
              <Text size="5" weight="bold" style={{ display: 'block', marginBottom: '4px', color: 'var(--green-11)' }}>
                {insight.roiAnalysis.roi}
              </Text>
              <Text size="2" style={{ color: 'var(--gray-11)' }}>Return on Investment</Text>
            </div>
          </Grid>
        </Card>
      )}
          </Flex>
        </Tabs.Content>

        <Tabs.Content value="chat" style={{ marginTop: '24px' }}>
          <ChatPanel activePage="detail" insightContext={insight} initialQuestion={chatQuestion} />
        </Tabs.Content>
      </Tabs.Root>

      {/* Floating Chat Widget - Only show when on Analysis tab */}
      {activeTab === 'analysis' && (
        <FloatingChatWidget
          onExpand={handleExpandChat}
          insightTitle={insight.title}
        />
      )}
    </Flex>
  )
}
