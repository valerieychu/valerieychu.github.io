import React from 'react';
import '../styles/global.less';
import '../styles/projectcard.less';
import valeriegoddard from '../images/valeriegoddard.jpeg';

const ProjectCard = ({
  image,
  alt,
  hed,
  subhed,
  description,
  skills,
  viewProjectUrl,
  learnMoreUrl,
}) => {
  return (
    <div className='projectcard-container'>
      <div className='projectcard-image'>
        <img src={image} alt={alt} />
      </div>

      <div className='projectcard-content'>
        <h2 className='projectcard-hed'>{hed}</h2>
        <h3 className='projectcard-subhed'>{subhed}</h3>
        <p className='projectcard-text'>{description}</p>
        <p className='projectcard-skills'>
          <strong>Skills:</strong> {skills}
        </p>

        <div className='projectcard-button-container'>
          {viewProjectUrl && (
            <button
              className='projectcard-button-learn-more'
              onClick={() => window.open(learnMoreUrl, '_blank')}
            >
              Learn more
            </button>
          )}
          {learnMoreUrl && (
            <button
              className='projectcard-button-view-this-project'
              onClick={() => window.open(viewProjectUrl, '_blank')}
            >
              View this project
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
