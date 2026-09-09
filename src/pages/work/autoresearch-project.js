import React from 'react';
import '../../styles/global.less';
import '../../styles/home.less';
import divider from '../../images/divider.svg';
import Header from './../header';
import Footer from './../footer';
import m7newssentiment from '../../images/m7newssentiment.png';

const AutoresearchProject = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h3 className='h3' style={{ marginTop: '2rem' }}>
          Autoresearch Project: Agentic AI for Rapid ML Model Tuning
        </h3>

        {/* Autoresearch Project */}
        {/* Autoresearch Project */}
        {/* Autoresearch Project */}
        <h4 className='h4'>Northwestern University</h4>
        <p className='paragraph'>
          Applying autoresearch to predict next-day stock price direction using
          news sentiment — Created a custom dataset with BigQuery through
          joining news sentiment and yfinance data, then built an agentic
          workflow using Claude to enable rapid hyperparameter tuning and ML
          model evaluation, ultimately producing a reproducible negative result.
          Conducted feature engineering, ablation testing, failure analysis, and
          stability checks.
        </p>

        <p className='paragraph'>
          <i>Tools used: </i>
          Machine learning, BigQuery, Claude as an AI agent, Data wrangling
        </p>

        <p className='paragraph'>
          <i>The background: </i>
          In March 2026, Andrej Karpathy published a new open source project on{' '}
          <a href='https://github.com/karpathy/autoresearch' target='_blank'>
            autoresearch
          </a>
          . As he explains, the idea works like this: "give an AI agent a small
          but real LLM training setup and let it experiment autonomously
          overnight. It modifies the code, trains for 5 minutes, checks if the
          result improved, keeps or discards, and repeats. You wake up in the
          morning to a log of experiments and (hopefully) a better model." For
          Northwestern University's STAT 390 data science major capstone class,
          our professor provided us with one requirement: "Goal: Turn a vague
          project idea into a disiplined, realistic, and evaluable 8-week
          autoresearch project."
        </p>
        <p className='paragraph'>
          <i>My project: </i>
          My autoresearch project answered one question: Can daily GDELT 2.0
          news-sentiment signals can predict next-day price direction for the
          Magnificent-7 (M7) US technology stocks? After conducting feature
          engineering, ablation testing, failure analysis, and stability checks,
          I ultimately produced a reproducible negative result.
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
              'https://github.com/valerieychu/m7-news-sentiment',
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
              'https://github.com/valerieychu/m7-news-sentiment/blob/main/paper/m7-news-sentiment.pdf',
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
              'https://drive.google.com/file/d/1vS93gr7bV7uupr3k64tiIqowlWjJhLMS/view',
              '_blank',
            )
          }>
          Watch my final presentation
        </button>

        <img
          style={{ maxWidth: '100%', margin: '1rem 0' }}
          src={m7newssentiment}
          alt='A presentation slide from this project'
        />
      </div>
      <Footer />
    </>
  );
};

export default AutoresearchProject;
