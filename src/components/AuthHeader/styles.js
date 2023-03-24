import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  image: {width: 18, height: 18},
  title: {
    color: colors.BLUE,
    fontSize: 26,
    fontWeight: '500',
    marginLeft: 16,
  },
});
