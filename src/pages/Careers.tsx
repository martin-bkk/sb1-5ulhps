import React from 'react';
import { Briefcase, Code, HeartHandshake, Rocket } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time"
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York, USA",
    type: "Full-time"
  },
  {
    id: 3,
    title: "Community Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time"
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    location: "London, UK",
    type: "Full-time"
  }
];

const benefits = [
  {
    icon: <Rocket className="w-6 h-6 text-pink-500" />,
    title: "Career Growth",
    description: "Continuous learning and development opportunities"
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-pink-500" />,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote options"
  },
  {
    icon: <Code className="w-6 h-6 text-pink-500" />,
    title: "Latest Tech Stack",
    description: "Work with cutting-edge technologies"
  },
  {
    icon: <Briefcase className="w-6 h-6 text-pink-500" />,
    title: "Competitive Package",
    description: "Excellent compensation and benefits"
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Help us build the future of content creation and creator economy. We're looking for passionate individuals to join our growing team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Why Join Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-pink-500/10 rounded-lg p-2">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-purple-200 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Our Culture</h2>
            <p className="text-purple-200 mb-6">
              We believe in fostering an inclusive, innovative, and collaborative environment where every team member can thrive and make a real impact.
            </p>
            <ul className="space-y-4 text-purple-200">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>Inclusive and diverse workplace</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>Innovation-driven mindset</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>Open communication and transparency</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>Work-life balance focus</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Open Positions</h2>
          <div className="grid gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-purple-800/30 rounded-lg p-6 hover:bg-purple-700/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <p className="text-purple-200">{job.department}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                      {job.location}
                    </span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {job.type}
                    </span>
                  </div>
                </div>
                <button className="text-pink-400 hover:text-pink-300 font-medium">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}