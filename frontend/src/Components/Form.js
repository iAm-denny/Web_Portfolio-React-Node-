import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

let FormVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

function Form(props) {
  let recipeLabel = props.location.state.recipe;

  let APP_ID = "784be6bb";
  let APP_KEY = "30db7ddc191b0d7b69783b69d65c3154";
  let [activeRecipes, setActiveRecipes] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [sendBack, setSendback] = useState(false);
  const [sendBackErr, setSendbackErr] = useState(false);
  const [sucss, setSucss] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${recipeLabel}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((res) => {
        setActiveRecipes(res.data.hits[0].recipe);
      })
      .catch((error) => console.log(`Somethig${error}`));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const newCustomer = {
      name,
      email,
      phone,
      address,
    };
    axios
      .post("http://localhost:9000/customers", newCustomer)
      .then((res) => {
        setSendback(true);
        // window.location.href=res.path
        setSucss(res.data.success);
        setLoading(false);
      })
      .catch((err) => {
        setSendbackErr(true);
        // window.location.href=err.path
        setErr(err.data.error);
      });
  };

  return (
    <>
      {sendBack ? (
        <div className="susBuy">
          {sucss} <Link to="/Menu">Buy Again?</Link>
        </div>
      ) : null}
      {sendBackErr ? <div className="errBuy">{err}</div> : null}
      <motion.div
        variants={FormVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="recipeContainer">
          <div className="recipeImg">
            <h4 align="center">
              <span className="urOrder">Your Order -</span>{" "}
              <span className="orderName">{activeRecipes.label}</span>
            </h4>
            <img src={activeRecipes.image} />
          </div>

          <div className="formContainer">
            <h2 align="center">Fill Your Information</h2>
            <div className="line2"></div>
            <form
              className="recipeForm"
              onSubmit={handleForm}
              // action="http://localhost:9000/customers"
              // method="POST"
            >
              <div className="txtBox">
                <input
                  type="text"
                  placeholder="Your Name..."
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="txtBox">
                <input
                  type="email"
                  placeholder="Your Email..."
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="txtBox">
                <input
                  type="tel"
                  placeholder="Your Phone Number..."
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="txtBox">
                <input
                  type="text"
                  placeholder="Address..."
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              {loading ? (
                <div className="loading"></div>
              ) : (
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
                  Buy
                </motion.button>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Form;
