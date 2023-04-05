import CONFIG from "site.config"
import React from "react"
import {
  AiFillInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai"
import Image from 'next/image'

const ContactCard: React.FC = () => {
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">💬 Contact</div>
      <ul className="rounded-2xl bg-white dark:bg-zinc-700 p-1 flex flex-col">
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
          >
            <AiOutlineGithub className="text-2xl" />
            <div className="text-sm">github</div>
          </a>
        )}
        {CONFIG.profile.youtube && (
          <a
            href={`https://www.youtube.com/@${CONFIG.profile.youtube}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiFillYoutube className="text-2xl" />
            <div className="text-sm">Youtube</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiFillInstagram className="text-2xl" />
            <div className="text-sm">instagram</div>
          </a>
        )}
        {CONFIG.profile.twitter && (
          <a
            href={`https://twitter.com/${CONFIG.profile.twitter}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiFillTwitterSquare className="text-2xl" />
            <div className="text-sm">Twitter</div>
          </a>
        )}
        {CONFIG.profile.artStation && (
          <a
            href={`https://www.artstation.com/@${CONFIG.profile.artStation}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <Image src="/images/ArtStation.svg" width={20} height={20} alt="Art Station" className="pl-0.5"/>
            <div className="text-sm">ArtStation</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            className="overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiOutlineMail className="text-2xl flex-shrink-0" />
            <div className="text-sm">email</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
            className="  overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiFillLinkedin className="text-2xl flex-shrink-0" />
            <div className="text-sm">linkedin</div>
          </a>
        )}
        {CONFIG.profile.commissionMe && (
          <div className="px-3 py-5">
            <a href={CONFIG.profile.commissionMe}
              rel="noreferrer"
              target="_blank"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded dark:hover:bg-rose-700 dark:text-rose-500 dark:hover:text-white dark:border-rose-500 dark:hover:border-transparent">
              สนใจติดต่องาน
            </a>
          </div>
        )}
      </ul>
    </>
  )
}

export default ContactCard
