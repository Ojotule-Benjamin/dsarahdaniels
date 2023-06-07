//export interface IinputData = {};

export type carouselImagesItems = {
  id: number;
  src: string;
  alt: string;
};

export type CarouselSectionProps = {
  carouselImages: carouselImagesItems[];
  title?: string;
};

export type ICustomButton = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export type IsneakPeakImages = {
  id: number;
  img: string;
  alt: string;
};

export interface IGetUpdatesProps {
  firstName: string;
  lastName: string;
  email: string;
}

export interface ICustomInputProps {
  type?: string;
  label: string;
  name?: string;
  value: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// export interface IDataItem {
//   id: number;
//   label: string;
//   placeholder?: string;
// }
