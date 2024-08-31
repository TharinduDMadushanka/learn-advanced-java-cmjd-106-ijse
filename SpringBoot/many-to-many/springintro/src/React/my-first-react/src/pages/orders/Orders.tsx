
function Orders(){

    return(

        <div className="container mx-auto pt-5 pb-5">
            <h1 className="text-3xl font-semibold mb-5">Orders</h1>

            <table className="w-full border-separate border-spacing-0 border-none text-left">

                <thead >
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