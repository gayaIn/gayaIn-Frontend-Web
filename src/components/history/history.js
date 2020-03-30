import React, { Component } from "react";
import { connect } from "react-redux";
import { getHistory } from "../redux/actions/history";
import { Row } from "react-bootstrap";
import Purchasedetail from "./transactionDetail";
import Chart from "chart.js";
import axios from "axios";
import NewNavbar from "../Layout/Navbar";
require("dotenv/config");

class History extends Component {
  state = {
    id: 0,
    data: []
  };
  getdetail = idPurchase => {
    this.setState({ id: idPurchase });
  };
  getHistory() {
    this.props.dispatch(getHistory());
  }
  
  componentDidMount() {
    this.getHistory();
    axios.get(`${process.env.REACT_APP_URL}/transaction/weekly`).then(res => {
      var x = [];
      var y = [];
      var i = 0;
      res.data.result.map(e => {
        x[i] = e.date_added.toString().substr(0, 10);
        y[i] = e.totalPayment;
        i++;
      });
      var popCanvas = document.getElementById("popChart").getContext("2d");
      new Chart(popCanvas, {
        type: "bar",
        data: {
          labels: x,
          datasets: [
            {
              label: "Last 7 Days Revenue",
              data: y,
              backgroundColor: ["rgba(186, 186, 232)"]
            }
          ]
        }
      });
    });
  }

  onLogout() {
    localStorage.removeItem("user-id");
    localStorage.removeItem("token");
    localStorage.removeItem("status");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("name");
    this.props.history.push("/login");
  }

  render() {
    const PriceParsed = data => {
      return (
        <span>
          {data.data
            .toString()
            .split("")
            .reverse()
            .join("")
            .match(/\d{1,3}/g)
            .join(".")
            .split("")
            .reverse()
            .join("")}
        </span>
      );
    };
    return (
      <div className="row" style={{ backgroundColor: "#ebebeb", height: "200vh"}}>
        <NewNavbar onClick={this.onLogout.bind(this)} onhidden={true} />
        <div className="container">
        <Row style={{ marginTop: "5%", marginBottom: "20px" }}></Row>
          <div hidden={this.props.historyHidden}>
            <div>
              <a
                className="btn btn-info"
                data-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
                style={{backgroundColor: "#f1a98c", border: 'transparent'}}
              >
                Weekly Transaction
              </a>
              <button
                className="btn btn-info ml-2"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample2"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
                style={{backgroundColor: "#f1a98c", border: 'transparent'}}
              >
                History in Table
              </button>
            </div>
            <div
              className="collapse show multi-collapse mb-5"
              id="multiCollapseExample1"
            >
              <div className="card card-body">
                <canvas id="popChart" width="250" height="100"></canvas>
              </div>
            </div>
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="card card-body">
                <table className="table table-striped" name="table-category">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Invoice</th>
                      <th scope="col">Date</th>
                      <th scope="col">Total Payment</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.histories.map((history, index) => (
                      <tr key={index}>
                        <th scope="row">{history.id_transaction}</th>
                        <td>{history.date_added.toString().substr(0, 10)}</td>
                        <td>
                          Rp. <PriceParsed data={history.totalPayment} />
                        </td>
                        <td>
                          <button
                            data-toggle="modal"
                            data-target="#purchase-detail"
                            className="btn btn-info"
                            onClick={() =>
                              this.getdetail(history.id_transaction)
                            }
                          >
                            Detail
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Purchasedetail id={this.state.id} />
          </div>
        </div>
      </div>
    );
  }
}

const mapHistories = state => {
  return {
    histories: state.histories.histories
  };
};

export default connect(mapHistories)(History);
