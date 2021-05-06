import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { helpers, Theme, useTheme } from '@td-design/react-native';

import Homepage from '../screens/Homepage';
import AccordionDemo from '../screens/AccordionDemo';
import MenuDemo from '../screens/MenuDemo';
import CollapseTextDemo from '../screens/CollapseTextDemo';
import FloatButtonDemo from '../screens/FloatButtonDemo';
import HeaderDemo from '../screens/HeaderDemo';
import NoticeBarDemo from '../screens/NoticeBarDemo';
import ProgressDemo from '../screens/ProgressDemo';
import SliderDemo from '../screens/SliderDemo';
import SwipeRowDemo from '../screens/SwipeRowDemo';
import SwitchDemo from '../screens/SwitchDemo';
import ToastDemo from '../screens/ToastDemo';
import ModalPickerDemo from '../screens/ModalPickerDemo';
import ModalDatePickerDemo from '../screens/ModalDatePickerDemo';
import InputDemo from '../screens/InputDemo';
import ActionSheetDemo from '../screens/ActionSheetDemo';
import CardDemo from '../screens/CardDemo';
import BadgeDemo from '../screens/BadgeDemo';
import ModalDemo from '../screens/ModalDemo';
import IconDemo from '../screens/IconDemo';
import DividerDemo from '../screens/DividerDemo';
import TagDemo from '../screens/TagDemo';
import ModalAlertDemo from '../screens/ModalAlertDemo';
import ModalConfirmDemo from '../screens/ModalConfirmDemo';
import ModalPromptDemo from '../screens/ModalPromptDemo';
import ModalTipDemo from '../screens/ModalTipDemo';
import StepperDemo from '../screens/StepperDemo';
import DarkThemeDemo from '../screens/DarkThemeDemo';
import ButtonDemo from '../screens/ButtonDemo';
import EmptyDemo from '../screens/EmptyDemo';
import AvatarDemo from '../screens/AvatarDemo';
import ImageDemo from '../screens/ImageDemo';
import ListItemDemo from '../screens/ListItemDemo';
import SearchBarDemo from '../screens/SearchBarDemo';
import CheckableDemo from '../screens/CheckableDemo';
import SwiperDemo from '../screens/SwiperDemo';
import TableDemo from '../screens/TableDemo';
import FlowDemo from '../screens/FlowDemo';
import NumberKeyboardDemo from '../screens/NumberKeyboardDemo';
import WhiteSpaceDemo from '../screens/WhiteSpaceDemo';
import ButtonGroupDemo from '../screens/ButtonGroupDemo';
import WingBlankDemo from '../screens/WingBlankDemo';
import TextDemo from '../screens/TextDemo';
import PaginationDemo from '../screens/PaginationDemo';
import TimeLineDemo from '../screens/TimeLineDemo';
import SvgIconDemo from '../screens/SvgIconDemo';
import CountDownDemo from '../screens/CountDownDemo';
// import CalendarDemo from '../screens/CalendarDemo';
// import PasswordDemo from '../screens/PasswordDemo';
// import RatingDemo from '../screens/RatingDemo';
// import TabsDemo from '../screens/TabsDemo';

const { px } = helpers;
const Stack = createStackNavigator();

