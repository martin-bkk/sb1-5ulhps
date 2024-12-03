import React from 'react';
import { Coins, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

export default function TokensTab() {
  const tokenStats = {
    balance: "5,230",
    earned: "12,450",
    spent: "7,220",
    pending: "1,500"
  };

  const transactions = [
    { type: "received", amount: 500, from: "John D.", date: "2024-03-15", status: "completed" },
    { type: "sent", amount: 200, to: "Emma S.", date: "2024-03-14", status: "completed" },
    { type: "received", amount: 1000, from: "Premium Sub", date: "2024-03-13", status: "completed" },
    { type: "pending", amount: 300, to: "Withdrawal", date: "2024-03-12", status: "pending" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/5 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Coins className="w-5 h-5 text-pink-500" />
            <h3 className="text-white font-medium">Balance</h3>
          </div>
          <p className="text-2xl font-bold text-white">{tokenStats.balance}</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <ArrowUpRight className="w-5 h-5 text-green-500" />
            <h3 className="text-white font-medium">Earned</h3>
          </div>
          <p className="text-2xl font-bold text-white">{tokenStats.earned}</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <ArrowDownRight className="w-5 h-5 text-red-500" />
            <h3 className="text-white font-medium">Spent</h3>
          </div>
          <p className="text-2xl font-bold text-white">{tokenStats.spent}</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-yellow-500" />
            <h3 className="text-white font-medium">Pending</h3>
          </div>
          <p className="text-2xl font-bold text-white">{tokenStats.pending}</p>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-4 md:p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {transactions.map((tx, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl">
              <div className="flex items-center gap-3">
                {tx.type === 'received' ? (
                  <ArrowUpRight className="w-5 h-5 text-green-500" />
                ) : tx.type === 'sent' ? (
                  <ArrowDownRight className="w-5 h-5 text-red-500" />
                ) : (
                  <Clock className="w-5 h-5 text-yellow-500" />
                )}
                <div>
                  <p className="text-white font-medium">
                    {tx.type === 'received' ? `From ${tx.from}` : `To ${tx.to}`}
                  </p>
                  <p className="text-purple-200 text-sm">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${
                  tx.type === 'received' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {tx.type === 'received' ? '+' : '-'}{tx.amount}
                </p>
                <p className={`text-sm ${
                  tx.status === 'completed' ? 'text-purple-200' : 'text-yellow-400'
                }`}>
                  {tx.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="w-full bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition-colors">
          Buy Tokens
        </button>
        <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors">
          Withdraw Tokens
        </button>
      </div>
    </div>
  );
}