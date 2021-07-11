import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Switch, StatusBar, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname:'Maria Vania',
      email:'mariavania@gmail.com',
      alamat:'Jakarta',
      darkmode:true,
      darkModeColor: '#212121',
      lightModeColor: '#ffffff',
      textDarkMode:'#ffffff',
      textLightMode:'#bdbdbd',
    };
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: this.state.darkmode ? this.state.darkModeColor : this.state.lightModeColor,
      }}>
      <StatusBar barStyle='light-content' backgroundColor='#464853' />

      <View style={{
        marginTop:10,
        marginHorizontal:20,
        flexDirection:'row'
      }}>
        <Icon name="bars" size={30} color={this.state.darkmode ? this.state.textDarkMode : this.state.textLightMode} />
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{color: this.state.darkmode ? this.state.textDarkMode : this.state.textLightMode, fontWeight:'bold', fontSize:18}}>Profile Setting</Text>
        </View>
      </View>

      <View style={{
        flexDirection:'row',
        justifyContent:'center',
          alignItems:'center',
      }}>

        <View style={{
          
          marginTop:20
        }}>

          <Image
              style={{width: 100, height:100, borderRadius:50}}
              source={{uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'}}
            />
        </View>

        <TouchableOpacity style={{
          marginLeft:20,
          backgroundColor: '#bdbdbdbd',
          paddingHorizontal:10,
          paddingVertical:10,
          borderRadius: 50
        }}>
          <Icon name="camera" size={20} color="#ffffff" />
        </TouchableOpacity>

        
      </View>

        <View style={{
          marginHorizontal: 20,
          marginTop: 20,
        }}>
        <Text style={{color:'#bdbdbd'}}>Full Name</Text>
        <TextInput 
          value={this.state.fullname}
          onChangeText={(text) => this.setState({fullname: text})}
          placeholderTextColor="#bdbdbd"
          style={{
            borderBottomWidth: 1,
            color:'#bdbdbd',
            borderColor:'#bdbdbd'
          }}
          placeholder='Masukkan nama lengkap'
        />
        </View>

        <View style={{
          marginHorizontal: 20,
          marginTop: 20,
        }}>
        <Text style={{color:'#bdbdbd'}}>Email</Text>
        <TextInput 
          value={this.state.email}
          onChangeText={(text) => this.setState({email: text})}
          placeholderTextColor="#bdbdbd"
          style={{
            borderBottomWidth: 1,
            color:'#bdbdbd',
            borderColor:'#bdbdbd'
          }}
          placeholder='Masukkan nama lengkap'
        />
        </View>

        <View style={{
          marginHorizontal: 20,
          marginTop: 20,
        }}>
        <Text style={{color:'#bdbdbd'}}>Alamat</Text>
        <TextInput 
          value={this.state.alamat}
          onChangeText={(text) => this.setState({alamat: text})}
          placeholderTextColor="#bdbdbd"
          style={{
            borderBottomWidth: 1,
            color:'#bdbdbd',
            borderColor:'#bdbdbd'
          }}
          placeholder='Masukkan nama lengkap'
        />
        </View>

        <View style={{
          flexDirection:'row',
          marginHorizontal:20,
          marginTop:20
        }}>
          <View style={{
            justifyContent:'center',
            alignItems:'center'
          }}>

          </View>
          <Text style={{color:this.state.darkmode ? this.state.textDarkMode : this.state.textLightMode}}>Night Mode</Text>
          <Switch
              trackColor={{ false: "#767577", true: "#03a9f4" }}
              thumbColor={this.state.darkmode ? "#0288d1" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={val => {this.setState({darkmode: val})}}
              value={this.state.darkmode}
            />
        </View>

      </View>
    );
  }
}