export const MainStack = () => {
  const theme = useTheme<Theme>();

  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      mode="card"
      // Stack下每个screen都会共享的配置
      screenOptions={{
        headerTitleStyle: {
          fontWeight: '500',
          color: theme.colors.primaryText_1,
          fontSize: px(18),
        },
        headerStyle: {
          backgroundColor: theme.colors.app_background,
        },
        headerTitleAlign: 'center',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Homepage" component={Homepage} options={{ headerTitle: 'Homepage' }} />
      <Stack.Screen name="AccordionDemo" component={AccordionDemo} options={{ headerTitle: 'AccordionDemo' }} />
      {/* <Stack.Screen name="CalendarDemo" component={CalendarDemo} options={{ headerTitle: 'CalendarDemo' }} />
      <Stack.Screen name="PasswordDemo" component={PasswordDemo} options={{ headerTitle: 'PasswordDemo' }} /> */}
      {/* <Stack.Screen name="RatingDemo" component={RatingDemo} options={{ headerTitle: 'RatingDemo' }} /> */}
      {/* <Stack.Screen name="TabsDemo" component={TabsDemo} options={{ headerTitle: 'TabsDemo' }} /> */}
      <Stack.Screen name="MenuDemo" component={MenuDemo} options={{ headerTitle: 'MenuDemo' }} />
      <Stack.Screen
        name="CollapseTextDemo"
        component={CollapseTextDemo}
        options={{ headerTitle: 'CollapseTextDemo' }}
      />
      <Stack.Screen name="FloatButtonDemo" component={FloatButtonDemo} options={{ headerTitle: 'FloatButtonDemo' }} />
      <Stack.Screen name="HeaderDemo" component={HeaderDemo} options={{ header: () => null }} />
      <Stack.Screen name="NoticeBarDemo" component={NoticeBarDemo} options={{ headerTitle: 'NoticeBarDemo' }} />
      <Stack.Screen name="ProgressDemo" component={ProgressDemo} options={{ headerTitle: 'ProgressDemo' }} />
      <Stack.Screen name="SliderDemo" component={SliderDemo} options={{ headerTitle: 'SliderDemo' }} />
      <Stack.Screen name="SwipeRowDemo" component={SwipeRowDemo} options={{ headerTitle: 'SwipeRowDemo' }} />
      <Stack.Screen name="SwitchDemo" component={SwitchDemo} options={{ headerTitle: 'SwitchDemo' }} />
      <Stack.Screen name="ToastDemo" component={ToastDemo} options={{ headerTitle: 'ToastDemo' }} />
      <Stack.Screen name="ModalPickerDemo" component={ModalPickerDemo} options={{ headerTitle: 'ModalPickerDemo' }} />
      <Stack.Screen name="ModalAlertDemo" component={ModalAlertDemo} options={{ headerTitle: 'ModalAlertDemo' }} />
      <Stack.Screen name="ModalPromptDemo" component={ModalPromptDemo} options={{ headerTitle: 'ModalPromptDemo' }} />
      <Stack.Screen
        name="ModalConfirmDemo"
        component={ModalConfirmDemo}
        options={{ headerTitle: 'ModalConfirmDemo' }}
      />
      <Stack.Screen name="ModalTipDemo" component={ModalTipDemo} options={{ headerTitle: 'ModalTipDemo' }} />
      <Stack.Screen name="StepperDemo" component={StepperDemo} options={{ headerTitle: 'StepperDemo' }} />
      <Stack.Screen name="DarkThemeDemo" component={DarkThemeDemo} options={{ headerTitle: 'DarkThemeDemo' }} />
      <Stack.Screen name="ButtonDemo" component={ButtonDemo} options={{ headerTitle: 'ButtonDemo' }} />
      <Stack.Screen name="InputDemo" component={InputDemo} options={{ headerTitle: 'InputDemo' }} />
      <Stack.Screen name="ActionSheetDemo" component={ActionSheetDemo} options={{ headerTitle: 'ActionSheetDemo' }} />
      <Stack.Screen name="CardDemo" component={CardDemo} options={{ headerTitle: 'CardDemo' }} />
      <Stack.Screen name="BadgeDemo" component={BadgeDemo} options={{ headerTitle: 'BadgeDemo' }} />
      <Stack.Screen name="ModalDemo" component={ModalDemo} options={{ headerTitle: 'ModalDemo' }} />
      <Stack.Screen name="IconDemo" component={IconDemo} options={{ headerTitle: 'IconDemo' }} />
      <Stack.Screen name="DividerDemo" component={DividerDemo} options={{ headerTitle: 'DividerDemo' }} />
      <Stack.Screen name="TagDemo" component={TagDemo} options={{ headerTitle: 'TagDemo' }} />
      <Stack.Screen
        name="ModalDatePickerDemo"
        component={ModalDatePickerDemo}
        options={{ headerTitle: 'ModalDatePickerDemo' }}
      />
      <Stack.Screen name="SearchBarDemo" component={SearchBarDemo} options={{ headerTitle: 'SearchBarDemo' }} />
      <Stack.Screen name="ImageDemo" component={ImageDemo} options={{ headerTitle: 'ImageDemo' }} />
      <Stack.Screen name="ListItemDemo" component={ListItemDemo} options={{ headerTitle: 'ListItemDemo' }} />
      <Stack.Screen name="AvatarDemo" component={AvatarDemo} options={{ headerTitle: 'AvatarDemo' }} />
      <Stack.Screen name="EmptyDemo" component={EmptyDemo} options={{ headerTitle: 'EmptyDemo' }} />
      <Stack.Screen name="CheckableDemo" component={CheckableDemo} options={{ headerTitle: 'CheckableDemo' }} />
      <Stack.Screen name="SwiperDemo" component={SwiperDemo} options={{ headerTitle: 'SwiperDemo' }} />
      <Stack.Screen name="TableDemo" component={TableDemo} options={{ headerTitle: 'TableDemo' }} />
      <Stack.Screen name="FlowDemo" component={FlowDemo} options={{ headerTitle: 'FlowDemo' }} />
      <Stack.Screen
        name="NumberKeyboardDemo"
        component={NumberKeyboardDemo}
        options={{ headerTitle: 'NumberKeyboardDemo' }}
      />
      <Stack.Screen name="WhiteSpaceDemo" component={WhiteSpaceDemo} options={{ headerTitle: 'WhiteSpaceDemo' }} />
      <Stack.Screen name="ButtonGroupDemo" component={ButtonGroupDemo} options={{ headerTitle: 'ButtonGroupDemo' }} />
      <Stack.Screen name="WingBlankDemo" component={WingBlankDemo} options={{ headerTitle: 'WingBlankDemo' }} />
      <Stack.Screen name="TextDemo" component={TextDemo} options={{ headerTitle: 'TextDemo' }} />
      <Stack.Screen name="PaginationDemo" component={PaginationDemo} options={{ headerTitle: 'PaginationDemo' }} />
      <Stack.Screen name="TimeLineDemo" component={TimeLineDemo} options={{ headerTitle: 'TimeLineDemo' }} />
      <Stack.Screen name="SvgIconDemo" component={SvgIconDemo} options={{ headerTitle: 'SvgIconDemo' }} />
      <Stack.Screen name="CountDownDemo" component={CountDownDemo} options={{ headerTitle: 'CountDownDemo' }} />
    </Stack.Navigator>
  );
};
