"use client"

import { useState } from "react"
import Image from "next/image"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [copied, setCopied] = useState(false)
  const walletAddress = "0x846158C49A5561178A639A24881D240a502d172E"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 w-full">
          {/* Text and CTAs - on top for mobile, right side for desktop */}
          <div className="order-2 md:order-2 md:w-1/2 py-8">
            <h1 className="text-5xl font-black mb-6 font-mono uppercase tracking-tighter">
              @0xVEER
              <br />
              <span className="text-purple-600">ACTION FIGURE</span>
            </h1>

            <div className="mb-8">
              <p className="text-xl mb-6 font-mono">
                Pre-order your very own @0xVEER
                <br /> <span className="font-bold italic">for only 50 $MNT</span>
                <br />
                <span className="text-purple-600 font-bold">ONLY 100 WILL EVER BE MADE!</span>
                <br /> <span className="text-black font-light">WORLDWIDE SHIPPING</span>
              </p>

              <div className="p-4 bg-gray-100 border-2 border-black mb-6">
                <p className="font-mono mb-4">Deposit to the address below 50 $MNT on Mantle Network:</p>
                <div
                  className="flex items-center p-3 bg-black/80 border border-white cursor-pointer hover:bg-zinc-900 transition-colors"
                  onClick={copyToClipboard}
                >
                  <code className="font-mono text-sm md:text-base overflow-x-auto whitespace-nowrap flex-1">
                    <p className="text-purple-600">{walletAddress}</p>
                  </code>
                  <Copy className="ml-2 flex-shrink-0 text-white" size={18} />
                </div>
                {copied && <p className="text-green-400 mt-2 font-mono text-sm">✓ Copied to clipboard!</p>}
              </div>

              <div className="space-y-4 font-mono">
                <p>
                  Only the first 100 wallets who transferred 50 $MNT will gain access to the exclusive VEER action hero
                  community and will get a real @0xVEER Action Figure shipped to their destination address anywhere in
                  the world!
                </p>
                <p className="font-bold">ONLY ONE VEER PER WALLET!</p>
                <p>
                  All incoming transfers from wallets that didn't manage to be within the first 100 will be refunded.
                </p>
              </div>
            </div>

            <a href="https://t.me/VEERACTIONFIGURES" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg py-6 px-8 font-mono border-2 border-black">
                JOIN PUBLIC TG CHAT
              </Button>
            </a>
          </div>

          {/* Hero Image - below for mobile, left side for desktop */}
          <div className="order-1 md:order-1 md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-lg h-[500px] md:h-[600px]">
              <Image src="/veer.png" alt="VEER Action Figure" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

