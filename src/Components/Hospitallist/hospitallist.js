import Footer from "../Footer/footer";
import Header from "../Header/header";
import Listitem from "../Listitem/listitem"
// import 'bootstrap/dist/css/bootstrap.css';
import './hospitallist.css'
import { Component } from "react";

class Hospitallist extends Component{
    state = {searchInput: ''}

  onSearchInputchange = event => {
    this.setState({searchInput: event.target.value})
  }

    render(){
        const {hospitallist } = this.props
        const {searchInput} = this.state
        const value = searchInput.toLowerCase()
        const filteredList = hospitallist .filter(eachPlace =>
          eachPlace.name.toLowerCase().includes(value),
        )
        
        return(
          <>
          <Header/>
            <div className="bg-container">
            <div className="searchbox">
              <div>
                <input
                  className="search-input"
                  placeholder="Search"
                  type="search"
                  onChange={this.onSearchInputchange}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                  alt="search icon"
                  className="search-icon"
                />
              </div>
            </div>
    
            <ul className="places-container">
              {filteredList.map(each => (
                <Listitem key={each.id} hospitalDetails={each} />
              ))}
            </ul>
          </div>
          <Footer/>
          </>
        )
    }
}

export default Hospitallist