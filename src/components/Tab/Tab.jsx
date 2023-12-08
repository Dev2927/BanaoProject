import React, { useState } from "react";
import "./Tab.css";
import { postData } from "./PostData";

function Tab() {
  const [tab, setTab] = useState(1);

  function activeTab(tabNumber) {
    setTab(tabNumber);
  }

  const posts = postData.filter((post) => post.name === "postItem");

  const cards = tab === 1 ? posts : null;

  return (
    <div className="tab-container">
      <div className="tab1-container">
        <div className="tab1-btn" onClick={() => activeTab(1)}>
          All Posts(32)
        </div>
        <div className="tab1-btn">Article</div>
        <div className="tab1-btn">Event</div>
        <div className="tab1-btn">Education</div>
        <div className="tab1-btn">Job</div>
        <div className="tab1-btn tab2-btn">Write a Post</div>
        <div className="tab1-btn tab3-btn">Join Group</div>
      </div>

      {cards &&
        cards.map((card, index) => (
          <div key={index} className="card-container">
            <img src={card.img} alt="Img" className="card-img" />
            <span className="card-category">{card.category}</span>
            <h1 className="card-heading">{card.heading}</h1>
            <p className="card-para">{card.para}</p>

            <div className="username">
              <img src={card.img1} width='35px' height='35px'/>
              <span className="card-username">{card.username}</span>
            </div>
            <div className="views">
            <img src={card.img2} width='20px' height='20px' />
              <span className="card-views">{card.views}</span>
              <img src={card.img3} width='24px' height='24px' style={{background: '#EDEEF0'}}/>
            </div>
          </div>
          
        ))}
    </div>
  );
}

export default Tab;
