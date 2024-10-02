// Packages:
import { Link, LinkProps } from 'react-router-dom'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { useLogout } from '../utils/useLogout'

// Imports:
import { IoIosLogOut, IoIosSettings, IoIosPerson } from 'react-icons/io'
import { HiOutlineSupport } from 'react-icons/hi'

// Typescript:
type ListItemProps = Omit<LinkProps, 'to'> & {
  title: string
  to: string
  className?: string
  children: React.ReactNode
}

// Components:
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Constants:
const components: { title: string; to: string; description: string }[] = [
  {
    title: 'Add user',
    to: '#',
    description: 'Register a new user',
  },
  {
    title: 'Manage user',
    to: '#asd',
    description: 'Edit user permissions',
  },
  {
    title: 'Remove user',
    to: '#',
    description: 'Revoke user access',
  },
]

const applications: { title: string; to: string; description: string }[] = [
  {
    title: 'Scheck',
    to: '/scheck',
    description: 'Fetch Specifications for Dell and Lenovo',
  },
]

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

// Functions:
const Navbar = () => {
  // Context:
  const logout = useLogout()

  // Return:
  return (
    <nav className='fixed flex-no-wrap flex w-full items-center justify-between lg:flex-wrap lg:justify-between px-4 bg-none shadow-md dark:shadow-none dark:bg-[rgb(9,9,11)] py-2'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>User Management</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[200px] gap-2 p-4 md:grid-cols-1 '>
                {components.map((component) => (
                  <ListItem key={component.title} title={component.title} to={component.to}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Applications</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-2 p-4 md:grid-cols-1 '>
                {applications.map((component) => (
                  <ListItem key={component.title} title={component.title} to={component.to}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='gap-2 '>
            <a href='#' className='flex flex-row gap-2'>
              <IoIosPerson className='text-xl' />
              <span>Profile</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className='gap-2 '>
            <a href='#' className='flex flex-row gap-2'>
              <IoIosSettings className='text-xl' />
              <span>Settings</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className='gap-2 '>
            <a href='#' className='flex flex-row gap-2'>
              <HiOutlineSupport className='text-xl' />
              <span>Support</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='dark:focus:bg-red-900'>
            <a href='#' className='flex flex-row gap-2' onClick={logout}>
              <IoIosLogOut className='text-xl' />
              <span>Log Out</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}

// Exports:
export default Navbar
