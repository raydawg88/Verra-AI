import { useState, useEffect } from 'react'
import '../styles/dashboard.css'
import { LineChart, BarChart, PieChart, AreaChart, HeatMap, DataTable, ScatterPlot } from '../components/Charts'

export default function MIRADashboard({ onNavigateToConsent, section, onNavigateToAI }) {
  const [showBanner, setShowBanner] = useState(false)
  const [productType, setProductType] = useState('all')
  const [fleetFilter, setFleetFilter] = useState('all')
  const [activeSection, setActiveSection] = useState(section || 'tolling-overview')

  // If a section is provided, we're in Lite mode and show that section
  const isLiteMode = !!section

  // Update activeSection when section prop changes (Lite mode navigation)
  useEffect(() => {
    if (section) {
      setActiveSection(section)
    }
  }, [section])

  useEffect(() => {
    // Only show banner if NOT in Lite mode (banner only shows in Full mode)
    if (!isLiteMode) {
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isLiteMode])

  const tableData = [
    { id: 'CC0002', company: 'COMPANY C', y2023: 48579, y2024: 98607, y2025: 96198 },
    { id: 'CD0003', company: 'COMPANY D', y2023: 4721, y2024: 7074, y2025: 7967 },
    { id: 'CE0004', company: 'COMPANY E', y2023: 23795, y2024: 44252, y2025: 41224 },
    { id: 'CF0005', company: 'COMPANY F', y2023: 1640, y2024: 7525, y2025: 8512 },
    { id: 'CJ0009', company: 'COMPANY J', y2023: 73736, y2024: 106033, y2025: 92306 },
    { id: 'CK0010', company: 'COMPANY K', y2023: 18218, y2024: 27026, y2025: 20379 }
  ]

  // Get section display name
  const getSectionName = () => {
    const sectionMap = {
      'overview': 'Overview',
      'tolling-overview': 'Tolling - Overview',
      'tolling-deep-dive': 'Tolling - Deep Dive',
      'tolling-outliers': 'Tolling - Outliers',
      'violations-overview': 'Violations - Overview',
      'violations-deep-dive': 'Violations - Deep Dive',
      'violations-outliers': 'Violations - Outliers',
      'transactions': 'Transactions',
      'savings': 'Savings'
    }
    return sectionMap[activeSection] || 'Dashboard'
  }

  // Handle menu item clicks
  const handleMenuClick = (sectionId) => {
    if (sectionId === 'ai-insights') {
      // Navigate to AI Insights (either consent in Full mode or back to AI page in Lite mode)
      if (isLiteMode) {
        onNavigateToAI()
      } else {
        onNavigateToConsent()
      }
    } else {
      setActiveSection(sectionId)
    }
  }

  // Render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'tolling-overview':
        return renderTollingOverview()
      case 'tolling-deep-dive':
        return renderTollingDeepDive()
      case 'tolling-outliers':
        return renderTollingOutliers()
      case 'violations-overview':
        return renderViolationsOverview()
      case 'violations-deep-dive':
        return renderViolationsDeepDive()
      case 'violations-outliers':
        return renderViolationsOutliers()
      case 'transactions':
        return renderTransactions()
      case 'savings':
        return renderSavings()
      default:
        return renderTollingOverview()
    }
  }

  const renderTollingOverview = () => {
    const tollVolumeData = [
      { label: 'Jan', value: 67000 },
      { label: 'Feb', value: 71000 },
      { label: 'Mar', value: 74000 },
      { label: 'Apr', value: 69000 },
      { label: 'May', value: 78000 },
      { label: 'Jun', value: 82000 },
      { label: 'Jul', value: 85000 },
      { label: 'Aug', value: 88000 },
      { label: 'Sep', value: 84000 },
      { label: 'Oct', value: 91000 },
      { label: 'Nov', value: 96000 },
      { label: 'Dec', value: 98000 }
    ]

    const stateData = [
      { state: 'CA', value: 24567, color: '#2563eb' },
      { state: 'TX', value: 18934, color: '#3b82f6' },
      { state: 'FL', value: 15678, color: '#60a5fa' },
      { state: 'NY', value: 12456, color: '#93c5fd' },
      { state: 'IL', value: 9834, color: '#bfdbfe' },
      { state: 'PA', value: 8765, color: '#dbeafe' },
      { state: 'OH', value: 7654, color: '#eff6ff' },
      { state: 'GA', value: 6543, color: '#f0f9ff' },
      { state: 'NC', value: 5432, color: '#f5f5f5' },
      { state: 'MI', value: 4321, color: '#fafafa' }
    ]

    return (
      <>
        <div className="kpi-section">
          <div className="kpi-card">
            <div className="kpi-label">Total Toll Spend</div>
            <div className="kpi-value">
              $2.4M
              <div className="kpi-change positive">12.3% ▲</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Active Tolling Assets</div>
            <div className="kpi-value">
              2,555
              <div className="kpi-change positive">47.4% ▲</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Average Cost Per Vehicle</div>
            <div className="kpi-value">
              $939
              <div className="kpi-change negative">8.2% ▼</div>
            </div>
          </div>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <div className="card-title">Top Clients by Toll Count | Top Fleets</div>
            </div>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '80px' }}></th>
                  <th>Company</th>
                  <th style={{ width: '110px' }}>2023</th>
                  <th style={{ width: '110px' }}>2024</th>
                  <th style={{ width: '110px' }}>2025</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td style={{ color: '#718096', fontWeight: 500 }}>{row.id}</td>
                    <td style={{ fontWeight: 500 }}>{row.company}</td>
                    <td><span className="data-cell">{row.y2023.toLocaleString()}</span></td>
                    <td><span className="data-cell">{row.y2024.toLocaleString()}</span></td>
                    <td><span className="data-cell">{row.y2025.toLocaleString()}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="dashboard-card">
            <div className="card-header">
              <div className="card-title">Toll Activity by State</div>
            </div>
            <HeatMap data={stateData} height={380} />
          </div>
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Toll Volume Trends</div>
            </div>
            <LineChart data={tollVolumeData} color="#4a90e2" height={300} />
          </div>
        </div>
      </>
    )
  }

  const renderTollingDeepDive = () => {
    const transactionData = [
      { label: '6AM', value: 12340 },
      { label: '9AM', value: 45670 },
      { label: '12PM', value: 38900 },
      { label: '3PM', value: 52340 },
      { label: '6PM', value: 67890 },
      { label: '9PM', value: 23450 }
    ]

    const routeData = [
      { label: 'I-95 North', value: 287500 },
      { label: 'I-90 East', value: 234800 },
      { label: 'I-80 West', value: 198600 },
      { label: 'I-75 South', value: 156300 },
      { label: 'I-10 East', value: 123900 }
    ]

    return (
      <>
        <div className="kpi-section">
          <div className="kpi-card">
            <div className="kpi-label">Total Transactions</div>
            <div className="kpi-value">
              847,392
              <div className="kpi-change positive">23.1% ▲</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Average Transaction Cost</div>
            <div className="kpi-value">
              $2.83
              <div className="kpi-change negative">4.2% ▼</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Peak Hour Transactions</div>
            <div className="kpi-value">
              42.7%
              <div className="kpi-change positive">6.8% ▲</div>
            </div>
          </div>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Transaction Volume by Time of Day</div>
            </div>
            <BarChart data={transactionData} color="#10b981" height={300} />
          </div>
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Cost Distribution by Route</div>
            </div>
            <BarChart data={routeData} color="#f59e0b" height={300} />
          </div>
        </div>
      </>
    )
  }

  const renderTollingOutliers = () => {
    const outlierData = Array.from({ length: 50 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: Math.random() > 0.85 ? '#ef4444' : '#94a3b8'
    }))

    const riskScoreData = [
      { label: 'VH-4421', value: 92 },
      { label: 'VH-2847', value: 87 },
      { label: 'VH-3912', value: 78 },
      { label: 'VH-1256', value: 71 },
      { label: 'VH-5643', value: 68 }
    ]

    return (
      <>
        <div className="kpi-section">
          <div className="kpi-card">
            <div className="kpi-label">Anomalies Detected</div>
            <div className="kpi-value">
              23
              <div className="kpi-change negative">12 new ▲</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">High-Risk Transactions</div>
            <div className="kpi-value">
              147
              <div className="kpi-change positive">18% ▼</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Potential Fraud Value</div>
            <div className="kpi-value">
              $18.4K
              <div className="kpi-change negative">23% ▲</div>
            </div>
          </div>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Unusual Transaction Patterns</div>
            </div>
            <ScatterPlot data={outlierData} xLabel="Transaction Volume" yLabel="Cost" height={300} />
          </div>
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Fraud Risk Score by Vehicle</div>
            </div>
            <BarChart data={riskScoreData} color="#ef4444" height={300} />
          </div>
        </div>
      </>
    )
  }

  const renderViolationsOverview = () => {
    const violationTypeData = [
      { label: 'Speeding', value: 847, color: '#ef4444' },
      { label: 'Red Light', value: 312, color: '#f97316' },
      { label: 'Parking', value: 88, color: '#f59e0b' }
    ]

    const violationTrendsData = [
      { label: 'Jan', value: 87 },
      { label: 'Feb', value: 92 },
      { label: 'Mar', value: 98 },
      { label: 'Apr', value: 103 },
      { label: 'May', value: 110 },
      { label: 'Jun', value: 115 },
      { label: 'Jul', value: 108 },
      { label: 'Aug', value: 121 },
      { label: 'Sep', value: 118 },
      { label: 'Oct', value: 125 },
      { label: 'Nov', value: 132 },
      { label: 'Dec', value: 128 }
    ]

    return (
      <>
        <div className="kpi-section">
          <div className="kpi-card">
            <div className="kpi-label">Total Violations</div>
            <div className="kpi-value">
              1,247
              <div className="kpi-change negative">15.3% ▲</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Total Violation Cost</div>
            <div className="kpi-value">
              $84.2K
              <div className="kpi-change negative">18.7% ▲</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">High-Risk Drivers</div>
            <div className="kpi-value">
              34
              <div className="kpi-change positive">12% ▼</div>
            </div>
          </div>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Violations by Type</div>
            </div>
            <PieChart data={violationTypeData} height={300} />
          </div>
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Violation Trends</div>
            </div>
            <AreaChart data={violationTrendsData} color="#ef4444" height={300} />
          </div>
        </div>
      </>
    )
  }

  const renderViolationsDeepDive = () => {
    const safetyScoreData = [
      { label: 'Driver A', value: 95 },
      { label: 'Driver B', value: 88 },
      { label: 'Driver C', value: 82 },
      { label: 'Driver D', value: 76 },
      { label: 'Driver E', value: 68 },
      { label: 'Driver F', value: 61 },
      { label: 'Driver G', value: 54 },
      { label: 'Driver H', value: 47 }
    ]

    const hotspotData = [
      { state: 'I-95', value: 247, color: '#dc2626' },
      { state: 'US-1', value: 189, color: '#ea580c' },
      { state: 'I-90', value: 156, color: '#f59e0b' },
      { state: 'I-80', value: 134, color: '#fbbf24' },
      { state: 'I-75', value: 112, color: '#fde047' },
      { state: 'I-10', value: 98, color: '#fef08a' },
      { state: 'US-101', value: 87, color: '#fef3c7' },
      { state: 'I-5', value: 76, color: '#fefce8' }
    ]

    return (
      <>
        <div className="kpi-section">
          <div className="kpi-card">
            <div className="kpi-label">Speeding Violations</div>
            <div className="kpi-value">
              847
              <div className="kpi-change negative">22% ▲</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Red Light Violations</div>
            <div className="kpi-value">
              312
              <div className="kpi-change positive">8% ▼</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Parking Violations</div>
            <div className="kpi-value">
              88
              <div className="kpi-change negative">14% ▲</div>
            </div>
          </div>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Driver Safety Scores</div>
            </div>
            <BarChart data={safetyScoreData} color="#10b981" height={300} />
          </div>
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Violation Hotspots by Route</div>
            </div>
            <HeatMap data={hotspotData} height={300} />
          </div>
        </div>
      </>
    )
  }

  const renderViolationsOutliers = () => {
    const patternData = [
      { label: 'Jan', value: 2 },
      { label: 'Feb', value: 3 },
      { label: 'Mar', value: 1 },
      { label: 'Apr', value: 7 },
      { label: 'May', value: 4 },
      { label: 'Jun', value: 9 },
      { label: 'Jul', value: 2 },
      { label: 'Aug', value: 12 },
      { label: 'Sep', value: 8 },
      { label: 'Oct', value: 15 },
      { label: 'Nov', value: 11 },
      { label: 'Dec', value: 6 }
    ]

    const behaviorData = [
      { label: 'Harsh Braking', value: 234 },
      { label: 'Rapid Acceleration', value: 189 },
      { label: 'Late Night Driving', value: 156 },
      { label: 'Unauthorized Routes', value: 98 },
      { label: 'Idle Time', value: 67 }
    ]

    return (
      <>
        <div className="kpi-section">
          <div className="kpi-card">
            <div className="kpi-label">Repeat Offenders</div>
            <div className="kpi-value">
              12
              <div className="kpi-change negative">5 new ▲</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Contested Violations</div>
            <div className="kpi-value">
              47
              <div className="kpi-change positive">18% ▼</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">False Positive Rate</div>
            <div className="kpi-value">
              8.3%
              <div className="kpi-change positive">2.1% ▼</div>
            </div>
          </div>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Unusual Violation Patterns</div>
            </div>
            <LineChart data={patternData} color="#dc2626" height={300} />
          </div>
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Driver Behavior Anomalies</div>
            </div>
            <BarChart data={behaviorData} color="#8b5cf6" height={300} />
          </div>
        </div>
      </>
    )
  }

  const renderTransactions = () => {
    const transactionHistoryData = [
      { label: 'Jan', value: 287400 },
      { label: 'Feb', value: 298200 },
      { label: 'Mar', value: 312500 },
      { label: 'Apr', value: 305800 },
      { label: 'May', value: 334900 },
      { label: 'Jun', value: 347200 },
      { label: 'Jul', value: 356800 },
      { label: 'Aug', value: 371500 },
      { label: 'Sep', value: 365400 },
      { label: 'Oct', value: 389700 },
      { label: 'Nov', value: 402300 },
      { label: 'Dec', value: 395600 }
    ]

    const paymentMethodData = [
      { label: 'Credit Card', value: 67340, color: '#3b82f6' },
      { label: 'ACH Transfer', value: 42890, color: '#10b981' },
      { label: 'Wire Transfer', value: 15617, color: '#f59e0b' }
    ]

    return (
      <>
        <div className="kpi-section">
          <div className="kpi-card">
            <div className="kpi-label">Total Transactions</div>
            <div className="kpi-value">
              125,847
              <div className="kpi-change positive">18.2% ▲</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Transaction Value</div>
            <div className="kpi-value">
              $3.2M
              <div className="kpi-change positive">12.8% ▲</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Failed Transactions</div>
            <div className="kpi-value">
              234
              <div className="kpi-change positive">24% ▼</div>
            </div>
          </div>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Transaction Volume Over Time</div>
            </div>
            <AreaChart data={transactionHistoryData} color="#3b82f6" height={300} />
          </div>
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Payment Methods Distribution</div>
            </div>
            <PieChart data={paymentMethodData} height={300} />
          </div>
        </div>
      </>
    )
  }

  const renderSavings = () => {
    const savingsCategoryData = [
      { label: 'Route Optimization', value: 87400, color: '#10b981' },
      { label: 'Fraud Prevention', value: 64200, color: '#3b82f6' },
      { label: 'Billing Errors', value: 48700, color: '#f59e0b' },
      { label: 'Unused Transponders', value: 32800, color: '#8b5cf6' },
      { label: 'Volume Discounts', value: 14200, color: '#ec4899' }
    ]

    const roiTimelineData = [
      { label: 'Q1', value: 34500 },
      { label: 'Q2', value: 52800 },
      { label: 'Q3', value: 71200 },
      { label: 'Q4', value: 89300 },
      { label: 'Q1 2025', value: 112700 },
      { label: 'Q2 2025', value: 138400 },
      { label: 'Q3 2025', value: 167900 },
      { label: 'Q4 2025', value: 184200 }
    ]

    return (
      <>
        <div className="kpi-section">
          <div className="kpi-card">
            <div className="kpi-label">Total Savings Identified</div>
            <div className="kpi-value">
              $247.3K
              <div className="kpi-change positive">34% ▲</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Savings Realized</div>
            <div className="kpi-value">
              $184.2K
              <div className="kpi-change positive">28% ▲</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Opportunities Open</div>
            <div className="kpi-value">
              18
              <div className="kpi-change positive">3 new</div>
            </div>
          </div>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Savings Opportunities by Category</div>
            </div>
            <PieChart data={savingsCategoryData} height={300} />
          </div>
          <div className="dashboard-card full-width">
            <div className="card-header">
              <div className="card-title">Cumulative Savings ROI Over Time</div>
            </div>
            <AreaChart data={roiTimelineData} color="#10b981" height={300} />
          </div>
        </div>
      </>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* AI Trial Banner - Only in Full mode */}
      {!isLiteMode && (
        <div className={`ai-trial-banner ${showBanner ? 'show' : ''}`}>
          <div className="banner-background">
            <div className="animated-gradient" />
          </div>
          <div className="banner-content">
            <div className="banner-message">Try Verra AI Insights Now</div>
            <button className="banner-cta" onClick={onNavigateToConsent}>
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <div className="top-nav">
        <div className="top-nav-left">
          {isLiteMode && (
            <button className="nav-button" onClick={onNavigateToAI} style={{
              background: 'rgba(159, 201, 8, 0.2)',
              borderColor: '#9fc908'
            }}>
              ← Back to AI Insights
            </button>
          )}
          <button className="nav-button">Edit</button>
          <button className="nav-button">View: Original</button>
          {isLiteMode && (
            <span style={{ color: 'white', marginLeft: '12px', fontWeight: 500 }}>
              Viewing: {getSectionName()}
            </span>
          )}
        </div>
        <div className="top-nav-right">
          <button className="btn-subscriptions">Subscriptions</button>
          <button className="btn-share">Share</button>
          <div className="user-avatar">J</div>
        </div>
      </div>

      {/* Main Container */}
      <div className="main-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="logo-section">
            <div className="logo">
              <img
                src="https://www.verramobility.com/wp-content/uploads/2022/06/verra_logo_notagline.png"
                alt="Verra Mobility"
                className="logo-image"
              />
            </div>
          </div>

          <div className="dashboard-menu">
            <div className="menu-title">Dashboard Menu</div>

            <div className="menu-group">
              <div className="menu-item">
                <span className="material-icons">toll</span>
                Tolling
              </div>
              <div className="submenu-items">
                <div
                  className={`submenu-item ${activeSection === 'tolling-overview' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('tolling-overview')}
                  style={{ cursor: 'pointer' }}
                >
                  Overview
                </div>
                <div
                  className={`submenu-item ${activeSection === 'tolling-deep-dive' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('tolling-deep-dive')}
                  style={{ cursor: 'pointer' }}
                >
                  Deep Dive
                </div>
                <div
                  className={`submenu-item ${activeSection === 'tolling-outliers' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('tolling-outliers')}
                  style={{ cursor: 'pointer' }}
                >
                  Outliers
                </div>
              </div>
            </div>

            <div className="menu-group">
              <div className="menu-item">
                <span className="material-icons">report_problem</span>
                Violations
              </div>
              <div className="submenu-items">
                <div
                  className={`submenu-item ${activeSection === 'violations-overview' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('violations-overview')}
                  style={{ cursor: 'pointer' }}
                >
                  Overview
                </div>
                <div
                  className={`submenu-item ${activeSection === 'violations-deep-dive' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('violations-deep-dive')}
                  style={{ cursor: 'pointer' }}
                >
                  Deep Dive
                </div>
                <div
                  className={`submenu-item ${activeSection === 'violations-outliers' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('violations-outliers')}
                  style={{ cursor: 'pointer' }}
                >
                  Outliers
                </div>
              </div>
            </div>

            <div className="menu-group">
              <div
                className={`menu-item ${activeSection === 'transactions' ? 'active' : ''}`}
                onClick={() => handleMenuClick('transactions')}
                style={{ cursor: 'pointer' }}
              >
                <span className="material-icons">receipt_long</span>
                Transactions
              </div>
            </div>

            <div className="menu-group">
              <div
                className="menu-item"
                onClick={() => handleMenuClick('ai-insights')}
                style={{ cursor: 'pointer' }}
              >
                <span className="material-icons">auto_awesome</span>
                AI Insights
              </div>
            </div>

            <div className="menu-group">
              <div
                className={`menu-item ${activeSection === 'savings' ? 'active' : ''}`}
                onClick={() => handleMenuClick('savings')}
                style={{ cursor: 'pointer' }}
              >
                <span className="material-icons">savings</span>
                Savings
              </div>
            </div>
          </div>

          <div className="time-display">
            <div className="time-label">Current Period:</div>
            <div className="time-value">1/1/2025 - 12/31/2025</div>
            <div className="time-label" style={{ marginTop: '16px' }}>Comparison Period:</div>
            <div className="time-value">1/1/2024 - 12/31/2024</div>
          </div>

          <div className="filters-section">
            <div className="filters-header">Filters</div>
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area">
          <div className="page-title-header">
            <h1 className="page-title">MIRA</h1>
          </div>

          <div className="content-header">
            <div className="header-row">
              <div className="view-section">
                <span className="view-label">CHOOSE VIEW:</span>
                <div className="view-tabs">
                  <button className="view-tab">Toll Spend & Trends</button>
                  <button className="view-tab active">Asset & Activity</button>
                </div>
              </div>
              <div className="filters-row">
                <div className="filter-group">
                  <span className="filter-label">Product Type:</span>
                  <select value={productType} onChange={(e) => setProductType(e.target.value)}>
                    <option value="all">(All)</option>
                    <option value="toll-management">Toll Management</option>
                    <option value="toll-guard">TollGuard</option>
                  </select>
                </div>
                <div className="filter-group">
                  <span className="filter-label">Fleet Filter:</span>
                  <select value={fleetFilter} onChange={(e) => setFleetFilter(e.target.value)}>
                    <option value="all">(All)</option>
                    <option value="fleet-a">Fleet A</option>
                    <option value="fleet-b">Fleet B</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Content Based on Active Section */}
          {renderContent()}
        </div>
      </div>
    </div>
  )
}
