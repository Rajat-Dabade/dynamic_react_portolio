import { RouteWithComponentProps } from "../types/routes.types";
import { CaseStudyComponent1 } from "./case-study-1";
import { CaseStudyComponent2 } from "./case-study-2";
import { CaseStudyComponent3 } from "./case-study-3";

export const ROUTES = {
  case_study_1: "/case-study-1",
  case_study_2: "/case-study-2",
  case_study_3: "/case-study-3",
} as const;

export const RoutesComponent: RouteWithComponentProps[] = [
  CaseStudyComponent1,
  CaseStudyComponent2,
  CaseStudyComponent3,
];
