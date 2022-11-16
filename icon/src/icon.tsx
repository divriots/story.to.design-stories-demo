import * as icons from '@tabler/icons';
import * as React from 'react';

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  icon: string;
}

const iconsMap = Object.entries(icons).reduce((map, [className, Klass]) => {
  const dashedName = className
    .replace(/^Icon/, '')
    .replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
    .replace(/^-/, '');
  map[dashedName] = Klass as React.JSXElementConstructor<any>;
  return map;
}, {} as { [key: string]: React.JSXElementConstructor<any> });

/**
 * A collection of icons from https://tabler-icons.io
 */
export const Icon = (props: IconProps) => {
  const { icon, ...otherProps } = props;
  const IconClass = iconsMap[icon];
  return <IconClass {...otherProps}></IconClass>;
};

Icon.displayName = 'Icon';

export const iconNames = Object.keys(iconsMap).sort();
