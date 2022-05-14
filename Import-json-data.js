import React, { Component } from "react";
import {View, Text} from 'react-native';
import * as data from './assets/user.json';

const MyWebtutsComponent = () => {
  
  const rawdata = data;
  console.log(rawdata);
  return (
    <View>
      <Text>{JSON.stringify(rawdata.example)}</Text>
    </View>
  );
};
export default MyWebtutsComponent;