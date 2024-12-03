import React from 'react';
import { Users, Shield, Heart, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About Only4U</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Empowering creators to connect with their audience through meaningful content and genuine interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-purple-200">
              To create a safe, inclusive platform where content creators can thrive and build meaningful connections with their audience while maintaining control over their content and earnings.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-purple-200">
              To revolutionize the creator economy by providing innovative tools and features that empower creators to monetize their content effectively while fostering authentic relationships with their fans.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-pink-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Users className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-white font-semibold mb-2">10M+</h3>
            <p className="text-purple-200">Active Users</p>
          </div>

          <div className="text-center">
            <div className="bg-pink-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-white font-semibold mb-2">500K+</h3>
            <p className="text-purple-200">Content Creators</p>
          </div>

          <div className="text-center">
            <div className="bg-pink-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Shield className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-white font-semibold mb-2">99.9%</h3>
            <p className="text-purple-200">Platform Uptime</p>
          </div>

          <div className="text-center">
            <div className="bg-pink-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Globe className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-white font-semibold mb-2">190+</h3>
            <p className="text-purple-200">Countries Served</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Privacy First</h3>
              <p className="text-purple-200">
                We prioritize user privacy and data security above all else, implementing state-of-the-art encryption and security measures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Creator Empowerment</h3>
              <p className="text-purple-200">
                We provide creators with the tools and support they need to build successful, sustainable businesses.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-purple-200">
                We continuously evolve our platform with cutting-edge features and technologies to stay ahead of industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}