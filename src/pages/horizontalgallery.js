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
    const onWheel = (e) => {
      // Convert vertical wheel to horizontal scroll
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        gallery.scrollLeft += e.deltaY * 3;
      }
    };

    // Scroll progress (native scroll)
    const onScroll = () => {
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;

      setScrollProgress(maxScroll > 0 ? gallery.scrollLeft / maxScroll : 0);
    };

    gallery.addEventListener('wheel', onWheel, { passive: false });
    gallery.addEventListener('scroll', onScroll);

    return () => {
      gallery.removeEventListener('wheel', onWheel);
      gallery.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Click and drag scrolling
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const onPointerDown = (e) => {
      e.preventDefault();
      isDragging = true;
      startX = e.clientX;
      startScrollLeft = gallery.scrollLeft;
      gallery.setPointerCapture(e.pointerId);
      gallery.classList.add('is-dragging');
    };

    const onPointerMove = (e) => {
      e.preventDefault();
      if (!isDragging) return;
      const dx = e.clientX - startX;
      gallery.scrollLeft = startScrollLeft - dx;
    };

    const onPointerUp = () => {
      isDragging = false;
      gallery.classList.remove('is-dragging');
    };

    gallery.addEventListener('pointerdown', onPointerDown);
    gallery.addEventListener('pointermove', onPointerMove);
    gallery.addEventListener('pointerup', onPointerUp);
    gallery.addEventListener('pointerleave', onPointerUp);

    return () => {
      gallery.removeEventListener('pointerdown', onPointerDown);
      gallery.removeEventListener('pointermove', onPointerMove);
      gallery.removeEventListener('pointerup', onPointerUp);
      gallery.removeEventListener('pointerleave', onPointerUp);
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
