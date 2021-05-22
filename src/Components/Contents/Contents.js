import React from 'react';
import Data from './DataSource';
import './Content.css';

const ContentBody = () => {
  const items = Data.keywords.map((item, i) => {
    return {
      Title: item.title,
      'sub-title': item['sub-title'],
      'statics-keywords': item['statics-keywords'],
      'statics-keywords-title': item['statics-keywords-title'],
      'statics-products': item['statics-products'],
      'statics-products-title': item['statics-products-title'],
      'header-title': item['header-title'],
      description: item.description
    };
  });
  return (
    <div className="content-section">
      <h1>{items[0].Title}</h1>
      <p>{items[0]['sub-title']}</p>
      <div className="section group">
        <div className="col span_2_of_3">
          <h1 className="static-keyword-1">{items[0]['statics-keywords']}</h1>
          <span
            style={{
              fontSize: '25px',
              color: '#B6B6B6',
              marginLeft: '65px',
              marginTop: '-20px'
            }}
          >
            {items[0]['statics-keywords-title']}
          </span>
          <h3 style={{ textAlign: 'left' }}>{items[0]['header-title']}</h3>
          <p
            style={{
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgba(51,51,51,0.9)'
            }}
          >
            {items[0].description}
          </p>
        </div>
        <div className="col span_2_of_3">
          <h1 style={{ color: '#B6B6B6', fontSize: '50px' }}>
            {items[0]['statics-products']}
          </h1>
          <span
            style={{
              fontSize: '25px',
              color: '#B6B6B6',
              marginLeft: '65px',
              marginTop: '-20px'
            }}
          >
            {items[0]['statics-products-title']}
          </span>
          <h3 style={{ textAlign: 'left' }}>{items[0]['header-title']}</h3>
          <p
            style={{
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgba(51,51,51,0.9)'
            }}
          >
            {items[0].description}
          </p>
        </div>
      </div>
      <div className="section group">
        <div className="col span_2_of_3">
          <h3 style={{ textAlign: 'left' }}>{items[0]['header-title']} urna</h3>
          <h3 style={{ textAlign: 'left' }}>1.{items[0]['header-title']}</h3>
          <p
            style={{
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgba(51,51,51,0.9)'
            }}
          >
            {items[0].description}
          </p>
        </div>
        <div className="col span_2_of_3">
          <h3 style={{ textAlign: 'left' }}>2.{items[0]['header-title']}</h3>
          <p
            style={{
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgba(51,51,51,0.9)'
            }}
          >
            {items[0].description}
          </p>
        </div>
      </div>
      <div className="section group">
        <div className="col span_2_of_3">
          <h3 style={{ textAlign: 'left' }}>{items[0]['header-title']}</h3>
          <p
            style={{
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgba(51,51,51,0.9)'
            }}
          >
            {items[0].description}
          </p>
        </div>
        <div className="col span_2_of_3">
          <h3 style={{ textAlign: 'left' }}>{items[0]['header-title']}</h3>
          <p
            style={{
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgba(51,51,51,0.9)'
            }}
          >
            {items[0].description}
          </p>
        </div>
      </div>
      <div className="section group">
        <div className="col span_2_of_3">
          <h3 style={{ textAlign: 'left' }}>{items[0]['header-title']}</h3>
          <p
            style={{
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgba(51,51,51,0.9)'
            }}
          >
            {items[0].description}
          </p>
        </div>
        <div className="col span_2_of_3">
          <h3 style={{ textAlign: 'left' }}>{items[0]['header-title']}</h3>
          <p
            style={{
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgba(51,51,51,0.9)'
            }}
          >
            {items[0].description}
          </p>
        </div>
      </div>
      <div className="section group">
        <div className="col span_2_of_3">
          <h3 style={{ textAlign: 'left' }}>{items[0]['header-title']}</h3>
          <p
            style={{
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgba(51,51,51,0.9)'
            }}
          >
            {items[0].description}
          </p>
        </div>
        <div className="col span_2_of_3">
          <h3 style={{ textAlign: 'left' }}>{items[0]['header-title']}</h3>
          <p
            style={{
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgba(51,51,51,0.9)'
            }}
          >
            {items[0].description}
          </p>
        </div>
      </div>
      <div className="section group">
        <div className="col span_2_of_3">
          <h3 style={{ textAlign: 'left' }}>{items[0]['header-title']}</h3>
          <p
            style={{
              textAlign: 'justify',
              lineHeight: '1.5',
              color: 'rgba(51,51,51,0.9)'
            }}
          >
            {items[0].description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContentBody;
