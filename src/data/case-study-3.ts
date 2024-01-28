import CaseStudy3 from "../case-studies/CaseStudy3";
import AboutComponent from "../components/About/AboutComponent";
import HeaderComponent from "../components/Header/HeaderComponent";
import { RouteWithComponentProps } from "../types/routes.types";

export const CaseStudyComponent3: RouteWithComponentProps = {
  path: "/case-study-3",
  component: CaseStudy3({
    id: "case-study-3",
    title: "Case Study 3",
    requiredPassword: { isPassword: false },
    components: [
      AboutComponent({
        cards: [
          {
            title: "Timeline",
            description: "June 2023 - January 2024",
          },
          {
            title: "Year",
            description: "2017",
          },
          {
            title: "The Result",
            description: "Ford Adventure has been downloaded over 1",
          },
          {
            title: "Role",
            description: "UX Designer",
          },
        ],
      }),
      HeaderComponent({
        title: "Ford Adventure 1",
        description:
          "A product designed to encourage drivers to get outside and explore the world around them using their Ford vehicle",
        backgroundImgUrl: "https://via.placeholder.com/150",
      }),
    ],
  }),
};
