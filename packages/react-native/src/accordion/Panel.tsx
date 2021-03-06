import React, { FC, ReactNode } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import Chevron from './Chevron';
import helpers from '../helpers';
import Text from '../text';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { ONE_PIXEL } = helpers;
export interface Section {
  title: ReactNode;
  content: ReactNode;
}

const Panel: FC<{
  index: number;
  /** 选项卡 */
  item: Section;
  /** 修改事件 */
  onChange: (index: number) => void;
  /** 是否展开 */
  expanded: boolean;
  /** 选项卡高度 */
  expandedHeight: number;
  /** 自定义渲染标题 */
  renderTitle?: (item: Section) => ReactNode;
  /** 自定义渲染内容 */
  renderContent?: (item: Section) => ReactNode;
  /** 点击透明度 */
  activeOpacity?: number;
  /** 点击背景色 */
  underlayColor?: string;
  /** 选项卡样式 */
  sectionContainerStyle?: StyleProp<ViewStyle>;
}> = ({
  index,
  item,
  onChange,
  expanded,
  expandedHeight,
  renderTitle,
  renderContent,
  activeOpacity,
  sectionContainerStyle,
}) => {
  const theme = useTheme<Theme>();
  const opened = useSharedValue(expanded);
  const progress = useDerivedValue(() => (opened.value ? withSpring(1) : withTiming(0)));

  const style = useAnimatedStyle(() => ({
    height: expandedHeight * progress.value,
    borderBottomWidth: progress.value === 0 ? 0 : ONE_PIXEL,
  }));

  const renderSectionTitle = (title: ReactNode) => {
    if (typeof title === 'string') {
      return (
        <Animated.View
          style={{
            backgroundColor: theme.colors.background,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing.x3,
            borderBottomWidth: ONE_PIXEL,
            borderBottomColor: theme.colors.border,
          }}
        >
          {renderTitle ? (
            renderTitle(item)
          ) : (
            <Text variant="h2" color="gray500">
              {title}
            </Text>
          )}
          <Chevron {...{ progress }} />
        </Animated.View>
      );
    }
    return title;
  };

  const renderSectionContent = (content: ReactNode) => {
    if (renderContent) {
      return renderContent(item);
    }
    if (typeof content === 'string') {
      return (
        <Text variant="p0" color="gray500">
          {content}
        </Text>
      );
    }
    return content;
  };

  return (
    <View style={sectionContainerStyle}>
      <TouchableOpacity
        onPress={() => {
          opened.value = !opened.value;
          onChange(index);
        }}
        {...{ activeOpacity }}
      >
        {renderSectionTitle(item.title)}
      </TouchableOpacity>
      <Animated.View
        style={[
          {
            overflow: 'hidden',
            borderBottomColor: theme.colors.border,
            backgroundColor: theme.colors.background,
          },
          style,
        ]}
      >
        <View style={{ padding: theme.spacing.x2 }}>{renderSectionContent(item.content)}</View>
      </Animated.View>
    </View>
  );
};

export default Panel;
