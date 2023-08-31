/* eslint-disable max-len */
import React from 'react';
import { useTheme } from 'styled-components';

import {
  CardImage,
  CardTitle,
  CardWrapper,
  CurrentPrice,
  DescrBox,
  DescrTitle,
  DescrWrapper,
  DescrValue,
  OldPrice,
  PriceWrapper,
  ButtonsWrapper,
  ButtonAdd,
  ButtonLike,
  ImageBox,
} from './PhoneCard.styled';

import { Icon, IconSprite } from '../Sprites';
import { Phone } from '../../../types/Phone';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const theme = useTheme();

  const [isClicked, setIsClicked] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <CardWrapper>
      <ImageBox>
        <CardImage src={phone.image} alt="Phone Image" />
      </ImageBox>
      <CardTitle>{phone.name}</CardTitle>

      <PriceWrapper>
        <CurrentPrice>{`$${phone.price}`}</CurrentPrice>
        <OldPrice>{`$${phone.fullPrice}`}</OldPrice>
      </PriceWrapper>

      <DescrWrapper>
        <DescrBox>
          <DescrTitle>Screen</DescrTitle>
          <DescrTitle>Capacity</DescrTitle>
          <DescrTitle>RAM</DescrTitle>
        </DescrBox>

        <DescrBox>
          <DescrValue>{phone.screen}</DescrValue>
          <DescrValue>{phone.capacity}</DescrValue>
          <DescrValue>{phone.ram}</DescrValue>
        </DescrBox>
      </DescrWrapper>

      <ButtonsWrapper>
        <ButtonAdd onClick={toggleClick} type="button" isClicked={isClicked}>
          {isClicked ? 'Added' : 'Add to cart'}
        </ButtonAdd>
        <ButtonLike type="button" onClick={toggleFavorite}>
          <IconSprite />
          {isFavorite ? (
            <Icon
              spriteName="heart-field"
              fill={theme.colors.accentSecondary}
            />
          ) : (
            <Icon spriteName="heart" />
          )}
        </ButtonLike>
      </ButtonsWrapper>
    </CardWrapper>
  );
};
