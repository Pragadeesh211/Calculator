import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function App() {
  const [txt,num]=useState("");
  
  const click=(Text) =>{
    var a;
    num(txt+Text);
    if(Text=="="){
    if(txt.includes("+"))
    {
      a=txt.split("+");
      var b=Number(a[0]);
      var c=Number(a[1]);
      var d=b+c;
    }
    else if(txt.includes("-"))
    {
      a=txt.split("-");
      var b=Number(a[0]);
      var c=Number(a[1]);
      var d=b-c;
    }
    else if(txt.includes("/"))
    {
      a=txt.split("/");
      var b=Number(a[0]);
      var c=Number(a[1]);
      var d=b/c;
    }
    else if(txt.includes("*"))
    {
      a=txt.split("*");
      var b=Number(a[0]);
      var c=Number(a[1]);
      var d=b*c;  
    } 
    if(Text=="DEL")
    {
      num(txt.toString().substring(0,txt.length-1));      
    }
    num(d) 
  }
    if(Text=="DEL")
    {
      num(txt.toString().substring(0,txt.length-1));      
    }
    if(Text=="AC"){
      num("");
    }
  }

  return (
    <View style={styles.container}>
     <View  style={styles.calci}>
      <Text style={styles.Texts}>{txt}</Text>
      
     </View>
     <View style={styles.buttons}>
      <View style={styles.numbers}>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>{click(1)}}>
            <Text style={styles.Texts}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{click(2)}}>
            <Text style={styles.Texts}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{click(3)}}>
            <Text style={styles.Texts}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>{click(4)}}>
            <Text style={styles.Texts}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{click(5)}}>
            <Text style={styles.Texts}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{click(6)}}>
            <Text style={styles.Texts}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>{click(7)}}>
            <Text style={styles.Texts}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{click(8)}}>
            <Text style={styles.Texts}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{click(9)}}>
            <Text style={styles.Texts}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>{click(".")}}>
            <Text style={styles.Texts}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{click(0)}}>
            <Text style={styles.Texts}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{click("=")}}>
            <Text style={styles.Texts}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.operands}>
      <View style={styles.row}>
          <TouchableOpacity onPress={()=>{click("AC")}}>
            <Text style={styles.Texts}>AC</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity onPress={()=>{click("DEL")}}>
            <Text style={styles.Texts}>DEL</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity onPress={()=>{click("+")}}>
            <Text style={styles.Texts}>+</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity onPress={()=>{click("-")}}>
            <Text style={styles.Texts}>-</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity onPress={()=>{click("*")}}>
            <Text style={styles.Texts}>*</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity onPress={()=>{click("/")}}>
            <Text style={styles.Texts}>/</Text>
          </TouchableOpacity>
          </View>
      </View>
     </View>
      
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  answer:{
    backgroundColor:"black",
    alignItems:"flex-end",
    justifyContent:"flex-end",
    flex:4,
    
    
  },

  calci:{
    backgroundColor:"black",
    alignItems:"flex-end",
    justifyContent:"center",
    flex:7
  },
  buttons:{
    flex:7,
    flexDirection:"row",
  },
  row:{
    flex:3,
    flexDirection:"row",
  },
  numbers:{
    backgroundColor:"black",
    flex:6
  },
  operands:{
    backgroundColor:"orange",
    flex:2,

  },
  Texts:{
    color:"white",
    fontSize:30,
    fontWeight:"bold"
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-around",
    flex:1

    
  }
});
