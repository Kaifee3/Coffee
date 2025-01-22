export default function CartItem(props) {
    return (
      <>
        {props.cartItems.length !== 0 ? (
          props.cartItems.map((product) => (
            <div className="flex gap-8 py-6" key={product.id}>
              <div className="w-3/5">
                <h4 className="text-lg font-medium">{product.name}</h4>
              </div>
  
              <div className="w-1/5 self-center">
                <p className="text-lg">₹{product.price}</p>
              </div>
  
              <div className="w-1/5 flex items-center space-x-3">
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => props.incrementCartItem(product.id)}
                >
                  +
                </button>
                <p className="text-lg">{product.amount}</p>
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => props.removeFromCart(product.id)}
                >
                  -
                </button>
                <button
                  className="px-2 py-1 bg-red-200 text-red-600 rounded hover:bg-red-300"
                  onClick={() => props.deleteFromCart(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-8 mb-6 text-center">Your cart is empty</div>
        )}
      </>
    );
  }
  