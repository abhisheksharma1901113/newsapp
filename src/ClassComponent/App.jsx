import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      language: "hi",
      search: ""

    }
  }
  changeLanguage=(data) => {
    this.setState({language:data})

  }

  changeSearch=(data) => {
    this.setState({search:data})
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch} />
          <Routes>
            <Route path='All' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "All"} />} />
            <Route path='Game' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Game"} />} />
            <Route path='Stock' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Stock"} />} />
            <Route path='politics' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Politics"} />} />
            <Route path='crime' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "crime"} />} />
            <Route path='technology' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Technology"} />} />
            <Route path='india' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "india"} />} />
            <Route path='Education' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Education"} />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </>
    )
  }
}
