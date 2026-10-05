// import React, { Component } from 'react'

// export default class NewsItem extends Component {
//   render() {
//     return (
//       <>
//         <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
//           <div className="card news-image" >
//           <img alt='' src={this.props.pic?this.props.pic:"/images/noimages.jpg"} className="card-img-top" height={200}/>
//           <div className="card-body">
//             <h5 className="card-title">{this.props.title}</h5>
//             <p className="card-text">{this.props.description}</p>
//             <a href={this.props.url} className="btn btn-primary w-100">Read full</a>
//           </div>
//         </div>
//         </div>
//       </>
//     )
//   }
// }

import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
        <div className="card news-card">

          <img
            alt=""
            src={this.props.pic ? this.props.pic : "/images/noimages.jpg"}
            className="card-img-top news-image"
          />

          <div className="card-body d-flex flex-column">

            <h5 className="card-title">
              {this.props.title}
            </h5>

            <p className="card-text news-description">
              {this.props.description}
            </p>

            <a
              href={this.props.url}
              className="btn btn-primary w-100 mt-auto"
            >
              Read full
            </a>

          </div>
        </div>
      </div>
    )
  }
}
