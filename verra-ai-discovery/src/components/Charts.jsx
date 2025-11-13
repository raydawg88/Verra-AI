// Reusable Chart Components for MIRA Dashboard

export function LineChart({ data, color = '#4a90e2', height = 300 }) {
  if (!data || data.length === 0) return null

  const maxValue = Math.max(...data.map(d => d.value))
  const minValue = Math.min(...data.map(d => d.value))
  const range = maxValue - minValue || 1

  const width = 100
  const chartHeight = 100

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width
    const y = chartHeight - ((d.value - minValue) / range) * chartHeight
    return `${x},${y}`
  }).join(' ')

  return (
    <div style={{ height: `${height}px`, padding: '20px', position: 'relative' }}>
      {/* Y-axis labels */}
      <div style={{ position: 'absolute', left: 0, top: 20, bottom: 40, width: '50px' }}>
        {[maxValue, Math.round(maxValue * 0.5), 0].map((val, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: `${i * 50}%`,
            fontSize: '11px',
            color: '#718096',
            transform: 'translateY(-50%)'
          }}>
            {val.toLocaleString()}
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div style={{ marginLeft: '60px', marginRight: '20px', height: '100%' }}>
        <div style={{ height: 'calc(100% - 30px)', position: 'relative' }}>
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }} viewBox={`0 0 ${width} ${chartHeight}`} preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((percent) => (
              <line
                key={percent}
                x1="0"
                y1={percent}
                x2={width}
                y2={percent}
                stroke="#e2e8f0"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
              />
            ))}

            {/* Line */}
            <polyline
              points={points}
              fill="none"
              stroke={color}
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Points rendered separately to avoid stretching */}
          {data.map((d, i) => {
            const xPercent = (i / (data.length - 1)) * 100
            const yPercent = ((d.value - minValue) / range) * 100
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${xPercent}%`,
                  bottom: `${yPercent}%`,
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: color,
                  transform: 'translate(-50%, 50%)',
                  pointerEvents: 'none'
                }}
              />
            )
          })}
        </div>

        {/* X-axis labels */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          {data.filter((_, i) => i % Math.ceil(data.length / 6) === 0).map((d, i) => (
            <div key={i} style={{ fontSize: '11px', color: '#718096' }}>
              {d.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BarChart({ data, color = '#4a90e2', height = 300 }) {
  if (!data || data.length === 0) return null

  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <div style={{ height: `${height}px`, padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', height: 'calc(100% - 30px)', gap: '8px' }}>
        {data.map((d, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
            <div style={{
              width: '100%',
              height: `${(d.value / maxValue) * 100}%`,
              background: color,
              borderRadius: '4px 4px 0 0',
              position: 'relative',
              transition: 'all 0.3s'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '11px',
                fontWeight: 600,
                color: '#1a202c'
              }}>
                {d.value.toLocaleString()}
              </div>
            </div>
            <div style={{ fontSize: '11px', color: '#718096', marginTop: '8px', textAlign: 'center' }}>
              {d.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PieChart({ data, height = 300 }) {
  if (!data || data.length === 0) return null

  const total = data.reduce((sum, d) => sum + d.value, 0)
  let currentAngle = -90

  const slices = data.map((d, i) => {
    const percentage = (d.value / total) * 100
    const angle = (d.value / total) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + angle
    currentAngle = endAngle

    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180

    const x1 = 50 + 40 * Math.cos(startRad)
    const y1 = 50 + 40 * Math.sin(startRad)
    const x2 = 50 + 40 * Math.cos(endRad)
    const y2 = 50 + 40 * Math.sin(endRad)

    const largeArc = angle > 180 ? 1 : 0

    return {
      ...d,
      path: `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`,
      percentage: percentage.toFixed(1)
    }
  })

  return (
    <div style={{ height: `${height}px`, padding: '20px', display: 'flex', alignItems: 'center', gap: '40px' }}>
      <svg width="200" height="200" viewBox="0 0 100 100">
        {slices.map((slice, i) => (
          <path
            key={i}
            d={slice.path}
            fill={slice.color}
            stroke="white"
            strokeWidth="0.5"
          />
        ))}
      </svg>
      <div style={{ flex: 1 }}>
        {slices.map((slice, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{
              width: '16px',
              height: '16px',
              background: slice.color,
              borderRadius: '3px',
              marginRight: '12px'
            }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a202c' }}>
                {slice.label}
              </div>
              <div style={{ fontSize: '12px', color: '#718096' }}>
                {slice.value.toLocaleString()} ({slice.percentage}%)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AreaChart({ data, color = '#4a90e2', height = 300 }) {
  if (!data || data.length === 0) return null

  const maxValue = Math.max(...data.map(d => d.value))
  const minValue = Math.min(...data.map(d => d.value))
  const range = maxValue - minValue || 1

  const width = 100
  const chartHeight = 100

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width
    const y = chartHeight - ((d.value - minValue) / range) * chartHeight
    return `${x},${y}`
  }).join(' ')

  const areaPoints = `0,${chartHeight} ${points} ${width},${chartHeight}`

  return (
    <div style={{ height: `${height}px`, padding: '20px', position: 'relative' }}>
      {/* Y-axis labels */}
      <div style={{ position: 'absolute', left: 0, top: 20, bottom: 40, width: '50px' }}>
        {[maxValue, Math.round(maxValue * 0.5), 0].map((val, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: `${i * 50}%`,
            fontSize: '11px',
            color: '#718096',
            transform: 'translateY(-50%)'
          }}>
            ${val.toLocaleString()}
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div style={{ marginLeft: '60px', marginRight: '20px', height: '100%' }}>
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${chartHeight}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((percent) => (
            <line
              key={percent}
              x1="0"
              y1={percent}
              x2={width}
              y2={percent}
              stroke="#e2e8f0"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {/* Area */}
          <polygon
            points={areaPoints}
            fill={`url(#gradient-${color})`}
          />

          {/* Line */}
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* X-axis labels */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          {data.filter((_, i) => i % Math.ceil(data.length / 6) === 0).map((d, i) => (
            <div key={i} style={{ fontSize: '11px', color: '#718096' }}>
              {d.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeatMap({ data, height = 300 }) {
  // data format: [{ state: 'CA', value: 1234, color: '#color' }]
  return (
    <div style={{ height: `${height}px`, padding: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '4px', height: '100%' }}>
        {data.map((d, i) => (
          <div key={i} style={{
            background: d.color,
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            fontSize: '11px',
            fontWeight: 600,
            color: 'white',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            <div>{d.state}</div>
            <div style={{ fontSize: '10px', marginTop: '4px' }}>{d.value.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DataTable({ columns, data }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
            {columns.map((col, i) => (
              <th key={i} style={{
                padding: '12px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: 600,
                color: '#4a5568',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
              {columns.map((col, j) => (
                <td key={j} style={{
                  padding: '12px',
                  fontSize: '14px',
                  color: col.key === 'id' ? '#718096' : '#1a202c'
                }}>
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ScatterPlot({ data, xLabel, yLabel, height = 300 }) {
  if (!data || data.length === 0) return null

  const maxX = Math.max(...data.map(d => d.x))
  const maxY = Math.max(...data.map(d => d.y))

  return (
    <div style={{ height: `${height}px`, padding: '20px', position: 'relative' }}>
      <div style={{ marginLeft: '60px', marginRight: '20px', height: 'calc(100% - 40px)', position: 'relative' }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }} viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid */}
          {[0, 25, 50, 75, 100].map((val) => (
            <g key={val}>
              <line x1="0" y1={val} x2="100" y2={val} stroke="#e2e8f0" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
              <line x1={val} y1="0" x2={val} y2="100" stroke="#e2e8f0" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            </g>
          ))}
        </svg>

        {/* Points rendered separately to avoid stretching */}
        {data.map((d, i) => {
          const xPercent = (d.x / maxX) * 100
          const yPercent = (d.y / maxY) * 100
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${xPercent}%`,
                bottom: `${yPercent}%`,
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: d.color || '#4a90e2',
                opacity: 0.7,
                transform: 'translate(-50%, 50%)',
                pointerEvents: 'none'
              }}
            />
          )
        })}
      </div>
      <div style={{ textAlign: 'center', fontSize: '11px', color: '#718096', marginTop: '8px' }}>
        {xLabel}
      </div>
    </div>
  )
}
