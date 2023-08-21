// import React from 'react'
// const departments = [
//     {
//       id: 1,
//       name: "HR",
//       desc: "Responsible for employee relations, payroll and benefits",
//     },
//     {
//       id: 2,
//       name: "IT",
//       desc: "Ensures all technical systems function properly",
//     },
//     {
//       id: 3,
//       name: "Procurement",
//       desc: "Committed professionals providing quality education",
//     },
//     {
//       id: 4,
//       name: "Communications",
//       desc: "Manages school funding, budgeting and financial reporting",
//     },
//     {
//       id: 5,
//       name: "HSE",
//       desc: "Maintains the vast resources for student research and study",
//     },
//     {
//       id: 6,
//       name: "DQA",
//       desc: "Delivers innovative and exciting science education",
//     },
//     {
//       id: 7,
//       name: "Facilities Management",
//       desc: "Promotes numeracy and analytical problem solving",
//     },
//     {
//       id: 8,
//       name: "Housing & Investment",
//       desc: "Offers a range of language learning opportunities",
//     },
//     {
//       id: 9,
//       name: "Support Services",
//       desc: "Fosters creativity through visual and performing arts",
//     },
//   ];
// const Navbar = () => {
//   return (
//     <nav
//     x-data="{ isOpen: false }"
//     class="relative pt-4 bg-white shadow dark:bg-gray-800"
//   >
//     <div class="flex flex-col md:flex-row md:justify-between md:items-center">
//       <div class="flex items-center justify-between">
//         <div class="flex items-center">
//           <a href="#" className="pl-2 font-bold ">
//             INTRANET
//           </a>

//           <div class="hidden mx-10 md:block">
//             <div class="relative">
//               <span class="absolute inset-y-0 left-0 flex items-center pl-3">
//                 <svg
//                   class="w-5 h-5 text-gray-400"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <path
//                     d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>
//                 </svg>
//               </span>

//               <input
//                 type="text"
//                 class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
//                 placeholder="Search"
//               />
//             </div>
//           </div>
//         </div>

//         <div class="flex lg:hidden">
//           <button
//             x-cloak
//             type="button"
//             class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
//             aria-label="toggle menu"
//           >
//             <svg
//               x-show="!isOpen"
//               xmlns="http://www.w3.org/2000/svg"
//               class="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               stroke-width="2"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M4 8h16M4 16h16"
//               />
//             </svg>

//             <svg
//               x-show="isOpen"
//               xmlns="http://www.w3.org/2000/svg"
//               class="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               stroke-width="2"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       <div
//         x-cloak
//         class="absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-24 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
//       >
//         <div class="flex flex-col md:flex-row md:mx-1">
//           <a
//             class="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
//             href="#"
//           >
//             Home
//           </a>
//           <a
//             class="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
//             href="#"
//           >
//             Blog
//           </a>
//           <a
//             class="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
//             href="#"
//           >
//             Compoents
//           </a>
//           <a
//             class="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
//             href="#"
//           >
//             Courses
//           </a>
//         </div>

//         <div class="my-4 md:hidden">
//           <div class="relative">
//             <span class="absolute inset-y-0 left-0 flex items-center pl-3">
//               <svg
//                 class="w-5 h-5 text-gray-400"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//             </span>

//             <input
//               type="text"
//               class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
//               placeholder="Search"
//             />
//           </div>
//         </div>
//       </div>
//     </div>

//     <div class="py-3 mt-3 pl-4 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
//       {departments.map((item) => (
//         <a
//           class="mx-2  p-1 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
//           href="#"
//         >
//           {item.name}
//         </a>
//       ))}
//     </div>
//   </nav>
//   )
// }

// export default Navbar


import { useState } from 'react';
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
} from '@tabler/icons-react';

import { MantineLogo } from '@mantine/ds';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
      }`,
    marginBottom: rem(12),
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
    maxWidth: "62rem"
  },
  secondSection: {
    paddingBottom: theme.spacing.sm,
    maxWidth: "64rem"
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: rem(38),
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    },
  },
}));


export default function Navbar({ user, tabs }) {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab?.name} key={tab.id}>
      {tab?.name}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <Avatar src={user.image} alt={user.name} radius="xl" size={32} />

          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group spacing={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown size={rem(12)} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                icon={<IconHeart size="0.9rem" color={theme.colors.red[6]} stroke={1.5} />}
              >
                Announcements
              </Menu.Item>
              <Menu.Item
                icon={<IconStar size="0.9rem" color={theme.colors.yellow[6]} stroke={1.5} />}
              >
                Profile
              </Menu.Item>
              {/* <Menu.Item
                icon={<IconMessage size="0.9rem" color={theme.colors.blue[6]} stroke={1.5} />}
              >
                Your Tasks
              </Menu.Item>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
                Account settings
              </Menu.Item>
              <Menu.Item icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}>
                Change account
              </Menu.Item>
              <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item color="red" icon={<IconTrash size="0.9rem" stroke={1.5} />}>
              Delete account
            </Menu.Item> */}
              <Menu.Item onClick={()=>{
                localStorage.removeItem("userToken")
                window.location.pathname = "/login"
              }} icon={<IconPlayerPause size="0.9rem" stroke={1.5} />}>
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
      <Container className={classes.secondSection}>
        <Tabs
          defaultValue="Home"
          variant="outline"
          classNames={{
            root: classes.tabs,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}

        >
          <Link href={items[0]}>
            <Tabs.List>{items}</Tabs.List>
          </Link>
        </Tabs>
      </Container>

    </div>
  );
}