import { ResponsiveNumericSizeProperties } from '@shared/interface/style';

/**
 * unit: px
 */
export const messageMaxWidth = 275;

export const messageMaxWidthWithController = 362;

/**
 * unit: px
 */
export const chatTextAreaMinMaxSize: ResponsiveNumericSizeProperties<{
  onDesktop: {
    height: 28;
    minHeight: 28;
    maxHeight: 140;
  };
}> = {
  onDesktop: {
    height: 28,
    minHeight: 28,
    maxHeight: 140,
  },
};
