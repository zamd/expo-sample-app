
import React, {Component} from 'react';
import { Container, Header, Title, Content, Footer, Button, Icon, Text} from 'native-base';

import { Actions } from 'react-native-router-flux';

class Home extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Icon name="person" />
                    <Text>Welcome</Text>
                </Header>
                <Content>
                    <Text/>
                    <Button onPress={Actions.login}>
                        <Text>Login with Auth0</Text>
                    </Button>
                </Content>
                <Footer/>
            </Container>
        );
    }
}

export default Home;