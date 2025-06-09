'use client'

// import Contact from '@/components/Contact'
import Image from 'next/image'
import Link from 'next/link'

import { FaDev, FaGithub, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa'
// import ContactNow from '@/components/contactNow'
import Contact from '@/components/Contact'
import useContactStore from '@/store/useCounterStore'

export default function Home() {
  const { contact } = useContactStore();
  return (
    <main className={`px-5`}>

      {/* Left: Text content */}
      <div className={`md:flex grid grid-cols-1 gap-y-2 gap-x-10 lg:items-center justify-between w-full ${contact === true ? "pointer-events-none opacity-60" : ""}`}>

        <div className="w-full md:w-1/2  md:text-left space-y-6">
          <h1 className="text-3xl lg:text-5xl text-center lg:text-start font-extrabold leading-tight">
            Blogger,<br /> Web Developer
          </h1>

          <p className="text-lg text-gray-300 max-w-md mx-auto md:mx-0 ">
            I&apos;m a frontend web developer based in Nigeria. I enjoy building clean, responsive user interfaces using React, Next.js, Tailwind CSS, and TypeScript. I&apos;m passionate about continuous learning and creating solutions that are both functional and visually appealing.
          </p>

          <Link href="/portfolio">
            <button className="mt-4 border-2 border-white px-6 py-2 font-semibold text-white shadow-[4px_4px_0px_white] hover:shadow-none hover:bg-white hover:text-black transition">
              Portfolio
            </button>
          </Link>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-8 text-4xl">
              <Link href="https://www.linkedin.com/in/ekeleolu"><FaLinkedin /></Link>
              <Link href="https://x.com/ekele_olu"><FaTwitter /></Link>
              <Link href="https://github.com/oluekele"><FaGithub /></Link>
              <Link href="https://medium.com/@ekeleolu1"><FaMedium /></Link>
              <Link href="https://dev.to/ekele"><FaDev /></Link>
            </div>
        </div>

        {/* Right: Profile image */}
        <div className="w-full md:w-[320px] lg:w-[40%] h-[550px] mt-12 md:mt-0 flex justify-center">
          <Image
            src="/ekele.jpg" // transparent image path
            alt="Profile"
            width={420}
            height={320}
            className="rounded-lg shadow-xl object-cover w-full max-w-sm md:max-w-md lg:max-w-lg h-auto  hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      {
        contact === true ? <div className='fixed w-full h-screen transition-transform duration-300 flex items-center justify-center z-50 top-0 left-0 '>
        
        <Contact />
      </div> : null 
      }
    </main>
  )
}
