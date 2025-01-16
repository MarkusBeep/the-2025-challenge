import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image src={'/images/logo.png'} width={200} height={200} alt='arrow'/>
  )
}

export default Logo
