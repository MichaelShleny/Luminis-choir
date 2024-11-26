import React, { useState, useEffect } from "react";
import { CatalogApi, Client } from "square";
import { payments } from "@square/web-sdk";
import "./Store.css"; // Ensure proper file naming and import
import config from "./square-config";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [paymentInstance, setPaymentInstance] = useState(null);
  const [card, setCard] = useState(null);

  useEffect(() => {
    const client = new Client({
      accessToken: config.accessToken,
      environment: config.environment,
    });
    const catalogApi = new CatalogApi(client);

    const fetchProducts = async () => {
      try {
        const response = await catalogApi.listCatalog();
        const items = response.result.objects.filter(
          (item) => item.type === "ITEM"
        );
        setProducts(items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const initializePayments = async () => {
      try {
        const paymentsInstance = payments(config.applicationId, config.locationId);
        setPaymentInstance(paymentsInstance);

        const cardInstance = await paymentsInstance.card();
        await cardInstance.attach("#card-container");
        setCard(cardInstance);
      } catch (error) {
        console.error("Error initializing payments:", error);
      }
    };

    initializePayments();
  }, []);

  const handleCheckout = async () => {
    if (!card) return;
    try {
      const result = await card.tokenize();
      if (result.status === "OK") {
        console.log("Payment token:", result.token);
        alert("Payment successful!");
      } else {
        console.error("Payment failed:", result.errors);
        alert("Payment failed!");
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <div className="store">
      <h1>Our Store</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.item_data.name}</h3>
            <p>${product.item_data.variations[0].item_variation_data.price_money.amount / 100}</p>
            <button onClick={() => alert(`Added ${product.item_data.name} to cart!`)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="checkout">
        <h2>Checkout</h2>
        <div id="card-container"></div>
        <button onClick={handleCheckout}>Complete Purchase</button>
      </div>
    </div>
  );
};

export default Store;
