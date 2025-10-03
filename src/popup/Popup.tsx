import { useState, useEffect } from 'react'

interface BlurSettings {
  enabled: boolean
  intensity: number
}

function Popup() {
  const [settings, setSettings] = useState<BlurSettings>({
    enabled: false,
    intensity: 5,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load saved settings
    chrome.storage.sync.get(['blurEnabled', 'blurIntensity'], (result) => {
      setSettings({
        enabled: result.blurEnabled ?? false,
        intensity: result.blurIntensity ?? 5,
      })
      setLoading(false)
    })
  }, [])

  const handleToggle = async () => {
    const newEnabled = !settings.enabled
    setSettings((prev) => ({ ...prev, enabled: newEnabled }))

    // Save to storage
    await chrome.storage.sync.set({ blurEnabled: newEnabled })

    // Send message to content script
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (tab.id) {
      chrome.tabs.sendMessage(tab.id, {
        type: 'TOGGLE_BLUR',
        enabled: newEnabled,
        intensity: settings.intensity,
      })
    }
  }

  const handleIntensityChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIntensity = parseInt(e.target.value)
    setSettings((prev) => ({ ...prev, intensity: newIntensity }))

    // Save to storage
    await chrome.storage.sync.set({ blurIntensity: newIntensity })

    // Send message to content script if blur is enabled
    if (settings.enabled) {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, {
          type: 'UPDATE_BLUR',
          intensity: newIntensity,
        })
      }
    }
  }

  if (loading) {
    return <div className="popup">Loading...</div>
  }

  return (
    <div className="popup">
      <header>
        <h1>Blur Filter</h1>
      </header>

      <main>
        <div className="control-group">
          <label className="toggle-label">
            <span>Enable Blur</span>
            <button
              className={`toggle-btn ${settings.enabled ? 'active' : ''}`}
              onClick={handleToggle}
              aria-pressed={settings.enabled}
            >
              <span className="toggle-slider"></span>
            </button>
          </label>
        </div>

        <div className="control-group">
          <label htmlFor="intensity">
            Blur Intensity: <strong>{settings.intensity}px</strong>
          </label>
          <input
            type="range"
            id="intensity"
            min="0"
            max="20"
            value={settings.intensity}
            onChange={handleIntensityChange}
            disabled={!settings.enabled}
          />
        </div>
      </main>

      <footer>
        <p className="hint">
          {settings.enabled 
            ? 'Blur is active on this page' 
            : 'Toggle to activate blur filter'}
        </p>
      </footer>
    </div>
  )
}

export default Popup
