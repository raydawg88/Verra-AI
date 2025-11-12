# Beta AI Insights UI for Verra Mobility
## Complete Product Specification

---

## Product Overview

A conversational analytics interface that allows fleet managers to interrogate their telematics data through natural language chat rather than navigating traditional dashboards or receiving prescriptive action plans. This replaces Verra's current Tableau-based MIRA dashboard with a modern, AI-first experience.

**Powered by Vinli's Velona AI Engine** - Verra Mobility will leverage the multi-agent AI system and fleet intelligence capabilities built by Vinli, including the FRED orchestrator plus 11 specialist agents (fuel fraud, safety scoring, idling cost, inactive assets, maintenance prediction, route optimization, and more).

### User Flow - Demo Presentation

This is a **presentation/demo** of what we can build for Verra Mobility customers. The user flow is:

1. **Original MIRA Dashboard** - User starts on the current Tableau-based dashboard
2. **Beta AI Banner** - User sees a banner promoting the new AI Beta experience
3. **Consent Page** - User clicks banner and lands on consent/opt-in page explaining the AI features
4. **New AI Discovery Page** - After accepting, user sees this new Beta AI Insights interface

This flow demonstrates the transition from traditional BI dashboards to AI-powered conversational analytics, showcasing what's possible with Vinli's Velona AI platform.

---

## Technical Architecture

**Frontend:** New Beta AI Insights UI
- Built on Verra 2.0 brand DNA + premium design inspiration
- Chat-first conversational interface
- Discovery card system for conversation starters
- Real-time AI analysis presentation

**Backend Intelligence:** Velona AI Engine by Vinli
- **FRED Orchestrator:** Coordinates all specialist agents
- **Analyst Agents:** Find patterns, calculate costs, identify issues
- **Persona Agents:** Interpret findings through real-world fleet management experience
- **11 Specialist Agents:**
  1. Fuel Purchase Validation (fraud detection)
  2. Safety Score (driver risk analysis)
  3. Idling Cost (waste quantification)
  4. Inactive Asset (forgotten vehicles)
  5. Problem Asset Identifier (lemon finder)
  6. Cranking Voltage Trend (battery prediction)
  7. Driver MPG Impact (driver vs vehicle analysis)
  8. Lease Mileage Pacing (overage prevention)
  9. Route Efficiency (optimization)
  10. Maintenance Prediction (breakdown prevention)
  11. Toll/Violation Pattern Analysis (new for Verra)

This positions Vinli's Velona as the enterprise AI fleet intelligence platform that powers multiple products.

---

## Core Differentiation

### Verra AI Insights vs. Velona
- **Verra/MIRA Beta AI Insights:** "Ask me anything about your fleet data" (exploratory, analytical, conversational)
- **Velona:** "Here's what I found wrong and how to fix it" (prescriptive, action-oriented, Golden Nuggets)

### Key Differences:
**Verra Product:**
- Interrogative - fleet managers ask questions
- Conversational analytics - chat is the primary interface
- Discovery cards are conversation starters, not action items
- Focus on exploration and understanding
- "Why are my costs up?" → detailed analysis

**Velona Product:**
- Prescriptive - AI proactively identifies issues
- Discovery-first - insights drive the experience
- Cards are specific action items with ROI
- Focus on immediate remediation
- "Vehicle #4421 has $3,847/month fraud" → take action

---

## User Experience Model

### Primary User & Context
- **Primary User:** Fleet Manager who needs to interrogate their data
- **Main Goal:** Get answers through conversation, not dig through reports
- **Use Cases:**
  - "Why are my fuel costs up?"
  - "Which drivers are most efficient?"
  - "Show me toll patterns for the Chicago fleet"
  - "What's causing the spike in violations?"
- **Platform:** Desktop primarily (this is analytical work), with mobile considerations for quick questions on the go

### Visual Hierarchy
1. **Main Content Area (60%)** - Discovery cards, insights, charts, and data visualizations
2. **AI Chat Interface (30%)** - Always-present conversational assistant in grey rounded card
3. **Side Navigation (10%)** - Clean navigation menu without card background
4. **Context Indicators** - What data is available, time ranges, fleet scope

### Interaction Flow
1. Fleet manager opens Beta AI Insights
2. AI greets with context: "I've analyzed 2.3M data points from your fleet. Ask me anything."
3. Discovery cards appear showing interesting patterns: "Unusual toll activity detected in 3 vehicles"
4. User can either:
   - **Ask a question directly** in chat
   - **Click a discovery card** → pre-populates chat with context and starts conversation
