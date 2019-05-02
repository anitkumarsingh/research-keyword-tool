import React from 'react';
import checkImg from '../../Images/rightcheck.png';
import './CallToAction.css';
import bottomLogo from '../../Images/SellerApp logo.png';
import CallContent from './CallToActionContent';

const CallToActionContent = () =>{
     const items = CallContent.callActionContents.map((item,i)=>{
            return(
             {
               'Title':item.title,
               'sub-title':item["sub-title"],
               'header-title-1':item["header-title-1"],
               'header-title-2':item["header-title-2"], 
               'header-title-3':item["header-title-3"],
               'description':item.description
             }
            )
          }); 
    return(
        <div className="content-section1">
        <h1  className="Title">{items[0].Title}</h1>
        <p>try <span className="sub-title">SellerApp:</span> {items[0]["sub-title"]}</p>
        <div className="section1 group1">
              <div className="col_1 span_1_of_3_call">
                    <img src={checkImg} alt="check mark 1"/>
                    <h4>{items[0]["header-title-1"]}</h4>
                    <p className="description-text">{items[0].description}</p>
              </div>
              <div className="col_1 span_1_of_3_call">
                    <img src={checkImg} alt="check mark 2"/>
                    <h4>{items[0]["header-title-2"]}</h4>
                    <p className="description-text">{items[0].description}</p>
              </div>
              <div className="col_1 span_1_of_3_call">
                    <img src={checkImg} alt="check mark 3"/>
                    <h4>{items[0]["header-title-3"]}</h4>
                    <p className="description-text">{items[0].description}</p>
              </div>
        </div>
            <div className="callBtn">
                    <img src={bottomLogo} alt="bottomLogo" width="300px;" height="auto"/>     
            </div>
            <button className="call-btn">7 Days free trail</button>
            <p>No credit card required!. For more information at <a href="#author" style={{textDecoration:'none'}}>sellerapp.com</a></p>
            <h5 className="headerText" id="author"> &copy; 2018, Coded By Anit Kumar</h5>
  </div>
    );
}
export default CallToActionContent;