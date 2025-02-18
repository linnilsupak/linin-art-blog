import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Footer: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <>
      <div className='flex justify-center pt-3 pb-5'>
        <Image src="/images/Written-By-Human-Not-By-AI-Badge.svg" width={131} height={42} alt="written by human" /><br />
      </div>
      <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
        <a>
          <button
            onClick={() => router.push('/')}
            className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
          >
            ← Back
          </button>
        </a>
        <a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
          >
            ↑ Top
          </button>
        </a>
      </div>
    </>
  )
}

export default Footer
