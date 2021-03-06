import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput

} from 'react-native';
import { commonStyles, primaryDark } from '../theme';
import Big from 'big.js'

class UnitInput extends PureComponent {
    state = {
        inputValue: (Big(this.props.baseValue) .div(this.props.unit.ratio)).toString()
    };

    componentWillReceiveProps(nextProps) {
        const newValue = Big(nextProps.baseValue) .div(nextProps.unit.ratio);
        if (newValue != parseFloat(this.state.inputValue)) {
            this.setState({
                inputValue: newValue.toString()
            });
        }
    }


    _onChange = value => {
        this.setState({ inputValue: value }, () => {
            if (!isNaN(parseFloat(value))) {
                this.props.onChangeBaseValue(Big(value) .time(this.props.unit.ratio));
            }
        });
    };
    render() {
        const unit = this.props.unit;
        return (
            <View
                style={[
                    commonStyles.paddingHorizontal,

                    {
                        paddingVertical: 10,
                        backgroundColor: primaryDark,
                    }
                ]}
            >
                <Text style={commonStyles.textLarge} > {this.props.unit.name} </Text>
                <TextInput
                    style={commonStyles.textLarge}
                    value={this.state.inputValue}
                    onChangeText={this._onChange}
                    keyboardType="numeric"
                />
            </View>
        );
    }
}
export default UnitInput;