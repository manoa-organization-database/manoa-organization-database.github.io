import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Label, Segment, Icon, Input, Card } from 'semantic-ui-react';

class NavBar extends React.Component {
  render() {
    return (
      <Menu borderless className="topmenu">

        <Container>

          <Menu.Item>HOME</Menu.Item>
          <Menu.Item>PROFILE</Menu.Item>
          <Menu.Item>DATABASE</Menu.Item>
          <Menu.Item>SEARCH BY INTEREST</Menu.Item>

          <Menu.Item position="right"><Dropdown id="navbar-current-user" text="john@foo.com" pointing="top right" icon={'user'}>
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

class SearchBar extends React.Component {
  render() {
    return (
      <Container>
        <Header textAlign='center' as='h1'>Search for clubs</Header>
        <Header textAlign='center' as='h3' color='grey'>Find different clubs according to your preferences</Header>
        <hr/>
        <Segment textAlign='center' size='large'>
          <Input fluid icon='search' iconPosition='right' placeholder='Search...'>
            <Icon color='black' name='search'/>
            <input style={{borderRadius: '100px'}}/>
          </Input>
        </Segment>
      </Container>

    );
  }
}

class Results extends React.Component {
  render() {
    return (
        <Container className="cards">
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>Club 1</Card.Header>
                <Card.Description>Club 1 that does Club 1 things</Card.Description>
              </Card.Content>
              <Card.Content>
                <Label>
                  Attribute 1
                </Label>
                <Label>
                  Attribute 3
                </Label>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Club 2</Card.Header>
                <Card.Description>Club 2 that does Club 2 things</Card.Description>
              </Card.Content>
              <Card.Content>
                <Label>
                  Attribute 1
                </Label>
                <Label>
                  Attribute 2
                </Label>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
    );
  }
}

class BrowsePage extends React.Component {

  render() {
    return (
      <div>
        <NavBar/>
        <SearchBar/>
        <Results/>
      </div>
    );
  }
}

ReactDOM.render(<BrowsePage/>, document.getElementById('root'));
