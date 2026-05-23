"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {

    const response = await axios.get(
      "/api/products"
    );

    setProducts(response.data);
  }

  async function reserveProduct(
  productId: number,
  warehouseId: number
) {

  try {

    const response = await axios.post(
  "/api/reservations",
  {
    productId,
    warehouseId
  }
);

window.location.href =
  `/reservation/${response.data.id}`;

  } catch (error: any) {

    if (
      error.response?.status === 409
    ) {
      alert("Out of stock!");
    } else {
      alert("Something went wrong");
    }
  }
}

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Inventory Reservation System
      </h1>

      <div className="space-y-6">

        {products.map((product: any) => (

          <div
            key={product.id}
            className="border p-5 rounded-lg shadow"
          >

            <h2 className="text-2xl font-bold">
              {product.name}
            </h2>

            <div className="mt-4">

              {product.stockEntries.map((stock: any) => (

                <div
                  key={stock.id}
                  className="border mt-3 p-3 rounded"
                >

                  <p>
                    Warehouse:
                    {" "}
                    {stock.warehouse.name}
                  </p>

                  <p>
                    Available Stock:
                    {" "}
                    {stock.totalUnits -
                      stock.reservedUnits}
                  </p>

                  <button
  onClick={() =>
    reserveProduct(
      product.id,
      stock.warehouseId
    )
  }
  className="bg-black text-white px-4 py-2 rounded mt-3"
>
  Reserve
</button>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}