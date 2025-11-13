import { useState, useEffect, useRef } from 'react'
import { Card, Flex, Text, Heading, TextField, Button, ScrollArea, Avatar } from '@radix-ui/themes'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import SendIcon from '@mui/icons-material/Send'
import PersonIcon from '@mui/icons-material/Person'

export default function ChatPanel({ activePage, insightContext, initialQuestion }) {
  const [input, setInput] = useState('')
  const processedQuestionRef = useRef(null)

  // Contextual welcome message based on whether we're on a detail page
  const getInitialMessage = () => {
    if (insightContext) {
      return `I've analyzed "${insightContext.title}" in detail. What would you like to know? I can explain the root causes, discuss implementation strategies, compare with industry benchmarks, or dive deeper into the data.`
    }
    return "Hi Jadine! I'm your AI fleet analyst. I've analyzed 2.3M data points from your fleet. Ask me anything about your tolling, violations, spending patterns, or vehicle performance."
  }

  const [messages, setMessages] = useState([
    {
      id: 0,
      role: 'assistant',
      text: insightContext
        ? `I've analyzed "${insightContext.title}" in detail. What would you like to know? I can explain the root causes, discuss implementation strategies, compare with industry benchmarks, or dive deeper into the data.`
        : "Hi Jadine! I'm your AI fleet analyst. I've analyzed 2.3M data points from your fleet. Ask me anything about your tolling, violations, spending patterns, or vehicle performance."
    }
  ])

  // Handle initial question from floating widget
  useEffect(() => {
    if (initialQuestion && initialQuestion.trim() && processedQuestionRef.current !== initialQuestion) {
      processedQuestionRef.current = initialQuestion

      // Add user message
      const userMessage = {
        id: Date.now(),
        role: 'user',
        text: initialQuestion
      }

      setMessages(prev => [...prev, userMessage])

      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          role: 'assistant',
          text: 'I can help you understand your toll insights better. This is a demo response showing how the AI assistant would respond to your question.'
        }])
      }, 800)
    }
  }, [initialQuestion])

  // Get contextual prompts based on insight type
  const getInsightPrompts = () => {
    if (!insightContext) return null

    const category = insightContext.category?.toLowerCase() || ''

    if (category.includes('anomaly')) {
      return [
        "How did the AI detect this anomaly?",
        "What should I do first to address this?",
        "Could this be happening elsewhere in my fleet?"
      ]
    } else if (category.includes('pattern')) {
      return [
        "Why did this pattern develop?",
        "What's the quickest way to fix this?",
        "Show me the ROI breakdown in detail"
      ]
    } else if (category.includes('forecast')) {
      return [
        "How accurate is this prediction?",
        "What can I do to improve the forecast?",
        "What if we don't act on this?"
      ]
    } else {
      return [
        "How was this discovered?",
        "What's the implementation timeline?",
        "Are there any risks to fixing this?"
      ]
    }
  }

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
    ],
    detail: getInsightPrompts()
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
      style={{ height: '100%', alignSelf: 'flex-start', margin: 0 }}
    >
    <Card
    variant="ghost"
    style={{
      background: 'white',
      height: 'calc(100vh - 240px)',
      minHeight: '400px',
      maxHeight: '650px',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid var(--gray-4)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
      padding: 0,
      position: 'relative',
      overflow: 'hidden'
    }}
    className="chat-panel">
      {/* Header */}
      <Flex
        align="center"
        gap="3"
        style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--gray-4)',
          background: 'white'
        }}
      >
        <AutoAwesomeIcon style={{ color: 'var(--indigo-9)', width: 28, height: 28, flexShrink: 0 }} />
        <Box style={{ flex: 1 }}>
          <Heading size="4" style={{ marginBottom: '2px', lineHeight: 1.2, color: 'var(--gray-12)' }}>
            AI Assistant
          </Heading>
          <Text size="2" style={{ color: 'var(--gray-10)' }}>
            {insightContext ? 'Insight-specific expert' : 'Ask me anything about your fleet'}
          </Text>
        </Box>
        <Box style={{
          width: 8,
          height: 8,
          background: 'var(--green-9)',
          borderRadius: '50%',
          boxShadow: '0 0 0 2px var(--green-3)'
        }} />
      </Flex>

      {/* Messages */}
      <ScrollArea style={{ flex: 1, padding: '24px', background: 'var(--gray-1)' }}>
        <Flex direction="column" gap="4">
          {messages.map((msg) => (
            <Flex key={msg.id} gap="3" align="start" style={{ flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
              {/* Avatar */}
              {msg.role === 'user' ? (
                <Avatar
                  size="2"
                  fallback="M"
                  color="gray"
                  style={{ flexShrink: 0 }}
                />
              ) : (
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--indigo-3)',
                  border: '1px solid var(--indigo-6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <AutoAwesomeIcon style={{ color: 'var(--indigo-9)', width: 16, height: 16 }} />
                </div>
              )}

              {/* Message bubble */}
              <Box style={{
                padding: '14px 18px',
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                maxWidth: '80%',
                background: msg.role === 'user'
                  ? 'var(--gray-12)'
                  : 'white',
                color: msg.role === 'user' ? 'white' : 'var(--gray-12)',
                fontSize: '14px',
                lineHeight: 1.6,
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
                border: msg.role === 'user' ? 'none' : '1px solid var(--gray-4)'
              }}>
                {msg.text}
              </Box>
            </Flex>
          ))}
        </Flex>
      </ScrollArea>

      {/* Input */}
      <Box style={{
        padding: '20px 24px',
        borderTop: '1px solid var(--gray-4)',
        background: 'white'
      }}>
        <Flex gap="2">
          <TextField.Root
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask me anything about your fleet..."
            size="3"
            style={{
              flex: 1,
              border: '1px solid var(--gray-6)',
              background: 'white',
              fontSize: '14px'
            }}
          />
          <Button
            onClick={sendMessage}
            disabled={!input.trim()}
            size="3"
            style={{
              flexShrink: 0,
              background: input.trim() ? 'var(--gray-12)' : 'var(--gray-6)',
              cursor: input.trim() ? 'pointer' : 'not-allowed',
              color: 'white',
              border: 'none'
            }}
          >
            <SendIcon style={{ width: 20, height: 20 }} />
          </Button>
        </Flex>
      </Box>
    </Card>

    {/* Suggestion Buttons Below Chat */}
    <Flex direction="column" gap="2" style={{ marginTop: '16px' }}>
      <Text size="1" weight="bold" style={{ color: 'var(--gray-10)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        Suggestions
      </Text>
      {seededPrompts.map((prompt, idx) => (
        <button
          key={idx}
          onClick={() => sendSeededPrompt(prompt)}
          style={{
            padding: '10px 14px',
            background: 'var(--indigo-9)',
            border: 'none',
            borderRadius: 'var(--radius-3)',
            fontSize: '13px',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: 'white',
            fontWeight: 500,
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.08)'
          }}
          className="seeded-prompt"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--indigo-10)'
            e.currentTarget.style.transform = 'translateX(4px)'
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.12)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--indigo-9)'
            e.currentTarget.style.transform = 'translateX(0)'
            e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.08)'
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
