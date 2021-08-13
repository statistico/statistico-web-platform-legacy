import React from 'react';
import BlogIcon from './BlogIcon';
import { IconProps } from './Icon.types';

const Icon = (props: IconProps): JSX.Element => {
  const { colour, height, width } = props;
  return <BlogIcon fill={colour} height={height} width={width} />
}

export default Icon;
