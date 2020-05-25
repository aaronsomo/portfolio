import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me using any of the mediums below :3
            </p>
          </div>
        </div>
        {/* <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div> */}
      </section>
    );
  }
}
