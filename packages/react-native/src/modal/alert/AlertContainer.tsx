import React, { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@shopify/restyle';
import Modal from '../Modal';
import Flex from '../../flex';
import Box from '../../box';
import Text from '../../text';
import { Theme } from '../../theme';
import { AlertProps, Action } from '../type';
import helpers from '../../helpers';

const { ONE_PIXEL, px } = helpers;
const AlertContainer: FC<
  AlertProps & {
    afterClose: () => void;
  }
> = ({ icon, title, content, afterClose }) => {
  const theme = useTheme<Theme>();
  const [visible, setVisible] = useState(true);

  const actions: Action[] = [{ text: '确定', onPress: () => setVisible(false) }];

  const footer =
    actions.length > 0 ? (
      <Box borderTopWidth={ONE_PIXEL} borderTopColor="border">
        {actions.map((action, index) => {
          const originPress = action.onPress || function () {};
          const onPress = () => {
            const res = originPress();
            if (res && res.then) {
              res.then(() => {
                setVisible(false);
              });
            } else {
              setVisible(false);
            }
          };
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={action.text}
              onPress={onPress}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: px(54),
                borderBottomWidth: index !== actions.length - 1 ? ONE_PIXEL : 0,
                borderBottomColor: theme.colors.border,
              }}
            >
              <Text variant="p0" color="primary200" style={action.style}>
                {action.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </Box>
    ) : null;

  return (
    <Modal
      position="center"
      visible={visible}
      maskClosable={false}
      onClose={() => setVisible(false)}
      afterClose={afterClose}
      bodyContainerStyle={{ marginHorizontal: theme.spacing.x3 }}
    >
      <Box marginBottom="x3">
        {icon && <Flex justifyContent="center">{icon}</Flex>}
        {title && (
          <Flex justifyContent="center" marginVertical="x3">
            <Text variant="h1" color="gray500">
              {title}
            </Text>
          </Flex>
        )}
        {content && (
          <Flex justifyContent="center">
            <Text variant="p1" color="gray500">
              {content}
            </Text>
          </Flex>
        )}
      </Box>
      {footer}
    </Modal>
  );
};
export default AlertContainer;