5. AI responds conversationally with analysis, visualizations, and deeper questions
6. Discovery cards update as conversation reveals new insights

### Discovery Card Types (Conversation Starters)

**🔴 Anomalies** - "Things that shouldn't be possible"
- Impossible patterns
- Statistical outliers
- Fraud indicators
- *Example: "Vehicle #4421 had 47 toll crossings in one hour - want to investigate?"*

**💡 Hidden Patterns** - "Correlations you'd never find manually"
- Weather correlations
- Day-of-week patterns
- Seasonal trends
- *Example: "Your toll costs spike 47% every Tuesday between 2-4 PM. Curious why?"*

**👻 Silent Drains** - "Money disappearing without notice"
- Ghost vehicles
- Duplicate charges
- Forgotten subscriptions
- *Example: "Found 3 vehicles still enrolled but haven't moved in 6 months"*

**🔮 Predictive Insights** - "What's about to happen"
- Budget breach warnings
- Seasonal spike predictions
- Rate increase patterns
- *Example: "Based on current pacing, you'll exceed budget by $12K in 7 days"*

**🎯 Peer Intelligence** - "How you compare to others"
- Benchmarking
- Industry trends
- Best practices
- *Example: "You pay 34% more per toll than similar-sized fleets. Want to see why?"*

### Card Interaction
- **Click "Explore →"** → Starts chat conversation with pre-populated context
- **Not dismissable** - they're suggestions, not tasks
- **Update dynamically** - as chat reveals new insights, cards suggest related questions
- **Sorted by impact/interestingness** - most compelling discoveries at top

---

## Design Approach

### Design Foundation
- Built on **Verra 2.0 brand DNA** + premium design inspiration research
- **NOT using MIRA dashboard patterns** - this is a standalone "Beta AI Insights" experience
- Design inspirations: Mercury Bank, Anthropic, Stripe, Linear, **Radix UI Themes**
- Goal: "Tesla interior vs regular car interior" feel

### Design System Principles (Radix-Inspired)
We're using **Radix UI design philosophy** adapted for Vue.js with Tailwind CSS:

**Color System:**
- Accent colors: Indigo/Purple for AI branding
- Status colors: Red (anomalies), Amber (warnings), Green (opportunities), Blue (info)
- Grayscale: Surface (#F0F0F2), Text (#1A1D29), Muted (#6B7280)

**Typography:**
- System font stack for readability
- Monospace for data/numbers
- Clear hierarchy: Hero (48px) → Section (24px) → Body (14px) → Small (12px)

**Spacing & Layout:**
- Consistent spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px)
- Generous whitespace for premium feel
- Grid-based layouts with clear alignment

**Radius & Shadows:**
- Border radius: xl (12px) for cards and panels
- Shadow system: soft (subtle), card (medium), elevated (prominent)
- Layered depth with multiple shadow levels

**Components:**
- Pre-styled but customizable
- Out-of-the-box professional appearance
- Accessibility-first design patterns

### Key Design Principles

**1. Chat-First Language**
- Conversational, modern, AI-native
- Chat interface is large, beautiful, prominent
- Glass morphism effects on chat panel
- Purple gradients for AI branding elements
- Typography that feels premium but approachable

**2. Discovery Cards as Elegant Prompts**
- Not task cards - these are curiosity drivers
- Color-coded by type (red = anomaly, yellow = pattern, green = opportunity)
- Gradient borders on hover
- Integrated mini visualizations (sparklines, small charts)
- Status badges with blur effects ("16 months hidden", "Just discovered")

**3. Premium Visual Quality**
- Gradient borders throughout
- Three-layer shadow system for depth
- Subtle background texture (not flat white)
- Monospace fonts for data/numbers
- Typography hierarchy: 48px hero, 24px card titles
- Hover states: scale 1.02, border glow, shadow increase

**4. AI Presence Indicators**
- "Analyzing 2.3M data points" with pulse animation
- Confidence scores on insights
- Discovery timeline showing when things were found
- Visual sense that AI is actively working

**5. No Bootstrap Vibes**
- Custom components, not generic templates
- Sophisticated color palette beyond basic blue
- Attention to micro-interactions
- Every element feels intentional

---

## Current MIRA Dashboard Analysis

### Existing Navigation Structure
From the current Tableau dashboard, we need to preserve and enhance these sections:

