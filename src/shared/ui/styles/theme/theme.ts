import * as blockSize from '../block-size';
import { zIndex } from '../z-index';

export const theme = {
  font: {
    imcre: `'Imcre-Soojin', sans-serif`,
  },
  color: {
    black_000000: '#000000',
    white_FFFFFF: '#FFFFFF',

    yellow_FFB904: '#FFB904',
    red_F5511D: '#F5511D',
    red_FFC2AF: '#FFC2AF',
    blue_2087D6: '#2087D6',
    blue_43ADFF: '#43ADFF',

    gray_9E9E9E: '#9E9E9E',
    gray_BDBDBD: '#BDBDBD',
    gray_F3F3F3: '#F3F3F3',
    gray_F9F9F9: '#F9F9F9',
  },
  zIndex,
  blockSize,
} as const;

export type CustomTheme = typeof theme;
