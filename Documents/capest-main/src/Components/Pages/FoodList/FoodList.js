import React, { useEffect, useState } from "react";
import "./foodlist.css";
import regular from "../../../../src/regular.jpg";
import doublecheese from "../../../../src/doublecheese.jpg";
import chipsburger from "../../../../src/chipsburger.avif";
import doublepatty from "../../../../src/doublepatty.jpg";
import regularchicken from "../../../../src/regularchicken.jpg";
import bbqchicken from "../../../pizza/bbqchicken.jpg";
import buffalochicken from "../../../pizza/buffalochicken.jpg";
import buffaloranch from "../../../pizza/buffaloranch.jpg";
import chicken from "../../../pizza/chicken.jpg";
import chickenbacon from "../../../pizza/chickenbacon.jpg";
import garlicchicken from "../../../pizza/garlicchicken.jpg";
import homemadebbq from "../../../pizza/homemadebbq.jpg";
import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export default function FoodList() {
  const [result, setResult] = useState(0);
  const [cartitems, setCartitems] = useState([]);
  const [itemCount, setItemCount] = React.useState(1);
  let Sum = 0;
  let items = [];
  useEffect(() => {
    if (cartitems.length != 0) {
      cartitems.map((elem) => {
        Sum = Sum + elem.price;
        return Sum;
      });
      setResult(Sum);
    } else {
      setResult(Sum);
    }
  }, [cartitems]);

  const Additem = (item) => {
    setItemCount(itemCount + 1);

    setCartitems([...cartitems, item]);
  };

  const removeitem = (item) => {
    setItemCount(Math.max(itemCount - 1, 0));
    setCartitems(cartitems.filter((e) => e.price != item.price));
  };
  const products = [
    {
      link: "https://thumbs.dreamstime.com/b/big-burger-isolated-white-43062448.jpg",
      product: "single cheese",
      price: 35,
    },
    {
      link: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
      product: "double cheese",
      price: 55,
    },
    {
      link: "https://www.shutterstock.com/image-photo/delicious-grilled-burgers-260nw-1146199442.jpg",
      product: "burger& chips",
      price: 42,
    },
    {
      link: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
      product: "D/extra cheese",
      price: 60,
    },
    {
      link: "https://thumbs.dreamstime.com/b/big-burger-isolated-white-43062448.jpg",
      product: "combo burger",
      price: 65,
    },
  ];

  // const pizza = [
  //   {
  //     linkk:"",
  //     proname:"",
  //     price:
  //   },
  // ]
  // let temp =

  return (
    <>
      <div className="food">
        {/* <Badge
         color="secondary" badgeContent> */}
        {/* <ShoppingCartIcon /> */} items
        {/* </Badge>  */}
        <br></br>
        {products.map((elem) => {
          return (
            <div className="burgers">
              <div>
                <img
                  src={elem.link}
                  style={{ width: "200px", height: "150px" }}
                ></img>
                <h2>{elem.product}</h2>
                <h2>Price: {elem.price}</h2>
                <button
                  className="add-item"
                  onClick={() => {
                    Additem(elem);
                  }}
                >
                  Add To Cart
                </button>
                <button
                  className="remove-item"
                  onClick={() => {
                    removeitem(elem);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <h2>Total cost: {result}</h2>
    </>
  );
}
