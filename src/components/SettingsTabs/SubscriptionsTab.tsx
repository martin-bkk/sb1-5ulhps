import React from 'react';
import { CreditCard, Gift, Clock, Shield } from 'lucide-react';

export default function SubscriptionsTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Current Subscription</h2>
        <div className="bg-purple-800/30 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Premium Plan</h3>
              <p className="text-purple-200">$29.99/month</p>
            </div>
            <Shield className="w-8 h-8 text-pink-500" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-purple-200">
              <Clock className="w-4 h-4" />
              <span>Next billing date: April 15, 2024</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <CreditCard className="w-4 h-4" />
              <span>Payment method: •••• 4242</span>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
              Change Plan
            </button>
            <button className="border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Payment History</h2>
        <div className="space-y-3">
          {[
            { date: '2024-03-15', amount: '$29.99', status: 'Paid' },
            { date: '2024-02-15', amount: '$29.99', status: 'Paid' },
            { date: '2024-01-15', amount: '$29.99', status: 'Paid' }
          ].map((payment, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
              <div>
                <p className="text-white font-medium">{payment.date}</p>
                <p className="text-purple-200 text-sm">Premium Plan</p>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">{payment.amount}</p>
                <p className="text-green-400 text-sm">{payment.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Gift Subscriptions</h2>
        <div className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
          <div className="flex items-center gap-3">
            <Gift className="w-6 h-6 text-pink-500" />
            <div>
              <p className="text-white font-medium">Send a Gift Subscription</p>
              <p className="text-purple-200 text-sm">Share Premium access with friends</p>
            </div>
          </div>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
            Send Gift
          </button>
        </div>
      </div>
    </div>
  );
}