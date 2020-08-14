import React, { Component } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbacks: [],
      name: "",
      message: "",
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios
      .get("http://localhost:9000/customer-feedback")
      //  .then(res => console.log(res.data))
      .then((res) => this.setState({ feedbacks: res.data }))
      .catch((err) => console.log(err));
  }
  

  HandlepostFeed = () => {
    const newFeedback = {
      name : this.state.name,
      message : this.state.message
    }
    axios.post('http://localhost:9000/customer-feedback',newFeedback)
    .then(res => window.location=res.data.path)
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div>
        <div className="feedback-container">
          <form
            action="http://localhost:9000/customer-feedback"
            method="POST"
            className="feedback"
             onSubmit={this.HandlepostFeed}
          >
            <h3 align="center">Your Feedback</h3>
            <div>
              <label>Your Name - </label>
              <input
                type="text"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                name="name"
              />
            </div>
            <div>
              <label>Your Message - </label>
              <input
                type="text"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
                name="message"
              />
            </div>
            <div className="btn">
              
              <motion.button
              initial={{
                background: "none",
              }}
              whileHover={{
                scale: 1.1,
                background: `#581b98`,
                color: "#fff",
                transition: {
                  yoyo: Infinity,
                  duration: 0.5,
                },
              }}
            >
              Send
            </motion.button>
         
            </div>
          </form>
          <div className="customer-feedback">
            <h3 align="center">Customer Feedback</h3>
            {this.state.feedbacks.map((feedback) => (
              <div className="posted-feedback" key={feedback.id}>
                <div>
                  Name
                  <span className="posted-name">{feedback.name}</span>
                </div>
                <div key={feedback.id}>
                  Message
                  <span className="posted-message">{feedback.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
