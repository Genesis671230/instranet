"use client";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { login } from "../../config/index";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(900),
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "95vw",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1554887782-0956c7148640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    borderRight: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    minHeight: rem(900),
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function Login() {
  const { classes } = useStyles();

  const [userInfo, setUserInfo] = useState({});
  const [userCredentials, setUserCredentials] = useState({
    userName: "",
    password: ""
  });


  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };
  console.log(userCredentials);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const params = {
        userName: userCredentials.userName,
        password: userCredentials.password,
      };
      // this.setState({
      //   isLoading: true,
      // });
      const response = await login(params);
      console.log(response, "this is current response");
      if (response.status == 200 && response.data) {
        localStorage.setItem(
          "userToken",
          JSON.stringify(response.data.data?.authToken)
        );
        localStorage.setItem(
          "currentUserRole",
          JSON.stringify(response.data.data?.role)
        );
        setUserInfo({
          role: response.data.data?.role,
          hasCashierAccess: response.data.data?.hasCashierAccess,
          hasCancelAccess: response.data.data?.hasCancelAccess,
          hasCmsAccess: response.data.data?.hasCmsAccess,
          permissions: response.data.data?.permissions,
          hasHTMLAccess: response.data.data?.hasTemplatesAccess,
          userName: response.data.data?.userName,
        });
        
        window.location.pathname = "/"
      }
    } catch (error) {
      alert("Wrong Credentials")
    }
  };

  
    useEffect(() => {
    const loginRedirect = () => {
     const token = JSON.parse(localStorage.getItem("userToken"));
     if(token) {
     return window.location.pathname="/"
     }
     return 

   };
   loginRedirect()
 }, []);

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome to ENS intranet
        </Title>

        <TextInput
          name="userName"
          onChange={handleChange}
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          name="password"
          onChange={handleChange}
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button onClick={handleSubmit} fullWidth mt="xl" size="md">
          Login
        </Button>

        {/* <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor
            href="#"
            weight={700}
            onClick={(event) => event.preventDefault()}
          >
            Register
          </Anchor>
        </Text> */}
      </Paper>
    </div>
  );
}
