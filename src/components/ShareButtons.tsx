"use client"

import { useState, useEffect } from "react"
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react"

interface ShareButtonsProps {
  title: string
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState("")

  useEffect(() => {
    setShareUrl(window.location.href)
  }, [])

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    }
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400')
  }

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
  }

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  return (
    <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
      <span className="text-sm font-medium text-gray-700">Share:</span>
      <button
        onClick={() => handleShare('facebook')}
        className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleShare('twitter')}
        className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleShare('linkedin')}
        className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </button>
      <button
        onClick={copyLink}
        className="p-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors relative"
        aria-label="Copy link"
      >
        <Share2 className="w-4 h-4" />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Link copied!
          </span>
        )}
      </button>
    </div>
  )
}