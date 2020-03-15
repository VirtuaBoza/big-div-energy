import PropTypes from 'prop-types';

export type Component = PropTypes.ReactComponentLike;
export const typePropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.elementType,
]);
export type Spacing =
  | string
  | null
  | undefined
  | (string | null | undefined | (string | null | undefined)[])[];
export const spacingPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  ),
]);
export type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | null
  | undefined
  | string;
export const flexDirectionPropType = PropTypes.oneOf([
  'row',
  'row-reverse',
  'column',
  'column-reverse',
]);
export type AlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | null
  | undefined
  | string;
export const alignItemsPropType = PropTypes.oneOf([
  'stretch',
  'flex-start',
  'flex-end',
  'center',
  'baseline',
]);
export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | null
  | undefined
  | string;
export const justifyContentPropType = PropTypes.oneOf([
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
]);
export type Alignment = 'left' | 'center' | 'right' | null | undefined | string;
export const alignmentPropType = PropTypes.oneOf(['left', 'center', 'right']);
export type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | null
  | undefined
  | string;
export const alignContentPropType = PropTypes.oneOf([
  'flex-start',
  'flex-end',
  'center',
  'stretch',
  'space-between',
  'space-around',
]);