**Tolling:**
- Overview (high-level metrics)
- Deep Dive (detailed analysis)
- Outliers (anomaly detection)

**Violations:**
- Overview (violation summary)
- Deep Dive (detailed violations)
- Outliers (unusual patterns)

**Transactions:**
- Transaction history and details

**Savings:**
- Cost savings opportunities

**Filters & Controls:**
- Time period selection (current vs comparison)
- Product type filtering
- Fleet filtering
- Custom date ranges

### Existing Dashboard Components to Replace

**Current Asset & Activity View Shows:**
- Total Enrolled Assets (3,111)
- Active Tolling Assets (2,555)
- Percent of Fleet Using Tolls (82.1%)
- Top Clients by Toll Count (table with YoY data)
- Toll Volume by Product (line chart)
- Count of Assets by State (geographic map)
- Enrolled Assets trend chart

**Current Toll Spend & Trends View Likely Shows:**
- Total toll spend
- Spend by time period
- Cost trends
- Budget tracking
- Spend by product type
- Cost per vehicle analytics

---

## Layout Architecture

**Three-Column Layout Structure:**
- **Left Column (10%):** Side Navigation - Clean navigation menu without card background
- **Main Column (60%):** Primary Content - Discovery cards, insights, charts, patterns, and data visualizations
- **Right Column (30%):** AI Chat Assistant - Context-aware conversational interface in grey rounded card

This layout ensures:
1. Navigation is accessible but not dominant
2. Main content area has room for rich data visualizations and discovery cards
3. AI assistant is always present and contextually helpful
4. Chat remains prominent but doesn't overwhelm the analytical content

---

## Screen-by-Screen Specification

### 1. TOLLING - OVERVIEW PAGE

**Layout:**
- **Left 10%:** Side Navigation
- **Main 60%:** Discovery Cards with charts and insights
- **Right 30%:** AI Chat Interface

**Hero Metrics Section (above chat):**
- Total Toll Spend (current period)
- Active Tolling Assets
- Average Cost Per Vehicle
- Trend indicators (↑↓ with percentages)

**Discovery Cards for Tolling:**

**🔴 Anomaly Card: "Impossible Toll Pattern"**
- "Vehicle #4421 had 47 toll crossings in one hour on I-90"
- Mini scatter plot showing outlier
- "Physically impossible - suggests transponder cloning"
- "$3,847/month potential fraud"
- [Explore Fraud Pattern →]

**💡 Pattern Card: "Tuesday Toll Spikes"**
- "Toll costs spike 47% every Tuesday 2-4 PM"
- Mini area chart showing weekly pattern
- "Hidden for 18 months, correlates with port schedules"
- "$67,000 in excess costs"
- [Explore Time Pattern →]

**👻 Silent Drain: "Duplicate Charges"**
- "Found 12 vehicles with duplicate toll charges"
- "Same plaza, same time, charged twice"
- "$847/month in duplicate billing"
- [Investigate Billing →]

**🔮 Prediction: "Rate Increase Coming"**
- "Based on seasonal patterns, 23% rate increase expected in 14 days"
- "Will add $4,200/month to costs"
- [See Historical Patterns →]

**🎯 Benchmark: "Paying 34% More"**
- "Your cost per toll is 34% higher than similar fleets"
- "Industry average: $2.43, Your average: $3.26"
- [Compare Fleet Performance →]

**AI Chat Starter Questions (as buttons in chat):**
- "Which vehicles have the highest toll costs?"
- "Show me toll patterns by day of week"
- "Why did costs increase last month?"
- "Which drivers use tolls most frequently?"
- "Compare toll usage across our fleet locations"

**Conversational AI Capabilities for Tolling:**
- Answer questions about specific vehicles, drivers, routes, time periods
- Drill into any toll transaction
- Compare time periods, locations, products
- Explain cost changes with causation analysis
- Generate custom reports through conversation
- Export specific data sets on request

---

### 2. TOLLING - DEEP DIVE PAGE

**Layout:**
- **Left 10%:** Side Navigation
- **Main 60%:** Detailed data panels, transaction tables, drill-down charts
- **Right 30%:** AI Chat Interface

**Purpose:** Detailed analytical conversations about toll data

**Discovery Cards (Floating Sidebar):**

**🔴 "Route Inefficiency Detected"**
- "3 vehicles consistently take toll routes when free alternatives save 4 minutes"
- Route comparison visualization
- "$1,240/month unnecessary toll spend"
- [Analyze Route Choices →]

