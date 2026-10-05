import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      search:""
    }
  }
  postData(e){
    e.preventDefault()
    this.props.changeSearch(this.state.search)
    this.setState({search:""})
  }
  render() {
    return (
    <>
   <nav className="navbar navbar-expand-lg backgound">
  <div className="container-fluid" >
    <Link className="navbar-brand" to="All" onClick={()=>this.props.changeSearch("")}>NEWS_APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="All"  onClick={()=>this.props.changeSearch("")} >ALL</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Game"  onClick={()=>this.props.changeSearch("")}>Game</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="stock" onClick={()=>this.props.changeSearch("")}>Stock</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="politics" onClick={()=>this.props.changeSearch("")}>Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="crime"  onClick={()=>this.props.changeSearch("")}>Crime</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Technology" onClick={()=>this.props.changeSearch("")}>Technology</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="india" onClick={()=>this.props.changeSearch("")}>India</Link></li>
            <li><Link className="dropdown-item" to="Education" onClick={()=>this.props.changeSearch("")}>Education</Link></li>
          </ul>
        </li>
          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="india" onClick={()=>this.props.changeLanguage("hi")}>Hindi</Link></li>
            <li><Link className="dropdown-item" to="Education" onClick={()=>this.props.changeLanguage("en")}>English</Link></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>this.postData(e)}>
        <input className="form-control me-2" type="search" name='search' placeholder="Search" aria-label="Search" value={this.state.search} onChange={(e)=>this.setState({search:e.target.value})}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
    )
  }
  
}
