import './AboutComponent.styles.css';

import { AboutComponentProps } from "../../types/case-studies-types";
import CardComponent from "../Card/CardComponent";

const AboutComponent = ({ cards }: AboutComponentProps) => {
    return (
        <div className="About">
            {cards.map((card, index) => 
                <CardComponent 
                    key={index} 
                    title={card.title} 
                    description={card.description} 
                    index={index}
                />
                )}
        </div>
    )
}

export default AboutComponent;