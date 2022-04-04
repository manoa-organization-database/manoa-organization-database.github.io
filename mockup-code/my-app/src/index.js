import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Image, Segment, Grid, Input, Button, GridColumn } from 'semantic-ui-react';

class NavBar extends React.Component {
  render() {
    return (
      <Menu borderless className="topmenu">

        <Container>

          <Menu.Item>HOME</Menu.Item>
          <Menu.Item>PROFILE</Menu.Item>
          <Menu.Item>DATABASE</Menu.Item>
          <Menu.Item>SEARCH BY INTEREST</Menu.Item>

          <Menu.Item position="right"><Dropdown id="navbar-current-user" text="admin@foo.com" pointing="top right" icon={'user'}>
            <Dropdown.Menu>
              <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out"/>
              <hr/>
              <Dropdown.Item id="navbar-edit-profile" icon="edit" text="Edit Profile"/>
            </Dropdown.Menu>
          </Dropdown>
          </Menu.Item>

        </Container>

      </Menu>
    );
  }
}

class UHLogo extends React.Component {
  render() {
    return (
      <Image centered size="medium"
             src="data:image/png;base64,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"
             alt="UH Logo"/>
    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
      <Grid container centered columns={2}>

        <Grid.Column>
          <Segment textAlign="center">
            <Header>Register new club admin</Header>
            <Input placeholder='Enter UH email address'/>
            <Button className="styled" content='Register'/>
          </Segment>
        </Grid.Column>


        <GridColumn>
          <Segment textAlign="center">
            <Container centered>
              <Header>Create new interest category</Header>
              <Input placeholder='Placeholder text'/>
              <Button className="styled" content='Submit'/>
            </Container>
          </Segment>
        </GridColumn>

      </Grid>

    );
  }
}


class AdminLanding extends React.Component {

  render() {
    return (
      <div>
        <NavBar/>
        <UHLogo/>
        <MiddleMenu/>
      </div>
    );
  }
}

ReactDOM.render(<AdminLanding/>, document.getElementById('root'));

