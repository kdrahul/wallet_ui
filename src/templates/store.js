// Store is a page where people buy items they desire which leads to payment gateway.
// Store must contain items that are on sale in card form
// Items must have a title, a sub title, a buy button, a thumbnail of the item if possible
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const Store = () => {
  const [items, setItems] = useState([]);

  const [charge, setCharge] = useState([]);
    const history = useHistory();
  const fetchData = async () => {
    const result = await axios
      .get('https://coinbasewallet.herokuapp.com/product')
      .then((response) => {
          console.log("Product Response Data");
        console.log(response);
          return response.data;
      })
      .catch((err) => console.log(err));
      setItems(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const createCharge = async (chosen_item) => {
    // Fetch all data
    // const purchase_item = {
    //   name: 'Youtube Fan Fare',
    //   description: 'A fan fare for youtubers fans',
    //   pricing_type: 'fixed_price',
    //   local_price: {
    //     amount: 400,
    //     currency: 'INR',
    //   },
    //   metadata: {
    //     user: 'Rahul',
    //     starts_at: '2021-04-05 12:00:00',
    //   },
    // };
    const purchase_item = {
      name: chosen_item.name,
      description: chosen_item.description,
      pricing_type: 'fixed_price',
      local_price: {
        amount: chosen_item.price,
        currency: 'INR',
      },
      metadata: {
        user: 'Rahul',
        starts_at: chosen_item.datetime,
      },
    };
    const response = await axios
      .post(
        'https://coinbasewallet.herokuapp.com/payment/charge',

        purchase_item,
        { headers: { 'Content-type': 'application/json; charset=UTF-8' } }
      )
      .then((response) => {
          console.log("Charge Response Data");
          console.log(response.data);
          return response.data;
      })
      .catch((err) => console.log(err));
      setCharge(response);

      console.log("Charge Data");
      console.log(response);
    // Redirect back
      JSON.stringify(response)
     history.push({pathname: '/checkout', state:{data:response}}); 

  };
  return (
    <div className="row row-cols-4">
      {items.map((dets) => {
        return (
          <div className="col">
            <div className="card p-3" key={dets._id}>
              <span className="display-6">{dets.name}</span>
              <span className="text-muted text-end p-2">{dets.description}</span>
              <span className="text-muted text-end p-2">{dets.datetime}</span>
              <button
                className="btn btn-primary"
                onClick={() => {
                  createCharge(dets);
                }}
              >
                Buy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Store;
