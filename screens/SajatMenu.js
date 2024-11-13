import React from 'react';
import { useState,useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';

export default function SajatMenu({navigation}) {

  const [adatok,setAdatok]=useState([])

  const letoltes=async ()=>{
      const x=await fetch("http://10.0.0.134:3000/film")
      const y=await x.json()
      setAdatok(y)
      alert(JSON.stringify(y))
  }

  useEffect(()=>{
      letoltes()
  },[])

  const reszletekFv=(id)=>{
    //alert(id)
    navigation.navigate("SajatMenu2",{id:id})
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ez a saját menünk</Text>
      <FlatList
        data={adatok}
        renderItem={({item}) => (
            <View>
                <Text>{item.film_cim}</Text>
    
                <TouchableOpacity 
                    style={{backgroundColor:"#0000ff"}} 
                    onPress={()=>reszletekFv(item.film_id)}>
                  <Text style={{color:"white"}}>Részletek</Text>
                </TouchableOpacity>
            
            </View>
          )
        }
        keyExtractor={item => item.film_id}
      />   
    </View>
  );
}