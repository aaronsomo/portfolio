import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects and Applications</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => {
                  return (
                    <div className="columns portfolio-item" key={index}>
                      <div className="item-wrap" key={index}>
                        <a href={`#modal-${index}`} key={index}>
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div id="modal-0" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[0].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[0].name}</h4>
                <p>{resumeData.portfolio[0].stack}</p>
                <p>{resumeData.portfolio[0].detailed}</p>
                <a href={resumeData.portfolio[0].live} target="_blank">
                  Find in the iOS App Store here
                </a>
              </div>
            </div>
            <div id="modal-1" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[1].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[1].name}</h4>
                <p>{resumeData.portfolio[1].stack}</p>
                <p>{resumeData.portfolio[1].detailed}</p>
                <div className="projectlinks">
                  <a href={resumeData.portfolio[1].live} target="_blank">
                    View
                  </a>
                  <a href={resumeData.portfolio[1].github} target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div id="modal-2" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[2].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[2].name}</h4>
                <p>{resumeData.portfolio[2].stack}</p>
                <p>{resumeData.portfolio[2].detailed}</p>
                <div className="projectlinks">
                  <a href={resumeData.portfolio[2].live} target="_blank">
                    View
                  </a>
                  <a href={resumeData.portfolio[2].github} target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div id="modal-3" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[3].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[3].name}</h4>
                <p>{resumeData.portfolio[3].stack}</p>
                <p>{resumeData.portfolio[3].detailed}</p>
                <div className="projectlinks">
                  <a
                    href="https://github.com/aaronsomo/tourviewar-client"
                    target="_blank"
                  >
                    Front-End
                  </a>
                  <a
                    href="https://github.com/aaronsomo/tourviewar-server"
                    target="_blank"
                  >
                    Back-End
                  </a>
                </div>
                <div className="projectlinks">
                  <a
                    href="https://arobjectimages.s3-us-west-1.amazonaws.com/portfolio/TourViewAR.ipa"
                    target="_blank"
                  >
                    iOS(.ipa)
                  </a>
                  <a
                    href="https://arobjectimages.s3-us-west-1.amazonaws.com/portfolio/TourViewAR.apk"
                    target="_blank"
                  >
                    Android(.apk)
                  </a>
                </div>
              </div>
            </div>
            <div id="modal-4" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[4].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[4].name}</h4>
                <p>{resumeData.portfolio[4].stack}</p>
                <p>{resumeData.portfolio[4].detailed}</p>
                <div className="projectlinks">
                  <a href={resumeData.portfolio[4].live} target="_blank">
                    View
                  </a>
                  <a href={resumeData.portfolio[4].github} target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div id="modal-5" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[5].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[5].name}</h4>
                <p>{resumeData.portfolio[5].stack}</p>
                <p>{resumeData.portfolio[5].detailed}</p>
                <div className="projectlinks">
                  <a href={resumeData.portfolio[5].live} target="_blank">
                    View
                  </a>
                  <a href={resumeData.portfolio[5].github} target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div id="modal-6" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[6].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[6].name}</h4>
                <p>{resumeData.portfolio[6].stack}</p>
                <p>{resumeData.portfolio[6].detailed}</p>
                <div className="projectlinks">
                  <a href={resumeData.portfolio[6].live} target="_blank">
                    View
                  </a>
                  <a href={resumeData.portfolio[6].github} target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div id="modal-7" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[7].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[7].name}</h4>
                <p>{resumeData.portfolio[7].stack}</p>
                <p>{resumeData.portfolio[7].detailed}</p>
                <div className="projectlinks">
                  <a href={resumeData.portfolio[7].live} target="_blank">
                    View
                  </a>
                  <a href={resumeData.portfolio[7].github} target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div id="modal-8" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[8].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[8].name}</h4>
                <p>{resumeData.portfolio[8].stack}</p>
                <p>{resumeData.portfolio[8].detailed}</p>
                <div className="projectlinks">
                  <a href={resumeData.portfolio[8].live} target="_blank">
                    View
                  </a>
                  <a href={resumeData.portfolio[8].github} target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
