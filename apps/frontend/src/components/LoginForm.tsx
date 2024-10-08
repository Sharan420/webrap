// Packages:
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { login } from '../utils/api'
import { useNavigate } from 'react-router-dom'

// Components:
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

// Constants:
const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Email must be at least 2 characters.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
})

// Functions:
const LoginForm = () => {
  // State:
  const [message, setMessage] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const navigate = useNavigate()

  // Constants:
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  // Functions:
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    try {
      const data = await login(values.username, values.password)
      localStorage.setItem('token', data.token) // Save the token to localStorage
      setToken(data.token)
      setMessage('Login successful')
      navigate('/dashboard') // Redirect to the dashboard or another protected route
    } catch (error) {
      setMessage('Login failed')
      console.error(error)
    }
  }

  // Return:
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-full'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Email' {...field} className='w-full' type='email' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Password' {...field} className='w-full' type='password' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          Login
        </Button>
      </form>
    </Form>
  )
}

//Exports:
export default LoginForm
