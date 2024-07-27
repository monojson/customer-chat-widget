# Customer Chat Widget

With this widget, you can add a customer chat widget to your website. It is easy to use and customizable. Your contacts can easily reach you on WhatsApp or Telegram.

## Installation

```bash
npm i customer-chat-widget
```

## Usage

First, import css in your main.css or nuxt.config.ts.  
main.css

```css
@import url('~/node_modules/customer-chat-widget/dist/style.css');
```

nuxt.config.ts

```ts
export default defineNuxtConfig({
  // ...
  css: ['~/node_modules/customer-chat-widget/dist/style.css']
  // ...
})
```

Then, add the component to your template:

1. use WhatsApp component

```vue
import { WhatsAppChat } from 'customer-chat-widget';

<template>
  <WhatsAppChat />
</template>
```

2. use Telegram component

```vue
import { TelegramChat } from 'customer-chat-widget';

<template>
  <TelegramChat />
</template>
```

## Props

| Property                | Description                                                                                 | Type              | Default                                        |
| ----------------------- | ------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------- |
| position                | Set widget show position                                                                    | `fixed`\|`static` | `fixed`                                        |
| chatSendButtonClickable | Set chat send button clickable                                                              | boolean           | true                                           |
| bubbleText              | Set bubble text                                                                             | string            | Get In Touch                                   |
| showBubble              | Set bubble show or hide                                                                     | boolean           | true                                           |
| chatBoxTitle            | Set chat box title                                                                          | string            | Hi there. 👋                                   |
| chatBoxMessage          | Set chat box message, this message will be filled in WhatsApp's chat box                    | string            | I checked the website and have some questions. |
| showChatBoxShadow       | Set chat box shadow                                                                         | boolean           | true                                           |
| chatButtonText          | Set chat button text                                                                        | string            | Chat With US                                   |
| phone                   | Set customer service staff's WhatsApp phone or Telegram username                            | string            | +447354255981                                  |
| showKfAvatar            | Set customer service staff's avatar                                                         | boolean           | true                                           |
| withGradient            | Set whether there is a gradient effect to chat send button and chat button background color | boolean           | rgb(191, 81, 254)                              |
| gradientBaseRGB         | Set chat send button and chat button background color RGB value                             | string            | rgb(191, 81, 254)                              |

[![U301 Team](https://u301.oss-cn-hangzhou.aliyuncs.com/chat-widget/u301-chat-widget-1.jpg)](https://u301.com?utm_source=github-chat-widget)

[![U301 Team](https://u301.oss-cn-hangzhou.aliyuncs.com/chat-widget/u301-chat-widget-2.jpg)](https://u301.com?utm_source=github-chat-widget)

## Contributors

This project is contributed by [u301](https://u301.com?utm_source=github-chat-widget) team. [Create an issue](https://github.com/monojson/customer-chat-widget/issues) to give suggestions or feedback questions.
