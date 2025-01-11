import { createRootRoute, Link, Outlet, createLink } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { forwardRef } from 'react';
import { useState, useEffect } from 'react'
import StatusCard from '../components/StatusCard';
import { Box, IconButton, Tooltip, Typography, Drawer, Container, Button} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid2';
import Markdown from 'react-markdown';
import { useMemo } from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';
import { Link as MuiLink} from '@mui/material';


// Icon list (github, email)
function IconButtonWithTooltip({children, title, onClick}) {
  return <Tooltip title={title}>
    <IconButton onClick={onClick}>
      {children}
    </IconButton>
  </Tooltip>
}

function IconSplit() {
  return <Typography sx={{m:1}}>○</Typography>
}


// -----

// -----
// sidebar links
const LinkComponent = forwardRef(
  (props, ref) => {
    return (
      <ListItem key={props.text} disablePadding>
        <MuiLink ref={ref} {...props} color='textPrimary' underline='none' sx={{width:"100%"}}>
          <ListItemButton>
            <ListItemText sx={{paddingLeft:3}} primary={props.text} />
          </ListItemButton>
        </MuiLink>
      </ListItem>
    )
  },
)

const CreatedLinkComponent = createLink(LinkComponent)

const SidebarLink= (props) => {
  return <CreatedLinkComponent preload={'intent'} {...props} />
}

// function SidebarItem({text}) {
//   return <ListItem key={text} disablePadding>
//     <ListItemButton>
//         <ListItemText sx={{paddingLeft:3}} primary={text} />
//     </ListItemButton>
//   </ListItem>

// }

function Sidebar() {
  const [count, setCount] = useState(0)
  const [status, setStatus] = useState("Loading status...")
  const [statusStartTime, setStatusStartTime] = useState(Date.now())
  const [joke, setJoke] = useState("")

  useEffect(() => {
    fetch("http://api.ivylh03.net:8000/get_status")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setStatus(data.currentStatus.status)
      setStatusStartTime(data.currentStatus.starttime)
      console.log(statusStartTime)
    })

    fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    .then(res => res.json())
    .then(data=>{
      if(data.type == "single") {
        setJoke(data.joke)
      }
      else {
        setJoke(`${data.setup}\n ${data.delivery}`)
      }
    })
  },[])


  return (
    // <Box sx={{flexDirection:"column", display:"flex", justifyItems:"center", alignItems:"center"}}>
    <Container sx={{display:"flex"}}>
      <Drawer
        sx={{
          width: 400,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 400,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <StatusCard firstName={"Ivy"} legalFirst={"Hanzhang"} lastName={"Zhu"} nickName={"IvyLH03"} statusName={status} statusStartTime={statusStartTime}/>
        <Divider />
        <List>
          <SidebarLink text={"Home"} to={"/"}/>
          <SidebarLink text={"Blog"} to={"/blog"}/>
          <SidebarLink text={"Contact"} to={"/contact"}/>
        </List>
        <Container sx={{display:"flex", flexDirection:"row", marginTop:16, justifyContent:"center", alignItems:"center"}}>  
          <IconButtonWithTooltip title={"GitHub"} onClick={()=>{window.open("https://github.com/IvyLH03")}}>
            <GitHubIcon sx={{fontSize:40}} />
          </IconButtonWithTooltip>
          <IconSplit/>
          <IconButtonWithTooltip title={"email"} onClick={()=>{window.open("mailto:ivy.hanzhang.zhu@gmail.com")}}>
            <EmailIcon sx={{fontSize:40}}/>
          </IconButtonWithTooltip>
        </Container>
      </Drawer> 
    </Container>

  )
}

export const Route = createRootRoute({
  component: () => {

    const theme = createTheme({
      colorSchemes: {
        dark: true,
      },
    });
    

    return (
    <ThemeProvider theme={theme}>
      <Container sx={{width:"100vw", height:"100vh", m:0, p:0}} maxWidth={false}>
        <Grid container sx={{width:"100%", height:"100%", m:0, p:0}}>
          <Grid size={"auto"} sx={{p:0, m:0}}>
            <Sidebar/>
          </Grid>
          <Grid container size={"grow"} maxWidth={"md"}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )},
})