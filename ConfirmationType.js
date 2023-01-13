import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView ,StatusBar, Image, TouchableOpacity, ScrollView } from "react-native";

const lampuMenyala = { uri : 'https://i.ibb.co/TB4vg7v/Png-Item-5290496-1.png'};
const lampuMati = { uri : 'https://i.ibb.co/dPyzKYj/Png-Item-5290496-1-1.png'};

function Confirm(){

  const [power,setPower] = useState(1);
  const pressOff = () => setPower(0);
  const pressOn = () => setPower(1);

  if (power == 0) {
    
    return(
      <SafeAreaView backgroundColor='white'>  
          <View>
              <StatusBar backgroundColor='white' barStyle='dark-content'/>
              <Text style={styles.header} >Wellcome</Text>
              <Text style={styles.desc} >To smart home system</Text>
          </View>
          
          <View style={styles.card}>
            
          </View>
      </SafeAreaView>
    );
  }

  else {
    return(
      <SafeAreaView backgroundColor='white'>  
          <View>
              <StatusBar backgroundColor='white' barStyle='dark-content'/>
              <Text style={styles.header} >Lampu Utama</Text>
              <Text style={styles.desc} >Setting Your Device Properly</Text>
          </View>
          
          <ScrollView>
              <View>
                  <Image source={lampuMenyala} style={styles.logo}></Image>
              </View>
  
              <View style={styles.addNewDevice}>
                  <Text style={styles.headerList2} >Device Status</Text>
                  <Text style={styles.statusOn} >ON</Text>
              </View>
              
              <View>
                  <Text style={styles.keterangan} >Switch Power</Text>
              </View>
  
              <TouchableOpacity onPress={pressOff}>
                  <View style={styles.deviceOff}>
                      <Text style={styles.buttonText}>OFF</Text>
                  </View>
              </TouchableOpacity>
  
              <Text style={styles.buttonText}> </Text>
          </ScrollView>
      </SafeAreaView>
    );
  }

}


const styles = StyleSheet.create({
    card :{
      backgroundColor: '#22A7F0',
    },
    logo:{
        width: 170,
        height: 320,
        alignSelf: "center",
        marginTop: 30,
        marginBottom: '10%',
    },

    input: {
        marginTop: 15,
        marginRight: 30,
        marginLeft:30,
        borderWidth: 2,
        padding: 13,
        borderRadius : 12,
        borderColor: '#22A7F0',
    },
    

  header:{
    marginTop: 20,
    marginLeft:30,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#22A7F0',
  },

  desc:{
    marginLeft:30,
    fontSize: 20,
    color: '#323232',
    marginBottom:20,
  },

  keterangan:{
    textAlign : "center",
    fontSize: 20,
    color: '#323232',
    marginBottom:10,
    fontWeight: 'bold',
  },

  addNewDevice:{
    shadowColor:'22A7F0',
    marginBottom:'5%',
    width:'85%',
    alignSelf:"center",
    borderWidth: 2,
    borderRadius : 15,
    borderColor: '#22A7F0',
    flexDirection: "row", 
    justifyContent:'space-between'
  },


  buttonText: {
    textAlign: 'center',
    padding:18,
    fontSize:24,
    color: 'white',
    fontWeight:'bold'
  },

  deviceList:{
    marginBottom: 0,
    marginTop:15,
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#22A7F0',
    borderRadius : 15,
  },

  deviceOn:{
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#43D07B',
    borderRadius : 15,
    marginBottom: 20,
  },

  deviceOff:{
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#E86068',
    borderRadius : 15,
    marginBottom: 20,
  },

  headerList: {
    marginLeft:30,
    padding:20,
    fontSize:18,
    color: 'white',
    fontWeight:'bold'
  },

  headerList2: {
    marginLeft:10,
    padding:15,
    fontSize:18,
    color: '#22A7F0',
    fontWeight:'bold'
  },

  statusOn: {
    marginRight:10,
    padding:15,
    fontSize:18,
    color: '#43D07B',
    fontWeight:'bold'
  },

  statusOff: {
    marginRight:10,
    padding:15,
    fontSize:18,
    color: '#E86068',
    fontWeight:'bold'
  },

});


export default Confirm;