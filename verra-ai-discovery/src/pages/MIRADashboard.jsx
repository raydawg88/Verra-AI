import { useState, useEffect } from 'react'
import '../styles/dashboard.css'

export default function MIRADashboard({ onNavigateToConsent }) {
  const [showBanner, setShowBanner] = useState(false)
  const [productType, setProductType] = useState('all')
  const [fleetFilter, setFleetFilter] = useState('all')

  useEffect(() => {
    // Show banner after 3 seconds
    const timer = setTimeout(() => {
      setShowBanner(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const tableData = [
    { id: 'CC0002', company: 'COMPANY C', y2023: 48579, y2024: 98607, y2025: 96198 },
    { id: 'CD0003', company: 'COMPANY D', y2023: 4721, y2024: 7074, y2025: 7967 },
    { id: 'CE0004', company: 'COMPANY E', y2023: 23795, y2024: 44252, y2025: 41224 },
    { id: 'CF0005', company: 'COMPANY F', y2023: 1640, y2024: 7525, y2025: 8512 },
    { id: 'CJ0009', company: 'COMPANY J', y2023: 73736, y2024: 106033, y2025: 92306 },
    { id: 'CK0010', company: 'COMPANY K', y2023: 18218, y2024: 27026, y2025: 20379 }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* AI Trial Banner */}
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

      {/* Top Navigation */}
      <div className="top-nav">
        <div className="top-nav-left">
          <button className="nav-button">Edit</button>
          <button className="nav-button">View: Original</button>
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
                <div className="submenu-item active">Overview</div>
                <div className="submenu-item">Deep Dive</div>
                <div className="submenu-item">Outliers</div>
              </div>
            </div>

            <div className="menu-group">
              <div className="menu-item">
                <span className="material-icons">report_problem</span>
                Violations
              </div>
              <div className="submenu-items">
                <div className="submenu-item">Overview</div>
                <div className="submenu-item">Deep Dive</div>
                <div className="submenu-item">Outliers</div>
              </div>
            </div>

            <div className="menu-group">
              <div className="menu-item">
                <span className="material-icons">receipt_long</span>
                Transactions
              </div>
            </div>

            <div className="menu-group">
              <div className="menu-item" onClick={onNavigateToConsent}>
                <span className="material-icons">auto_awesome</span>
                AI Insights
              </div>
            </div>

            <div className="menu-group">
              <div className="menu-item">
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

          {/* KPI Cards */}
          <div className="kpi-section">
            <div className="kpi-card">
              <div className="kpi-label">Total Enrolled Assets</div>
              <div className="kpi-value">
                3,111
                <div className="kpi-change positive">32.0% ▲</div>
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
              <div className="kpi-label">Percent of Fleet Using Tolls</div>
              <div className="kpi-value">
                82.1%
                <div className="kpi-change positive">11.7% ▲</div>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="dashboard-grid">
            {/* Table Card */}
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

            {/* Map Card */}
            <div className="dashboard-card">
              <div className="card-header">
                <div className="card-title">Count of Assets by State</div>
              </div>
              <div style={{
                height: '380px',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                background: '#f7fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#a0aec0'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <span className="material-icons" style={{ fontSize: '48px', marginBottom: '8px' }}>map</span>
                  <div style={{ fontSize: '14px' }}>US Map Visualization</div>
                </div>
              </div>
            </div>

            {/* Line Chart */}
            <div className="dashboard-card full-width">
              <div className="card-header">
                <div className="card-title">Toll Volume by Product</div>
              </div>
              <div className="chart-container">
                <div style={{
                  height: '100%',
                  background: '#f7fafc',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a0aec0'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <span className="material-icons" style={{ fontSize: '48px', marginBottom: '8px' }}>show_chart</span>
                    <div style={{ fontSize: '14px' }}>Line Chart</div>
                  </div>
                </div>
              </div>
              <div className="legend">
                <div className="legend-item">
                  <div className="legend-color" style={{ background: '#4a90e2' }}></div>
                  <span>Toll Management</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ background: '#48bb78' }}></div>
                  <span>TollGuard</span>
                </div>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="dashboard-card full-width">
              <div className="card-header">
                <div className="card-title">Enrolled Assets and % of Fleet Assets Incurring a Toll</div>
              </div>
              <div className="chart-container">
                <div style={{
                  height: '100%',
                  background: '#f7fafc',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a0aec0'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <span className="material-icons" style={{ fontSize: '48px', marginBottom: '8px' }}>bar_chart</span>
                    <div style={{ fontSize: '14px' }}>Bar Chart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
