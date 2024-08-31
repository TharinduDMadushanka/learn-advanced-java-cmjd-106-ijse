import {useEffect, useState} from "react";
import OrderType from "../../types/OrderType.tsx";
import axios from "axios";

function Orders() {

    const [orders, setOrders] = useState<OrderType[]>([]);

    async function loadOrders() {

        try {

            const response = await axios.get("http://localhost:8080/orders")
            setOrders(response.data);

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(function (){
        loadOrders();
    })

    return (

        <div className="container mx-auto pt-5 pb-5">
            <h1 className="text-3xl font-semibold mb-5">Orders</h1>

            <table className="w-full border-separate border-spacing-0 border-none text-left">

                <thead>
                <tr>
                    <th className="w-[80px]">Order ID</th>
                    <th className="w-[200px]">Order Date and Time</th>
                    <th className="w-[200px]">Total Amount</th>
                    <th className="w-[200px]">Actions</th>
                </tr>
                </thead>

            </table>

        </div>

    );

}

export default Orders