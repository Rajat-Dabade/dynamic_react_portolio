import CaseStudy1 from "../case-studies/CaseStudy1";
import HeaderComponent from "../components/Header/HeaderComponent";
import { RouteWithComponentProps } from "../types/routes.types";
import CaseStudy1HeaderImg from "../assets/case-study-1-header.jpg";
import AboutComponent from "../components/About/AboutComponent";
import OverviewComponent from "../components/Overview/OverviewComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import ImageComponent from "../components/Image/ImageComponent";

export const CaseStudyComponent1: RouteWithComponentProps = {
  path: "/case-study-1",
  component: CaseStudy1({
    id: "case-study-1",
    title: "Case Study 1",
    requiredPassword: { isPassword: false },
    components: [
      HeaderComponent({
        title: "Ford Adventure",
        description:
          "A product designed to encourage drivers to get outside and explore the world around them using their Ford vehicle",
        backgroundImgUrl: CaseStudy1HeaderImg,
      }),
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
      OverviewComponent({
        contentHeading: "Overview",
        title:
          "Ford Inspires Connected Vehicle Innovation Using the New FordConnect API Technology",
        description:
          "Advances in vehicle connectivity are transforming the way in which we engage with our vehicles and the experience of vehicle ownership. The automotive industry is no longer about providing the hardware to move us from point A to point B, but to provide the hardware, software, and experience that is changing how we stay connected. To explore and inspire innovative ways to utilize this technology, the Ford Smart Vehicle Connectivity Challenge was launched giving participants from across Canada and the United States an opportunity to resolve pressing driver pain points using the new FordConnect API. Together, our team worked together to reimagine how this data-driven technology could be used to create a product that improves people’s lives and offers drivers a better Ford experience.",
      }),
      BannerComponent({
        title: "Design Challenge",
        description:
          "How might we alleviate mental and physical health challenges so that we can build and support communities of healthier, happier people to avoid adverse outcomes for the future?",
      }),
      OverviewComponent({
        contentHeading: "Overview",
        title:
          "Ford Inspires Connected Vehicle Innovation Using the New FordConnect API Technology",
        description:
          "Advances in vehicle connectivity are transforming the way in which we engage with our vehicles and the experience of vehicle ownership. The automotive industry is no longer about providing the hardware to move us from point A to point B, but to provide the hardware, software, and experience that is changing how we stay connected. To explore and inspire innovative ways to utilize this technology, the Ford Smart Vehicle Connectivity Challenge was launched giving participants from across Canada and the United States an opportunity to resolve pressing driver pain points using the new FordConnect API. Together, our team worked together to reimagine how this data-driven technology could be used to create a product that improves people’s lives and offers drivers a better Ford experience.",
      }),
      OverviewComponent({
        contentHeading: "Overview",
        title:
          "Ford Inspires Connected Vehicle Innovation Using the New FordConnect API Technology",
        description:
          "Advances in vehicle connectivity are transforming the way in which we engage with our vehicles and the experience of vehicle ownership. The automotive industry is no longer about providing the hardware to move us from point A to point B, but to provide the hardware, software, and experience that is changing how we stay connected. To explore and inspire innovative ways to utilize this technology, the Ford Smart Vehicle Connectivity Challenge was launched giving participants from across Canada and the United States an opportunity to resolve pressing driver pain points using the new FordConnect API. Together, our team worked together to reimagine how this data-driven technology could be used to create a product that improves people’s lives and offers drivers a better Ford experience.",
      }),
      ImageComponent({
        imgUrl: "https://via.placeholder.com/150",
        altText: "Placeholder",
      }),
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
      BannerComponent({
        title: "Design Challenge",
        description:
          "How might we alleviate mental and physical health challenges so that we can build and support communities of healthier, happier people to avoid adverse outcomes for the future?",
      }),
      OverviewComponent({
        contentHeading: "Overview",
        title:
          "Ford Inspires Connected Vehicle Innovation Using the New FordConnect API Technology",
        description:
          "Advances in vehicle connectivity are transforming the way in which we engage with our vehicles and the experience of vehicle ownership. The automotive industry is no longer about providing the hardware to move us from point A to point B, but to provide the hardware, software, and experience that is changing how we stay connected. To explore and inspire innovative ways to utilize this technology, the Ford Smart Vehicle Connectivity Challenge was launched giving participants from across Canada and the United States an opportunity to resolve pressing driver pain points using the new FordConnect API. Together, our team worked together to reimagine how this data-driven technology could be used to create a product that improves people’s lives and offers drivers a better Ford experience.",
      }),
    ],
  }),
};