**💡 "Peak Hour Avoidance Opportunity"**
- "Shifting 5 routes by 30 minutes would avoid peak toll pricing"
- Timeline visualization with pricing zones
- "$890/month savings potential"
- [Explore Schedule Optimization →]

**👻 "Inactive Transponders"**
- "4 transponders still active on vehicles sold 3 months ago"
- "$120/month in account maintenance fees"
- [Review Transponder Status →]

**Chat Capabilities:**
- Deep transaction history analysis
- Multi-variable correlations
- Driver behavior analysis related to tolls
- Route efficiency deep-dives
- Cost allocation by department/project
- Time-series analysis with seasonality

---

### 3. TOLLING - OUTLIERS PAGE

**Layout:**
- **Left 10%:** Side Navigation
- **Main 60%:** Discovery cards showcasing anomalies and outliers
- **Right 30%:** AI Chat Interface

**Purpose:** Surface unusual patterns and anomalies

**Discovery Cards (Main Content):**

**🔴 "Statistical Impossibility"**
- "Vehicle #2847 crossed 4 plazas simultaneously"
- "12 occurrences in the past 30 days"
- Geographic map showing impossible physics
- "$2,340 in fraudulent charges"
- [Investigate Cloning →]

**🔴 "After-Hours Toll Usage"**
- "5 vehicles using tolls between 2-4 AM"
- "Outside authorized operating hours"
- "$670/month in unauthorized usage"
- [Review After-Hours Activity →]

**🔴 "Personal Use Pattern"**
- "Driver #847's toll usage includes weekend trips to residential areas"
- "Pattern suggests personal use of company vehicle"
- "$340/month non-business tolls"
- [Review Driver Usage →]

**🔴 "Duplicate VIN Transponders"**
- "Same VIN appearing with 2 different transponder IDs"
- "Administrative error or fraud indicator"
- [Audit Transponder Assignments →]

**Chat Role:** Help investigate each anomaly, provide context, suggest next steps

---

### 4. VIOLATIONS - OVERVIEW PAGE

**Layout:**
- **Left 10%:** Side Navigation
- **Main 60%:** Discovery Cards with violation insights and charts
- **Right 30%:** AI Chat Interface

**Hero Metrics:**
- Total Violations (current period)
- Violation Cost
- High-Risk Drivers Count
- Trend indicators

**Discovery Cards for Violations:**

**🔴 "Repeat Speeding Offender"**
- "Driver #423 has 12 speeding violations in 30 days"
- "All on same route segment"
- Severity chart showing escalation
- "$2,400 in fines + insurance risk"
- [Review Driver Safety →]

**💡 "Location-Based Pattern"**
- "87% of speeding violations occur on Route 45 between exits 12-15"
- "Speed limit signage may be unclear"
- Map with violation hotspots
- [Analyze Route Safety →]

**👻 "Unpaid Violation Accumulation"**
- "23 violations unpaid for >60 days"
- "Late fees adding $840/month"
- "$4,200 total outstanding"
- [Review Payment Status →]

**🔮 "Driver Risk Escalation"**
- "Driver #892's violation frequency increasing 40% monthly"
- "Predicts incident within 60 days based on pattern"
- Risk trajectory chart
- [Implement Coaching →]

**🎯 "Above Industry Violation Rate"**
- "Your violation rate is 2.3x industry average for similar fleets"
- "Focus area: commercial zones"
- [Compare Performance →]

**Chat Starter Questions:**
- "Which drivers have the most violations?"
- "Show me violation trends over time"
- "What types of violations are most common?"
- "Where do violations occur most frequently?"
- "How much are violations costing us?"

---

### 5. VIOLATIONS - DEEP DIVE PAGE

**Discovery Cards:**

**💡 "Violation Time Pattern"**
- "73% of violations occur during last hour of shift"
- "Driver fatigue or rushing to complete routes"
- Hourly distribution chart
- [Analyze Scheduling Impact →]

**💡 "Vehicle Type Correlation"**
- "Box trucks have 3x more violations than vans"
- "Visibility or handling differences"
- Vehicle comparison chart
- [Review Vehicle Assignment →]

**🔴 "Camera Violation Surge"**
- "Red light camera violations up 240% in Q4"
- "New cameras installed on primary routes"
- "Training opportunity or route revision needed"
- [Map Camera Locations →]

