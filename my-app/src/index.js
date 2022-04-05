import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Button, Card, Image, Label } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
      <Menu borderless className="topmenu">
        <Container>
          <Menu.Item>HOME</Menu.Item>
          <Menu.Item>PROFILE</Menu.Item>
          <Menu.Item>DATABASE</Menu.Item>
          <Menu.Item>SEARCH BY INTEREST</Menu.Item>
          <Menu.Item>CLUB PROFILE</Menu.Item>
          <Menu.Item position="right">clubadmin@foo.com<Icon name="user" /></Menu.Item>
        </Container>
      </Menu>
    );
  }
}

class ClubName extends React.Component {
  render() {
    return (
      <Container textAlign='center'>
        <Header as="h1" style={{display:"inline-flex", alignItems:"center"}}>Mockup Club<Button size='mini' >Edit</Button></Header>

      </Container>

    );
  }
}

class ClubPicture extends React.Component {
  render() {
    return (
      <Image src="https://media.istockphoto.com/photos/in-progress-square-red-grunge-stamp-picture-id460917967?k=20&m=460917967&s=612x612&w=0&h=ajCaVf-QUvfCdSgBcWVixBzJrfT4tV-kObbhC04sgPU=" size='large' centered/>
    );
  }
}

class ClubDescription extends React.Component {
  render() {
    return (
      <Container textAlign='center'>
        <Header as="h3">Do you like making mockups of clubs? Then this is the club for you. The Mockup Club focuses on teaching members how to create their own mockups of clubs. Activites include coming up with clubs ideas and writing their own club descriptions such as this one.</Header>
        <Button size='mini'>Edit</Button>
      </Container>
    );
  }
}

class ClubInterests extends React.Component {
  render() {
    return (
      <Container textAlign='center'>
        <Header as="h1" style={{display:"inline-flex", alignItems:"center"}}>Club Interests<Button size='mini'>Add</Button></Header>
        <div>
          <Label>
            Clubs
            <Icon name='delete' />
          </Label>
          <Label>
            Mockups
            <Icon name='delete' />
          </Label>
        </div>
      </Container>
    );
  }
}

class StudentList extends React.Component {
  render() {
    return (
      <Container textAlign="center">
        <Header as="h1" style={{display:"inline-flex", alignItems:"center"}}>Members<Button size='mini' >Add</Button></Header>
        <Card.Group centered>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='email'>matthew@foo.com</span>
              </Card.Meta>
              <Card.Meta>
                <span className='date'>Joined in 2021</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <div>
                <Label>
                  Clubs
                </Label>
                <Label>
                  Mockups
                </Label>
              </div>
            </Card.Content>
            <Card.Content extra>
              Remove
            </Card.Content>
          </Card>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Elliot</Card.Header>
              <Card.Meta>
                <span className='email'>elliot@foo.com</span>
              </Card.Meta>
              <Card.Meta>
                <span className='date'>Joined in 2020</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <div>
                <Label>
                  Clubs
                </Label>
                <Label>
                  Mockups
                </Label>
                <Label>
                  Sports
                </Label>
              </div>
            </Card.Content>
            <Card.Content extra>
              Remove
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>

    );
  }
}

class ClubAdmin extends React.Component {

  render() {
    return (
      <div>
        <TopMenu/>
        <ClubName/>
        <ClubPicture/>
        <ClubDescription/>
        <ClubInterests/>
        <StudentList/>
      </div>
    );
  }
}

ReactDOM.render(<ClubAdmin />, document.getElementById('root'));