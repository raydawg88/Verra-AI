import { useState } from 'react'
import { Card, Flex, Text, Heading, TextField, Button, ScrollArea } from '@radix-ui/themes'
import { LightningBoltIcon, PaperPlaneIcon } from '@radix-ui/react-icons'

export default function ChatPanel({ activePage }) {
  const [messages, setMessages] = useState([
    {
      id: 0,
      role: 'assistant',
      text: "Hi Matt! I'm your AI fleet analyst. I've analyzed 2.3M data points from your fleet. Ask me anything about your tolling, violations, spending patterns, or vehicle performance."
    }
  ])
  const [input, setInput] = useState('')

  const promptsByPage = {
    overview: [
      "What's the biggest opportunity right now?",
      "Show me critical alerts",
      "Summarize today's key findings"
    ],
    'tolling-overview': [
      "Which vehicles have highest toll costs?",
      "Show me toll patterns by day of week",
      "Why did costs increase last month?"
    ],
    insights: [
      "What's driving the savings figure?",
      "Show me top violation types",
      "How confident is the AI?"
    ],
    anomalies: [
      "What anomalies need attention?",
      "Explain the duplicate toll pattern",
      "Are there recurring issues?"
    ]
  }

  const seededPrompts = promptsByPage[activePage] || promptsByPage.overview

  const sendMessage = () => {
    if (!input.trim()) return

    setMessages([...messages, {
      id: Date.now(),
      role: 'user',
      text: input
    }])

    setInput('')

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'assistant',
        text: 'I can help you understand your toll insights better. This is a demo response showing how the AI assistant would respond to your question.'
      }])
    }, 800)
  }

  const sendSeededPrompt = (prompt) => {
    setInput(prompt)
    setTimeout(() => sendMessage(), 100)
  }

  return (
    <Flex direction="column" gap="3"
      style={{ height: '100%' }}
    >
    <Card style={{
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(168, 85, 247, 0.03) 100%)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, var(--indigo-6), var(--purple-6))',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      position: 'relative',
      overflow: 'hidden'
    }}
    className="chat-panel">
      {/* Animated glow effect */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-20%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse 4s ease-in-out infinite',
        pointerEvents: 'none'
      }} />

      {/* Header */}
      <Flex align="center" gap="3" mb="4" style={{ padding: '4px 0', position: 'relative', zIndex: 1 }}>
        <Box style={{
          width: 40,
          height: 40,
          borderRadius: 'var(--radius-3)',
          background: 'linear-gradient(135deg, #9fc908 0%, #7da706 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 4px 12px rgba(159, 201, 8, 0.25)'
        }}>
          <LightningBoltIcon style={{ color: 'white', width: 20, height: 20 }} />
        </Box>
        <Box style={{ flex: 1 }}>
          <Heading size="3" style={{ marginBottom: '2px', lineHeight: 1.2 }}>
            AI Assistant
          </Heading>
          <Text size="1" style={{ color: 'var(--gray-10)' }}>
            Your fleet analyst who knows everything
          </Text>
        </Box>
        <Box style={{
          padding: '4px 8px',
          background: '#9fc908',
          borderRadius: '12px',
          fontSize: '10px',
          fontWeight: 700,
          color: 'white',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Live
        </Box>
      </Flex>

      {/* Messages */}
      <ScrollArea style={{ flex: 1, marginBottom: '16px', position: 'relative', zIndex: 1 }}>
        <Flex direction="column" gap="3">
          {messages.map((msg) => (
            <Flex key={msg.id} justify={msg.role === 'user' ? 'end' : 'start'}>
              <Box style={{
                padding: '12px 16px',
                borderRadius: 'var(--radius-3)',
                maxWidth: '85%',
                background: msg.role === 'user'
                  ? 'linear-gradient(135deg, var(--indigo-9), var(--purple-9))'
                  : 'white',
                color: msg.role === 'user' ? 'white' : 'var(--gray-12)',
                fontSize: '14px',
                lineHeight: 1.6,
                boxShadow: msg.role === 'user'
                  ? '0 4px 12px rgba(99, 102, 241, 0.25)'
                  : '0 2px 8px rgba(0, 0, 0, 0.08)',
                border: msg.role === 'user' ? 'none' : '1px solid var(--gray-5)'
              }}>
                {msg.text}
              </Box>
            </Flex>
          ))}
        </Flex>
      </ScrollArea>

      {/* Input */}
      <Flex gap="2" style={{ position: 'relative', zIndex: 1 }}>
        <TextField.Root
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask me anything about your fleet..."
          size="3"
          style={{
            flex: 1,
            border: '1px solid var(--gray-6)',
            background: 'white'
          }}
        />
        <Button
          onClick={sendMessage}
          disabled={!input.trim()}
          size="3"
          style={{
            flexShrink: 0,
            background: '#9fc908',
            cursor: input.trim() ? 'pointer' : 'not-allowed'
          }}
        >
          <PaperPlaneIcon />
        </Button>
      </Flex>
    </Card>

    {/* Suggestion Buttons Below Chat */}
    <Flex direction="column" gap="2">
      <Text size="1" weight="bold" style={{ color: 'var(--gray-10)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        Suggestions
      </Text>
      {seededPrompts.map((prompt, idx) => (
        <button
          key={idx}
          onClick={() => sendSeededPrompt(prompt)}
          style={{
            padding: '10px 14px',
            background: 'white',
            border: '1px solid var(--gray-5)',
            borderRadius: 'var(--radius-3)',
            fontSize: '13px',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: 'var(--gray-12)',
            fontWeight: 500
          }}
          className="seeded-prompt"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--indigo-2)'
            e.currentTarget.style.borderColor = 'var(--indigo-6)'
            e.currentTarget.style.transform = 'translateX(4px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white'
            e.currentTarget.style.borderColor = 'var(--gray-5)'
            e.currentTarget.style.transform = 'translateX(0)'
          }}
        >
          {prompt}
        </button>
      ))}
    </Flex>
    </Flex>
  )
}

function Box({ children, style, ...props }) {
  return <div style={style} {...props}>{children}</div>
}
