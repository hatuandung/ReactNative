import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity

} from 'react-native';
import { commonStyles, primaryDark, textDefault, textHighlight, primary } from '../theme';
import UnitInput from './UnitInput';
import data from "../data.json";

class UnitColumn extends PureComponent {
  state = {
    units: data.categories[0].units,
    currentUnitIndex: 0,
    baseValue: 0
  };

  _onUnitPressed = (index) => this.setState({currentUnitIndex:index})
  _rederUinitItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        commonStyles.horizontalPadding,
        {
          paddingVertical: 10,
          backgroundColor: index % 2 == 0 ? primary : primaryDark
        }]}
      onPress={() => this._onUnitPressed(index)}
    >
      <Text style={{
        color:
          index === this.state.currentUnitIndex ? textHighlight : textDefault
      }}
      >
        {item.name} </Text>
    </TouchableOpacity>
  );
  _unitKeyExtractor = item => item.id.toString();

  render() {
    return (
      <View style={commonStyles.wrapper}>
        <UnitInput
          unit={this.state.units[this.state.currentUnitIndex]}
          baseValue={this.props.baseValue}
          onChangeBaseValue={this.props.onChangeBaseValue}
        />
        <FlatList
          data={this.state.units}
          extraData={this.state.currentUnitIndex}
          renderItem={this._rederUinitItem}
          keyExtractor={this._unitKeyExtractor}
        />
      </View>
    );
  }
}
export default UnitColumn;