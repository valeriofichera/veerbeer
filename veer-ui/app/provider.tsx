'use client'

import React from 'react'
import { DaimoPayProvider, getDefaultConfig } from '@daimo/pay'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, createConfig } from 'wagmi'

const config = createConfig(
  getDefaultConfig({
    appName: 'VEER Action Figure',
    ssr: true, // Set to true if your project uses server side rendering (SSR)
  }),
)

const queryClient = new QueryClient()
const customTheme = {
  "--ck-font-family": "Inter",
  "--ck-font-weight": "400",
  "--ck-border-radius": "15px",
  "--ck-overlay-backdrop-filter": "blur(2px)",
  "--ck-modal-heading-font-weight": "600",
  "--ck-qr-border-radius": "15px",
  "--ck-connectbutton-font-size": "15px",
  "--ck-connectbutton-color": "#373737",
  "--ck-connectbutton-background": "#F6F7F9",
  "--ck-connectbutton-background-secondary": "#FFFFFF",
  "--ck-connectbutton-border-radius": "16px",
  "--ck-connectbutton-box-shadow": "0 0 0 0 #ffffff",
  "--ck-connectbutton-hover-color": "#373737",
  "--ck-connectbutton-hover-background": "#F0F2F5",
  "--ck-connectbutton-hover-box-shadow": "0 0 0 0 #ffffff",
  "--ck-connectbutton-active-color": "#373737",
  "--ck-connectbutton-active-background": "#EAECF1",
  "--ck-connectbutton-active-box-shadow": "0 0 0 0 #ffffff",
  "--ck-connectbutton-balance-color": "#373737",
  "--ck-connectbutton-balance-background": "#fff",
  "--ck-connectbutton-balance-box-shadow": "inset 0 0 0 1px #F6F7F9",
  "--ck-connectbutton-balance-hover-background": "#F6F7F9",
  "--ck-connectbutton-balance-hover-box-shadow": "inset 0 0 0 1px #F0F2F5",
  "--ck-connectbutton-balance-active-background": "#F0F2F5",
  "--ck-connectbutton-balance-active-box-shadow": "inset 0 0 0 1px #EAECF1",
  "--ck-primary-button-font-weight": "600",
  "--ck-primary-button-border-radius": "16px",
  "--ck-primary-button-color": "#373737",
  "--ck-primary-button-background": "#F6F7F9",
  "--ck-primary-button-box-shadow": "0px 0px 0px 0px #000000",
  "--ck-primary-button-hover-color": "#9334e9",
  "--ck-primary-button-hover-background": "#F0F2F5",
  "--ck-primary-button-hover-box-shadow": "0px 0px 0px 0px #ffffff",
  "--ck-primary-button-active-color": "#373737",
  "--ck-primary-button-active-background": "#F0F2F5",
  "--ck-primary-button-active-box-shadow": "0 0 0 0 #ffffff",
  "--ck-secondary-button-font-weight": "500",
  "--ck-secondary-button-border-radius": "16px",
  "--ck-secondary-button-color": "#373737",
  "--ck-secondary-button-background": "#ffffff",
  "--ck-secondary-button-box-shadow": "0 0 0 0 #ffffff",
  "--ck-secondary-button-hover-color": "#373737",
  "--ck-secondary-button-hover-background": "#dfe4ec",
  "--ck-secondary-button-hover-box-shadow": "0 0 0 0 #ffffff",
  "--ck-secondary-button-active-color": "#373737",
  "--ck-secondary-button-active-background": "#dfe4ec",
  "--ck-secondary-button-active-box-shadow": "0 0 0 0 #ffffff",
  "--ck-tertiary-button-font-weight": "500",
  "--ck-tertiary-button-border-radius": "16px",
  "--ck-tertiary-button-color": "#373737",
  "--ck-tertiary-button-background": "#ffffff",
  "--ck-tertiary-button-box-shadow": "0 0 0 0 #ffffff",
  "--ck-tertiary-button-hover-color": "#373737",
  "--ck-tertiary-button-hover-background": "#F6F7F9",
  "--ck-tertiary-button-hover-box-shadow": "0 0 0 0 #ffffff",
  "--ck-tertiary-button-active-color": "#373737",
  "--ck-tertiary-button-active-background": "#F6F7F9",
  "--ck-tertiary-button-active-box-shadow": "0 0 0 0 #ffffff",
  "--ck-modal-box-shadow": "0px 0px 1px 4px #000000",
  "--ck-overlay-background": "#00000008",
  "--ck-body-color": "#ffffff",
  "--ck-body-color-muted": "#ffffff",
  "--ck-body-color-muted-hover": "#111111",
  "--ck-body-background": "#9334e9",
  "--ck-body-background-transparent": "rgba(255,255,255,0)",
  "--ck-body-background-secondary": "#ffffff",
  "--ck-body-background-secondary-hover-background": "#e0e4eb",
  "--ck-body-background-secondary-hover-outline": "#4282FF",
  "--ck-body-background-tertiary": "#ffffff",
  "--ck-body-action-color": "#fff9f9",
  "--ck-body-divider": "#7300e6",
  "--ck-body-color-danger": "#FF4E4E",
  "--ck-body-color-valid": "#32D74B",
  "--ck-siwe-border": "#F0F0F0",
  "--ck-body-disclaimer-background": "#f6f7f9",
  "--ck-body-disclaimer-color": "#AAAAAB",
  "--ck-body-disclaimer-link-color": "#838485",
  "--ck-body-disclaimer-link-hover-color": "#000000",
  "--ck-tooltip-background": "#9334e9",
  "--ck-tooltip-background-secondary": "#ffffff",
  "--ck-tooltip-color": "#ffffff",
  "--ck-tooltip-shadow": "0px 0px 1px 2px #000000",
  "--ck-dropdown-button-color": "#999999",
  "--ck-dropdown-button-box-shadow": "0 0 0 1px rgba(0,0,0,0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)",
  "--ck-dropdown-button-background": "#fff",
  "--ck-dropdown-button-hover-color": "#8B8B8B",
  "--ck-dropdown-button-hover-background": "#F5F7F9",
  "--ck-qr-dot-color": "#000000",
  "--ck-qr-background": "#ffffff",
  "--ck-qr-border-color": "#000000",
  "--ck-focus-color": "#1A88F8",
  "--ck-spinner-color": "#1A88F8",
  "--ck-copytoclipboard-stroke": "#CCCCCC",
  "--ck-recent-badge-color": "#777",
  "--ck-recent-badge-background": "#F6F7F9",
  "--ck-recent-badge-border-radius": "32px",
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <DaimoPayProvider customTheme={customTheme}>{children}</DaimoPayProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
