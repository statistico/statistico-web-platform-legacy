export type MenuProps = {
  open: boolean;
  selectItem: (item: string) => void;
  selected: string;
};
