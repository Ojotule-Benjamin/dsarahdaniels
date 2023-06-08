import React from "react";

//types
export interface carouselImagesItems {
  id: number;
  src: string;
  alt: string;
}

export interface ICustomButton {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface IsneakPeakImages {
  id: number;
  img: string;
  alt: string;
}

export interface IWhatWeDoItem {
  id: number;
  title: string;
  desc: string;
  imgs: string;
}

export interface howWeWorkImgsItem {
  id: number;
  src: string;
  alt: string;
}

//components types
export type MeetCreativeDirectorProps = {
  img: string;
  title?: string;
  desc: string;
  subTitle?: string;
  button: React.ReactElement<ICustomButton> | null;
  generalClassName?: string;
  descClassName?: string;
};

export type CarouselSectionProps = {
  carouselImages: carouselImagesItems[];
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
