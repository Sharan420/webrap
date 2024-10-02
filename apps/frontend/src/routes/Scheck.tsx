// Packages:
import { useRef } from 'react'

// Components:
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'

// Functions:
const Scheck = () => {
  // Ref:
  const inputRef = useRef<HTMLInputElement>(null)

  // Functions:
  const handleClickUpload = () => {
    inputRef.current?.click()
  }

  // Return:
  return (
    <>
      <Navbar />
      <div className='w-screen h-screen dark:bg-[#18181b] flex flex-col justify-center items-center'></div>
    </>
  )
}

// Exports:
export default Scheck
