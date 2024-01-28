import "./OverviewComponent.styles.css";

import { Typography } from "@mui/material";
import { OverviewComponentProps } from "../../types/case-studies-types";
import { motion } from "framer-motion";

const OverviewComponent = ({
  contentHeading,
  title,
  description,
}: OverviewComponentProps) => {
  return (
    <div className="overview">
      <div className="overview-content">
        <motion.h4 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >{contentHeading}</motion.h4>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </div>
    </div>
  );
};

export default OverviewComponent;
