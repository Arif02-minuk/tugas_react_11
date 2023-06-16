import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import {
  Segment,
  Grid,
  Divider,
  Header,
  Icon,
  Button,
  Search,
  Dimmer,
  Loader,
  Image,
  Placeholder,
  List
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Cari document
                </Header>

                <Search placeholder="Search document..." />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="file pdf outline" />
                  Tambah Document Baru
                </Header>
                <Button primary>Create Dokument</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>

        <Grid columns={3} stackable>
          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column>
              <List>
                <List.Header>Website Terkait</List.Header>
                <List.Item icon="linkify" content={<a href="https://">Google</a>}/>
                <List.Item icon="linkify" content={<a href="https://">Facebook</a>}/>
                <List.Item icon="linkify" content={<a href="https://">Semnatic Ui</a>}/>
                <List.Item icon="linkify" content={<a href="https://">Niomic</a>}/>
                <List.Item icon="linkify" content={<a href="https://">React</a>}/>
              </List>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default App;
