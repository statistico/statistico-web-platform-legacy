import IconName from '../../../../names/IconName';

export type MenuItemProps = {
  clicked: () => void;
  icon: IconName;
  link: string;
  open: boolean;
  title: string;
};
