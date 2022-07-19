import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { Button, Table } from "react-bootstrap";
import "./cartitem.css";
import { useSelector, useDispatch } from "react-redux";
import Emptycart from "./Emptycart";
import { useParams } from "react-router";
import { removeFromCart, addToCart, decreaseItem } from "../actions";

export default function Cartitems() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { id } = useParams();

  console.log(id);

  const getdata = useSelector((state) => state.cartreducer.carts);
  const len = getdata.length;

  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  //  add data
  const send = (e) => {
    // toast.success("item added successfully",{autoClose:1000});
    dispatch(addToCart(e));
  };

  // delete item
  const del = (id) => {
    dispatch(removeFromCart(id));
  };

  // remove one
  const delOne = (item) => {
    dispatch(decreaseItem(item));
  };

  return (
    <>
      <Navigation />
      <div className="Container mt-2">
       <h2 className="text-center">All Added Items are Here</h2>  

        <section className="Container1">
          {len == 0 ? (
            <Emptycart />
          ) : (
            getdata.map((item, keys) => {
              return (
                
                <div className="itemsdetails ">
                          {/* <span>Grand Total:</span> */}

                  <div className="items_img d-flex">
                    <div>
                      <img
                        src={item.image}
                        alt=""
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </div>
                    <div className="details">
                      <Table className="mt-5 mx-5">
                        <tr>
                          <td>
                            <p>
                              <strong>
                                Item name:
                              </strong> {item.title}
                            </p>
                            <p>
                              
                              <strong>Price:₹</strong>{item.price}
                            </p>
                            <p>
                              <strong>Quantity:</strong>{item.qnty}
                            </p>

                            <div
                              className="mt-2 mb-3 ml-5 d-flex justify-content-between "
                              style={{
                                width: 100,
                                cursor: "pointer",
                                background: "#ddd",
                                color: "#111",
                              }}
                              id="counter"
                            >
                              <span
                                style={{ fontSize: 24 }}
                                onClick={ item.qnty <=1? ()=>del(item.id):() => delOne(item)}
                              >
                                -
                              </span>
                              <span style={{ fontSize: 22 }}>{item.qnty}</span>
                              <span
                                style={{ fontSize: 24 }}
                                onClick={() => send(item)}
                              >
                                +
                              </span>
                            </div>
                            <p>
                              
                              <strong>
                                Item Total:₹
                              </strong>{item.price * item.qnty}
                            </p>

                            <Button
                              style={{ backgroundColor: "brown" }}
                              className="removeItem"
                              onClick={() => del(item.id)}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })
          )}
        </section>
      </div>
    </>
  );
}
