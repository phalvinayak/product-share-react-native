import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLUE,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 8,
    width: '100%',
  },
  title: {
    color: colors.WHITE,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
