export type Name = 'close' | 'close-bold' | 'add' | 'settings';

export type Props = {
  name: Name,
  size?: 'small' | 'medium' | 'large',
  className?: string,
};
