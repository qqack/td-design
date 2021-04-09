import React, { FC, useState } from 'react';
import { StyleSheet } from 'react-native';
import { TapRatingProps } from './type';
import Star from './components/Star';
import { helpers, useTheme, Theme, Flex, Text } from '@td-design/react-native';

const { px } = helpers;
const STAR_SIZE = px(40);
const TapRating: FC<TapRatingProps> = ({
  defaultRating = 3,
  reviews = ['非常差', '很差', '一般', '很好', '非常好'],
  count = 5,
  showReview = true,
  reviewSize = px(25),
  onFinishRating,
  size = STAR_SIZE,
  disabled = false,
  starStyle,
  outRangeScale = 1.2,
  ...restProps
}) => {
  const theme = useTheme<Theme>();
  const [position, setPosition] = useState(defaultRating);

  const {
    selectedColor = theme.colors.rating_selected,
    reviewColor = selectedColor,
    unselectedColor = theme.colors.rating_unselected,
  } = restProps;

  const handleSelectStarInPosition = (position: number) => {
    setPosition(position);
    onFinishRating?.(position);
  };

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="transparent">
      {showReview && (
        <Text style={[styles.reviewText, { fontSize: reviewSize, color: reviewColor }]}>{reviews[position - 1]}</Text>
      )}
      <Flex justifyContent="center" alignItems="center">
        {Array(count)
          .fill('')
          .map((_, index) => (
            <Star
              key={index}
              position={index + 1}
              fill={position >= index + 1}
              onSelectStarInPosition={handleSelectStarInPosition}
              {...{ size, disabled, starStyle, selectedColor, unselectedColor, outRangeScale }}
            />
          ))}
      </Flex>
    </Flex>
  );
};

const styles = StyleSheet.create({
  reviewText: {
    margin: px(10),
    fontWeight: 'bold',
  },
});

export default TapRating;
