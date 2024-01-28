import './BannerComponent.styles.css';

import { Typography } from '@mui/material';
import { BannerComponentProps } from '../../types/case-studies-types';
import { motion } from 'framer-motion';

const BannerComponent = ({title, description}: BannerComponentProps) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0}}
            whileHover={{ scale: 0.95 }}
            transition={{ duration: 0.7 }} 
            className="banner"
        >
            <div className="banner__content">
                <Typography variant='h5' >{title}</Typography>
                <Typography variant='body1' >{description}</Typography>
            </div>
        </motion.div>
    );
};

export default BannerComponent;