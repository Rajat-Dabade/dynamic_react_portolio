import './CardComponent.styles.css';

import { Typography } from "@mui/material"
import { CardComponentProps } from "../../types/case-studies-types"
import { motion } from 'framer-motion';
const CardComponent = ({ title, description, index }: CardComponentProps) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: (index || 1) * 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 1  }}
            className="card"
        >
            <div className="card-body">
                <div className="card-content">
                    <div className="divider" />
                    <Typography variant="h4">{title}</Typography>
                </div>
                <Typography variant="body1">{description}</Typography>
            </div>
        </motion.div>
    )
}

export default CardComponent