import  React,{useState} from "react" 
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from "./Login"
import Signup from "./Signup"

function Profile(){
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const Paperstyle= {width:340 , margin:"20px auto" }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

return(
  <div  style={Paperstyle}>
<Tabs style={{marginLeft:"65px"}}value={value} 
onChange={handleChange} 
aria-label="disabled tabs example">

      <Tab label="Login" handleChange={handleChange} />
      <Tab label="Signup" />
      </Tabs>

    <TabPanel value={value} index={0}>
  <Login/>
</TabPanel>
<TabPanel value={value} index={1}>
  <Signup/>
</TabPanel>

</div>
  )
 



}

export default Profile