import { gql, useQuery } from '@apollo/client';
import React, { Fragment, ReactElement, useMemo } from 'react';
import { View } from 'react-native';

import { LanguageOrchestrator } from '../../../../_locales/language.orchestrator';
import BaseText from '../../../../components/base-text/base-text';
import RecipeItem from '../../../../components/recipe-item/recipe-item';
import { FontSizes, FontTypes } from '../../../../enums';
import { styles } from './recommended.styles';

const utcMonth = new Date().getUTCMonth();
const currentMonth = (LanguageOrchestrator.months as Record<number, string>)[utcMonth];

const GET_RECOMMENDED_RECIPES = gql`
  query {
    recipes(filters: { isRecommended: { eq: true } }) {
      data {
        attributes {
          title
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default function Recommended(): ReactElement {
  const { loading, error, data } = useQuery(GET_RECOMMENDED_RECIPES);

  const recipes = useMemo(
    () =>
      data?.recipes.data.map(
        ({
          id,
          attributes: {
            title,
            cover: {
              data: {
                attributes: { url }
              }
            }
          }
        }) => ({
          id,
          title,
          url: 'http://localhost:1337' + url
        })
      ),
    [data]
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <BaseText style={styles.title} fontType={FontTypes.MUSEO_MODERNO_MEDIUM} fontSize={FontSizes.SIZE_18}>
          {LanguageOrchestrator.recommended.title}
        </BaseText>
        <BaseText style={styles.dot} fontType={FontTypes.MUSEO_MODERNO_MEDIUM} fontSize={FontSizes.SIZE_36}>
          •
        </BaseText>
        <BaseText style={styles.month} fontType={FontTypes.MUSEO_MODERNO_REGUALAR} fontSize={FontSizes.SIZE_18}>
          {currentMonth}
        </BaseText>
      </View>
      <View style={styles.list}>
        {!loading &&
          recipes?.map(({ title, url }, idx: number) => (
            <Fragment key={idx}>
              <RecipeItem isSmall url={url} label={title} />
            </Fragment>
          ))}
      </View>
    </View>
  );
}
