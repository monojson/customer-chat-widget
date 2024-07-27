export type ChatWidgetOptions = {
  position?: 'static' | 'fixed'
  chatSendButtonClickable?: boolean
  bubbleText?: string
  showBubble?: boolean
  chatBoxTitle?: string
  chatBoxMessage?: string
  showChatBoxShadow?: boolean
  chatButtonText?: string
  showKfAvatar?: boolean
  withGradient?: boolean
  gradientBaseRGB?: string
}

export type WhatsAppOptions = ChatWidgetOptions & {
  phone?: string
}

export type TelegramOptions = ChatWidgetOptions & {
  username?: string
}
