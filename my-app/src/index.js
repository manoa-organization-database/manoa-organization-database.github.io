import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Card, Image, Button, Label, Grid, Segment } from 'semantic-ui-react';

class NavBar extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item>HOME</Menu.Item>
            <Menu.Item>PROFILE</Menu.Item>
            <Menu.Item>DATABASE</Menu.Item>
            <Menu.Item>SEARCH BY INTEREST</Menu.Item>
            <Menu.Item position="right" fitted>john@foo.com</Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class UserProfile extends React.Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Container>
          <Grid>
            <Grid.Column width={4}>
              <Menu fluid vertical tabular>
                <Menu.Item
                    name='Overview'
                    active={activeItem === 'Overview'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Manage Clubs and Interests'
                    active={activeItem === 'Manage Clubs and Interests'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Edit Profile'
                    active={activeItem === 'Edit Profile'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    color='red'
                    name='Delete Account'
                    active={activeItem === 'Delete Account'}
                    onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
              <Segment>
                <Container>
                  <Card centered fluid>
                    <Card.Content>
                      <Image
                          floated='left'
                          size='tiny'
                          src='https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1.png'
                      />
                      <Card.Header>John Doe</Card.Header>
                      <Card.Meta>
                        <span>john@foo.com</span>
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content>
                      <p>Clubs:</p>
                      <Label>Mockup Club</Label>
                    </Card.Content>
                    <Card.Content>
                      <p>Interests:</p>
                      <Label>Photography</Label>
                      <Label>Sports</Label>
                      <Label>Programming</Label>
                    </Card.Content>
                  </Card>
                </Container>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

// unused code that we might be able to reuse
class UserProfileCardOld extends React.Component {
  render() {
    return (
        <Container>
          <Card centered>
            <Image src='https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1.png' wrapped ui={false}/>
            <Card.Content>
              <Card.Header>John Doe</Card.Header>
              <Card.Meta>
                <span>john@foo.com</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content>
              <p>Clubs:</p>
              <Label>Mockup Club</Label>
            </Card.Content>
            <Card.Content>
              <p>Interests:</p>
              <Label>Photography</Label>
              <Label>Sports</Label>
              <Label>Programming</Label>
            </Card.Content>
            <Card.Content extra>
              <Button color='blue'>
                Edit Profile
              </Button>
              <Button color='red'>
                Delete Profile
              </Button>
            </Card.Content>
          </Card>
        </Container>
    );
  }
}


class UserHomePage extends React.Component {

  render() {
    return (
        <div>
          <NavBar/>
          <UserProfile/>
        </div>
    );
  }
}


ReactDOM.render(<UserHomePage/>, document.getElementById('root'));