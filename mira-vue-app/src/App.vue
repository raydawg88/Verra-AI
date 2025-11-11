<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Aurora from './components/backgrounds/Aurora.vue'
import { Chart } from 'chart.js/auto'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const showBanner = ref(false)
const productType = ref('all')
const fleetFilter = ref('all')
const tableView = ref('topFleets')
const showTopCount = ref(24)
const bannerRef = ref(null)

const tableData = ref([
  { id: 'CC0002', company: 'COMPANY C', y2023: 48579, y2024: 98607, y2025: 96198 },
  { id: 'CD0003', company: 'COMPANY D', y2023: 4721, y2024: 7074, y2025: 7967 },
  { id: 'CE0004', company: 'COMPANY E', y2023: 23795, y2024: 44252, y2025: 41224 },
  { id: 'CF0005', company: 'COMPANY F', y2023: 1640, y2024: 7525, y2025: 8512 },
  { id: 'CJ0009', company: 'COMPANY J', y2023: 73736, y2024: 106033, y2025: 92306 },
  { id: 'CK0010', company: 'COMPANY K', y2023: 18218, y2024: 27026, y2025: 20379 }
])

const visibleTableData = computed(() => {
  return tableData.value.slice(0, parseInt(showTopCount.value) || 6)
})

function handleClickOutside(event) {
  if (showBanner.value && bannerRef.value && !bannerRef.value.contains(event.target)) {
    showBanner.value = false
  }
}

onMounted(() => {
  initMap()
  initLineChart()
  initBarChart()

  // Show banner after 3 seconds
  setTimeout(() => {
    showBanner.value = true
  }, 3000)

  // Add click outside listener
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

function initMap() {
  const map = L.map('map', {
    zoomControl: true,
    attributionControl: true
  }).setView([39.8, -98.5], 4)

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© 2025 Mapbox © OpenStreetMap',
    maxZoom: 19
  }).addTo(map)

  const stateData = [
    { name: 'FL', lat: 28.5, lng: -82.0, count: 520 },
    { name: 'TX', lat: 31.0, lng: -100.0, count: 450 },
    { name: 'CA', lat: 37.0, lng: -120.0, count: 380 },
    { name: 'NY', lat: 43.0, lng: -75.5, count: 340 },
    { name: 'IL', lat: 40.0, lng: -89.0, count: 310 },
    { name: 'PA', lat: 41.0, lng: -77.5, count: 290 },
    { name: 'OH', lat: 40.5, lng: -82.5, count: 270 },
    { name: 'GA', lat: 32.5, lng: -83.5, count: 240 },
    { name: 'NC', lat: 35.5, lng: -80.0, count: 220 }
  ]

  stateData.forEach(state => {
    const size = Math.sqrt(state.count) * 1.2
    L.circleMarker([state.lat, state.lng], {
      radius: size,
      fillColor: '#4a90e2',
      color: '#2c5f8e',
      weight: 1.5,
      opacity: 0.7,
      fillOpacity: 0.5
    })
    .addTo(map)
    .bindPopup(`<b>${state.name}</b><br>${state.count} assets`, {
      closeButton: false
    })
  })
}

function initLineChart() {
  const ctx = document.getElementById('lineChart')
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Toll Management',
        data: [17272, 12337, 15800, 14200, 9400, 21000, 19200, 18800, 20500, 17500, 12000, 17342],
        borderColor: '#4a90e2',
        backgroundColor: 'transparent',
        tension: 0.4,
        fill: false,
        pointRadius: 0,
        borderWidth: 3
      }, {
        label: 'TollGuard',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#48bb78',
        backgroundColor: 'transparent',
        tension: 0.4,
        fill: false,
        pointRadius: 0,
        borderWidth: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 22000,
          ticks: {
            callback: (value) => value >= 1000 ? (value/1000) + 'K' : value,
            font: { size: 11 },
            color: '#718096'
          },
          grid: { color: '#e2e8f0', drawBorder: false }
        },
        x: {
          ticks: { font: { size: 11 }, color: '#718096' },
          grid: { display: false, drawBorder: false }
        }
      }
    }
  })
}

function initBarChart() {
  const ctx = document.getElementById('barChart')
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
      datasets: [{
        label: '% of Fleet Using Tolls',
        data: [58.8, 58.8, 71.8, 71.8, 82.1, 82.1, 82.1, 82.1],
        backgroundColor: '#dbeafe',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 0,
        barThickness: 40
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: (value) => value + '%',
            font: { size: 11 },
            color: '#718096'
          },
          grid: { color: '#e2e8f0', drawBorder: false }
        },
        x: {
          ticks: { font: { size: 11 }, color: '#718096' },
          grid: { display: false, drawBorder: false }
        }
      }
    }
  })
}
</script>

