import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = async (props: Props) => {
  const links = [
    {
      href: '#',
      title: 'Products'
    }, {
      href: '#',
      title: 'Pricing'
    }, {
      href: '#',
      title: 'Clients'
    }, {
      href: '#',
      title: 'Resources'
    }, {
      href: '#',
      title: 'Documentation'
    }, {
      href: '#',
      title: 'Enterprise'
    },
  ]

  return (
    <header className='fixed inset-x-0 top-0 p-4 bg-black/40 backdrop-blur-lg z-50 flex items-center justify-between border-b-[1px] border-e-neutral-900'>
      <aside className="flex items-center gap-[2px]">
        <p className='text-3xl font-bold'>Fu</p>
        <Image
          src='/fuzzieLogo.png'
          width={15}
          height={15}
          alt='fuzzie logo'
          className='shadow-sm'
        />
        <p className='text-3xl font-bold'>zie</p>
      </aside>
      <nav className="absolute hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:block">
        <ul className='flex items-center gap-4 list-none'>
          {links.map(({ href, title }, index) => (
            <li key={href + index}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <aside className='flex items-center gap-4'>
        <Link
          href="/dashboard"
          className='relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 ring-slate-400 ring-offset-2 ring-offset-slate-50'
        >
          <span className='absolute -inset-full animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e2cbff_0%,#393bb2_50%,#e2cbff_100%)]' />
          <span className='inline-flex items-center justify-center w-full h-full px-3 py-1 text-sm font-medium text-white rounded-full cursor-pointer bg-slate-950 backdrop-blur-3xl'>
            {true ? 'Dashboard' : 'Get Started'}
          </span>
        </Link>
        <MenuIcon className='md:hidden' />
      </aside>
    </header>
  )
}

export default Navbar
