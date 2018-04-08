import React, { Component } from "react";
import { Header, Title, Content, Body, Right, Left, Button, Icon, Form, Picker, Input, Label, Item } from "native-base";
import styles from "./PlacesSearchBoxStyles";
import data from "./PlacesSearchBoxData";

export default class PlacesSearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { placesQuery: '', placesType: data.placesTypeSearch.placesTypes[0].value };
  }

  _onChangePlacesQuery(text) {
    this.setState({ placesQuery: text });
  }

  _onEndPlacesQuery(event) {
    this.setState({ placesQuery: event.nativeEvent.text });
    this.props.placesSearch(event.nativeEvent.text, this.state.placesType);
  }

  _onChangePlacesType(value) {
    this.setState({ placesType: value });
    this.props.placesSearch(this.state.placesQuery, value);
  }

  _createPickerItems(list = [], key = "") {
    let _temp = [];
    for(let i in list) {
      _temp.push(<Picker.Item key = { key + i } label = { list[i].label } value = { list[i].value } />);
    }
    return _temp;
  }

  render() {
    return (
      <Form>
        <Item>
          <Icon active name = { data.placesQuerySearch.icon } />
          <Input
            placeholder = { data.placesQuerySearch.placeholder }
            onChangeText = { (text) => this._onChangePlacesQuery(text) }
            onEndEditing = { (event) => this._onEndPlacesQuery(event) }
          />
        </Item>
        <Item>
          <Icon active name = { data.placesQuerySearch.icon } />
          <Picker
            renderHeader = { backAction =>
              <Header style = { styles.placesTypeSearch.header }>
                <Left>
                  <Button transparent onPress = {backAction}>
                    <Icon name = "md-close" style = { styles.placesTypeSearch.headerIconClose } />
                  </Button>
                </Left>
                <Body style = { styles.placesTypeSearch.headerBody }>
                  <Title style = { styles.placesTypeSearch.headerTitle }>{ data.placesTypeSearch.headerTitle }</Title>
                </Body>
                <Right />
              </Header>
            }
            mode = "dropdown"
            selectedValue = { this.state.placesType }
            onValueChange = { this._onChangePlacesType.bind(this) }
          >
            { this._createPickerItems(data.placesTypeSearch.placesTypes, "placesTypes") }
          </Picker>
        </Item>
      </Form>
    );
  }
}
