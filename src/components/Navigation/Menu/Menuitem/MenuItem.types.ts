import React from 'react';

export type MenuItemProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  open: boolean;
  select: (item: string) => void;
  selected?: string;
  title: string;
};
