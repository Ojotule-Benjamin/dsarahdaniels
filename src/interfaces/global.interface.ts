export interface data {}

export type Images = {
  src: string;
  alt: string;
};

export type ICustomButton = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};
