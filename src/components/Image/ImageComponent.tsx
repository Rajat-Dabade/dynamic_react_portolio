import './ImageComponent.styles.css';
import { ImageComponentProps } from "../../types/case-studies-types"
import { motion } from "framer-motion";

const ImageComponent = ({ altText, imgUrl}: ImageComponentProps) => {
    return (
        <div className="image-component">
           <motion.img 
                whileHover={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={imgUrl} 
                alt={altText} 
                />  
        </div>
    )
}

export default ImageComponent