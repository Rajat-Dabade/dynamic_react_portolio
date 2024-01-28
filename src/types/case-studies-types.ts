import { ReactNode } from "react";

type Password = {
  isPassword: boolean;
  password?: string;
};

export type ImageComponentProps = {
  imgUrl: string;
  altText: string;
};

export type HeaderComponentProps = {
  title: string;
  description: string;
  backgroundImgUrl: string;
};

export type CardComponentProps = {
  title: string;
  description: string;
  index?: number;
};

export type AboutComponentProps = {
  cards: CardComponentProps[];
};

export type BannerComponentProps = {
  title: string;
  description: string;
};

export type OverviewComponentProps = {
  contentHeading: string;
  title: string;
  description: string;
};

export type CaseStudy = {
  id: string;
  requiredPassword?: Password;
  title: string;
  components: ReactNode[];
};
