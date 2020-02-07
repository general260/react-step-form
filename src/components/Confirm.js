import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM//
        this.props.nextStep();
    };

    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { firstName, lastName, email, occupation, city } } = this.props;
        return ( 
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Details" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={ firstName }
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={ lastName }
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={ email }
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={ occupation }
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={ city }
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.previous}
                    />
                    <RaisedButton
                        label="Confirm"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment> 
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}


export default Confirm;