
import React, {Component} from 'react';
import {Linking} from 'react-native';
import { Container, Header, Title, Content, Footer, Button, Icon, Text} from 'native-base';
import {WebBrowser} from 'expo';
import env from '../env';


import urljoin from 'url-join';
import qs from 'qs';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            busy: false,
            completed: true
        }

        Linking.addEventListener('url',this._handleCallback);
    }
    componentDidMount(){
        this.startLogin();
    }

    buildAuthorizeUrl(){
        const params = {
            response_type: 'code',
            scope: env.scope,
            // code_challenge: challenge,
            // code_challenge_method: "S256",
            redirect_uri: env.redirectUri,
            client_id: env.clientID,
            state: env.redirectUri
        };
        const baseUrl = `https://${env.domain}`,
              query = qs.stringify(params);
        
        return urljoin(baseUrl, `authorize`, `?` + query);
        

    }
    async startLogin() {
        const url = this.buildAuthorizeUrl();
        console.log(`browsing ${url} ...`);
        let open = await WebBrowser.openBrowserAsync(url);
        if (open.cancel) {}
    }


  _handleCallback(event) {
      console.log('callback');
      console.log(event);
      WebBrowser.dismissBrowser();

    //   const response = url.parse(event.url,true);
    //   const code = response.query.code; //TODO error handling...

    //   if (code) {
    //     const tokenRequestPayload = JSON.stringify({
    //             grant_type: 'authorization_code',
    //             code: code,
    //             client_id: env.clientID,
    //             redirect_uri: env.redirectUri,
    //             scope: env.scope
    //         });

    //     let res = await fetch(`https://${env.domain}/oauth/token`, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //          },
    //         body: tokenRequestPayload
    //     });

    //     let json = await res.json();

    //     console.log(json);
    //     const {id_token, access_token} = json;

    //     console.log(`id_token: ${id_token}`);
    //     console.log(`access_token: ${access_token}`);


        // .then(res=>)
        // .then(json=>{
            
        //     this.setState({
        //             loginInProcess:false,
        //             profileFetch: true
        //          });

        //     this._fetchProfile(access_token)
        //     .then(res=>res.json())
        //     .then(json=>{
        //         this.setState({
        //             loginInProcess:false,
        //             profileFetch: false
        //          });
        //     this.props.onComplete(json, id_token, access_token);
        //     })
        // })
        // .catch(err=>{

        //     this.setState({
        //         loginInProcess:false
        //     });
        //     this.props.onFailed(err);
        // });
  //    }

  }

    render() {
        return (
            <Container>
                <Header>
                    <Icon name="person" />
                    <Text>Login</Text>
                </Header>
                <Content>
                    {this.showBusy()}
                    {this.showComplete()}
                </Content>
                <Footer/>
            </Container>
        );
    }

    showBusy() {
        if (this.state.busy) {
            return (
                <Spinner color='green' />
            )
        } 
    }

    showComplete() {
        if (this.state.completed) {
            return (
                <Text>Completed</Text>
            )
        } 
    }
}

export default Login;