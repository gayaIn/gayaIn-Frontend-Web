import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

import { filterProduct } from '../redux/actions/product'
import { getCategory } from '../redux/actions/category'

class NewNavbar extends Component{
    
    state={
        name: '',
        category: '',
    }
    
    filterCategory = event => {
        this.setState({
          category: event.target.value
        })
        this.props.history.push(`/newHome?category=${event.target.value}&name=${this.state.name}`)
        this.props.dispatch(filterProduct(event.target.value, this.state.name))
      }

    getCategory(){
        this.props.dispatch(getCategory())
    }
    
    searchProduct = event => {
        this.setState({
          name: event.target.value
        })
        this.props.history.push(`/newHome?category=${this.state.category}&name=${event.target.value}`)
        this.props.dispatch(filterProduct(this.state.category, event.target.value))
      }
    
    onChangeHandler = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidMount(){
        this.getCategory()
    }
    render(){
        const {categorys, onClick, onhidden} = this.props
        const ValidasiForm = () => {
            if (localStorage.getItem('Status') === '1'){
                return(
                    <Fragment>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dashboard
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <span className="dropdown-item"><Link to="/Dashboard/Category" className="nav-item nav-link" >Category</Link> </span>
                            <span className="dropdown-item"><Link to="/Dashboard/Product" className="nav-item nav-link" >Product</Link></span>
                            </div>
                        </li>
                    </Fragment>
                )
            }
            else {
                return(
                    <Fragment />
                )
            }
        }

        return(
            <Fragment>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" style={{width:'65rem', height:'63px'}}>
                <span className="navbar-brand">FamiRest</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <span hidden={this.state.onhiden} ><Link to="/newHome" className="nav-item nav-link">Home</Link></span>
                        <ValidasiForm />
                        <span><Link to="/login" className="nav-item nav-link" onClick={onClick}>Logout</Link></span>
                        <div className="input-group mb-3" style={{marginLeft:'13rem', height:'30px', marginTop:'9px'}}>
                        <div className="input-group-prepend">
                            <label hidden={onhidden} className="input-group-text" for="inputGroupSelect01">Filter</label>
                        </div>
                        <select hidden={onhidden} className="custom-select" id="inputGroupSelect01" onChange={this.filterCategory}>
                        <option selected value={0} disabled>Choose...</option>
                        <option selected value={''}>All</option>
                            { categorys.map((category, index) => 
                                <option key={index} value={category.name}>
                                    {category.name}
                                </option>
                            )}
                        </select>
                        <div className="form-inline my-2 my-lg-0">
                            <input hidden={onhidden} onChange={this.searchProduct} value={this.state.name} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </div>  
                        
                    </div>
                </div>
            </nav>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        categorys: state.categorys.categorys
    }
}

export default withRouter(connect(mapStateToProps)(NewNavbar))