import React, { FC } from 'react';
import { Text } from 'react-native';
import styles from './ErrorDisplay.styles';

export interface IErrorDisplayProps {
  errorText: string;
}

const ErrorDisplay: FC<IErrorDisplayProps> = ({ errorText }) => (
  <Text style={styles.errorText}>{errorText}</Text>
);

export default ErrorDisplay;
