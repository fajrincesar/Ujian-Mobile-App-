import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Body, Title } from 'native-base';



export default class App extends Component {
constructor(){
  super();
    this.state={
      massa:0,
      tinggi:0,
      imt:0,
      ket:''
    };
}

    count = ()=> {
      let m = parseInt(this.state.massa);
      let t = parseInt(this.state.tinggi);
      let hasil = m/Math.pow(t,2);
      if (hasil < 18.5){
        ket='berat badan anda kurang'
      }
      else if (hasil >=18.5 && hasil <=24.9){
        ket='berat badan anda ideal'
      }
      else if (hasil>=25.0 && hasil<=29.9){
        ket='berat badan berlebih'
      }
      else if (hasil>=30.0 && hasil<=39.9){
        ket='berat badan sangat berlebihan'
      }    
      else {
        (ket='obesitas')
      } 
      this.setState({
        massa:m,
        tinggi:t,
        imt:hasil 
      })
    }
    render() {
    return (  
      <Container>
        <Content>
        <Header>
          <Body><Title>Indeks Massa Tubuh</Title></Body>
        </Header>
            <Form>
                <Item>
                    <Input placeholder="Berat (kg)" onChangeText={(x)=>this.setState({m:x})} />
                </Item>
                <Item last>
                    <Input placeholder="Tinggi (cm)" onChangeText={(y)=>this.setState({t:y})} />
                </Item>
            </Form>
            <Button rounded success onPress={()=>{this.count()}}>
              <Text> Hitung IMT </Text>
            </Button>
            <View>
              <Text>Massa Tubuh: {this.state.m} kg</Text>
              <Text>Tinggi Badan: {this.state.t} cm</Text>
              <Text>Indeks Massa Tubuh: {this.state.hasil}</Text>
              <Text>Diagnosa: {this.state.ket}</Text>
            </View>
        </Content>
      </Container>
    );
  }
}
