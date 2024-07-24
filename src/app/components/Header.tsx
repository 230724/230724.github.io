import Link from 'next/link'
import React from 'react'

function Header() {
  const basePath = ''

  return (
    <header className='bg-violet-400 space-x-4'>

      <Link href={`${basePath}/`} > (home)</Link>
      <Link href={`${basePath}/nuevaruta`} > (nueva ruta)</Link>

    </header>
  )
}

export default Header