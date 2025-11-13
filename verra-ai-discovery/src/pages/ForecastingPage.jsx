import { Flex, Grid, Card, Text, Heading } from '@radix-ui/themes'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TimelineIcon from '@mui/icons-material/Timeline'
import DiscoveryCard from '../components/DiscoveryCard'

export default function ForecastingPage({ onOpenDetail }) {
  return (
    <Flex direction="column" gap="6">
      {/* Hero Metrics */}
      <Grid columns="3" gap="6">
        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px' }}>
            Next 90-Day Forecast
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>$847,650</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--red-10)' }} />
            <Text size="1" style={{ color: 'var(--red-10)' }}>+18% vs trailing 90 days</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px' }}>
            Projected Annual Budget Variance
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>+$127,840</Heading>
          <Flex align="center" gap="1">
            <Text size="1" style={{ color: 'var(--red-10)' }}>Budget breach in 87 days at current pace</Text>
          </Flex>
        </Card>

        <Card style={{ padding: '24px' }}>
          <Text size="1" style={{ color: 'var(--gray-10)', display: 'block', marginBottom: '8px' }}>
            AI Forecast Accuracy (Historical)
          </Text>
          <Heading size="7" style={{ marginBottom: '12px' }}>96.3%</Heading>
          <Flex align="center" gap="1">
            <TrendingUpIcon style={{ width: 16, height: 16, color: 'var(--green-10)' }} />
            <Text size="1" style={{ color: 'var(--green-10)' }}>Based on 18 months of predictions vs actuals</Text>
          </Flex>
        </Card>
      </Grid>

      {/* Forecast Cards */}
      <Flex direction="column" gap="6">
        <DiscoveryCard
          title={<><TimelineIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Toll Rate Increase: January 1 MassDOT Peak Pricing Change</>}
          description="AI prediction model (96.3% historical accuracy) forecasts 23% effective toll cost increase beginning January 1, 2025 based on: (1) MassDOT publishes rate schedules annually on January 1—historical analysis shows 18-22% increases every January for past 4 years (2022: +18%, 2023: +21%, 2024: +22%, 2025 estimated: +23% based on inflation correlation). (2) Your fleet's primary routes (I-90 Massachusetts Turnpike, I-93 tunnels) will see largest increases—MassDOT Board meeting minutes from October 2024 preview peak hour rate adjustments. (3) Current monthly toll spend: $47,340. Forecasted January monthly spend: $58,229 (+$10,889/month = +$130,668 annual impact). Financial planning impact: Q1 FY2025 toll budget needs $32,667 additional allocation (Jan-Mar overage). Mitigation options available: (A) Lock in December pricing by pre-funding E-ZPass accounts with $175,000 credit (effective 5.2% cost-of-money savings vs rate increase), (B) Accelerate route optimization initiatives (identified savings: $31,680/year) to offset 24% of rate increase impact, (C) Shift 15% of peak-hour trips (7-9 AM, 4-7 PM) to off-peak (9 AM-4 PM) where rate increases are only 12% instead of 23%—schedule flexibility analysis shows 34 daily trips could shift with zero customer SLA impact. Recommended action: CFO approve $175,000 E-ZPass pre-funding by December 15 + implement off-peak shift for 34 trips = net impact reduced from +$130,668 to +$47,240 annual (64% mitigation)."
          badge="High Confidence - Rate Change Predicted"
          badgeColor="red"
          stats={[
            { value: '+$130,668/yr', label: 'Annual impact forecast' },
            { value: '23%', label: 'Predicted rate increase' },
            { value: 'Jan 1', label: 'Effective date' }
          ]}
          sparklineData={[45, 48, 52, 55, 60, 65, 70, 75, 80, 85, 90, 100]}
          chartType="area"
          chartLabel="Forecasted Monthly Toll Cost (Next 12 months)"
          chartYAxis="$58,229"
          onOpenDetail={onOpenDetail}
          insightId="toll-rate-increase-jan1"
        />

        <DiscoveryCard
          title={<><TimelineIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Q4 Holiday Surge Forecast: +41% Volume October-December</>}
          description="Seasonal forecasting model predicts 41% toll volume increase Q4 2024 (Oct-Dec) vs Q3 2024 (Jul-Sep) based on 4-year historical pattern analysis. Historical Q4 surge data: 2021 Q4: +38% vs Q3, 2022 Q4: +43% vs Q3, 2023 Q4: +41% vs Q3. Pattern drivers: (1) E-commerce holiday shipping surge (Black Friday through Christmas)—your top 3 retail clients (Home Depot, Target, Walmart distribution) increase order volumes 67% in Q4. (2) Weather impact—rain/snow events increase from 12% of days (Q3) to 34% of days (Q4), triggering highway preference behavior (+28% toll usage on weather days). (3) Seasonal staffing—you hire 8-12 temporary drivers Q4 who lack route training (new drivers have 3.2x higher toll costs). Q3 2024 actual toll spend: $134,890. Q4 2024 forecast: $190,195 (+$55,305 quarterly increase = +41%). Budget impact: Current Q4 toll budget allocation: $145,000. Forecasted Q4 actual: $190,195. Projected Q4 overage: $45,195 (31% over budget). CFO action required: (1) Approve $45,195 budget reallocation from contingency to toll expense line by October 15 to avoid emergency funding request mid-quarter. (2) Accelerate seasonal driver route training (cost: $4,800 for 12 drivers × 2-hour workshop) to reduce new driver toll premium 60% = expected savings $18,900 Q4, offsetting 42% of surge. (3) Negotiate extended delivery windows with retail clients for non-urgent shipments to enable off-peak routing during weather events. Net Q4 forecast after mitigations: $171,295 actual vs $145,000 budget = $26,295 overage (18% over budget, down from 31%)."
          badge="Seasonal Pattern - Holiday Volume"
          badgeColor="blue"
          stats={[
            { value: '+41%', label: 'Q4 volume increase forecast' },
            { value: '$190,195', label: 'Q4 forecasted spend' },
            { value: '$45,195', label: 'Budget gap to address' }
          ]}
          sparklineData={[50, 52, 54, 56, 58, 60, 65, 72, 85, 95, 100, 98]}
          chartType="line"
          chartLabel="Quarterly Toll Spend Forecast (Next 4 quarters)"
          chartYAxis="$190,195"
          onOpenDetail={onOpenDetail}
          insightId="q4-holiday-surge"
        />

        <DiscoveryCard
          title={<><TimelineIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Fleet Expansion Forecast: 15 Vehicle Additions Q1 2025</>}
          description="Capital planning forecast: Fleet expansion of 15 vehicles scheduled Q1 2025 (January-March delivery) to support new Amazon Logistics contract (awarded October 2024, service start February 1, 2025). Fleet composition: 10× Ford Transit 350 cargo vans, 5× Mercedes Sprinter 2500 high-roof vans. Service territory: Amazon fulfillment centers in Tracy, Stockton, Sacramento requiring I-580 corridor toll routes. Toll cost forecasting model based on similar vehicle utilization: Current fleet avg toll cost per vehicle: $847/month. New Amazon contract routes analysis: Higher toll intensity—vehicles will run I-580 corridor 6x daily (vs fleet avg 3.8x daily), Bay Bridge crossings 2x daily. Forecasted toll cost per new vehicle: $1,456/month (72% higher than fleet average due to route intensity). Total new vehicle toll cost forecast: 15 vehicles × $1,456/month = $21,840/month incremental = $262,080 annual toll cost increase. Rollout timeline: 5 vehicles delivered January 15, 5 vehicles February 1, 5 vehicles February 15. Phased cost impact: January (half-month, 5 vehicles): +$3,640. February (full month, 10 vehicles + half-month 5 vehicles): +$18,200. March onward (full fleet, 15 vehicles): +$21,840/month. Financial planning required: Current FY2025 toll budget does not include Amazon contract toll costs—contract was awarded after budget approval. Budget amendment needed: +$240,436 for Feb-Dec 2025 (11 months partial year). Contract profitability impact: Amazon contract revenue: $2.8M annually. Toll costs represent 9.4% of contract revenue—within target cost ratio of <12%. Recommendation: CFO approve budget amendment request $240,436 toll line item increase, funded by Amazon contract revenue (contract is margin-positive even with toll costs). Monitor actual vs forecast monthly—if route optimization reduces toll cost per vehicle to $1,200/month (via driver training, off-peak scheduling), annual toll cost drops to $216,000, improving contract margin by $46,080."
          badge="Fleet Growth - Amazon Contract"
          badgeColor="violet"
          stats={[
            { value: '+$262,080/yr', label: 'Annual toll cost increase' },
            { value: '15', label: 'New vehicles Q1 2025' },
            { value: 'Feb 1', label: 'Service start date' }
          ]}
          sparklineData={[60, 62, 64, 66, 68, 70, 73, 76, 80, 85, 88, 90]}
          chartType="bar"
          chartLabel="Monthly Toll Cost Forecast with Fleet Expansion (Next 12 months)"
          chartYAxis="$21,840"
          onOpenDetail={onOpenDetail}
          insightId="fleet-expansion-q1"
        />

        <DiscoveryCard
          title={<><TimelineIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Optimization Savings Forecast: Implementation Roadmap</>}
          description="AI has identified 5 optimization initiatives with quantified ROI—forecast shows phased implementation will reduce annual toll costs by $387,428 (22% reduction from current run rate of $1,765,580). Initiative rollout timeline and savings forecast: (1) Ghost Vehicle Removal (Nov 2024): Deactivate 3 sold vehicle transponders = $14,964/year savings (immediate). (2) Route Optimization - High-Concentration Routes (Dec 2024): Implement tiered routing strategy on 4 primary routes, use toll-free alternatives for ≥4 hour SLA deliveries = $85,317/year savings (ramps up over 6 weeks as drivers adapt). (3) New Driver Route Training Program (Jan 2025): 2-hour onboarding workshop showing toll vs toll-free options = $165,805/year savings (60% reduction in new driver toll premium, scales with each new hire class). (4) Off-Peak Scheduling (Feb 2025): Shift 34 daily trips from peak to off-peak hours where customer SLAs permit = $47,240/year savings (15% of trips, minimal operational impact). (5) Billing Error Recovery + Automated Dispute System (Ongoing): Submit $7,847 one-time recovery, implement GPS-based automated dispute flagging = $7,847 one-time + $12,400/year ongoing recovery. (6) End-of-Month Quota System Redesign (Q2 2025): Change from monthly hard cutoff to rolling 90-day performance window = $65,836/year savings (60% reduction in rushing-behavior violations). Total forecast savings by quarter: Q4 2024: $25,070 (initiatives 1-2 partial). Q1 2025: $96,326 (initiatives 1-4 full deployment). Q2 2025: $112,857 (all initiatives at scale). Net annual run-rate savings: $387,428. Financial impact on FY2025 budget: Current annual toll forecast (no optimization): $1,765,580. Optimized annual toll forecast: $1,378,152. Net savings: $387,428 (22% reduction). CFO note: These savings are NOT speculative—each initiative has specific implementation plan, identified vehicles/routes/drivers, and quantified baseline vs target. Recommend: Approve $24,800 implementation cost (training programs, GPS system updates, process changes) = 16x ROI in year 1. Assign program manager to track monthly actual vs forecast savings to ensure accountability."
          badge="Optimization ROI Forecast"
          badgeColor="green"
          stats={[
            { value: '$387,428/yr', label: 'Total forecasted savings' },
            { value: '22%', label: 'Cost reduction vs baseline' },
            { value: '6', label: 'Initiatives in roadmap' }
          ]}
          sparklineData={[100, 98, 95, 90, 85, 80, 75, 70, 65, 60, 58, 55]}
          chartType="area"
          chartLabel="Monthly Toll Cost Forecast with Optimization Rollout (Next 12 months)"
          chartYAxis="Baseline: $147,132"
          onOpenDetail={onOpenDetail}
          insightId="optimization-savings-roadmap"
        />

        <DiscoveryCard
          title={<><TimelineIcon style={{ width: 18, height: 18, marginRight: '6px', verticalAlign: 'text-bottom' }} />Budget Breach Alert: FY2025 $127,840 Overage in 87 Days</>}
          description="Critical CFO alert: AI forecasting model predicts toll expense will breach approved FY2025 budget in 87 days (February 8, 2025) at current spend trajectory. Budget vs actual analysis: FY2025 approved toll budget: $1,680,000 annually ($140,000/month). Current actual run-rate (Oct-Nov 2024 avg): $154,820/month (10.6% over budget already). Forecasted Dec 2024 actual: $167,340 (seasonal Q4 surge + rate increase pre-buy). Forecasted Jan-Mar 2025 avg: $162,450/month (includes January 1 rate increase). Budget breach calculation: Through January 2025 (7 months): Cumulative budget allocation $980,000, forecasted actual $1,081,740 = $101,740 over budget. By fiscal year end (June 30, 2025): Cumulative budget $1,680,000, forecasted actual $1,807,840 = $127,840 over budget (7.6% overage). Root causes of overage: (1) FY2025 budget assumed flat costs vs FY2024—did not account for January 2025 MassDOT +23% rate increase ($130,668 impact). (2) Budget assumed no fleet growth—Amazon contract adding 15 vehicles mid-year ($262,080 annualized, $196,560 partial year Feb-Jun impact). (3) Budget assumed continuation of FY2024 efficiency gains—but new driver hiring (23 undertrained drivers with 3.2x cost premium) and Q4 seasonal patterns added costs. (4) Ghost vehicles ($14,964), billing errors ($7,847), personal use ($892) went undetected until AI analysis—these costs were baked into FY2025 baseline. CFO decision required by December 15, 2024: Option A: Budget Reallocation - Reallocate $127,840 from contingency reserve to toll line item. Pros: No impact to P&L. Cons: Reduces contingency buffer. Option B: Optimization Acceleration - Approve $24,800 to fast-track all 6 optimization initiatives by January (vs phased Q1-Q2 rollout). Forecasted savings $387,428/year = eliminates overage and creates $259,588 net savings vs budget. Pros: Solves FY2025 + improves FY2026 baseline. Cons: Requires ops team commitment, 8-week implementation. Option C: Hybrid - Reallocate $50,000 contingency + accelerate 3 highest-ROI optimizations (ghost vehicles, route optimization, driver training) = net $180,086 savings, keeps within budget. Recommendation: Option C Hybrid approach—balances immediate budget relief with sustainable cost improvements. Requires CFO approval by Dec 15 to execute before January rate increase."
          badge="Critical - Budget Breach Imminent"
          badgeColor="red"
          stats={[
            { value: '+$127,840', label: 'Projected FY overage' },
            { value: '87 days', label: 'Until budget breach' },
            { value: '7.6%', label: 'Over budget %' }
          ]}
          sparklineData={[40, 45, 52, 58, 65, 72, 78, 85, 92, 98, 105, 112]}
          chartType="line"
          chartLabel="Cumulative Toll Spend vs Budget (FY2025 through Jun 30)"
          chartYAxis="Budget: $1,680K"
          onOpenDetail={onOpenDetail}
          insightId="budget-breach-alert"
        />
      </Flex>
    </Flex>
  )
}
