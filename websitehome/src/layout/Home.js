import React from "react";
const Home = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="header-wrapper">
          <div className="header-left">photoby</div>
          <div className="middle-navbar">
            <div>Home</div>
            <div>Artist</div>
            <div>Category</div>
            <div>about us</div>
          </div>
          <div className="header-right">
            <div>join us</div>
          </div>
        </div>
        <div className="body-wrapper">
          <div className="left-body-content-wrapper">
            <div className="content-top">Change mind</div>
            <div className="image-content-wrapper">
              <div className="image-wrapper">
                <img src={"lookingup.jpg"} />
              </div>
              <div className="content-wrapper-right">
                <div className="content-wrapper-content">Power is</div>
                <div className="content-highlight">
                  <div className="content-hightlight-left">
                    <div className="icon">icon</div>
                    <div className="icon-content-wrapper">
                      <div> icon-content 1</div>
                      <div>icon-content 2</div>
                    </div>
                  </div>
                  <div className="content-hightlight-right">
                    <div className="icon">icon</div>
                    <div className="icon-content-wrapper">
                      <div> icon-content 1</div>
                      <div>icon-content 2</div>
                    </div>
                  </div>
                </div>
                <div className="main-content">main content</div>
                <div className="btns-maincontent-wrapper">
                  <button className="see-details">See Details</button>
                  <div className="see-profile">
                    <div className="see-profile-circle1"></div>
                    <div className="see-profile-circle2"></div>
                    <button>See Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-body-content-wrapper">
            <div className="item1">
              <div className="item1-image-wrapper">
                <img src={"applesideimage.jpg"} />
              </div>
            </div>
            <div className="item2">
              <div className="item2-container">
                <div className="arrow-container">🡨</div>
                <div className="scroll-image-container">
                  <img src={"applesideimage.jpg"} />
                </div>
                <div className="scroll-image-container">
                  <img src={"applewithbox.jpg"} />
                </div>
                <div className="arrow-container">🡪</div>
              </div>
            </div>
            <div className="item3">
              <div className="social-media-links">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </div>
            </div>
            <div className="liked-tag">

            </div>
          </div>
        </div>
        <div className="bottom-wrapper">
          <div className="bottom-top">Latest Artist</div>
          <div className="bottom-bottom">
            <div className="arrow-bottom">🡨</div>
            <div className="artist-details-bottom">
              <div className="left-image-title">
                <div className="image-wrapper">
                  <img src={"lookingup.jpg"}/>
                </div>
                <div className="artist-details">
                  <div>Name</div>
                  <div>Active</div>
                </div>
              </div>
              <div className="right-icon-wrapper">
                <div className="icon-wrapper"></div>
              </div>
            </div>
            <div className="artist-details-bottom">
            <div className="left-image-title">
            <div className="image-wrapper">
                  <img src={"lookingup.jpg"}/>
                </div>

                <div className="artist-details">
                  <div>Name</div>
                  <div>Active</div>
                </div>
              </div>
              <div className="right-icon-wrapper">
                <div className="icon-wrapper"></div>
              </div>
            </div>
            <div className="artist-details-bottom">
            <div className="left-image-title">
            <div className="image-wrapper">
                  <img src={"lookingup.jpg"}/>
                </div>

                <div className="artist-details">
                  <div>Name</div>
                  <div>Active</div>
                </div>
              </div>
              <div className="right-icon-wrapper">
                <div className="icon-wrapper"></div>
              </div>
            </div>
            <div className="arrow-bottom">🡪</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
