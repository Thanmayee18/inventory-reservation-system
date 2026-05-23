"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ReservationPage() {

  const params = useParams();

  const [reservation, setReservation] =
    useState<any>(null);

  useEffect(() => {

    if (params.id) {
      fetchReservation();
    }

  }, [params.id]);

  async function fetchReservation() {

    const response = await axios.get(
      `/api/reservations/${params.id}`
    );

    setReservation(response.data);
  }

  async function confirmReservation() {

    await axios.post(
      `/api/reservations/${params.id}/confirm`
    );

    alert("Reservation Confirmed!");

    fetchReservation();
  }

  if (!reservation) {

    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold">
        Reservation Details
      </h1>

      <div className="border p-5 rounded mt-5">

        <p>
          Product:
          {" "}
          {reservation.product.name}
        </p>

        <p className="mt-2">
          Warehouse:
          {" "}
          {reservation.warehouse.name}
        </p>

        <p className="mt-2">
          Status:
          {" "}
          {reservation.status}
        </p>

        <button
          onClick={confirmReservation}
          className="bg-green-600 text-white px-4 py-2 rounded mt-5"
        >
          Confirm Purchase
        </button>

      </div>

    </div>
  );
}