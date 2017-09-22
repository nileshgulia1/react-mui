import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


class App extends Component{
  render(){
    return(
      <MuiThemeProvider>
      <AppBar title="My Menu" />
      
    </MuiThemeProvider>
    
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
