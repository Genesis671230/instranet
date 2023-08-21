// import {
//     createStyles,
//     Card,
//     Text,
//     SimpleGrid,
//     UnstyledButton,
//     Anchor,
//     Group,
//     rem,
//   } from '@mantine/core';
//   import {
//     IconCreditCard,
//     IconBuildingBank,
//     IconRepeat,
//     IconReceiptRefund,
//     IconReceipt,
//     IconReceiptTax,
//     IconReport,
//     IconCashBanknote,
//     IconCoin,
//   } from '@tabler/icons-react';
  
//   const mockdata = [
//     { title: 'Credit cards', icon: IconCreditCard, color: 'violet' },
//     { title: 'Banks nearby', icon: IconBuildingBank, color: 'indigo' },
//     { title: 'Transfers', icon: IconRepeat, color: 'blue' },
//     { title: 'Refunds', icon: IconReceiptRefund, color: 'green' },
//     { title: 'Receipts', icon: IconReceipt, color: 'teal' },
//     { title: 'Accomodation', icon: IconReceiptTax, color: 'cyan' },
//     { title: 'Reports', icon: IconReport, color: 'pink' },
//     { title: 'Registration', icon: IconCoin, color: 'red' },
//     { title: 'Cashback', icon: IconCashBanknote, color: 'orange' },
//   ];
  
//   const useStyles = createStyles((theme) => ({
//     card: {
//       backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.white,
//     },
  
//     title: {
//       fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//       fontWeight: 700,
//     },
    
//     item: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       textAlign: 'center',
//       borderRadius: theme.radius.md,
//       height: rem(90),
//       backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.dark[2],
//       transition: 'box-shadow 150ms ease, transform 100ms ease',
  
//       '&:hover': {
//         boxShadow: theme.shadows.md,
//         transform: 'scale(1.05)',
//       },
//     },
//   }));
  
//   export default function Services() {
//     const { classes, theme } = useStyles();
  
//     const items = mockdata.map((item) => (
//       <UnstyledButton key={item.title} className={`${classes.item} bg-white`}>
//         <item.icon color={theme.colors[item.color][6]} size="2rem" />
//         <Text size="xs" mt={7}>
//           {item.title}
//         </Text>
//       </UnstyledButton>
//     ));
  
//     return (
//       <>
//       </>
//       // <Card withBorder radius="md" className={classes.card}>
//       //   <Group position="apart">
//       //     <Text className={classes.title}>E-Services</Text>
//       //     <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
//       //       {/* + 21 other services */}
//       //     </Anchor>
//       //   </Group>
//       //   <SimpleGrid cols={3} mt="md">
//       //     {items}
//       //   </SimpleGrid>
//       // </Card>
//     );
//   }