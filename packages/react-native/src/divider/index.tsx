import React, { FC } from 'react';
import { useTheme } from '@shopify/restyle';

import { Theme, Spacing } from '../theme';
import helpers from '../helpers';
import Box from '../box';

const { px, ONE_PIXEL } = helpers;
type DividerProps = {
  /** 水平或是垂直 */
  type?: 'vertical' | 'horizontal';
  /** 垂直时指定分隔线高度 */
  height?: number;
  /** 外边距 */
  margin?: Spacing;
  /** 分隔线颜色 */
  color?: string;
};

const Divider: FC<DividerProps> = props => {
  const theme = useTheme<Theme>();
  const { type = 'horizontal', margin = 'x1', height = px(40), color = theme.colors.border } = props;

  return (
    <Box
      style={[
        { backgroundColor: color },
        type === 'horizontal'
          ? {
              width: '100%',
              height: ONE_PIXEL,
              marginVertical: theme.spacing[margin],
            }
          : {
              width: ONE_PIXEL,
              height,
              marginHorizontal: theme.spacing[margin],
            },
      ]}
    />
  );
};

export default Divider;
