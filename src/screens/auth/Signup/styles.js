import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreementRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreementText: {
    color: colors.BLUE,
    fontSize: 14,
    marginHorizontal: 13,
  },
  agreementBold: {
    fontWeight: 'bold',
  },
  signUpButton: {
    marginVertical: 20,
  },
});
