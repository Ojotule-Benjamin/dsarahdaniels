//types

export interface menuNavItems {
  id: string;
  label: string;
  link: string;
}
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

export interface IEventImageItem {
  id: number;
  src1: string;
  src2: string;
  src3: string;
  label: string;
}

export interface servicesListItems {
  id: number;
  service: string;
  img: string;
  desc: string;
  servicesRendered?: string[];
}

export interface postsItem {
  id: number;
  title: string;
  postImg: string;
  postImages: string[];
  desc: string;
}

//components types
export type MenuProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
};

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
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IHeaderProps {
  header: string;
  className?: string;
}
