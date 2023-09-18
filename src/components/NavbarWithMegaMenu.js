import React, { useEffect, useState } from 'react';

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip
} from '@material-tailwind/react';
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

const colors = {
  blue: 'bg-blue-50 text-blue-500',
  orange: 'bg-orange-50 text-orange-500',
  green: 'bg-green-50 text-green-500',
  'blue-gray': 'bg-blue-gray-50 text-blue-gray-500',
  purple: 'bg-purple-50 text-purple-500',
  teal: 'bg-teal-50 text-teal-500',
  cyan: 'bg-cyan-50 text-cyan-500',
  pink: 'bg-pink-50 text-pink-500'
};

const navListMenuItems = [
  {
    color: 'blue',
    icon: FlagIcon,
    title: 'About us',
    description: 'Learn about our story and our mission statement.',
    link: '/auth/login'
  },
  {
    color: 'orange',
    icon: ChatBubbleOvalLeftIcon,
    title: 'Press',
    description: 'News and writings, press releases, and resources',
    link: '/'
  },
  {
    color: 'green',
    icon: UsersIcon,
    title: (
      <div className='flex items-center gap-1'>
        Careers{' '}
        <Chip
          size='sm'
          color='green'
          variant='ghost'
          value="We're hiring!"
          className='capitalize'
        />
      </div>
    ),
    description: 'We are always looking for talented people. Join us!',
    link: '/'
  },
  {
    color: 'blue-gray',
    icon: FolderIcon,
    title: 'Legal',
    description: 'All the stuff that we dan from legal made us add.',
    link: '/'
  },
  {
    color: 'purple',
    icon: RocketLaunchIcon,
    title: 'Products',
    description: 'Checkout our products that helps a startup running.',
    link: '/'
  },
  {
    color: 'teal',
    icon: FaceSmileIcon,
    title: 'Icons',
    description: 'Set of beautiful icons that you can use in your project.',
    link: '/'
  },
  {
    color: 'cyan',
    icon: PuzzlePieceIcon,
    title: 'UI Kits',
    description: 'High quality UI Kits helps you to 2x faster.',
    link: '/'
  },
  {
    color: 'pink',
    icon: GiftIcon,
    title: 'Open Source',
    description: "List of all our open-source projects, it's all free.",
    link: '/'
  }
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, link }, key) => (
      <>
        <a
          href={link}
          key={key}>
          <MenuItem className='flex text-left items-center gap-3 rounded-lg'>
            <div className={`rounded-lg p-7 ${colors[color]}`}>
              {React.createElement(icon, {
                strokeWidth: 2,
                className: 'h-6 w-6'
              })}
            </div>
            <div>
              <Typography
                variant='h6'
                color='blue-gray'
                className='flex items-center text-sm'>
                {title}
              </Typography>
              <Typography
                variant='small'
                color='gray'
                className='font-normal'>
                {description}
              </Typography>
            </div>
          </MenuItem>
        </a>
      </>
    )
  );

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
        allowHover={true}>
        <MenuHandler>
          <Typography
            as='div'
            variant='small'
            className='font-normal'>
            <ListItem
              className='flex items-center gap-2 py-2 pr-4'
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
              <Square3Stack3DIcon className='h-[18px] w-[18px]' />
              Category
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden max-w-screen-xl rounded-xl lg:block'>
          <ul className='grid grid-cols-4 gap-y-2'>{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className='block lg:hidden'>
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'>
      <Typography
        as='a'
        href='/product'
        variant='small'
        color='blue-gray'
        className='font-normal'>
        <ListItem className='flex items-center gap-2 py-2 pr-4'>
          <CubeTransparentIcon className='h-[18px] w-[18px]' />
          Product
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as='a'
        href='#'
        variant='small'
        color='blue-gray'
        className='font-normal'>
        <ListItem className='flex items-center gap-2 py-2 pr-4'>
          <UserCircleIcon className='h-[18px] w-[18px]' />
          Account
        </ListItem>
      </Typography>
    </List>
  );
}

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className='mx-auto max-w-screen-xl px-4 py-2'>
      <div className='flex items-center justify-between text-black'>
        <Typography
          as='a'
          href='/'
          variant='h6'
          className='mr-4 cursor-pointer py-1.5 lg:ml-2'>
          Material Tailwind
        </Typography>
        <div className='hidden lg:block'>
          <NavList />
        </div>
        <div className='hidden gap-2 lg:flex'>
          <Typography
            as='a'
            href='/auth/login'
            variant='h6'
            className='mr-4 cursor-pointer py-1.5 lg:ml-2'>
            Login
          </Typography>
          <Typography
            as='a'
            href='/auth/register'
            variant='h6'
            className='mr-4 cursor-pointer py-1.5 lg:ml-2'>
            Sign Up
          </Typography>
        </div>
        <IconButton
          variant='text'
          color='blue-gray'
          className='lg:hidden'
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon
              className='h-6 w-6'
              strokeWidth={2}
            />
          ) : (
            <Bars3Icon
              className='h-6 w-6'
              strokeWidth={2}
            />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className='flex w-full flex-nowrap items-center gap-2 lg:hidden'>
          <Button
            variant='outlined'
            size='sm'
            color='blue-gray'
            fullWidth>
            Sign In
          </Button>
          <Button
            variant='gradient'
            size='sm'
            fullWidth>
            Sign Up
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
