import React from "react";
import "../../styles/Slide.css";
import { Link } from "react-router-dom";

const Slide = ({ title, imageSrc, chapterId }) => {
    return (
        <div className="slide">
            <h2 className="slide-title">{title}</h2>
            <div className="slide-image-container">
                <img src={imageSrc} alt="Slide Image" className="slide-image" />
            </div>
            <div className="button-container">
                <button><Link to={`/capitulo${chapterId}`} className="link-button">Más Información</Link></button>
            </div>
        </div>
    );
};

export default Slide;
