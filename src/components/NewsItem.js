import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, url, author, date, source } = this.props
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1' }}>{source}</span>
          <img src={imgUrl ? imgUrl : "https://media.cnn.com/api/v1/images/stellar/prod/credit-pnra-ipev-aerial-view-of-ldc-camp-20250110201933556.jpg?c=16x9&q=w_800,c_fill"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
