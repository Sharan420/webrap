// Packages:
import { useTheme } from '@/context/theme-provider'

//Imports:
import mainLogo from '../assets/logo-transparent.png'
import lightLogo from '../assets/logo-light.png'
import { BsMoonStars, BsSun } from 'react-icons/bs'

// Components:
import LoginForm from '@/components/LoginForm'
import { Button } from '@/components/ui/button'

// Functions:
const Login = () => {
  // Context:
  const { theme, setTheme } = useTheme()

  // Return:
  return (
    <>
      <div className='grid w-screen h-screen grid-cols-2 bg-white dark:bg-[#18181b]'>
        <div className='flex flex-col justify-between w-full h-full p-12'>
          {theme == 'light' ? (
            <img src={lightLogo} alt='logo' className='w-2/12 h-auto' />
          ) : (
            <img src={mainLogo} alt='logo' className='w-2/12 h-auto' />
          )}
          <p className='leading-7 [&:not(:first-child)]:mt-6 text-black dark:text-white font-raleway text-[0.9rem]'></p>
        </div>
        <div className='w-full h-full bg-slate-200 dark:bg-[#09090b] p-6 flex flex-col justify-center items-center gap-8'>
          <div className='w-1/2 flex flex-col justify-center items-center'>
            <h1 className='text-black dark:text-white text-3xl font-bold font-raleway'>Login to Account</h1>
            <p className='leading-7 text-[#a1a1aa] font-raleway text-[0.9rem]'>
              Enter your email below to log into your account
            </p>
          </div>
          <div className='w-1/2 flex justify-center'>
            <LoginForm />
          </div>
        </div>
      </div>
      <Button className='absolute bottom-4 right-4' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <BsMoonStars className='text-xl' /> : <BsSun className='text-xl' />}
      </Button>
    </>
  )
}

// Exports:
export default Login
