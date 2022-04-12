import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Customers from './Screens/Customers';
import Posts from './Screens/Posts';
import { Colors, Images } from './CommonConfig';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Customers" component={Customers} options={{ 
            tabBarActiveTintColor:'gray',
            tabBarInactiveTintColor:'lightgray',
            tabBarIcon:({focused}) => (
              <View style={{alignItems:'center',padding:12,borderBottomColor:focused?Colors.ORANGE:'lightgray',borderBottomWidth:4,width:'100%'}}>
              <Image source={Images.CUSTOMER_TAB_ICON}
              style={{tintColor:focused?Colors.ORANGE:'lightgray',resizeMode:"contain",height:25}}/>
              <Text style={{fontSize:10,color:'gray',marginTop:5}}>CUSTOMERS</Text>
              </View>
            ),
            tabBarStyle:{height:80,padding:10},
            tabBarLabelStyle:{color:'white',fontSize:1},
            title: "CUSTOMER",
            headerTitleAlign: 'center',
            headerTitleStyle:{color:Colors.ORANGE}
            }}
          />

          <Tab.Screen name="Posts" component={Posts} options={{ 
            tabBarActiveTintColor:'gray',
            tabBarInactiveTintColor:'lightgray',
            tabBarIcon:({focused}) => (
              <View style={{alignItems:'center',padding:12,borderBottomColor:focused?Colors.ORANGE:'lightgray',borderBottomWidth:4,width:'100%'}}>
              <Image source={Images.POST_TAB_ICON}
              style={{tintColor:focused?Colors.ORANGE:'lightgray',resizeMode:"contain",height:25}}/>
              <Text style={{fontSize:10,color:'gray',marginTop:5}}>POSTS</Text>
              </View>
            ),
            tabBarStyle:{height:80,padding:10},
            tabBarLabelStyle:{color:'white',fontSize:1},
            title: "POSTS",
            headerTitleAlign: 'center',
            headerTitleStyle:{color:Colors.ORANGE}
            }}
          />
      </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeTabs' options={{  }}>
      <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})


       