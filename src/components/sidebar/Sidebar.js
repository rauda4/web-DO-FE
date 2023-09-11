import React from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';
import { BiSolidUserCircle, BiLogOut } from 'react-icons/bi';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const isUserLoggedIn = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout action
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    navigate('/');
    window.location.reload();
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className='h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
      <div className='mb-2 p-4'>
        <Typography
          variant='h5'
          color='blue-gray'>
          Sidebar
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? 'rotate-180' : ''
              }`}
            />
          }>
          <ListItem
            className='p-0'
            selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className='border-b-0 p-3'>
              <ListItemPrefix>
                <PresentationChartBarIcon className='h-5 w-5' />
              </ListItemPrefix>
              <Typography
                color='blue-gray'
                className='mr-auto font-normal'>
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className='py-1'>
            <List className='p-0'>
              <a href='/admin/dashboard'>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon
                      strokeWidth={3}
                      className='h-3 w-5'
                    />
                  </ListItemPrefix>
                  Dashboard
                </ListItem>
              </a>
              <a href='/admin/datadiamond'>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon
                      strokeWidth={3}
                      className='h-3 w-5'
                    />
                  </ListItemPrefix>
                  Diamond
                </ListItem>
              </a>
              <a href='/admin/dataproduct'>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon
                      strokeWidth={3}
                      className='h-3 w-5'
                    />
                  </ListItemPrefix>
                  Product
                </ListItem>
              </a>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? 'rotate-180' : ''
              }`}
            />
          }>
          <ListItem
            className='p-0'
            selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className='border-b-0 p-3'>
              <ListItemPrefix>
                <ShoppingBagIcon className='h-5 w-5' />
              </ListItemPrefix>
              <Typography
                color='blue-gray'
                className='mr-auto font-normal'>
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className='py-1'>
            <List className='p-0'>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon
                    strokeWidth={3}
                    className='h-3 w-5'
                  />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon
                    strokeWidth={3}
                    className='h-3 w-5'
                  />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className='my-2 border-blue-gray-50' />
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className='h-5 w-5' />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value='14'
              size='sm'
              variant='ghost'
              color='blue-gray'
              className='rounded-full'
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className='h-5 w-5' />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className='h-5 w-5' />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem onClick={handleLogout}>
          <ListItemPrefix>
            <PowerIcon className='h-5 w-5' />
          </ListItemPrefix>
          {!isUserLoggedIn ? (
            <div className='w-full text-white'>
              <BiSolidUserCircle
                size={40}
                color='white'
              />{' '}
            </div>
          ) : (
            <div className='flex cursor-pointer text-black items-center gap-5'>
              Hello, {username}
              <BiLogOut
                size={38}
                color='white'
              />
            </div>
          )}
        </ListItem>
      </List>
    </Card>
  );
}
