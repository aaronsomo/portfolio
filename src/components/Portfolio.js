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
                <p>{resumeData.portfolio[0].detailed}</p>
              </div>
            </div>
            <div id="modal-1" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[1].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[1].name}</h4>
                <p>{resumeData.portfolio[1].detailed}</p>
                <a href={resumeData.portfolio[1].live} target="_blank">
                  View
                </a>
              </div>
            </div>
            <div id="modal-2" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[2].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[2].name}</h4>
                <p>{resumeData.portfolio[2].detailed}</p>
                <a href={resumeData.portfolio[2].live} target="_blank">
                  View
                </a>
              </div>
            </div>
            <div id="modal-3" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[3].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[3].name}</h4>
                <p>{resumeData.portfolio[3].detailed}</p>
              </div>
            </div>
            <div id="modal-4" className="popup-modal mfp-hide">
              <img src={resumeData.portfolio[4].imgurl} />
              <div className="description-box">
                <h4>{resumeData.portfolio[4].name}</h4>
                <p>{resumeData.portfolio[4].detailed}</p>
                <a href={resumeData.portfolio[4].live} target="_blank">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
