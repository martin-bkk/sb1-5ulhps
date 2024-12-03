import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full md:w-96 bg-purple-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-white/10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-pink-500" />
              <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center text-purple-200 py-8">
              Your cart is empty
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="bg-purple-800/30 rounded-xl p-4 flex gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-grow">
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <p className="text-purple-200 text-sm">Size: {item.size}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-white/60 hover:text-white"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-white/60 hover:text-white"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-white font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t border-white/10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white">Total:</span>
              <span className="text-white font-bold">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}