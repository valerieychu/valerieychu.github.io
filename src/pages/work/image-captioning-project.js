import React from 'react';
import '../../styles/global.less';
import '../../styles/home.less';
import divider from '../../images/divider.svg';
import Header from './../header';
import Footer from './../footer';
import flickr8k from '../../images/flickr8k.png';

const ImageCaptioningProject = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h3 className='h3' style={{ marginTop: '2rem' }}>
          Image Captioning Project: Agentic AI for Rapid ML Model Tuning
        </h3>

        {/* Image Captioning Project */}
        {/* Image Captioning Project */}
        {/* Image Captioning Project */}
        <h4 className='h4'>Northwestern University</h4>
        <p className='paragraph'>
          Compared a ResNet-50 + KNN retrieval baseline, a CNN + LSTM
          encoder-decoder, and a fine-tuned GIT transformer to examine how each
          design choice — feature representation, language modeling strategy,
          and scale of pretraining — affects image caption quality, as measured
          by BLEU scores.
        </p>

        <p className='paragraph'>
          <i>Tools used: </i>
          TensorFlow, Machine learning, Deep learning, Image captioning
        </p>

        <p className='paragraph'>
          <i>Process: </i>
          Write-up in progress ...
        </p>
        <p className='paragraph'>
          In the meantime, please check out the links below.
        </p>

        <button
          className='view-this-project'
          style={{ marginRight: '1rem' }}
          onClick={() =>
            window.open(
              'https://github.com/valerieychu/flickr8k-image-captioning',
              '_blank',
            )
          }>
          View this project
        </button>

        <button
          className='view-this-project'
          style={{ marginRight: '1rem' }}
          onClick={() =>
            window.open(
              'https://github.com/valerieychu/flickr8k-image-captioning/blob/main/PROJECT_REPORT.ipynb',
              '_blank',
            )
          }>
          Read the final report
        </button>

        <button
          className='view-this-project'
          style={{ marginRight: '1rem' }}
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1uhJ0-SOkdzfJ-dQbpyT9DPUZgAFJkIik/view',
              '_blank',
            )
          }>
          Watch my final presentation
        </button>

        <img
          style={{ maxWidth: '100%', margin: '1rem 0' }}
          src={flickr8k}
          alt='A screenshot of the Flickr8k dataset on Kaggle'
        />
      </div>
      <Footer />
    </>
  );
};

export default ImageCaptioningProject;
