import React from 'react';
import { Wallet, Lock, Coins, Clock, Gift } from 'lucide-react';

interface Plan {
  id: number;
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}

interface SubscriptionPlansProps {
  plans: Plan[];
}

const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ plans }) => {
  return (
    <div className="p-6">
      {/* Blockchain Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-purple-700/30 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <Lock className="w-6 h-6 text-pink-400" />
            <h3 className="text-lg font-semibold text-white">Token-Gated Access</h3>
          </div>
          <p className="text-purple-200">Unlock exclusive content with NFTs or utility tokens, verified on the blockchain.</p>
        </div>
        
        <div className="bg-purple-700/30 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-pink-400" />
            <h3 className="text-lg font-semibold text-white">Pay-Per-Use</h3>
          </div>
          <p className="text-purple-200">Fixed-duration subscriptions or per-content payments via blockchain microtransactions.</p>
        </div>
        
        <div className="bg-purple-700/30 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <Wallet className="w-6 h-6 text-pink-400" />
            <h3 className="text-lg font-semibold text-white">Decentralized Payments</h3>
          </div>
          <p className="text-purple-200">Smart contracts manage automatic renewals directly from your crypto wallet.</p>
        </div>
        
        <div className="bg-purple-700/30 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <Coins className="w-6 h-6 text-pink-400" />
            <h3 className="text-lg font-semibold text-white">Token Rewards</h3>
          </div>
          <p className="text-purple-200">Earn platform tokens for engagement, use for premium content or trading.</p>
        </div>
      </div>

      {/* Subscription Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-purple-700/30 rounded-xl p-6 flex flex-col h-full ${
              plan.recommended ? 'ring-2 ring-pink-500' : ''
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm">
                  Recommended
                </span>
              </div>
            )}
            
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-bold text-white">{plan.price}</span>
              <span className="text-purple-200 ml-2">/ {plan.duration}</span>
            </div>
            
            <ul className="space-y-3 mb-6 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-purple-200">
                  <Gift className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors mt-auto">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;