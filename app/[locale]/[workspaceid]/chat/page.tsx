"use client"

import { ChatHelp } from "@/components/chat/chat-help"
import { useChatHandler } from "@/components/chat/chat-hooks/use-chat-handler"
import { ChatInput } from "@/components/chat/chat-input"
import { ChatSettings } from "@/components/chat/chat-settings"
import { ChatUI } from "@/components/chat/chat-ui"
import { QuickSettings } from "@/components/chat/quick-settings"
import { Brand } from "@/components/ui/brand"
import { ChatbotUIContext } from "@/context/context"
import useHotkey from "@/lib/hooks/use-hotkey"
import { useTheme } from "next-themes"
import { useContext } from "react"

export default function ChatPage() {
  useHotkey("o", () => handleNewChat())
  useHotkey("l", () => {
    handleFocusChatInput()
  })

  const { chatMessages, selectedAssistant } = useContext(ChatbotUIContext)

  const { handleNewChat, handleFocusChatInput } = useChatHandler()

  const { theme } = useTheme()

  return (
    <>
      {chatMessages.length === 0 ? (
        <div className="relative flex h-full flex-col items-center justify-center px-4 py-2">
          <div className="flex w-full justify-between">
            <div>
              <QuickSettings />
            </div>
            <div>
              <ChatSettings />
            </div>
          </div>
          <div className="flex h-full min-w-[200px] max-w-[600px] items-center justify-center text-gray-400">
            <div>{selectedAssistant?.prompt}</div>
          </div>

          <div className="w-full max-w-[800px] pb-4">
            <ChatInput />
          </div>

          <div className="absolute bottom-4 right-4 hidden md:block">
            <ChatHelp />
          </div>
        </div>
      ) : (
        <ChatUI />
      )}
    </>
  )
}
