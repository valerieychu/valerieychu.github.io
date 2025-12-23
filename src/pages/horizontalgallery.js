import React, { useRef, useEffect, useState } from 'react';
import '../styles/global.less';
import '../styles/horizontalgallery.less';

const HorizontalGallery = ({ hed, subhed, description, children }) => {
  const galleryRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    // Horizontal scrolling within the gallery (programmatic scroll)
    // const onWheel = (e) => {
    //   if (gallery.matches(':hover')) {
    //     e.preventDefault();
    //     gallery.scrollLeft += e.deltaY * 3;

    //     const maxScroll = gallery.scrollWidth - gallery.clientWidth;

    //     setScrollProgress(maxScroll > 0 ? gallery.scrollLeft / maxScroll : 0);
    //   }
    // };
    const onWheel = (e) => {
      // Only convert vertical scroll to horizontal
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        gallery.scrollLeft += e.deltaY * 3;
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;

        setScrollProgress(maxScroll > 0 ? gallery.scrollLeft / maxScroll : 0);
      }
    };

    // Scroll progress (native scroll)
    const onScroll = () => {
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;

      setScrollProgress(maxScroll > 0 ? gallery.scrollLeft / maxScroll : 0);
    };

    // window.addEventListener('wheel', onWheel, { passive: false });
    // gallery.addEventListener('scroll', onScroll);
    gallery.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
      gallery.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className='horizontalgallery-container'>
      <div className='horizontalgallery-content'>
        <h2 className='horizontalgallery-hed'>{hed}</h2>
        <h3 className='horizontalgallery-subhed'>{subhed}</h3>
        <p className='horizontalgallery-text'>{description}</p>
      </div>
      <div className='horizontalgallery-image'>
        <div className='horizontalgallery-media-wrapper'>
          <div className='horizontalgallery-media' ref={galleryRef}>
            {children}
          </div>

          <div className='horizontalgallery-indicator'>
            <div
              className='horizontalgallery-indicator-fill'
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalGallery;
