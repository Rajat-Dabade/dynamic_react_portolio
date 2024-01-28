import { ReactNode } from "react";
import { CaseStudy } from "../types/case-studies-types";

const CaseStudy1 = ({
  title,
  requiredPassword,
  id,
  components,
}: CaseStudy): ReactNode => {
  console.log({ title, requiredPassword, id });
  return (
    <div>
      {components.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </div>
  );
};

export default CaseStudy1;