**Chat Capabilities:**
- Driver-specific violation history
- Route-level violation analysis
- Time-based pattern recognition
- Cost projection and budgeting
- Coaching recommendation generation
- Safety score calculation

---

### 6. VIOLATIONS - OUTLIERS PAGE

**Discovery Cards:**

**🔴 "Impossible Violation Location"**
- "Vehicle #3421 cited for violation in NYC while GPS shows it in Chicago"
- "Plate misread or cloned plates"
- "[Contest Citation →]"

**🔴 "Violation Frequency Anomaly"**
- "Driver #234 went from 0 violations to 8 in one week"
- "Sudden change in behavior pattern"
- "Personal issue? Vehicle problem? Training needed?"
- [Investigate Change →]

**🔴 "Multiple Violations Same Location"**
- "6 different drivers violated at same intersection within 2 hours"
- "Sign obstruction or unclear traffic control"
- [Document Issue for Contest →]

---

### 7. TRANSACTIONS PAGE

**Layout:**
- **Left 10%:** Side Navigation
- **Main 60%:** Transaction search, filter panels, and transaction tables
- **Right 30%:** AI Chat Interface

**Purpose:** Conversational query of transaction history

**Hero Section:**
- "Ask me about any transaction"
- Search bar integrated into chat
- Recent/saved queries

**Discovery Cards:**

**👻 "Recurring Erroneous Charges"**
- "Same $4.50 charge appearing 3x per day"
- "System error or billing glitch"
- "$405/month in duplicate charges"
- [Audit Billing →]

**💡 "Payment Method Inefficiency"**
- "Using high-fee payment method for 40% of transactions"
- "Switching to account-based would save $340/month"
- [Review Payment Options →]

**Chat Capabilities:**
- Transaction lookup by any field
- Date range analysis
- Reconciliation assistance
- Billing dispute documentation
- Payment method comparison
- Export transaction sets

**Example Conversations:**
- "Show me all transactions for vehicle #4421 in October"
- "Find transactions over $50"
- "Which payment method has the highest fees?"
- "Reconcile October transactions with invoice #12847"

---

### 8. SAVINGS PAGE

**Layout:**
- **Left 10%:** Side Navigation
- **Main 60%:** Opportunity Cards ranked by ROI with visualizations
- **Right 30%:** AI Chat with ROI Calculator

**Hero Section:**
- **Total Savings Opportunity:** $47,340/year
- **Quick Wins Available:** 8 opportunities
- **Highest Impact:** Route optimization ($12K/year)

**Discovery Cards (Ranked by ROI):**

**🎯 "Route Optimization Opportunity"**
- "5 routes using unnecessary toll roads"
- "Free alternatives save 4 min avg, eliminate tolls"
- ROI visualization
- **Annual Savings: $12,400**
- [Optimize Routes →]

**🎯 "Transponder Consolidation"**
- "You maintain 12 more transponders than active vehicles"
- "Reduce account fees and administrative overhead"
- **Annual Savings: $4,800**
- [Review Transponder Count →]

**🎯 "Volume Discount Opportunity"**
- "Current volume qualifies for 15% discount tier"
- "Not currently enrolled in program"
- **Annual Savings: $8,200**
- [Apply for Discount →]

**🎯 "Off-Peak Scheduling"**
- "Shifting 3 routes by 45 minutes avoids peak pricing"
- "Minimal operational impact"
- **Annual Savings: $5,600**
- [Analyze Schedule Change →]

**🎯 "Billing Error Recovery"**
- "Found $2,340 in duplicate charges from past 12 months"
- "Eligible for refund"
- **One-time Recovery: $2,340**
- [Generate Dispute Package →]

**Chat Capabilities:**
- ROI calculation for any proposed change
- What-if scenario modeling
- "If we did X, how much would we save?"
- Compare multiple saving opportunities
- Generate implementation plans
- Track savings once implemented

---

### 9. FILTERS & SETTINGS PAGE

**Purpose:** Configure analysis parameters and preferences

**Sections:**

**Time Period Selection:**
- Current period definition
- Comparison period selection
- Custom date ranges
- Fiscal calendar alignment

**Fleet Filtering:**
- By location/region
- By vehicle type
- By department
- By driver
- Custom fleet segments

**Product Type Filtering:**
- Toll products
- Violation types
- Transaction categories

**AI Analysis Preferences:**
- Discovery card sensitivity (show all insights vs. high-impact only)
- Alert thresholds
- Benchmark comparisons (which fleets to compare against)
- Confidence level minimums

