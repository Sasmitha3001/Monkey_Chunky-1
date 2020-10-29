
import * as React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image } from 'react-native';
import {Header} from 'react-native-elements'
import db from './localdb'
console.log(db["the"].chunks)

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      text:'',
      displayText:[],
    }
  }
  render(){
    return(
      <View style={styles.container}>
         <Header
      centerComponent={{text:"Monkey Chunky",
                      style:{color:"brown",fontSize:20}}}
                      backgroundColor={"#90D312"}
      />
      <Image 
      style={styles.imageIcon}
      source={{
        uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"
      }}
      />
      
      <TextInput
      style={styles.inputBox}
      onChangeText={(Textvalue)=>{
        this.setState({
          text:Textvalue 
        })
      }}
      value={this.state.text}
      />
      <TouchableOpacity style={styles.goButton}
      onPress={()=>{
        this.setState({
          displayText:this.state.text
        })
      }}>
        <Text style={styles.textButton}>GO</Text>
      </TouchableOpacity>
      <Text>{this.state.displayText}</Text>

      </View>
     
    )
  }
}
const styles=StyleSheet.create({
  inputBox:{
    borderWidth:4,
    width:"80%",
    height:50,
    marginTop:"25%",
    textAlign:'center',
    alignSelf:'center'

  },
  container:{
    flex:1,
    backgroundColor:'#8162E3'
  },
  goButton:{
    backgroundColor:"orange",
    width:"50%",
    height:50,
    alignSelf:"center",
    margin:20,

  },
  textButton:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold"
  },
  imageIcon:{
    width:150,
    height:150,
    marginLeft:100,
    alignSelf:'center'
  }

})