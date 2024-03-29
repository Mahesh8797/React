import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel } from 'react-tabs';
import About from './About'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

 function MaterialUITabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" value="mahe"> </Tab>
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        
      </Tabs>
    </Paper>
  );
}
export default MaterialUITabs;