**Chat Settings:**
- Conversation history
- Saved queries
- Export preferences
- Sharing permissions

---

## Cross-Cutting AI Capabilities

### Available Across All Pages:

**1. Conversational Drill-Down**
- Start with high-level question
- AI asks clarifying questions
- Progressively drill into specifics
- "Show me more detail" at any point

**2. Multi-Variable Analysis**
- "How do tolls correlate with weather?"
- "Compare violations by driver experience level"
- "Show toll costs by vehicle age and type"

**3. Time-Based Comparisons**
- "How does this compare to last month?"
- "Show me the same period last year"
- "What's the 12-month trend?"

**4. Natural Language Querying**
- No need to know schema or filters
- Ask questions like you'd ask a colleague
- AI understands context and intent

**5. Export & Sharing**
- "Export this analysis to Excel"
- "Create a PDF summary of this conversation"
- "Share this insight with my team"

**6. Saved Queries & Playbooks**
- "Save this as 'Monthly Toll Review'"
- "Run my weekly safety check"
- Build custom reporting routines

**7. Real-Time Updates**
- "Let me know when a new anomaly is detected"
- "Alert me if toll costs exceed $X"
- "Notify on high-risk driver violations"

---

## Success Metrics

### User Engagement:
- Daily active users
- Questions asked per session
- Discovery card click-through rate
- Saved queries created
- Time spent in chat vs. old dashboard

### Business Impact:
- Anomalies detected and resolved
- Cost savings identified
- Fraud incidents caught
- Time saved vs. manual analysis
- User satisfaction scores

### AI Performance:
- Query resolution rate (% of questions answered satisfactorily)
- Discovery card relevance scores
- Confidence accuracy (do high-confidence insights prove true?)
- Response time
- Context retention across conversation

---

## Implementation Priorities

### Phase 1: Core Chat + Tolling (MVP)
- Chat interface with basic conversational analytics
- Tolling Overview with discovery cards
- Transaction lookup
- Time period comparisons

### Phase 2: Violations & Deep Analysis
- Violations pages with safety insights
- Deep Dive capabilities
- Multi-variable analysis
- Saved queries

### Phase 3: Advanced Features
- Outliers pages
- Savings optimization
- Predictive analytics
- Real-time alerts
- Custom playbooks

### Phase 4: Enterprise Features
- Team collaboration
- Role-based access
- API access for data export
- White-label customization

---

## Key Design Differentiators from Old MIRA Dashboard

### Old MIRA:
- Static charts and tables
- Manual filtering and drilling
- Data presentation without interpretation
- Generic BI dashboard feel
- Navigation through menu structure
- Export data to analyze elsewhere

### New Beta AI Insights:
- Conversational exploration
- AI-guided discovery
- Data + interpretation + recommendations
- Premium, modern, AI-native feel
- Chat-driven navigation
- Analysis happens in the conversation
- Proactive pattern detection
- Personalized to each fleet's data
- Real-world fleet management context (persona agents)

---

## Technical Requirements

### Must Support:
- Real-time chat responses (<2 sec for simple queries)
- Complex multi-agent analysis (show "thinking" indicators)
- Large dataset queries (millions of transactions)
- Concurrent user sessions
- Conversation history persistence
- Export formats (PDF, Excel, CSV)
- Mobile responsive (basic)
- Desktop optimized (primary)

### Data Sources:
- Toll transaction data
- Violation records
- Vehicle inventory
- Driver assignments
- GPS/telematics data
- Fuel data (for correlations)
- Maintenance records
- Industry benchmarks

### Security & Compliance:
- Role-based access control
- Data privacy compliance
- Audit logging
- Secure API endpoints
- Encrypted conversations
- Data retention policies

---

## Conclusion

The Beta AI Insights UI represents a fundamental shift from traditional BI dashboards to conversational analytics. By leveraging Vinli's Velona AI engine, Verra Mobility customers can ask natural language questions and receive intelligent, contextual answers that would be impossible to discover through manual analysis.

The product maintains all the functionality of the current MIRA Tableau dashboard while transforming the experience into something more intuitive, powerful, and actionable. Discovery cards guide users to interesting insights they wouldn't know to look for, while the chat interface empowers them to explore their data freely.

This positions Verra Mobility as a leader in AI-powered fleet intelligence while showcasing Vinli's Velona platform as the enterprise engine capable of powering multiple products and use cases.
