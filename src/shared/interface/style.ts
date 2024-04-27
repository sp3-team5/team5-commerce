export type RGB = `rgb(${number}, ${number}, ${number})`;

export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

export type HEX = `#${string}`;

export type Color = RGB | HEX | RGBA;

interface Size {
  width?: string;
  height?: string;
}

export type DesktopFirstResponsiveUtility<T extends NonNullable<unknown>> =
  | T
  | { onDesktop: T; onTablet?: T; onMobile?: T };

export type DropPrimitiveTypeFromResponsiveStyleUtility<T> =
  T extends DesktopFirstResponsiveUtility<infer U> ? { onDesktop: U; onTablet?: U; onMobile?: U } : T;

/**
 * ### desktop first unit utility
 *
 *
 * 원시 유형 또는 onDesktop, onTablet, onMobile이라는 선택적 속성을 가진 객체를 지정할 수 있습니다.
 * onTablet, onMobile 단위를 지정하지 않으면 onDesktop에 지정된 단위가 모든 장치에 적용됩니다.
 */
export type ResponsiveUnitUtility = DesktopFirstResponsiveUtility<string>;

/**
 * ### desktop first boolean utility
 *
 * 원시 유형 또는 onDesktop, onTablet, onMobile이라는 선택적 속성을 가진 객체를 지정할 수 있습니다.
 * onTablet, onMobile 불리언을 지정하지 않으면 onDesktop에 지정된 불리언이 모든 장치에 적용됩니다.
 */
export type ResponsiveBooleanUtility = DesktopFirstResponsiveUtility<boolean>;

export type ResponsiveSizeProperties<
  KnownSizeProperty extends
    DropPrimitiveTypeFromResponsiveStyleUtility<Size> = DropPrimitiveTypeFromResponsiveStyleUtility<Size>,
> = KnownSizeProperty;