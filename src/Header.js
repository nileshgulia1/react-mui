import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
 import {white} from 'material-ui/styles/colors';
import SearchBox from './SearchBox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            style: {
                appBar: {
                  position: 'fixed',
                  top: 0,
                  overflow: 'hidden',
                  maxHeight: 57
                },
                menuButton: {
                  marginLeft: 10
                },
                iconsRightContainer: {
                  marginLeft: 20
                }
            }

        };
        this.handleChangeRequestNavDrawer=this.handleChangeRequestNavDrawer.bind(this);
    }
    handleChangeRequestNavDrawer(){
        console.log('functon just defined latter will change');

    }

  render() {


    

    return (
        <div>
        <MuiThemeProvider>
            <AppBar
              style={this.state.style.appBar}
              title={
                <SearchBox />
              }
              iconElementLeft={
                  <IconButton style={this.state.style.menuButton} onClick={this.handleChangeRequestNavDrawer}>
                    <Menu color={white} />
                  </IconButton>
              }
              iconElementRight={
                <div style={this.state.style.iconsRightContainer}>
                  <IconMenu color={white}
                            iconButtonElement={
                              <IconButton><ViewModule color={white}/></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem key={1} primaryText="Application 1"/>
                    <MenuItem key={2} primaryText="Application 2"/>
                    <MenuItem key={3} primaryText="Application 3"/>
                  </IconMenu>
                  <IconMenu color={white}
                            iconButtonElement={
                              <IconButton><MoreVertIcon color={white}/></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem primaryText="Sign out" containerElement={<Link to="/login"/>}/>
                  </IconMenu>
                </div>
              }
            />
            </MuiThemeProvider>
          </div>
      );
  }
}

 

export default Header;