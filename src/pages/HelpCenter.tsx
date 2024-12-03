import React from 'react';
import { HelpCircle, MessageCircle, Shield, AlertTriangle, Mail } from 'lucide-react';

const faqCategories = [
  {
    title: 'Account & Profile',
    icon: <HelpCircle className="w-6 h-6 text-pink-500" />,
    questions: [
      { q: 'How do I change my profile picture?', a: 'Go to Settings > Profile Photo and click on the camera icon to upload a new photo.' },
      { q: 'How can I reset my password?', a: 'Use the "Forgot Password" option on the login screen to receive password reset instructions via email.' },
      { q: 'Can I change my username?', a: 'Yes, you can change your username once every 30 days in your account settings.' }
    ]
  },
  {
    title: 'Payments & Subscriptions',
    icon: <MessageCircle className="w-6 h-6 text-pink-500" />,
    questions: [
      { q: 'What payment methods are accepted?', a: 'We accept major credit cards, cryptocurrency, and various digital payment methods.' },
      { q: 'How do I cancel my subscription?', a: 'Go to Settings > Subscriptions and click "Cancel Subscription" for the plan you want to end.' },
      { q: 'Are refunds available?', a: 'Refund requests are handled on a case-by-case basis. Contact support for assistance.' }
    ]
  },
  {
    title: 'Safety & Privacy',
    icon: <Shield className="w-6 h-6 text-pink-500" />,
    questions: [
      { q: 'How is my data protected?', a: 'We use industry-standard encryption and security measures to protect your personal information.' },
      { q: 'Can I block another user?', a: 'Yes, visit their profile and click the block button in the top-right menu.' },
      { q: 'How do I report inappropriate content?', a: 'Use the "Report" button on any content or profile to alert our moderation team.' }
    ]
  }
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Help Center</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        {/* Contact Support Card */}
        <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-purple-200 mb-6">
                Our support team is available 24/7 to assist you with any questions or concerns.
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition-colors">
                  <Mail className="w-5 h-5" />
                  Contact Support
                </button>
                <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Live Chat
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <AlertTriangle className="w-24 h-24 text-pink-500 opacity-50" />
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {faqCategories.map((category, index) => (
            <div key={index} className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h2 className="text-xl font-bold text-white">{category.title}</h2>
              </div>
              <div className="space-y-6">
                {category.questions.map((qa, qaIndex) => (
                  <div key={qaIndex}>
                    <h3 className="text-white font-semibold mb-2">{qa.q}</h3>
                    <p className="text-purple-200 text-sm">{qa.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-purple-700/30 transition-colors">
            User Guide
          </button>
          <button className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-purple-700/30 transition-colors">
            Video Tutorials
          </button>
          <button className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-purple-700/30 transition-colors">
            Community Forum
          </button>
          <button className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-purple-700/30 transition-colors">
            Developer API
          </button>
        </div>
      </div>
    </div>
  );
}