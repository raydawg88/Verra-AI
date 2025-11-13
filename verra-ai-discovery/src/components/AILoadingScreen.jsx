import { useState, useEffect } from 'react'
import { Box, Flex, Text } from '@radix-ui/themes'

export default function AILoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { message: 'Connecting to AI Engine...', duration: 800 },
    { message: 'Analyzing tolling data...', duration: 1200 },
    { message: 'Processing violations history...', duration: 1000 },
    { message: 'Scanning for anomalies...', duration: 900 },
    { message: 'Looking for insights...', duration: 1100 },
    { message: 'Finding patterns...', duration: 1000 },
    { message: 'Calculating savings opportunities...', duration: 800 },
    { message: 'Finalizing analysis...', duration: 700 }
  ]

  useEffect(() => {
    let currentProgress = 0
    let stepIndex = 0
    let progressInterval
    let stepTimeout

    const runStep = () => {
      if (stepIndex >= steps.length) {
        setProgress(100)
        setTimeout(() => {
          onComplete()
        }, 500)
        return
      }

      setCurrentStep(stepIndex)
      const step = steps[stepIndex]
      const progressIncrement = (100 / steps.length) / (step.duration / 50)

      progressInterval = setInterval(() => {
        currentProgress += progressIncrement
        if (currentProgress > ((stepIndex + 1) / steps.length) * 100) {
          currentProgress = ((stepIndex + 1) / steps.length) * 100
        }
        setProgress(Math.min(currentProgress, 100))
      }, 50)

      stepTimeout = setTimeout(() => {
        clearInterval(progressInterval)
        stepIndex++
        runStep()
      }, step.duration)
    }

    runStep()

    return () => {
      clearInterval(progressInterval)
      clearTimeout(stepTimeout)
    }
  }, [onComplete])

  return (
    <Box style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(159, 201, 8, 0.08) 0%, rgba(99, 201, 218, 0.12) 50%, rgba(255, 237, 160, 0.06) 100%)',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(159, 201, 8, 0.1) 0%, transparent 50%)',
        animation: 'pulse 4s ease-in-out infinite'
      }} />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes orbRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbGlow {
          0% { opacity: 0.4; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>

      <Flex direction="column" align="center" gap="6" style={{ position: 'relative', zIndex: 1 }}>
        {/* Orb Animation */}
        <Box style={{
          position: 'relative',
          width: '200px',
          height: '200px',
          filter: 'drop-shadow(0 0 40px rgba(159, 201, 8, 0.4))'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, rgba(159, 201, 8, 0.8) 0%, rgba(159, 201, 8, 0.4) 30%, rgba(99, 201, 218, 0.3) 60%, transparent 100%)',
            animation: 'orbPulse 3s ease-in-out infinite, orbRotate 20s linear infinite',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '20%',
              width: '30%',
              height: '30%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%)',
              filter: 'blur(10px)',
              animation: 'orbGlow 2s ease-in-out infinite alternate'
            }} />
          </div>
        </Box>

        {/* AI Branding */}
        <Flex direction="column" align="center" gap="2">
          <Text size="6" weight="bold" style={{
            color: 'var(--gray-12)',
            letterSpacing: '0.5px'
          }}>
            Verra AI Insights
          </Text>
          <Text size="2" style={{
            color: 'var(--gray-10)',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontSize: '11px',
            fontWeight: 500
          }}>
            Powered by Velona AI Engine
          </Text>
        </Flex>

        {/* Current Step Message */}
        <Box style={{
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text size="4" style={{
            color: 'var(--gray-12)',
            textAlign: 'center',
            animation: 'fadeIn 0.5s ease-in',
            fontWeight: 500
          }}>
            {steps[currentStep]?.message}
          </Text>
        </Box>

        {/* Progress Bar */}
        <Box style={{
          width: '400px',
          maxWidth: '90vw'
        }}>
          {/* Progress percentage */}
          <Flex justify="between" mb="2">
            <Text size="2" style={{ color: 'var(--gray-11)' }}>
              Processing...
            </Text>
            <Text size="2" weight="bold" style={{ color: '#9fc908' }}>
              {Math.round(progress)}%
            </Text>
          </Flex>

          {/* Progress bar container */}
          <Box style={{
            width: '100%',
            height: '8px',
            background: 'var(--gray-4)',
            borderRadius: '999px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* Progress bar fill */}
            <Box style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #9fc908 0%, #63c9da 50%, #9fc908 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s linear infinite',
              borderRadius: '999px',
              transition: 'width 0.3s ease-out',
              boxShadow: '0 0 20px rgba(159, 201, 8, 0.3)'
            }} />
          </Box>
        </Box>

        {/* Data points analyzed counter */}
        <Box style={{
          marginTop: '20px',
          padding: '12px 24px',
          background: 'white',
          borderRadius: 'var(--radius-3)',
          border: '1px solid var(--gray-4)',
          boxShadow: 'var(--shadow-2)'
        }}>
          <Flex gap="2" align="center">
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#9fc908',
              boxShadow: '0 0 10px rgba(159, 201, 8, 0.5)',
              animation: 'pulse 2s ease-in-out infinite'
            }} />
            <Text size="2" style={{ color: 'var(--gray-12)', fontWeight: 500 }}>
              Analyzing 2.3M+ data points
            </Text>
          </Flex>
        </Box>
      </Flex>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  )
}
