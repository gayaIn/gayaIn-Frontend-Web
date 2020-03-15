// import React, {Component, Fragment} from 'react'
// import axios from 'axios'
// import Navbar from '../navbar'

// class Product extends Component {

//     constructor(props){
//         super(props)
//         this.state={
//             name: '',
//             category: 0,
//             price:'-',
//             stock:'-',
//             image:'',
//             Products: [],
//             idProduct:'',
//             searchName: '',
//             category:'',
//             pagination:0,
//             limit:3,
//             totalPage:0,
//             sortBy:''
//         }
//     }

    

//     displayProduct() {
//         const authorization = localStorage.getItem('token');
//         const userId = localStorage.getItem("user-id");
//         axios
//         .get(`http://localhost:4500/product`, {
//             headers: {
//                 "authorization": authorization,
//                 "user-id": userId
//               }
//         })
//         .then(response => {
//             this.setState({
//                  Products: response.data.result,
//                  totalPage: Math.ceil(response.data.result.length/this.state.limit)
//              })
//         })

//             .catch(console.log)
//     }

//     searchByName = (e) => {
//         this.setState({
//             searchName: e.target.value,
           
//         })
//         axios
//         .get(`http://localhost:4500/product?name=${e.target.value}`)
//         .then(response => {
//             this.setState({ Products: response.data.result })
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }

//     sortBy = (e) => {
//         this.setState({
//             sort: e.target.value
//         })
//         axios
//         .get(`http://localhost:4500/product?sortBy=${this.state.sort}`)
//         .then(response => {
//             this.setState({ Products: response.data.result })
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }

//     searchCategory = (e) => {
//         this.setState({
//             category: e.target.value
//         })
//         axios
//         .get(`http://localhost:4500/product?category=${e.target.value}`)
//         .then(response => {
//             this.setState({ Products: response.data.result })
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }


//     deleteProduct = (e) => {
//         this.state={
//             idProduct:e.target.value
//         }
//         axios
//             .delete(`http://localhost:4500/product/${this.state.idProduct}`)
//             .then(response => {
//                 console.log(response)
//                 this.componentDidMount()
//             })
//             .catch(error =>{
//                 console.log(error)
//             })
//     }


//     onClickHandler = (e)=>{
//         this.setState({
//             [e.target.name]:e.target.value,
//             idProduct:e.target.value
//         })
//     }

//     onChangeImageHandler = (e)=>{
//         this.setState({image:e.target.files[0]})
//     }
    
//     onChangeHandler = (e)=>{
//         this.setState({
//             [e.target.name]:e.target.value
//         })
//     }

//     onSubmitHandler = (e)=>{
//         e.preventDefault()
//         let formData = new FormData()
    
//         formData.append("name", this.state.name)
//         formData.append("price", this.state.price)
//         formData.append("category", this.state.category)
//         formData.append("stock", this.state.stock)
//         formData.append("image", this.state.image)
    
//         let data = {
//             method: "PATCH",
//             body:formData
//         }
//         fetch(`http://localhost:4500/product/${this.state.idProduct}`, data)
//         .then(res=>{
//             console.log('succes')
//             alert('data diubah')
//             this.componentDidMount()
//         })
//     }

//     componentDidMount() {
//         this.displayProduct()
//     }

//     render() {            
//         const showProduct = this.state.Products.map((product) => {
//             return (
//                 <div 
//                 className="col-md-4" 
//                 key={product.id} 
//                 style={{backgroundColor:'#d9d9d9', padding:'25px'}}>
//                 <div 
//                 className="card" 
//                 style={{backgroundColor:'transparent', border:'0px solid black',margin:'-25px', width:'22rem'}} >
//                     <div 
//                     className="card-body" 
//                     style={{padding:'10px'}}>
//                         <img 
//                         src={product.image} 
//                         className="card-img" 
//                         height="180px"  
//                         alt=""/>
//                     <div 
//                     className='row'>
//                         <div 
//                         className='col-md-6'>
//                             <h5 
//                             className="card-title" 
//                             style={{marginTop:'5px'}}>{product.name}
//                             </h5>
//                         </div>
//                         <div 
//                         className='col-md-2'>

