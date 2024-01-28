import { ReactNode } from "react";
import { ROUTES } from "../data/routes";

export type RouteWithComponentProps = {
  path: (typeof ROUTES)[keyof typeof ROUTES];
  component: ReactNode;
};
