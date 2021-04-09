import React, { FC, ReactNode } from 'react';
import {
  GestureResponderEvent,
  ActivityIndicator,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from 'react-native';
import {
  spacing,
  layout,
  SpacingProps,
  useRestyle,
  createRestyleComponent,
  useTheme,
  LayoutProps,
} from '@shopify/restyle';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';

import Box from '../box';
import Text from '../text';
import { Theme } from '../config/theme';
import { px } from '../helper';

/** 集成 LinearGradient 和 Layout 属性的 BaseLinear 组件 */
const BaseLinear = createRestyleComponent<
  LayoutProps<Theme> & React.ComponentProps<typeof LinearGradient> & { children?: ReactNode },
  Theme
>([], LinearGradient);

const restyleFunctions = [spacing, layout];

// 按钮宽度
export const WIDTH = {
  /** 大按钮 */
  LARGE: '100%',
  /** 中按钮 */
  MIDDLE: '50%',
  /** 小按钮 */
  SMALL: '25%',
};
const ROUND_RADIUS = px(30);

export type ButtonProps = SpacingProps<Theme> &
  TouchableHighlightProps & {
    /** 按钮文字内容 */
    title: ReactNode;
    /** 按钮展示类型 */
    type?: 'primary' | 'secondary' | 'link' | 'text';
    /** 是否失效 */
    disabled?: boolean;
    /** 是否加载中 */
    loading?: boolean;
    /** 按钮点击事件 */
    onPress: () => void;
    /** 按钮的宽度 */
    width?: number | string;
    /** 按钮的形状 */
    shape?: 'round' | 'default';
    /** 渐变自定义属性 */
    linearOptions?: LinearGradientProps;
  };

const Button: FC<ButtonProps> = props => {
  const theme = useTheme<Theme>();
  const {
    onPress,
    title,
    type = 'primary',
    shape = 'default',
    width = WIDTH.LARGE,
    disabled = false,
    loading,
    linearOptions,
    ...restProps
  } = props;

  const getUnderlayColorByType = () => {
    if (type === 'primary') {
      return theme.colors.button_primary_underlay;
    } else if (type === 'secondary') {
      return theme.colors.button_secondary_underlay;
    }
    return theme.colors.button_other_underlay;
  };

  const getBgColorByType = () => {
    if (type === 'primary') {
      return disabled ? theme.colors.button_primary_background_disabled : theme.colors.button_primary_background;
    }
    if (type === 'secondary') {
      return disabled ? theme.colors.button_secondary_background_disabled : theme.colors.button_secondary_background;
    }
    return theme.colors.button_other_background;
  };

  /** 容器属性 */
  const touchableProps = useRestyle(restyleFunctions, {
    disabled,
    onPress: (event: GestureResponderEvent) => {
      if (loading) return;
      onPress?.(event);
    },
    activeOpacity: disabled ? 0.8 : 1,
    underlayColor: getUnderlayColorByType(),
    style: {
      height: ['link', 'text'].includes(type) ? 'auto' : px(44),
      width: ['link', 'text'].includes(type) ? 'auto' : width,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: getBgColorByType(),
      borderWidth: type === 'secondary' ? 1 : 0,
      opacity: disabled ? 0.8 : 1,
      borderColor: type === 'primary' ? theme.colors.button_primary_border : theme.colors.button_other_border,
      borderRadius: shape === 'default' ? theme.borderRadii.base : ROUND_RADIUS,
    },
    ...restProps,
  });

  const getVariantByType = () => {
    switch (type) {
      case 'primary':
      default:
        return 'content2';
      case 'secondary':
      case 'link':
        return 'hint2';
      case 'text':
        return 'hint1';
    }
  };

  /** 渲染 button 内容 */
  const renderTitle = () => {
    const contentText = typeof title === 'string' ? <Text variant={getVariantByType()}>{title}</Text> : title;
    const getContent = () => (
      <>
        {loading !== undefined && ['primary', 'secondary'].includes(type) && (
          <ActivityIndicator
            color={type === 'secondary' ? theme.colors.button_secondary_loading : theme.colors.button_other_loading}
            animating={loading}
            style={{ marginRight: px(4) }}
          />
        )}
        {contentText}
      </>
    );

    if (linearOptions !== undefined) {
      const { colors = [], ...restOptions } = linearOptions;
      const Linear = (
        <BaseLinear
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          colors={colors}
          {...restOptions}
          style={{ borderRadius: shape === 'default' ? theme.borderRadii.base : ROUND_RADIUS }}
        >
          {getContent()}
        </BaseLinear>
      );
      if (disabled) {
        return (
          <Box flex={1}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 9,
                backgroundColor: theme.colors.button_linear_disabled,
                opacity: 0.5,
                borderRadius: shape === 'default' ? theme.borderRadii.base : ROUND_RADIUS,
              }}
            />
            {Linear}
          </Box>
        );
      }
      return Linear;
    }
    return getContent();
  };

  return <TouchableHighlight {...touchableProps}>{renderTitle()}</TouchableHighlight>;
};

export default Object.assign(Button, { WIDTH });
