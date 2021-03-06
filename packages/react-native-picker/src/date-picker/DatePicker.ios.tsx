import React, { FC } from 'react';
import { PickerIOS } from '@react-native-picker/picker';
import { Flex, Box, Theme } from '@td-design/react-native';
import { DatePickerProps } from './type';
import useDatePicker from './useDatePicker';
import { useTheme } from '@shopify/restyle';

const DatePickerIOS: FC<
  Omit<DatePickerProps, 'minYear' | 'maxYear' | 'labelUnit' | 'display'> &
    Required<Pick<DatePickerProps, 'minYear' | 'maxYear' | 'labelUnit' | 'display'>>
> = ({ value = new Date(), minYear, maxYear, labelUnit, display, onChange, ...restProps }) => {
  const {
    yearRange,
    monthRange,
    dayRange,
    hourRange,
    minuteRange,
    onYearChange,
    onMonthChange,
    onDayChange,
    onHourChange,
    onMinuteChange,
  } = useDatePicker({
    minYear,
    maxYear,
    labelUnit,
    value,
    onChange,
  });
  const theme = useTheme<Theme>();

  const pickerProps = {};
  const pickerItemProps = {
    color: theme.colors.gray500,
  };

  /** 生成日期picker */
  const renderDateTimePicker = () => {
    return display.split('-').map(key => {
      switch (key) {
        case 'Y':
          return (
            <Box flex={3} key="year">
              <PickerIOS
                {...pickerProps}
                {...restProps}
                selectedValue={`${value.getFullYear()}`}
                onValueChange={itemValue => onYearChange(itemValue as number)}
              >
                {yearRange.map(year => (
                  <PickerIOS.Item {...pickerItemProps} key={year.value} {...year} />
                ))}
              </PickerIOS>
            </Box>
          );
        case 'M':
          return (
            <Box flex={2} key="month">
              <PickerIOS
                {...pickerProps}
                {...restProps}
                selectedValue={`${value.getMonth() + 1}`}
                onValueChange={itemValue => onMonthChange(itemValue as number)}
              >
                {monthRange.map(year => (
                  <PickerIOS.Item {...pickerItemProps} key={year.value} {...year} />
                ))}
              </PickerIOS>
            </Box>
          );
        case 'D':
          return (
            <Box flex={2} key="date">
              <PickerIOS
                {...pickerProps}
                {...restProps}
                selectedValue={`${value.getDate()}`}
                onValueChange={itemValue => onDayChange(itemValue as number)}
              >
                {dayRange.map(year => (
                  <PickerIOS.Item {...pickerItemProps} key={year.value} {...year} />
                ))}
              </PickerIOS>
            </Box>
          );
        case 'H':
          return (
            <Box flex={2} key="hour">
              <PickerIOS
                {...pickerProps}
                {...restProps}
                selectedValue={`${value.getHours()}`}
                onValueChange={itemValue => onHourChange(itemValue as number)}
              >
                {hourRange.map(year => (
                  <PickerIOS.Item {...pickerItemProps} key={year.value} {...year} />
                ))}
              </PickerIOS>
            </Box>
          );
        case 'T':
          return (
            <Box flex={2} key="minute">
              <PickerIOS
                {...pickerProps}
                {...restProps}
                selectedValue={`${value.getMinutes()}`}
                onValueChange={itemValue => onMinuteChange(itemValue as number)}
              >
                {minuteRange.map(year => (
                  <PickerIOS.Item {...pickerItemProps} key={year.value} {...year} />
                ))}
              </PickerIOS>
            </Box>
          );
        default:
          return null;
      }
    });
  };

  return <Flex backgroundColor="background">{renderDateTimePicker()}</Flex>;
};

export default React.memo(DatePickerIOS);
