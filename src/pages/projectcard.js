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
  videoUrl,
  videoSrc,
}) => {
  return (
    <div className='projectcard-container'>
      <div className='projectcard-image'>
        {/* Conditional rendering for local video, iframe, or image */}
        {videoSrc ? (
          <video
            width='640'
            height='427'
            controls
            // autoPlay
            muted
            loop
            style={{
              maxWidth: '100%',
              borderRadius: '8px',
              marginBottom: '1rem',
            }}>
            <source src={videoSrc} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        ) : videoUrl ? (
          <iframe
            width='640'
            // height='360'
            src={videoUrl}
            title={alt}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            style={{
              maxWidth: '100%',
              marginBottom: '1rem',
              height: '100%'
            }}
            allowFullScreen></iframe>
        ) : (
          <img src={image} alt={alt} />
        )}
      </div>
      <div className='projectcard-content'>
        <h2 className='projectcard-hed'>{hed}</h2>
        <h3 className='projectcard-subhed'>{subhed}</h3>
        <p className='projectcard-text'>{description}</p>
        <p className='projectcard-skills'>
          <strong>Skills:</strong> {skills}
        </p>
        <div className='projectcard-button-container'>
          {learnMoreUrl && (
            <button
              className='projectcard-button-learn-more'
              onClick={() => window.open(learnMoreUrl, '_self')}>
              Learn more
            </button>
          )}
          {viewProjectUrl && (
            <button
              className='projectcard-button-view-this-project'
              onClick={() => window.open(viewProjectUrl, '_blank')}>
              View this project
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
