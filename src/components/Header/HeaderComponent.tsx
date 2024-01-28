import './HeaderComponent.style.css';

import { ReactNode } from "react";
import { HeaderComponentProps } from "../../types/case-studies-types";
import { motion } from "framer-motion";
import ImageComponent from '../Image/ImageComponent';

const HeaderComponent = ({
  title,
  description,
  backgroundImgUrl,
}: HeaderComponentProps): ReactNode => {
  return (
    <div className="header">
      <div className="header__text">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.6 }} 
          viewport={{ once: true}}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >{description}</motion.p>
      </div>
      <div  className="header__img">
        <ImageComponent imgUrl={backgroundImgUrl} altText={title} /> 
      </div>
    </div>
  );
};

export default HeaderComponent;
