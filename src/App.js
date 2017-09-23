import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple500,cyan500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class App extends Component{
  constructor(props){
    let styles = {
      title: {
        cursor: 'pointer',
      },
    };
    let muiTheme = getMuiTheme({
      palette: {
        textColor: cyan500,
        accent1Color: purple500,
        
      },
      appBar: {
        height: 80,
      },
    });
    super(props);
    this.state={styles:{title: {
      cursor: 'pointer',
    },},muiTheme:muiTheme
  };
  
    this.handleTouchTap=this.handleTouchTap.bind(this);
  }
   handleTouchTap() {
    alert('onClick triggered on the title component');
  }
  
  render(){
    return(
    <div>
      <MuiThemeProvider muiTheme={this.muiTheme}>
      <AppBar title={<span style={this.state.styles.title}>Title</span>}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onTitleTouchTap={this.handleTouchTap}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Save" />} />
      
      </MuiThemeProvider>
      

      
            
      
      
      
      
  
    
    </div>
    
    
    );
  }
}


class MyAwesomeReactComponent extends Component{
  render(){
    return(
      <RaisedButton label="Default" />
    );
  }
}


export default App;
