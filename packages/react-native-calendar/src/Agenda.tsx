import React, { useMemo, useState } from 'react';
import { FlatList, ListRenderItemInfo, TouchableOpacity, View } from 'react-native';
import { Extrapolate, interpolate, Easing } from 'react-native-reanimated';
import { useTimingTransition } from 'react-native-redash';
import dayjs, { Dayjs } from 'dayjs';
import Calendar from './Calendar';
import { AgendaProps, DateObject, Item } from './type';
import { page, sameDate } from './dateUtils';
import { CALENDAR_HEIGHT, DAY_WIDTH, WEEK_DAY_NAMES } from './constant';
import { useTheme, Theme, helpers, Flex, Text, Icon, WhiteSpace } from '@td-design/react-native';

const { px, ONE_PIXEL } = helpers;

const dayItemHeight = DAY_WIDTH + px(6 * 2);

function Agenda<ItemT extends Item>({
  data = [],
  renderItem,
  keyExtractor,
  firstDay,
  showSixWeeks,
  ...restProps
}: AgendaProps<ItemT>) {
  const theme = useTheme<Theme>();

  const [selectedDay, setSelectedDay] = useState<Dayjs>();
  const animation = useTimingTransition(selectedDay ? true : false, {
    duration: 400,
    easing: Easing.inOut(Easing.ease),
  });

  const handleRenderItem = (itemInfo: ListRenderItemInfo<ItemT>) => {
    if (renderItem) {
      return renderItem(itemInfo);
    } else {
      const { item } = itemInfo;
      return (
        <TouchableOpacity onPress={item.onPress} activeOpacity={0.8}>
          <Flex
            borderStyle="solid"
            borderBottomColor="calendar_border"
            borderBottomWidth={ONE_PIXEL}
            paddingHorizontal="xxl"
          >
            <View style={{ width: px(8), height: px(8), borderRadius: px(8), backgroundColor: theme.colors.success }} />
            <View style={{ paddingVertical: px(10), marginLeft: px(8) }}>
              <Text variant="content1" style={{ marginBottom: px(2) }}>
                {item.title}
              </Text>
              <Text variant="date2">{item.time}</Text>
            </View>
          </Flex>
        </TouchableOpacity>
      );
    }
  };

  const handleDayPress = (date: DateObject) => {
    const day = dayjs(date.dateString);
    setSelectedDay(day);
  };

  const animationY = useMemo(() => {
    let week = 0;
    if (selectedDay) {
      const days = page(selectedDay, firstDay, showSixWeeks);
      for (let i = 0; i < days.length; i++) {
        week = Math.floor(i / 7);
        if (sameDate(days[i], selectedDay)) {
          break;
        }
      }
    }
    return week * dayItemHeight;
  }, [firstDay, selectedDay, showSixWeeks]);

  const contentTranslate = interpolate(animation, {
    inputRange: [0, 1],
    outputRange: [0, -animationY],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View>
      <Calendar
        onDayPress={handleDayPress}
        monthWrapperStyle={{ transform: [{ translateY: contentTranslate }] }}
        contentStyle={{
          overflow: 'hidden',
          backgroundColor: theme.colors.calendar_background,
          height: interpolate(animation, {
            inputRange: [0, 1],
            outputRange: [CALENDAR_HEIGHT, dayItemHeight],
            extrapolate: Extrapolate.CLAMP,
          }),
        }}
        {...restProps}
      />

      {selectedDay && (
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedDay(undefined)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: px(30),
              backgroundColor: theme.colors.calendar_background,
            }}
          >
            <Icon name="chevron-thin-down" type="entypo" size={px(24)} color={theme.colors.agenda_icon} />
          </TouchableOpacity>
          <WhiteSpace backgroundColor={theme.colors.agenda_whitespace} />
          <Flex
            height={px(36)}
            justifyContent="center"
            borderStyle="solid"
            borderBottomColor="calendar_border"
            borderBottomWidth={ONE_PIXEL}
            backgroundColor="calendar_background"
          >
            <Text variant="content1">{selectedDay.format('MM月DD日') + ' 周' + WEEK_DAY_NAMES[selectedDay.day()]}</Text>
          </Flex>
          <FlatList
            data={data}
            renderItem={handleRenderItem}
            keyExtractor={keyExtractor}
            contentContainerStyle={{ backgroundColor: theme.colors.calendar_background }}
          />
        </>
      )}
    </View>
  );
}

export default Agenda;
