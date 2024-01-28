import CaseStudy2 from "../case-studies/CaseStudy2";
import HeaderComponent from "../components/Header/HeaderComponent";
import { RouteWithComponentProps } from "../types/routes.types";

export const CaseStudyComponent2: RouteWithComponentProps = {
  path: "/case-study-2",
  component: CaseStudy2({
    id: "case-study-2",
    title: "Case Study 2",
    requiredPassword: { isPassword: false },
    components: [
      HeaderComponent({
        title: "Ford Adventure",
        description:
          "A product designed to encourage drivers to get outside and explore the world around them using their Ford vehicle",
        backgroundImgUrl: "https://via.placeholder.com/150",
      }),
    ],
  }),
};
