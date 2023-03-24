import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    backgroundColor: colors.LIGHT_GREY,
    height: 1,
    flex: 1,
  },
  text: {
    color: colors.BLUE,
    fontWeight: '500',
    marginHorizontal: 8,
  },
});
