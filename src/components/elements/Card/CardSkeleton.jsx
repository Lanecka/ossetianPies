import React from 'react';
import ContentLoader from 'react-content-loader';
import style from './Card.module.scss';

const CardSkeleton = (props) => (
  <ContentLoader className={style.card}
    speed={2}
    width={420}
    height={665}
    viewBox="0 0 420 665"
    backgroundColor="#f3f3f3"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect x="30" y="345" rx="0" ry="0" width="220" height="28" /> 
    <rect x="0" y="0" rx="0" ry="0" width="420" height="315" /> 
    <rect x="30" y="403" rx="10" ry="10" width="109" height="56" /> 
    <rect x="153" y="403" rx="10" ry="10" width="109" height="56" /> 
    <rect x="281" y="403" rx="10" ry="10" width="109" height="56" /> 
    <rect x="30" y="489" rx="10" ry="10" width="109" height="56" /> 
    <rect x="153" y="489" rx="10" ry="10" width="109" height="56" /> 
    <rect x="30" y="583" rx="0" ry="0" width="84" height="44" /> 
    <rect x="164" y="575" rx="30" ry="30" width="226" height="60" />
  </ContentLoader>
)

export default CardSkeleton;