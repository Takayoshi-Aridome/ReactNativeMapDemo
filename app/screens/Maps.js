import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PlacesSearchBox from '../components/maps/PlacesSearchBox';

export default class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  placesSearch(query = "", type = "") {
    //検索する
    console.log("placesSearch:query = " + query, "placesSearch:type = " + type);
  }

  render() {
    return (
      <PlacesSearchBox
        placesSearch = { this.placesSearch }
      />
    );
  }
}
