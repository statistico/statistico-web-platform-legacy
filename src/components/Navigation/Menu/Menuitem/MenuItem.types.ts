import IconName from '../../../../names/IconName';

export type MenuItemProps = {
  icon: IconName;
  link: string;
  open: boolean;
  select: (item: string) => void;
  selected: string;
  title: string;
};
