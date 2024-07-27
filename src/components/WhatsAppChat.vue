<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'
import { WhatsAppOptions } from '../types'
import { generateGradientStops } from '../utils'

const props = withDefaults(defineProps<WhatsAppOptions>(), {
  position: 'fixed',
  chatSendButtonClickable: true,
  bubbleText: 'Get In Touch',
  showBubble: true,
  chatBoxTitle: 'Hi there. 👋',
  chatBoxMessage: 'I checked the website and have some questions.',
  showChatBoxShadow: true,
  chatButtonText: 'Chat With US',
  phone: '+447354255981',
  showKfAvatar: true,
  withGradient: true,
  gradientBaseRGB: 'rgb(191, 81, 254)'
})
const showChatBox = ref(false)
const showChatBubble = ref(props.showBubble)

const gradientStyle = computed(() => {
  const [gradientStart, gradientStop] = generateGradientStops(
    props.withGradient,
    props.gradientBaseRGB
  )
  return {
    background: `linear-gradient(to right, ${gradientStart}, ${gradientStop})`
  }
})
const positionClass = computed(() => {
  if (props.position !== 'fixed') {
    return ''
  }

  return 'fixed right-5 bottom-5'
})

const closeChatBubble = () => {
  showChatBubble.value = false
}
const toggleChatBox = () => {
  if (!props.chatSendButtonClickable) {
    return
  }
  showChatBox.value = !showChatBox.value
  showChatBubble.value = !showChatBox.value
}
const toChat = () => {
  const encodedMessage = encodeURIComponent(props.chatBoxMessage)
  const url = `https://api.whatsapp.com/send?phone=${props.phone}&text=${encodedMessage}`
  window.open(url, '_blank')
}
</script>

<template>
  <div
    id="chat-container"
    class="flex flex-col-reverse items-end rtl:items-start"
    :class="positionClass"
  >
    <div
      id="chat-box-toggle-button"
      class="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer mt-6"
      @click="toggleChatBox"
      :style="gradientStyle"
    >
      <img src="../assets/img/message-icon-lg.svg" />
    </div>
    <div
      v-if="props.showBubble"
      id="chat-bubble"
      class="flex cursor-pointer"
      :class="{ hidden: !showChatBubble }"
    >
      <div
        id="chat-bubble-close-button"
        class="w-5 h-5 bg-black flex items-center justify-center rounded-full cursor-pointer order-1 -ml-2.5 rtl:-mr-2.5 -mt-2"
        @click="closeChatBubble"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.6001 4.1001L8.4001 8.9001M3.6001 8.9001L8.4001 4.1001"
            stroke="white"
            stroke-width="1.33333"
          ></path>
        </svg>
      </div>
      <div
        id="chat-bubble-text"
        class="border border-[#DACBE1] rounded-[8px] bg-white px-4 py-2 text-sm font-semibold dark:bg-slate-800 dark:text-white dark:border-slate-800"
        @click="toggleChatBox"
      >
        {{ props.bubbleText }}
      </div>
    </div>
    <div
      id="chat-box"
      class="w-[380px] min-h-[350px] flex flex-col rounded-[10px] bg-white dark:bg-slate-800 mb-4"
      :class="{
        hidden: !showChatBox,
        'drop-shadow-[0_8px_30px_rgb(0,0,0,0.12)]': props.showChatBoxShadow,
        'drop-shadow-[0_0_1px_rgb(0,0,0,0.12)]': !props.showChatBoxShadow
      }"
    >
      <div id="chat-box-title" class="flex justify-between px-11 py-10">
        <div
          class="text-[28px] leading-[30px] font-semibold mt-2 dark:text-white"
          :class="{ 'w-2/3': props.showKfAvatar }"
        >
          {{ props.chatBoxTitle }}
        </div>
        <div v-if="props.showKfAvatar" class="w-1/3 flex -space-x-3 rtl:space-x-reverse">
          <img class="w-10 h-10 rounded-full" src="../assets/img/kf-avatar-1.svg" />
          <img class="w-10 h-10 rounded-full" src="../assets/img/kf-avatar-2.svg" />
          <div class="relative">
            <img class="w-10 h-10 rounded-full" src="../assets/img/kf-avatar-3.svg" />
            <span
              class="-top-1 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"
            ></span>
          </div>
        </div>
      </div>
      <div id="chat-box-message" class="font-normal text-xl px-11 dark:text-white">
        {{ props.chatBoxMessage }}
      </div>
      <div
        id="chat-box-button"
        class="h-[54px] flex items-center mt-12 rounded-[40px] gap-2 cursor-pointer mx-11"
        @click="toChat"
        :style="gradientStyle"
      >
        <img src="../assets/img/message-icon-sm.svg" class="ml-6 rtl:mr-6 rtl:ml-0" />
        <span class="text-white font-semibold text-base">{{ props.chatButtonText }}</span>
      </div>
      <div
        id="chat-box-poweredby"
        class="flex gap-1 text-sm font-semibold items-center justify-center my-4 rtl:flex-row-reverse"
      >
        <svg
          width="10"
          height="13"
          viewBox="0 0 10 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.107 0L0.571289 6.5H4.107L1.74986 13L9.99986 4.875H5.28557L8.82129 0H4.107Z"
            fill="#8999AF"
          />
        </svg>
        <span class="font-normal text-sm text-[#8999AF]"
          >Powered by
          <a
            href="https://u301.com/?utm_source=chat_widget"
            target="_blank"
            class="font-semibold text-sm text-[#4E5969] dark:text-[#CED1D5]"
            >U301.com</a
          ></span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
#chat-box::after {
  content: '';
  position: absolute;
  bottom: -12px;
  right: 30px;
  height: 32px;
  width: 32px;
  background: inherit;
  transform: rotate(45deg);
  border-radius: 8px;
  z-index: 1;
}
</style>
