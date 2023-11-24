import styled from 'styled-components';
import { View } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight

export const Colors = {
    primery: "#fffff",
    secondary: "#E5E7EB",
    tertiary: "#",
    darkLight: "#",
    brand: "#",
    green: "#",
    red: ""
}

const { primery, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styles.View`
    flex: 1;
    padding: 25pxl;
    padding-top: ${StatusBarHeight + 10}px;
    background-colors: ${primery};
`