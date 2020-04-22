import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../redux/actions/product";
import { Link } from "react-router-dom";
import { Container, Row, Button, Table, Col } from "react-bootstrap";
import NewNavbar from "../Layout/Navbar";
import NewModals from "../Product/addModal";
import EditModals from "../Product/editModal";
import DeleteModal from "../Product/deleteModal";
import { logout } from "../redux/actions/auth";

class ProductDash extends Component {
  state = {
    idProduct: "",
    selectProduct: [],
    selectProductDelete: [],
    activePage: 1,
    searchName: "",
  };

  onClickHandler = (e) => {
    console.log(e);
    this.setState({
      idProduct: e,
    });
  };

  changePage = (e) => {
    this.setState({ activePage: e });
    const data = {
      activePage: e,
      searchName: this.state.searchName,
    };
    this.props.dispatch(getProducts(data));
  };

  convertToRupiah = (angka) => {
    var rupiah = "";
    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
      "Rp. " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("") +
      ",-"
    );
  };

  getProducts = () => {
    const data = {};
    this.props.dispatch(getProducts(data));
  };

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
    this.getProducts();
  }

  onLogout() {
    this.props.dispatch(logout());
    this.props.history.push("/login");
  }

  productEdit = (product) => {
    this.setState({
      selectProduct: product,
    });
  };

  render() {
    const { products, categorys } = this.props;
    console.log(this.props);
    return (
      <Row style={{ backgroundColor: "#ebebeb" }}>
        <NewNavbar onClick={this.onLogout.bind(this)} onhidden={false} />
        <NewModals categorys={categorys} />
        <EditModals categorys={categorys} product={this.state.selectProduct} />
        <DeleteModal
          idProduct={this.state.idProduct}
          product={this.state.selectProductDelete}
        />
        <Row style={{ marginTop: "20px", marginBottom: "20px" }}></Row>
        <Container style={{ marginTop: "5%", paddingTop: "2%" }}>
          <div
            class="card"
            style={{ padding: 10, boxShadow: "10px 5px 10px #2222228c" }}
          >
            <Row style={{ marginTop: "20px" }}>
              <Col sm={10}>
                <h5>Manage product</h5>
              </Col>
              <Col sm={2}>
                <Button
                  type="button"
                  className=" btn btn-primary btn-outline-light"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  style={{ backgroundColor: "#f1a98c", border: "transparent" }}
                >
                  Add
                </Button>
              </Col>
            </Row>
            <Table className="mt-3">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={product.image}
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "10px",
                        }}
                        alt=""
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{this.convertToRupiah(product.price)}</td>
                    <td>{product.stock}</td>
                    <td>
                      <Button
                        className="Button"
                        onClick={() => this.productEdit(product)}
                        data-toggle="modal"
                        data-target="#editModal"
                        variant="danger"
                        value={product.id}
                        variant="warning"
                        style={{
                          backgroundColor: "transparent",
                          border: "transparent",
                        }}
                      >
                        <i
                          className="fas fa-edit"
                          style={{ color: "#929394" }}
                        ></i>
                      </Button>{" "}
                      -{" "}
                      <Button
                        className="Button"
                        onClick={() => this.onClickHandler(product.id)}
                        data-toggle="modal"
                        data-target="#deleteModal"
                        variant="danger"
                        style={{
                          backgroundColor: "transparent",
                          border: "transparent",
                        }}
                      >
                        <i
                          class="fas fa-trash"
                          style={{ color: "#929394" }}
                        ></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              {this.props.pages.map((page) => (
                <li
                  className="page-item"
                  key={page}
                  id={page}
                  onClick={() => this.changePage(page)}
                >
                  <Link className="page-link">{page}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state.categorys.categorys,
    products: state.products.products,
    pages: state.products.pages,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ProductDash);
