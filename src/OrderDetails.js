import React from 'react';

const OrderDetails = ({ orders }) => {
  return (
    <div className="p-6 bg-gray-100 h-screen">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      {orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">
              <h2 className="font-medium text-lg">Order ID: {order.id}</h2>
              <p>Total Items: {order.items.length}</p>
              <p>Total Price: ₹{order.total}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">No orders yet! Start shopping now to see your orders here.</p>
      )}
    </div>
  );
};

export default OrderDetails;
