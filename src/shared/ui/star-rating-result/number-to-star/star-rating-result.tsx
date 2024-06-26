import { useEffect, useState } from 'react';

import { Star } from './star';
import * as S from './star-rating-result-style';

export const StarRatingResult = ({ number }: { number: number }) => {
  const [rating, setRating] = useState(0);
  useEffect(() => {
    setRating(rating);
  }, []);

  return (
    <S.StarRating>
      <S.StarArea>
        <S.RatingField>
          <Star rating={number} uniqueValue={5} isHalf={false} />
          <Star rating={number} uniqueValue={4.5} isHalf />
          <Star rating={number} uniqueValue={4} isHalf={false} />
          <Star rating={number} uniqueValue={3.5} isHalf />
          <Star rating={number} uniqueValue={3} isHalf={false} />
          <Star rating={number} uniqueValue={2.5} isHalf />
          <Star rating={number} uniqueValue={2} isHalf={false} />
          <Star rating={number} uniqueValue={1.5} isHalf />
          <Star rating={number} uniqueValue={1} isHalf={false} />
          <Star rating={number} uniqueValue={0.5} isHalf />
        </S.RatingField>
        <S.RatingValue>{number}점</S.RatingValue>
      </S.StarArea>
    </S.StarRating>
  );
};
