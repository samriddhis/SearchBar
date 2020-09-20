import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import "./App.css";

class SearchComponent extends Component {
  state = {
    inputText: "",
    data: [],
    filteredData: [],
  };

  handleInputChange = (event) => {
    const inputText = event.target.value;

    this.setState((prevState) => {
      const filteredData = prevState.data.filter((element) => {
        return (
          element.id.toLowerCase().includes(inputText.toLowerCase()) ||
          element.name.toLowerCase().includes(inputText.toLowerCase()) ||
          element.address.toLowerCase().includes(inputText.toLowerCase())
        );
      });

      return {
        inputText,
        filteredData,
      };
    });
  };

  fetchUserData = () => {
    fetch(`http://www.mocky.io/v2/5ba8efb23100007200c2750c`)
      .then((response) => response.json())
      .then((data) => {
        const { inputText } = this.state;
        const filteredData = data.filter((element) => {
          return (
            element.id.toLowerCase().includes(inputText.toLowerCase()) ||
            element.name.toLowerCase().includes(inputText.toLowerCase()) ||
            element.address.toLowerCase().includes(inputText.toLowerCase())
          );
        });

        this.setState({
          data,
          filteredData,
        });
      });
  };

  componentWillMount() {
    this.fetchUserData();
  }

  render() {
    return (
      <div className="searchForm">
        <form>
          <div className="searchBarDiv">
            <FaSearch
              className="searchIcon"
              color="#C0C0C0"
              size="18px"
              style={{
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <input
              className="searchInput"
              placeholder="Search users by Id,Address,Name..."
              value={this.state.inputText}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
        <div>
          {this.state.inputText === "" ? (
            <div></div>
          ) : (
            <div>
              {this.state.filteredData.length === 0 ? (
                <div className="noRecordDiv">
                  <span className="noRecordTxt">No User Found</span>
                </div>
              ) : (
                <div className="searchListDiv">
                  {this.state.filteredData.map((i) => (
                    <div className="itemDiv">
                      <span className="itemIdText">{i.id}</span>
                      <span className="itemNameText">
                        <i>{i.name}</i>
                      </span>
                      <span className="itemText">
                        {i.address} {i.pincode}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default SearchComponent;
