import React, { ReactElement, useState } from 'react';
import { Image, ImageURISource, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import BaseText from '../../../../components/base-text/base-text';
import { deviceWidth } from '../../../../constants/device-dimensions';
import { FontSizes, FontTypes } from '../../../../enums';
import { normalizeY } from '../../../../helpers/normalize';
import { styles } from './tips-carousel.styles';

const tips1 = require('../../../../../assets/images/tips1.png');
const tips2 = require('../../../../../assets/images/tips2.png');
const tips3 = require('../../../../../assets/images/tips3.png');

export const TIPS_CAROUSEL_ITEM_SIZE = normalizeY(270);

interface TipInterface {
  url: ImageURISource;
  tip: string;
}

const data = [
  {
    url: tips1,
    tip: 'Zagęszczanie\nprzetworów'
  },
  {
    url: tips2,
    tip: 'Jak ratować psujące się przetwory'
  },
  {
    url: tips3,
    tip: 'Pasteryzowanie'
  }
] as TipInterface[];

const TipsCarousel = (): ReactElement => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item: { url, tip } }: { item: TipInterface }): ReactElement => (
    <View style={styles.itemContainer}>
      <Image source={url} style={styles.image} />
      <BaseText
        style={styles.tip}
        numberOfLines={2}
        fontType={FontTypes.MUSEO_MODERNO_MEDIUM}
        fontSize={FontSizes.SIZE_18}
      >
        {tip}
      </BaseText>
    </View>
  );

  const renderPagination = () => (
    <Pagination
      dotsLength={data.length}
      activeDotIndex={activeSlide}
      dotStyle={styles.dotStyle}
      containerStyle={styles.paginationContainerStyle}
      dotContainerStyle={styles.paginationDotContainerStyle}
      inactiveDotOpacity={0.6}
      inactiveDotScale={0.8}
    />
  );

  return (
    <View>
      <Carousel
        containerCustomStyle={styles.carouselContainer}
        data={data}
        renderItem={renderItem}
        sliderWidth={deviceWidth}
        itemWidth={TIPS_CAROUSEL_ITEM_SIZE}
        itemHeight={TIPS_CAROUSEL_ITEM_SIZE}
        inactiveSlideShift={0}
        inactiveSlideScale={0.75}
        activeSlideAlignment="start"
        onBeforeSnapToItem={(index: React.SetStateAction<number>) => setActiveSlide(index)}
        useScrollView={true}
      />
      {renderPagination()}
    </View>
  );
};

export default TipsCarousel;