//                             {/* edit with modal */}
//                             <button 
//                             onClick={this.onClickHandler} 
//                             type="button" 
//                             class="edit btn btn-outline-secondary btn-md" 
//                             data-toggle="modal" 
//                             data-target="#edit" 
//                             value={product.id}>
//                                 Edit
//                                 </button>
//                                 <div 
//                                 className="modal fade" 
//                                 id="edit" 
//                                 tabIndex="-1" 
//                                 role="dialog" 
//                                 aria-labelledby="editTitle" 
//                                 aria-hidden="true">
//                                     <div 
//                                     className="modal-dialog" 
//                                     role="document">
//                                         <div 
//                                         className="modal-content">
//                                         <div 
//                                         className="modal-header">
//                                             <h5 
//                                             className="modal-title" 
//                                             id="edit">Edit Product
//                                             </h5>
//                                             <button 
//                                             type="button" 
//                                             className="close" 
//                                             data-dismiss="modal" 
//                                             aria-label="Close">
//                                             <span 
//                                             aria-hidden="true">&times;
//                                             </span>
//                                             </button>
//                                         </div>
//                                         <div 
//                                         className="modal-body">
//                                         <form 
//                                         onSubmit={this.onSubmitHandler}>
//                                             <div className="input-group input-group-sm mb-3">
//                                                     <div className="input-group-prepend">
//                                                         <span className="input-group-text" 
//                                                         id="inputGroup-sizing-sm">Name</span>
//                                                     </div>
//                                                     <input 
//                                                     onChange={this.onChangeHandler} 
//                                                     name="name" 
//                                                     type="text" 
//                                                     className="form-control" 
//                                                     aria-label="Small"
//                                                     aria-describedby="inputGroup-sizing-sm" 
//                                                     value={this.state.name} />
//                                                         </div>
//                                                         <div className="input-group mb-3">
//                                                         <div className="input-group-prepend">
//                                                             <label 
//                                                             className="input-group-text" 
//                                                             for="inputGroupSelect01">Category
//                                                             </label>
//                                                         </div>
//                                                         <select 
//                                                         onChange={this.onChangeHandler} 
//                                                         name="category" 
//                                                         className="custom-select" 
//                                                         id="inputGroupSelect01" 
//                                                         value={this.state.category}>
//                                                             <option selected value={0} disabled>Choose...</ooptin>
//                                                             <option value={1}>Food</option>
//                                                             <option value={2}>Drink</option>
//                                                         </select>
//                                                         </div>
//                                                         <div className="input-group input-group-sm mb-3">
//                                                         <div className="input-group-prepend">
//                                                             <span 
//                                                             className="input-group-text" 
//                                                             id="inputGroup-sizing-sm">
//                                                                 Price</span>
//                                                         </div>
//                                                         <input 
//                                                         onChange={this.onChangeHandler} 
//                                                         name="price" 
//                                                         type="number" 
//                                                         className="form-control"
//                                                         aria-label="Small" 
//                                                         aria-describedby="inputGroup-sizing-sm" 
//                                                         value={this.state.price} />
//                                                         </div>
//                                                         <div className="input-group input-group-sm mb-3">
//                                                         <div className="input-group-prepend">
//                                                             <span className="input-group-text" id="inputGroup-sizing-sm">Stock</span>
//                                                         </div>
//                                                         <input 
//                                                         onChange={this.onChangeHandler} 
//                                                         name="stock" type="number" 
//                                                         className="form-control" 
//                                                         aria-label="Small" 
//                                                         aria-describedby="inputGroup-sizing-sm" 
//                                                         value={this.state.stock} />
//                                                         </div>
//                                                         <div className="input-group mb-3">
//                                                         <div className="input-group-prepend">
//                                                             <span className="input-group-text">Image</span>
//                                                         </div>
//                                                         <div className="custom-file">
//                                                             <input 
//                                                             onChange={this.onChangeImageHandler} 
//                                                             type="file" 
//                                                             className="custom-file-input" 
//                                                             id="inputGroupFile01" 
//                                                             name="image"/>
//                                                             <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
//                                                         </div>
//                                                         </div>
//                                                         <button type="submit" className="btn btn-primary">Save Cange</button>
//                                                         </form>
//                                                 </div>
//                                         <div class="modal-footer">
//                                             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                                         </div>
//                                         </div>
//                                     </div>
//                                     </div>
//                                 {/* edit with modal */}

//                         </div>
//                         <div className='col-md-4'>
//                             <button onClick={this.deleteProduct} type="button" class="delete btn btn-outline-danger btn-md" value={product.id}>Delete</button>
//                         </div>
//                     </div>
//                         <p className="card-text" style={{marginTop:'-10px'}}>{product.price} </p>
//                     </div>
//                 </div>
                
//             </div>
//             )
//         })

//         return (
//             <Fragment>
//                 <div>
//                     <div className="pagination" 
//                     style={{marginLeft:'25rem'}}>
//                         <nav aria-label="Page navigation example">
//                             <ul class="pagination">
//                                 <li class="page-item"><a class="page-link" href="#">1</a></li>
//                                 <li class="page-item"><a class="page-link" href="#">2</a></li>
//                                 <li class="page-item"><a class="page-link" href="#">3</a></li>
//                             </ul>
//                         </nav>
//                     </div>
//                     <Navbar searchByName={this.searchByName}  searchCategory={this.searchCategory} sortBy={this.sortBy} />
//                     <div className="row">
//                         {showProduct}
//                     </div>
//             </div>
//             <nav aria-label="Page navigation example">
//   </nav>
//                 </Fragment>
//         )
//     }
// }

// export default Product
