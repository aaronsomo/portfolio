import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    };
  }

  handleName = (event) => {
    const target = event.target;
    const value = event.target.value;

    console.log(value);
    this.setState({
      name: value,
    });
  };

  handleEmail = (event) => {
    const target = event.target;
    const value = event.target.value;

    console.log(value);
    this.setState({
      email: value,
    });
  };

  handleMessage = (event) => {
    const target = event.target;
    const value = event.target.value;

    console.log(value);
    this.setState({
      message: value,
    });
  };

  handleSubmit = () => {
    console.log('handleSubmit!!');
  };

  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="twelve columns">
            <h1 className="lead">Contact me here</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name :
                <input
                  placeholder="Enter Name"
                  value={this.state.name}
                  onChange={this.handleName}
                />
              </label>
              <label>
                Email :
                <input
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </label>
              <label>
                Message :
                <textarea
                  value={this.state.message}
                  onChange={this.handleMessage}
                />
              </label>
            </form>
            <button
              className="submit"
              type="submit"
              disabled={this.state.disabled}
            >
              SUBMIT
            </button>

            {this.state.emailSent === true && <p className="">Email Sent</p>}
            {this.state.emailSent === false && (
              <p className="">Email Not Sent</p>
            )}
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
