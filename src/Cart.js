import React from 'react';
import { jsPDF } from 'jspdf';

export default function Cart(props) {
    const [paymentMethod, setPaymentMethod] = React.useState("");
    const [cardDetails, setCardDetails] = React.useState({ cardNumber: "", expiryDate: "" });
    const [netBankingDetails, setNetBankingDetails] = React.useState({ userId: "", password: "" });
    const [orderId, setOrderId] = React.useState(null);
    const [error, setError] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [showInvoice, setShowInvoice] = React.useState(false);
    const [dineOption, setDineOption] = React.useState(""); 

    const generateOrderId = () => {
        return `ORD-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
    };

    const handleOrder = () => {
        if (!username || !phoneNumber) {
            setError("Please fill in your username and phone number.");
            return;
        }

        if (!paymentMethod) {
            setError("Please select a payment method.");
            return;
        }

        if (paymentMethod === "Credit/Debit Card") {
            if (!cardDetails.cardNumber || !cardDetails.expiryDate) {
                setError("Please fill in your card details.");
                return;
            }
        }

        if (paymentMethod === "Net Banking") {
            if (!netBankingDetails.userId || !netBankingDetails.password) {
                setError("Please fill in your Net Banking details.");
                return;
            }
        }

        if (!dineOption) {
            setError("Please select a dining option.");
            return;
        }

        setError("");
        const newOrderId = generateOrderId();
        setOrderId(newOrderId);
        setShowInvoice(true);
    };

    const handleInputChange = (e, type) => {
        const { name, value } = e.target;
        if (type === "card") {
            setCardDetails({ ...cardDetails, [name]: value });
        } else if (type === "netBanking") {
            setNetBankingDetails({ ...netBankingDetails, [name]: value });
        } else if (type === "user") {
            if (name === "username") {
                setUsername(value);
            } else if (name === "phoneNumber") {
                setPhoneNumber(value);
            }
        } else if (type === "dineOption") {
            setDineOption(value);
        }
    };

    // Function to download invoice as a PDF
    const downloadInvoice = () => {
        const doc = new jsPDF();

        // Add content to the PDF
        doc.setFontSize(18);
        doc.text("Invoice", 20, 20);
        doc.setFontSize(12);
        doc.text(`Order ID: ${orderId}`, 20, 30);
        doc.text(`Username: ${username}`, 20, 40);
        doc.text(`Phone Number: ${phoneNumber}`, 20, 50);
        doc.text(`Total Amount: ₹${props.totalItems}`, 20, 60);
        doc.text(`Payment Method: ${paymentMethod}`, 20, 70);
        doc.text(`Dining Option: ${dineOption}`, 20, 80);  // Include Dining option in invoice
        
        // Add table for cart items
        doc.text("Selected Items:", 20, 90);
        
        if (Array.isArray(props.item) && props.item.length > 0) {
            let yPosition = 100;
            props.item.forEach((item, index) => {
                doc.text(`${index + 1}. ${item.name} - ₹${item.price}`, 20, yPosition);
                yPosition += 10;
            });
        } else {
            doc.text("No items in the cart", 20, 100);
        }

        // Download the PDF
        doc.save("invoice.pdf");
    };

    if (props.isShowing) {
        return (
            <div className="fixed inset-0 z-50">
                <div className="absolute inset-0 bg-gray-500 bg-opacity-80 transition-opacity"></div>
                <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex animate-fadein-right-quick">
                    <div className="relative" style={{ width: '760px' }}>
                        <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                            <button
                                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => props.show(false)}
                            >
                                <span className="sr-only">Close panel</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="h-screen flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                            <div className="px-4 sm:px-6">
                                <p className="text-lg lg:text-2xl font-serif font-medium text-gray-900 border-b pb-8">
                                    Shopping Cart
                                </p>
                            </div>
                            <div className="mt-6 flex-1 px-4 sm:px-6">
                                {!showInvoice ? (
                                    <>
                                        {props.item}
                                        <div className="border-t pt-8 flex">
                                            <div className="w-3/5">
                                                <h2 className="text-lg md:text-xl font-medium">Total:</h2>
                                            </div>
                                            <div className="w-1/5">
                                                <p className="text-lg">₹{props.totalItems}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-lg font-medium mb-2">Enter Your Details:</h3>
                                            <div className="flex flex-col space-y-2">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    placeholder="Username"
                                                    value={username}
                                                    onChange={(e) => handleInputChange(e, "user")}
                                                    className="block w-full p-2 border border-gray-300 rounded mt-2"
                                                />
                                                <input
                                                    type="text"
                                                    name="phoneNumber"
                                                    placeholder="Phone Number"
                                                    value={phoneNumber}
                                                    onChange={(e) => handleInputChange(e, "user")}
                                                    className="block w-full p-2 border border-gray-300 rounded mt-2"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Move Dine-In or Takeaway section here */}
                                        <div className="mt-4">
                                            <h3 className="text-lg font-medium mb-2">Select Dining Option:</h3>
                                            <div className="flex flex-col space-y-2">
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="dineOption"
                                                        value="Dine-In"
                                                        className="mr-2"
                                                        onChange={(e) => handleInputChange(e, "dineOption")}
                                                    />
                                                    Dine-In
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="dineOption"
                                                        value="Takeaway"
                                                        className="mr-2"
                                                        onChange={(e) => handleInputChange(e, "dineOption")}
                                                    />
                                                    Takeaway
                                                </label>
                                            </div>
                                        </div>

                                        {/* Payment method selection */}
                                        <div className="mt-4">
                                            <h3 className="text-lg font-medium mb-2">Select Payment Method:</h3>
                                            <div className="flex flex-col space-y-2">
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        value="Credit/Debit Card"
                                                        className="mr-2"
                                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                                    />
                                                    Credit/Debit Card
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        value="Net Banking"
                                                        className="mr-2"
                                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                                    />
                                                    Net Banking
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        value="Cash on Delivery"
                                                        className="mr-2"
                                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                                    />
                                                    Cash on Delivery
                                                </label>
                                            </div>
                                        </div>

                                        {error && (
                                            <p className="text-red-500 text-sm mt-2">{error}</p>
                                        )}

                                        <div className="mt-4 flex justify-end">
                                            <button
                                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
                                                onClick={handleOrder}
                                            >
                                                Order
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="border p-4 rounded-lg bg-gray-100">
                                        <h2 className="text-lg font-medium mb-4">Invoice</h2>
                                        <p><b>Order ID:</b> {orderId}</p>
                                        <p><b>Username:</b> {username}</p>
                                        <p><b>Phone Number:</b> {phoneNumber}</p>
                                        <p><b>Total Amount:</b> ₹{props.totalItems}</p>
                                        <p><b>Payment Method:</b> {paymentMethod}</p>
                                        <p><b>Dining Option:</b> {dineOption}</p>
                                        <div className="mt-4">
                                            <h3 className="text-lg font-medium mb-2">Download or Take Screenshots</h3>
                                            <div className="border-t pt-2">
                                                {props.item && Array.isArray(props.item) && props.item.map((item, index) => (
                                                    <p key={index}>{item.name} - ₹{item.price}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <button
                                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                                onClick={() => props.show(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                                onClick={downloadInvoice} // Download invoice as PDF
                                            >
                                                Download Invoice
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
