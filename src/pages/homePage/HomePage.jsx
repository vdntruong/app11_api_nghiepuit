import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container text-center">
        <main role="main" className="inner cover">
          <h1 className="cover-heading">Cover.</h1>
          <p className="lead">Cuộc đời này ngắn lắm, cứ dám nghĩ to, ước lớn, không ai đánh thuế giấc mơ của bạn cả.</p>
          <p className="lead">
            <i className="btn btn-lg btn-secondary">Say Hi with Cường</i>
          </p>
        </main>
      </div>
    );
  }
}
