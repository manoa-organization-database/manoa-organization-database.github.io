import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Divider, Image } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
      <Menu borderless className="topmenu">
        <Container>
          <Menu.Item>HOME</Menu.Item>
          <Menu.Item>PROFILE</Menu.Item>
          <Menu.Item>DATABASE</Menu.Item>
          <Menu.Item>SEARCH BY INTEREST</Menu.Item>
          <Menu.Item position="right" fitted>LOGIN</Menu.Item>
          <Menu.Item fitted><Icon name="user"/></Menu.Item>
        </Container>
      </Menu>
    );
  }
}

class MODLogo extends React.Component {
  render() {
    return (
      <Container fluid>
        <Header as="h1" textAlign="center">Manoa Organization Database</Header>
        <Header as="h2" textAlign="center">A catalog for the various student clubs of UH Manoa</Header>
      </Container>
    );
  }
}

class Middle extends React.Component {
  render() {
    return (
      <Container>
        <Container>
          <Divider horizontal>
            <Header as='h2'>
              Club Officers
            </Header>
          </Divider>
          <Header as="h3" textAlign="center">Showcase your clubs by providing descriptions, location and contact information, and other promotional information.</Header>
          <Image src="https://raw.githubusercontent.com/manoa-organization-database/manoa-organization-database.github.io/main/doc/club-admin-home-page.png"/>
        </Container>

        <Container>
        <Divider horizontal>
          <Header as='h2'>
            Students
          </Header>
        </Divider>
        <Header as="h3" textAlign="center">Create a profile and highlight your interests.</Header>
        <Image src="https://raw.githubusercontent.com/manoa-organization-database/manoa-organization-database.github.io/main/doc/user-home-page-mockup.png"/>
        <Header as="h3" textAlign="center">Search for clubs based on interests, and get notifications when clubs related to your interest are created.</Header>
        </Container>
      </Container>
    );
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
      <div>
        <TopMenu/>
        <MODLogo/>
        <Middle/>
      </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
