import React from "react";

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
      limit: 300,
      sana: "11.42.45 08.10.2000",
    };
  }
  updateInput(key, value) {
    // update react state
    this.setState({
      [key]: value,
      limit: this.state.limit - 1,
    });
  }

  addItem() {
    // add item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem,
    };

    // copy of current list of items
    const list = [...this.state.list];

    // create Date to sana
    let sana1 = new Date().toLocaleString();

    // add new item to list
    list.push(newItem);

    // update state with new list and reset newItem input
    this.setState({
      list,
      newItem: "",
      limit: 300,
      sana: sana1,
    });
  }

  deleteItem(id) {
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being delete
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  searchInp(list1, search) {
    const list = [];
    let item = "";
    list1.map((val) => {
      item = val.value.slice(0, search.length);
      if (item === search) {
        list.push(val);
      }
    });
    item = "";
    console.log(this.state.list);
    console.log(search);
    console.log(list);
    this.setState((this.state.list = list));
  }

  render() {
    return (
      <div
        className="App"
        style={{
          width: "90vw",
          margin: "0 auto",
          backgroundImage: "linerGradient()",
        }}
      >
        <div
          style={{
            border: "5px solid blueviolet",
            padding: "30px",
            borderRadius: "5px",
            overflowY: "auto",
            height: "80vh",
            fontFamily: "sans-serif",
            fontWeight: "800",
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            <span style={{ color: "blueviolet" }}>Magic</span> Note
          </h1>
          <br />
          <input
            type={"text"}
            name="searchInp"
            onChange={(e) => this.searchInp(this.state.list, e.target.value)}
            style={{
              display: "block",
              width: "50vw",
              margin: "10px auto",
              border: "1px solid blueviolet",
              borderRadius: "10px",
              padding: "6px 15px",
              fontSize: "18px",
              outline: "none",
            }}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
            }}
          >
            {this.state.list.map((item) => {
              return (
                <li
                  key={this.addItem.id}
                  style={{
                    overflowWrap: "break-word",
                    overflowY: "auto",
                    border: "1px solid blueviolet",
                    borderRadius: "5px",
                    padding: "5px",
                    display: "inline-block",
                    height: "22vh",
                    width: "18vw",
                    padding: "10px",
                    position: "relative",
                    backgroundImage: "linearGradient(blue,green)",
                  }}
                >
                  {item.value}
                  <button
                    onClick={() => this.deleteItem(item.id)}
                    style={{
                      position: "absolute",
                      bottom: "5px",
                      right: "10px",
                      border: "1px solid blueviolet",
                      borderRadius: "10px",
                      padding: "1px 20px",
                    }}
                  >
                    X
                  </button>
                  <p
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "10px",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    {this.state.sana}
                  </p>
                </li>
              );
            })}
            <div
              style={{
                border: "1px solid blueviolet",
                borderRadius: "5px",
                padding: "5px",
                display: "inline-block",
                height: "22vh",
                width: "18vw",
                position: "relative",
                padding: "10px",
                margin: "0px",
              }}
            >
              <textarea
                wrap="soft"
                tabIndex={2}
                maxLength={300}
                minLength={1}
                type="text"
                placeholder="Type item here..."
                value={this.state.newItem}
                onChange={(e) => this.updateInput("newItem", e.target.value)}
                style={{
                  border: "none",
                  resize: "none",
                  outline: "none",
                  height: "100%",
                  width: "100%",
                }}
              ></textarea>
              <button
                onClick={() => this.addItem()}
                style={{
                  position: "absolute",
                  bottom: "5px",
                  right: "10px",
                  border: "1px solid blueviolet",
                  borderRadius: "10px",
                  padding: "1px 20px",
                }}
              >
                Add
              </button>
              <p
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "10px",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                {this.state.limit}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AppComponent;
