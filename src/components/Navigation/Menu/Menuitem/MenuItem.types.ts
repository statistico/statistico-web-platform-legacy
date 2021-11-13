import React from 'react';

export type MenuItemProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  select: (item: number) => void;
  selected?: number;
  id: number;
};
