// --------------- LIBRARIES ---------------
import { SafeAreaView, View, Text, Image, Button, StatusBar, Platform, FlatList, TextInput,StyleSheet } from 'react-native';
import React,{ useEffect, useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux';

// --------------- ASSETS ---------------
import { Colors } from '../CommonConfig'
import { getCustomer } from '../Redux/Actions'

// --------------- FUNCTION DECLARATION ---------------
export default function Customers() {

  // --------------- REDUCER STATE ---------------
   const { customer } = useSelector((state) => state);
   const dispatch = useDispatch();

  // --------------- STATE ---------------
  const [customerList, setcustomerList] = useState(customer?.CustomerListResponse?.entries ? customer.CustomerListResponse.entries : []);
  React.useEffect(() => {
    if (customer.isCustomerSuccess == true) {
        setcustomerList(customer?.CustomerListResponse?.entries ? customer.CustomerListResponse.entries : [])
    } else if (customer.isCustomerSuccess == false) {
        Popup.error(customer.errorMsg)
        setcustomerList(customer?.CustomerListResponse?.entries ? customer.CustomerListResponse.entries : [])
    }
}, [customer.isCustomerSuccess]);

  return (
    <View>
      {/* <Text>{console.log(customerList)}</Text> */}
      <Text style={{color:Colors.BLACK}}>Customers</Text>
    </View>
  )
}

const styles = StyleSheet.create({})