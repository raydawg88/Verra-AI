import { useState } from 'react'
import { Card, Flex, Text, TextField, Button } from '@radix-ui/themes'
import ChatIcon from '@mui/icons-material/Chat'

export default function FloatingChatWidget({ onExpand, insightTitle }) {
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      // Switch to chat tab when user submits their question
      onExpand?.(input)
      setInput('')
    }
  }

  return (
    <Card
      style={{
        position: 'fixed',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        padding: '16px 20px',
        background: 'white',
        border: '2px solid var(--indigo-7)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        minWidth: '500px',
        maxWidth: '600px',
        cursor: 'default'
      }}
    >
      <Flex direction="column" gap="3">
        <Flex justify="between" align="center">
          <Flex align="center" gap="2">
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--indigo-9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ChatIcon style={{ color: 'white', width: 16, height: 16 }} />
            </div>
            <div>
              <Text size="2" weight="bold" style={{ display: 'block', color: 'var(--gray-12)' }}>
                Ask AI About This Insight
              </Text>
              <Text size="1" style={{ color: 'var(--gray-10)' }}>
                Type your question and press Enter
              </Text>
            </div>
          </Flex>
        </Flex>

        <Flex gap="2">
          <TextField.Root
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={`Ask about ${insightTitle?.slice(0, 30)}...`}
            size="2"
            style={{
              flex: 1,
              border: '1px solid var(--gray-6)',
              background: 'var(--gray-2)',
              fontSize: '14px'
            }}
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim()}
            size="2"
            style={{
              background: input.trim() ? 'var(--indigo-9)' : 'var(--gray-6)',
              color: 'white',
              cursor: input.trim() ? 'pointer' : 'not-allowed',
              fontWeight: 600
            }}
          >
            Send
          </Button>
        </Flex>
      </Flex>
    </Card>
  )
}