<template>
  <div id="app">
    <!-- AI Trial Banner -->
    <div ref="bannerRef" class="ai-trial-banner" :class="{ show: showBanner }">
      <div class="banner-background">
        <div class="aurora-wrapper">
          <Aurora :colorStops="['#9fc908', '#1a1a1a', '#9fc908']" :intensity="1.2" :speed="0.8" />
        </div>
      </div>
      <div class="banner-content">
        <div class="banner-message">Try Verra AI Insights Now</div>
        <button class="banner-cta">Get Started</button>
      </div>
    </div>

    <!-- Top Navigation -->
    <div class="top-nav">
      <div class="top-nav-left">
        <button class="nav-button">Edit</button>
        <button class="nav-button">View: Original</button>
      </div>
      <div class="top-nav-right">
        <button class="btn-subscriptions">Subscriptions</button>
        <button class="btn-share">Share</button>
        <div class="user-avatar">J</div>
      </div>
    </div>

    <!-- Main Container -->
    <div class="main-container">
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="logo-section">
          <div class="logo">
            <img src="/verra-logo.png" alt="Verra Mobility" class="logo-image" onerror="this.src='https://www.verramobility.com/wp-content/uploads/2022/06/verra_logo_notagline.png'">
          </div>
        </div>

        <div class="dashboard-menu">
          <div class="menu-title">Dashboard Menu</div>

          <div class="menu-group">
            <div class="menu-item">
              <span class="material-icons">toll</span>
              Tolling
            </div>
            <div class="submenu-items">
              <div class="submenu-item active">Overview</div>
              <div class="submenu-item">Deep Dive</div>
              <div class="submenu-item">Outliers</div>
            </div>
          </div>

          <div class="menu-group">
            <div class="menu-item">
              <span class="material-icons">report_problem</span>
              Violations
            </div>
            <div class="submenu-items">
              <div class="submenu-item">Overview</div>
              <div class="submenu-item">Deep Dive</div>
              <div class="submenu-item">Outliers</div>
            </div>
          </div>

          <div class="menu-group">
            <div class="menu-item">
              <span class="material-icons">receipt_long</span>
              Transactions
            </div>
          </div>

          <div class="menu-group">
            <div class="menu-item">
              <span class="material-icons">auto_awesome</span>
              AI Insights
            </div>
          </div>

          <div class="menu-group">
            <div class="menu-item">
              <span class="material-icons">savings</span>
              Savings
            </div>
          </div>
        </div>

        <div class="time-display">
          <div class="time-label">Current Period:</div>
          <div class="time-value">1/1/2025 - 12/31/2025</div>
          <div class="time-label" style="margin-top: 16px;">Comparison Period:</div>
          <div class="time-value">1/1/2024 - 12/31/2024</div>
        </div>

        <div class="filters-section">
          <div class="filters-header">Filters</div>
        </div>
      </div>

      <!-- Content Area -->
      <div class="content-area">
        <div class="page-title-header">
          <h1 class="page-title">MIRA</h1>
        </div>

        <div class="content-header">
          <div class="header-row">
            <div class="view-section">
              <span class="view-label">CHOOSE VIEW:</span>
              <div class="view-tabs">
                <div class="view-tab">Toll Spend & Trends</div>
                <div class="view-tab active">Asset & Activity</div>
              </div>
            </div>
            <div class="filters-row">
              <div class="filter-group">
                <span class="filter-label">Product Type:</span>
                <select v-model="productType">
                  <option value="all">(All)</option>
                  <option value="toll-management">Toll Management</option>
                  <option value="toll-guard">TollGuard</option>
                </select>
              </div>
              <div class="filter-group">
                <span class="filter-label">Fleet Filter:</span>
                <select v-model="fleetFilter">
                  <option value="all">(All)</option>
                  <option value="fleet-a">Fleet A</option>
                  <option value="fleet-b">Fleet B</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- KPI Cards -->
        <div class="kpi-section">
          <div class="kpi-card">
            <div class="kpi-label">Total Enrolled Assets</div>
            <div class="kpi-value">
              3,111
              <div class="kpi-change positive">32.0% ▲</div>
            </div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Active Tolling Assets</div>
            <div class="kpi-value">
              2,555
              <div class="kpi-change positive">47.4% ▲</div>
            </div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Percent of Fleet Using Tolls</div>
            <div class="kpi-value">
              82.1%
              <div class="kpi-change positive">11.7% ▲</div>
            </div>
          </div>
        </div>

        <!-- Dashboard Grid -->
        <div class="dashboard-grid">
          <!-- Table Card -->
          <div class="dashboard-card">
            <div class="card-header">
              <div class="card-title">Top Clients by Toll Count | Top Fleets</div>
            </div>
            <table>
              <thead>
                <tr>
                  <th style="width: 80px;"></th>
                  <th>Company</th>
                  <th style="width: 110px;">2023</th>
                  <th style="width: 110px;">2024</th>
                  <th style="width: 110px;">2025</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in visibleTableData" :key="row.id">
                  <td style="color: #718096; font-weight: 500;">{{ row.id }}</td>
                  <td style="font-weight: 500;">{{ row.company }}</td>
                  <td><span class="data-cell">{{ row.y2023.toLocaleString() }}</span></td>
                  <td><span class="data-cell">{{ row.y2024.toLocaleString() }}</span></td>
                  <td><span class="data-cell">{{ row.y2025.toLocaleString() }}</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Map Card -->
          <div class="dashboard-card">
            <div class="card-header">
              <div class="card-title">Count of Assets by State</div>
            </div>
            <div id="map"></div>
          </div>

          <!-- Line Chart -->
          <div class="dashboard-card full-width">
            <div class="card-header">
              <div class="card-title">Toll Volume by Product</div>
            </div>
            <div class="chart-container">
              <canvas id="lineChart"></canvas>
            </div>
            <div class="legend">
              <div class="legend-item">
                <div class="legend-color" style="background: #4a90e2;"></div>
                <span>Toll Management</span>
              </div>
              <div class="legend-item">
                <div class="legend-color" style="background: #48bb78;"></div>
                <span>TollGuard</span>
              </div>
            </div>
          </div>

          <!-- Bar Chart -->
          <div class="dashboard-card full-width">
            <div class="card-header">
              <div class="card-title">Enrolled Assets and % of Fleet Assets Incurring a Toll</div>
            </div>
            <div class="chart-container">
              <canvas id="barChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import './styles/dashboard.css';
</style>
