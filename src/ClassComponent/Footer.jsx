import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          width: '100%',
          backgroundColor: '#df3044',
          color: '#222',
          
        }}
      >
        <div className="container-fluid p-">
          <div className="row text-center">

            <div className="col-md-6 p-4 border-end border-light ">
              <h5>Copyright@Myneswapp.com</h5>
            </div>

            <div className="col-md-6 p-4">
              <h4>Developers</h4>
              <p>ABHISHEK SHARMA</p>

              <p className='dev1'>
                Connect with Gmail:{' '}
                <a
                  href="mailto:abhisheksharma12345n@gmail.com"
                  className="text-primary"
                >
                  abhisheksharma12345n@gmail.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}
