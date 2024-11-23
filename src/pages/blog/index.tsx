import React from "react";

export default function Blog() {
  return (
    <div className="blog flex-center" style={{padding:"20px"}}>
      <div className="blog-container flex-column" style={{ gap:"20px" }}>
        <div className="article flex-column" style={{ gap:"20px" }}>
          <h3 style={{padding:"0 10px" , fontSize:"20px" , fontWeight:"bolder"}}>Title Of Article !</h3>
          <div className="article-imgs">
            <img className="img1" src="https://th.bing.com/th/id/OIF.V4k7jo6BXq6twYqWQ4p6gQ?rs=1&pid=ImgDetMain" />
            <img className="img2" src="https://th.bing.com/th/id/OIF.V4k7jo6BXq6twYqWQ4p6gQ?rs=1&pid=ImgDetMain" />
            <img className="img3" src="https://th.bing.com/th/id/OIF.V4k7jo6BXq6twYqWQ4p6gQ?rs=1&pid=ImgDetMain" />
          </div>
          <p className="article-content" style={{padding:"10px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            enim asperiores consequuntur sed, assumenda dicta? Officia vero
            consequatur illum exercitationem id, a accusamus quia! Quasi rerum
            enim iure praesentium nesciunt!
          </p>
        </div>
        <div className="articles flex-column" style={{backgroundColor:"#fff" , width:"100%"}}>
             <h3>Recommended Articles</h3>
             <span className=" flex-center">
              <img src="https://th.bing.com/th/id/OIF.V4k7jo6BXq6twYqWQ4p6gQ?rs=1&pid=ImgDetMain" alt="article-img" />
              <p>Title Of Article ! , Title Of Article ! , Title Of Article !</p>
             </span>
             <span className=" flex-center">
              <img src="https://th.bing.com/th/id/OIF.V4k7jo6BXq6twYqWQ4p6gQ?rs=1&pid=ImgDetMain" alt="article-img" />
              <p>Title Of Article ! , Title Of Article ! , Title Of Article !</p>
             </span>
             <span className=" flex-center">
              <img src="https://th.bing.com/th/id/OIF.V4k7jo6BXq6twYqWQ4p6gQ?rs=1&pid=ImgDetMain" alt="article-img" />
              <p>Title Of Article ! , Title Of Article ! , Title Of Article !</p>
             </span>
             <span className=" flex-center">
              <img src="https://th.bing.com/th/id/OIF.V4k7jo6BXq6twYqWQ4p6gQ?rs=1&pid=ImgDetMain" alt="article-img" />
              <p>Title Of Article ! , Title Of Article ! , Title Of Article !</p>
             </span>
        </div>
      </div>
    </div>
  );
}
