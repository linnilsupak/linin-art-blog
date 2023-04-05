import CONFIG from "@/site.config"
import { ThemeType } from '@/src/types'
import Image from 'next/image'
import React, { useState } from "react"

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  const [theme, setTheme] = useState<ThemeType>()
  return (
    <div className={className}>
      <Image className="mb-3" src="/images/Written-By-Human-Not-By-AI-Badge.svg" width={131} height={42} alt="written by human" />
      <a
        href={`https://github.com/${CONFIG.profile.github}`}
        target="_blank"
        className="text-gray-500 text-sm mt-3"
        rel="noreferrer"
      >
        © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
      </a>
    </div>
  )
}

export default Footer
