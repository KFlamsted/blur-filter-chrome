// Content script that applies blur filter to the page

interface BlurMessage {
  type: 'TOGGLE_BLUR' | 'UPDATE_BLUR'
  enabled?: boolean
  intensity?: number
}

let currentBlurIntensity = 0
let isBlurEnabled = false

// Create a style element for blur effect
const styleElement = document.createElement('style')
styleElement.id = 'page-blur-filter-style'
document.head.appendChild(styleElement)

// Function to apply blur filter
function applyBlur(intensity: number): void {
  if (intensity > 0) {
    styleElement.textContent = `
      body {
        filter: blur(${intensity}px) !important;
        transition: filter 0.3s ease !important;
      }
    `
  } else {
    styleElement.textContent = ''
  }
}

// Function to remove blur
function removeBlur(): void {
  styleElement.textContent = ''
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message: BlurMessage, _sender, sendResponse) => {
  console.log('Content script received message:', message)

  if (message.type === 'TOGGLE_BLUR') {
    isBlurEnabled = message.enabled ?? false
    
    if (isBlurEnabled && message.intensity !== undefined) {
      currentBlurIntensity = message.intensity
      applyBlur(currentBlurIntensity)
    } else {
      removeBlur()
    }
    sendResponse({ success: true })
  } else if (message.type === 'UPDATE_BLUR') {
    if (message.intensity !== undefined) {
      currentBlurIntensity = message.intensity
      if (isBlurEnabled) {
        applyBlur(currentBlurIntensity)
      }
    }
    sendResponse({ success: true })
  }

  return true // Keep the message channel open for async response
})

// Initialize blur state from storage when content script loads
chrome.storage.sync.get(['blurEnabled', 'blurIntensity'], (result) => {
  isBlurEnabled = result.blurEnabled ?? false
  currentBlurIntensity = result.blurIntensity ?? 5

  if (isBlurEnabled) {
    applyBlur(currentBlurIntensity)
  }
})

console.log('Page Blur Filter content script loaded')
