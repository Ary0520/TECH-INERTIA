'use client';

import Link from 'next/link'
import Image from "next/image"
import MoneyHeistLayout from '@/components/MoneyHeistLayout'
import MoneyHeistButton from '@/components/MoneyHeistButton'
import { motion } from 'framer-motion'

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const cardHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  return (
    <MoneyHeistLayout>
      <main className="min-h-screen">
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-sm border-b border-red-700/20"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:justify-between">
                <div className="flex space-x-8">
                  {['HOME', 'ABOUT', 'TRACKS', 'PRIZES', 'SPONSORS', 'TEAM'].map((item) => (
                    <Link 
                      key={item} 
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-red-600 transition-colors hidden sm:block hover:scale-110 transform duration-200"
                      scroll={false}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
                <MoneyHeistButton variant="outline">
                  Register
                </MoneyHeistButton>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <div id="home" className="container mx-auto px-4 pt-32 pb-20">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold tracking-wider text-shadow-glow"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-red-600 inline-block hover:scale-110 transform duration-200">TECH</span>
              {" "}
              <span className="text-white inline-block hover:scale-110 transform duration-200">INERTIA</span>
              {" "}
              <span className="text-red-600 inline-block hover:scale-110 transform duration-200">2025</span>
            </motion.h1>
            <h2 className="text-2xl md:text-4xl text-gray-400 tracking-widest">12-HOUR HACKATHON</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for an exciting journey of coding, innovation, and creativity
            </p>

            {/* Event Details */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-8"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={cardHover}
                className="flex items-center space-x-2"
              >
                <span className="text-red-600">📅</span>
                <span>April 15-16</span>
              </motion.div>
              <motion.div
                whileHover={cardHover}
                className="flex items-center space-x-2"
              >
                <span className="text-red-600">⏰</span>
                <span>12 Hours</span>
              </motion.div>
              <motion.div
                whileHover={cardHover}
                className="flex items-center space-x-2"
              >
                <span className="text-red-600">📍</span>
                <span>Greater Noida</span>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={cardHover}
                className="bg-black/50 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600/50 transition-colors"
              >
                <div className="text-red-600 text-4xl mb-4">👥</div>
                <h3 className="text-2xl font-bold mb-2">3000+ PARTICIPANTS</h3>
                <p className="text-gray-400">From across India</p>
              </motion.div>
              <motion.div
                whileHover={cardHover}
                className="bg-black/50 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600/50 transition-colors"
              >
                <div className="text-red-600 text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-2">$100</h3>
                <p className="text-gray-400">In Prizes</p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <MoneyHeistButton>
                Register Now
              </MoneyHeistButton>
              <MoneyHeistButton variant="outline">
                Learn More
              </MoneyHeistButton>
            </div>
          </motion.div>
        </div>

        {/* Events Organised Section */}
        <div className="container mx-auto px-4 py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider">
              EVENTS
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Explore our exciting lineup of tech and gaming events
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Hackathon Card */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden bg-black/40 group-hover:scale-110 transition-transform">
                <Image
                  src="/hackathon.png"
                  alt="Hackathon"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-red-500 transition-colors">
                HACKATHON
              </h3>
              <p className="text-gray-400 text-center">
                12-hour coding competition to build innovative solutions
              </p>
            </motion.div>

            {/* Ideathon Card */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden bg-black/40 group-hover:scale-110 transition-transform">
        <Image
                  src="/ideathon.png"
                  alt="Ideathon"
                  fill
                  className="object-contain p-1"
          priority
        />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-red-500 transition-colors">
                IDEATHON
              </h3>
              <p className="text-gray-400 text-center">
                Brainstorm and present innovative ideas to solve real-world problems
              </p>
            </motion.div>

            {/* BGMI Card */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden bg-black/40 group-hover:scale-110 transition-transform">
                <Image
                  src="/bgmi.jpeg"
                  alt="BGMI"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-red-500 transition-colors">
                BGMI
              </h3>
              <p className="text-gray-400 text-center">
                Intense battle royale tournament for mobile gaming enthusiasts
              </p>
            </motion.div>

            {/* Valorant Card */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden bg-black/40 group-hover:scale-110 transition-transform">
            <Image
                  src="/valo.jpeg"
                  alt="Valorant"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-red-500 transition-colors">
                VALORANT
              </h3>
              <p className="text-gray-400 text-center">
                Competitive tactical shooter tournament for PC gamers
              </p>
            </motion.div>

            {/* Robo Wars Card */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden bg-black/40 group-hover:scale-110 transition-transform">
                <Image
                  src="/robowars.png"
                  alt="Robo Wars"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-red-500 transition-colors">
                ROBO WARS
              </h3>
              <p className="text-gray-400 text-center">
                Battle of robots in an epic showdown of engineering and strategy
              </p>
            </motion.div>
          </div>
        </div>

        {/* Event Timeline Section */}
        <div className="container mx-auto px-4 py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider flex items-center justify-center gap-4">
              EVENT <span className="text-red-600">TIMELINE</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Mark your calendar for these important dates
            </p>
          </div>

          <div className="relative mt-16">
            {/* Timeline Header */}
            <div className="flex justify-center gap-32 mb-8">
              <h3 className="text-2xl font-bold text-white">Day 1</h3>
              <h3 className="text-2xl font-bold text-gray-400">Day 2</h3>
            </div>

            {/* Timeline Content */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600"></div>

              {/* Timeline Events */}
              <div className="space-y-12">
                {/* Registration Starts */}
                <motion.div
                  whileHover={cardHover}
                  className="flex items-center justify-start w-full"
                >
                  <div className="w-1/2 pr-16 text-right">
                    <div className="bg-black/80 p-6 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2">REGISTRATION STARTS</h4>
                      <p className="text-red-600 text-lg">07:00 AM</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full"></div>
                </motion.div>

                {/* Inauguration Ceremony */}
                <motion.div
                  whileHover={cardHover}
                  className="flex items-center justify-end w-full"
                >
                  <div className="w-1/2 pl-16">
                    <div className="bg-black/80 p-6 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2">INAUGURATION CEREMONY [SIDE QUEST & MEME CONTEST]</h4>
                      <p className="text-red-600 text-lg">09:00 AM</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full"></div>
                </motion.div>

                {/* Hackathon Begins */}
                <motion.div
                  whileHover={cardHover}
                  className="flex items-center justify-start w-full"
                >
                  <div className="w-1/2 pr-16 text-right">
                    <div className="bg-black/80 p-6 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2">HACKATHON BEGINS</h4>
                      <p className="text-red-600 text-lg">12:00 PM</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full"></div>
                </motion.div>

                {/* Lunch Break */}
                <motion.div
                  whileHover={cardHover}
                  className="flex items-center justify-end w-full"
                >
                  <div className="w-1/2 pl-16">
                    <div className="bg-black/80 p-6 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2">LUNCH BREAK</h4>
                      <p className="text-red-600 text-lg">02:00 PM</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full"></div>
                </motion.div>

                {/* Mentorship Round */}
                <motion.div
                  whileHover={cardHover}
                  className="flex items-center justify-start w-full"
                >
                  <div className="w-1/2 pr-16 text-right">
                    <div className="bg-black/80 p-6 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2">MENTORSHIP ROUND 1 [GROUP DISCUSSION]</h4>
                      <p className="text-red-600 text-lg">04:00 PM</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full"></div>
                </motion.div>

                {/* Hacking & Fun Activities */}
                <motion.div
                  whileHover={cardHover}
                  className="flex items-center justify-end w-full"
                >
                  <div className="w-1/2 pl-16">
                    <div className="bg-black/80 p-6 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2">HACKING & FUN ACTIVITIES [GAME BOOTH, RED LIGHT GREEN LIGHT, SPIN THE WHEEL]</h4>
                      <p className="text-red-600 text-lg">06:00 PM</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full"></div>
                </motion.div>

                {/* Dinner */}
                <motion.div
                  whileHover={cardHover}
                  className="flex items-center justify-start w-full"
                >
                  <div className="w-1/2 pr-16 text-right">
                    <div className="bg-black/80 p-6 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2">DINNER</h4>
                      <p className="text-red-600 text-lg">09:00 PM</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Brought to you by Section */}
        <div className="container mx-auto px-4 py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider">
              BROUGHT TO YOU <span className="text-red-600">BY</span>
            </h2>
            <p className="text-xl text-gray-400">
              Meet the institutions and team behind Tech Inertia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* Hosted By */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center">HOSTED BY</h3>
              <motion.div
                whileHover={cardHover}
                className="bg-black/50 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm"
              >
                <div className="h-[300px] relative mb-6">
          <Image
                    src="/gnit.jpeg"
                    alt="GNIT Campus"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h4 className="text-2xl font-bold text-center mb-4">
                  GNIT IPU
                </h4>
                <p className="text-gray-400 text-center">
                  A premier institution fostering innovation and excellence
                </p>
              </motion.div>
            </div>

            {/* Organized By */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center">ORGANIZED BY</h3>
              <motion.div
                whileHover={cardHover}
                className="bg-black/50 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm"
              >
                <div className="h-[300px] relative mb-6">
          <Image
                    src="/bitbuilders.jpg"
                    alt="Bit Builders Team"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h4 className="text-2xl font-bold text-center mb-4">
                  BIT BUILDERS COMMUNITY
                </h4>
                <p className="text-gray-400 text-center">
                  A passionate team dedicated to fostering tech innovation
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="container mx-auto px-4 py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider">
              ABOUT <span className="text-red-600">TECH INERTIA</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Tech Inertia is more than just a hackathon - it's a celebration of innovation, creativity,
              and technological excellence. Join competitive participants in this exciting journey of
              building the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Card 1 */}
            <motion.div
              whileHover={cardHover}
              className="bg-black/50 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600/50 transition-colors"
            >
              <div className="text-red-600 text-4xl mb-6 flex justify-center">
                <code>&lt;/&gt;</code>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                12-HOUR CODING SPRINT
              </h3>
              <p className="text-gray-400 text-center">
                Immerse yourself in an intense coding experience from April 15-16
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={cardHover}
              className="bg-black/50 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600/50 transition-colors"
            >
              <div className="text-red-600 text-4xl mb-6 flex justify-center">
                👥
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                TEAM BUILDING
              </h3>
              <p className="text-gray-400 text-center">
                Form teams of 1-4 members and collaborate to build innovative solutions
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={cardHover}
              className="bg-black/50 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600/50 transition-colors"
            >
              <div className="text-red-600 text-4xl mb-6 flex justify-center">
                💡
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                INNOVATION FOCUS
              </h3>
              <p className="text-gray-400 text-center">
                Work on cutting-edge technologies and solve real-world problems
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={cardHover}
              className="bg-black/50 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600/50 transition-colors"
            >
              <div className="text-red-600 text-4xl mb-6 flex justify-center">
                🚀
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                AMAZING PRIZES
              </h3>
              <p className="text-gray-400 text-center">
                Win exciting prizes worth $100 and gain recognition for your innovations
              </p>
            </motion.div>
          </div>
        </div>

        {/* What You'll Get Section */}
        <div className="container mx-auto px-4 py-20 space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider">
              WHAT YOU'LL GET
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Recognition Card */}
            <motion.div
              whileHover={cardHover}
              className="bg-black/50 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600/50 transition-colors"
            >
              <div className="text-red-600 text-4xl mb-6 flex justify-center">
                🏅
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                RECOGNITION
              </h3>
              <p className="text-gray-400 text-center">
                Get recognized by industry experts
              </p>
            </motion.div>

            {/* Certificates Card */}
            <motion.div
              whileHover={cardHover}
              className="bg-black/50 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600/50 transition-colors"
            >
              <div className="text-red-600 text-4xl mb-6 flex justify-center">
                🎖️
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                CERTIFICATES
              </h3>
              <p className="text-gray-400 text-center">
                Earn certificates of participation
              </p>
            </motion.div>

            {/* Networking Card */}
            <motion.div
              whileHover={cardHover}
              className="bg-black/50 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600/50 transition-colors"
            >
              <div className="text-red-600 text-4xl mb-6 flex justify-center">
                🤝
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                NETWORKING
              </h3>
              <p className="text-gray-400 text-center">
                Connect with like-minded developers
              </p>
            </motion.div>

            {/* Learning Card */}
            <motion.div
              whileHover={cardHover}
              className="bg-black/50 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600/50 transition-colors"
            >
              <div className="text-red-600 text-4xl mb-6 flex justify-center">
                🎓
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                LEARNING
              </h3>
              <p className="text-gray-400 text-center">
                Learn from workshops and mentors
              </p>
            </motion.div>
          </div>
        </div>

        {/* By The Numbers Section */}
        <div className="container mx-auto px-4 py-20 space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider">
              TECH INERTIA <span className="text-red-600">BY THE NUMBERS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Participants */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="text-blue-400 text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
                👥
              </div>
              <h3 className="text-5xl font-bold text-center mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                150+
              </h3>
              <p className="text-gray-400 text-center text-lg">
                Participants
              </p>
            </motion.div>

            {/* Teams */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="text-violet-400 text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
                💻
              </div>
              <h3 className="text-5xl font-bold text-center mb-4 text-violet-400 group-hover:text-violet-300 transition-colors">
                30
              </h3>
              <p className="text-gray-400 text-center text-lg">
                Teams
              </p>
            </motion.div>

            {/* Tracks */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="text-green-400 text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-5xl font-bold text-center mb-4 text-green-400 group-hover:text-green-300 transition-colors">
                5
              </h3>
              <p className="text-gray-400 text-center text-lg">
                Tracks
              </p>
            </motion.div>

            {/* Prize Pool */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="text-red-400 text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
                🏆
              </div>
              <h3 className="text-5xl font-bold text-center mb-4 text-red-400 group-hover:text-red-300 transition-colors">
                $100
              </h3>
              <p className="text-gray-400 text-center text-lg">
                Prize Pool
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="text-yellow-400 text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
                ⏰
              </div>
              <h3 className="text-5xl font-bold text-center mb-4 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                12
              </h3>
              <p className="text-gray-400 text-center text-lg">
                Hours
              </p>
            </motion.div>

            {/* Mentors */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="text-orange-400 text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
                👨‍🏫
              </div>
              <h3 className="text-5xl font-bold text-center mb-4 text-orange-400 group-hover:text-orange-300 transition-colors">
                13
              </h3>
              <p className="text-gray-400 text-center text-lg">
                Mentors
              </p>
            </motion.div>
          </div>
        </div>

        {/* Hackathon Tracks Section */}
        <div id="tracks" className="container mx-auto px-4 py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider">
              HACKATHON <span className="text-red-600">TRACKS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Choose your track and start building innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Blockchain & Web3 Track */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="bg-black/40 p-4 rounded-lg mb-6 w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">⛓️</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-red-500 transition-colors">
                BLOCKCHAIN & WEB3
              </h3>
              <p className="text-gray-400 text-center">
                Create decentralized applications and explore the potential of blockchain technology to revolutionize industries.
              </p>
            </motion.div>

            {/* AI Track */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="bg-black/40 p-4 rounded-lg mb-6 w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-red-500 transition-colors">
                ARTIFICIAL INTELLIGENCE
              </h3>
              <p className="text-gray-400 text-center">
                Leverage AI and machine learning to build intelligent solutions that solve complex problems.
              </p>
            </motion.div>

            {/* Fintech Track */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="bg-black/40 p-4 rounded-lg mb-6 w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-red-500 transition-colors">
                FINTECH
              </h3>
              <p className="text-gray-400 text-center">
                Innovate in financial technology and create solutions that transform the future of finance.
              </p>
            </motion.div>

            {/* Open Innovation Track */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="bg-black/40 p-4 rounded-lg mb-6 w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-red-500 transition-colors">
                OPEN INNOVATION
              </h3>
              <p className="text-gray-400 text-center">
                Think outside the box and develop groundbreaking solutions in any domain you're passionate about.
              </p>
            </motion.div>

            {/* Sustainability Track */}
            <motion.div
              whileHover={cardHover}
              className="group bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="bg-black/40 p-4 rounded-lg mb-6 w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-red-500 transition-colors">
                SUSTAINABILITY
              </h3>
              <p className="text-gray-400 text-center">
                Build solutions that address environmental challenges and promote sustainable development.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Prizes & Rewards Section */}
        <div id="prizes" className="container mx-auto px-4 py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider">
              PRIZES & <span className="text-red-600">REWARDS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Win exciting prizes and get recognized for your innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* First Prize */}
            <motion.div
              whileHover={cardHover}
              className="group relative bg-black/80 p-8 rounded-lg border border-yellow-600/20 backdrop-blur-sm hover:border-yellow-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-black font-bold px-4 py-1 rounded-full">
                1st
              </div>
              <div className="bg-black/40 p-4 rounded-lg mb-6 w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-yellow-500">
                FIRST PRIZE
              </h3>
              <p className="text-3xl font-bold text-center text-yellow-500">
                SAMPLE
              </p>
            </motion.div>

            {/* Second Prize */}
            <motion.div
              whileHover={cardHover}
              className="group relative bg-black/80 p-8 rounded-lg border border-gray-400/20 backdrop-blur-sm hover:border-gray-300 hover:shadow-[0_0_30px_rgba(156,163,175,0.2)] transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 bg-gray-400 text-black font-bold px-4 py-1 rounded-full">
                2nd
              </div>
              <div className="bg-black/40 p-4 rounded-lg mb-6 w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">🥈</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-400">
                SECOND PRIZE
              </h3>
              <p className="text-3xl font-bold text-center text-gray-400">
                SAMPLE
              </p>
            </motion.div>
          </div>

          {/* Mentors Section */}
          <div className="mt-20">
            <h3 className="text-pink-600 text-2xl font-bold mb-6">MENTORS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Mentor Card 1 */}
              <motion.div>
                <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden mb-4">
                  <Image
                    src="/director.jpg"
                    alt="Dr. Somendra Shukla"
                    fill
                    className="object-cover scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold">Dr. Somendra Shukla</h4>
                <p className="text-gray-400">SAMPLE</p>
              </motion.div>

              {/* Mentor Card 2 */}
              <motion.div>
                <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                  <Image
                    src="/dean.jpg"
                    alt="Dr. Rakesh Kumar Singh"
                    fill
                    className="object-cover scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold">Dr. Rakesh Kumar Singh</h4>
                <p className="text-gray-400">SAMPLE</p>
              </motion.div>

              {/* Mentor Card 3 */}
              <motion.div>
                <div className="relative w-[250px] h-[250px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/img2.jpg"
                    alt="Aditya"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold">Aditya</h4>
                <p className="text-gray-400">Founder of Bit Builders</p>
              </motion.div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-20">
            <h3 className="text-pink-600 text-2xl font-bold mb-6">TEAM</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Team Card 1 */}
              <motion.div>
                <div className="bg-yellow-400 w-[250px] h-[250px] rounded-lg mb-4"></div>
                <h4 className="text-xl font-bold">SAMPLE</h4>
                <p className="text-gray-400">SAMPLE</p>
              </motion.div>

              {/* Team Card 2 */}
              <motion.div>
                <div className="bg-yellow-400 w-[250px] h-[250px] rounded-lg mb-4"></div>
                <h4 className="text-xl font-bold">SAMPLE</h4>
                <p className="text-gray-400">SAMPLE</p>
              </motion.div>

              {/* Team Card 3 */}
              <motion.div>
                <div className="bg-yellow-400 w-[250px] h-[250px] rounded-lg mb-4"></div>
                <h4 className="text-xl font-bold">SAMPLE</h4>
                <p className="text-gray-400">SAMPLE</p>
              </motion.div>

              {/* Team Card 4 */}
              <motion.div>
                <div className="bg-yellow-400 w-[250px] h-[250px] rounded-lg mb-4"></div>
                <h4 className="text-xl font-bold">SAMPLE</h4>
                <p className="text-gray-400">SAMPLE</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        <div id="sponsors" className="container mx-auto px-4 py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider">
              OUR <span className="text-pink-600">SPONSORS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Meet the organizations that make Tech Inertia possible
            </p>
          </div>

          {/* Gold Sponsors */}
          <div className="mt-20">
            <h3 className="text-pink-600 text-2xl font-bold mb-6">GOLD SPONSORS</h3>
            <p className="text-gray-400 mb-12">Major supporters who empower our mission and help us reach new heights</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sponsor Card 1 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8 flex items-center justify-center">
                <div className="w-full h-[300px] bg-[#1a1a1a] rounded-lg"></div>
              </motion.div>

              {/* Sponsor Card 2 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8 flex items-center justify-center">
                <div className="w-full h-[300px] bg-[#1a1a1a] rounded-lg"></div>
              </motion.div>
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="mt-20">
            <h3 className="text-pink-600 text-2xl font-bold mb-6">SILVER SPONSORS</h3>
            <p className="text-gray-400 mb-12">Crucial contributors who play a significant role in our success</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sponsor Card 1 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8 flex items-center justify-center">
                <div className="w-full h-[200px] bg-[#1a1a1a] rounded-lg"></div>
              </motion.div>

              {/* Sponsor Card 2 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8 flex items-center justify-center">
                <div className="w-full h-[200px] bg-[#1a1a1a] rounded-lg"></div>
              </motion.div>

              {/* Sponsor Card 3 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8 flex items-center justify-center">
                <div className="w-full h-[200px] bg-[#1a1a1a] rounded-lg"></div>
              </motion.div>
            </div>
          </div>

          {/* Bronze Sponsors */}
          <div className="mt-20">
            <h3 className="text-pink-600 text-2xl font-bold mb-6">BRONZE SPONSORS</h3>
            <p className="text-gray-400 mb-12">Valuable partners who provide essential support in our journey</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sponsor Card 1 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8 flex items-center justify-center">
                <div className="w-full h-[200px] bg-[#1a1a1a] rounded-lg"></div>
              </motion.div>

              {/* Sponsor Card 2 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8 flex items-center justify-center">
                <div className="w-full h-[200px] bg-[#1a1a1a] rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div id="team" className="container mx-auto px-4 py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider">
              OUR <span className="text-pink-600">TEAM</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Meet the amazing team behind Tech Inertia
            </p>
          </div>

          {/* Leadership Section */}
          <div className="mt-20">
            <h3 className="text-pink-600 text-2xl font-bold mb-6">LEADERSHIP</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Leadership Card 1 */}
              <motion.div>
                <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                  <Image
                    src="/director.jpg"
                    alt="Dr. Somendra Shukla"
                    fill
                    className="object-cover scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold">Dr. Somendra Shukla</h4>
                <p className="text-gray-400">SAMPLE</p>
              </motion.div>

              {/* Leadership Card 2 */}
              <motion.div>
                <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                  <Image
                    src="/dean.jpg"
                    alt="Dr. Rakesh Kumar Singh"
                    fill
                    className="object-cover scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold">Dr. Rakesh Kumar Singh</h4>
                <p className="text-gray-400">SAMPLE</p>
              </motion.div>

              {/* Leadership Card 3 */}
              <motion.div>
                <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold">SAMPLE</h4>
                <p className="text-gray-400">SAMPLE</p>
              </motion.div>

              {/* Leadership Card 4 */}
              <motion.div>
                <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold">SAMPLE</h4>
                <p className="text-gray-400">SAMPLE</p>
              </motion.div>
            </div>
          </div>

          {/* Lead Organisers Section */}
          <div className="mt-20">
            <h3 className="text-pink-600 text-2xl font-bold mb-6">LEAD ORGANISERS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Lead Organiser Card 1 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <Image
                      src="/img3.jpg"
                      alt="Sachin Gurjar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Sachin Gurjar</h4>
                  <p className="text-gray-400 mb-4">Founder of Bit Builders</p>
                </div>
              </motion.div>

              {/* Lead Organiser Card 2 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <Image
                      src="/img2.jpg"
                      alt="Aditya"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Aditya</h4>
                  <p className="text-gray-400 mb-4">Founder of Bit Builders</p>
                </div>
              </motion.div>

              {/* Lead Organiser Card 3 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <Image
                      src="/img1.jpg"
                      alt="Tushika"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Tushika</h4>
                  <p className="text-gray-400 mb-4">Founder of FFT</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Technical Leads Section */}
          <div className="mt-20">
            <h3 className="text-pink-600 text-2xl font-bold mb-6">TECHNICAL LEADS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Technical Lead Card 1 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <Image
                      src="/img4.jpg"
                      alt="Vivek"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Vivek</h4>
                  <p className="text-gray-400 mb-4">Technical Lead</p>
                </div>
              </motion.div>

              {/* Technical Lead Card 2 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-bold">SAMPLE</h4>
                  <p className="text-gray-400 mb-4">SAMPLE</p>
                </div>
              </motion.div>

              {/* Technical Lead Card 3 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-bold">SAMPLE</h4>
                  <p className="text-gray-400 mb-4">SAMPLE</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Events Head Section */}
        <div className="container mx-auto px-4 py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider flex items-center justify-center gap-4">
              EVENTS <span className="text-red-600">HEAD</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Meet the leaders behind our events
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Event Head Card 1 */}
            <div className="bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm">
              <div className="relative w-[250px] h-[250px] mx-auto mb-6 rounded-lg overflow-hidden bg-black/40">
                <Image
                  src="/saksham.jpg"
                  alt="Saksham"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                Saksham
              </h3>
              <p className="text-gray-400 text-center">
                Event Head
              </p>
            </div>

            {/* Event Head Card 2 */}
            <div className="bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm">
              <div className="relative w-[250px] h-[250px] mx-auto mb-6 rounded-lg overflow-hidden bg-black/40">
                <Image
                  src="/arrushi.jpg"
                  alt="Arrushi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                Arrushi
              </h3>
              <p className="text-gray-400 text-center">
                Event Head
              </p>
            </div>

            {/* Event Head Card 3 */}
            <div className="bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm">
              <div className="relative w-[250px] h-[250px] mx-auto mb-6 rounded-lg overflow-hidden bg-black/40">
                <div className="absolute inset-0 bg-yellow-400"></div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                SAMPLE
              </h3>
              <p className="text-gray-400 text-center">
                SAMPLE
              </p>
            </div>

            {/* Event Head Card 4 */}
            <div className="bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm">
              <div className="relative w-[250px] h-[250px] mx-auto mb-6 rounded-lg overflow-hidden bg-black/40">
                <div className="absolute inset-0 bg-yellow-400"></div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                SAMPLE
              </h3>
              <p className="text-gray-400 text-center">
                SAMPLE
              </p>
            </div>

            <div className="bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm">
              <div className="relative w-[250px] h-[250px] mx-auto mb-6 rounded-lg overflow-hidden bg-black/40">
                <div className="absolute inset-0 bg-yellow-400"></div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                SAMPLE
              </h3>
              <p className="text-gray-400 text-center">
                SAMPLE
              </p>
            </div>

            {/* Event Head Card 5 */}
            {/* <div className="bg-black/80 p-8 rounded-lg border border-red-700/20 backdrop-blur-sm lg:col-start-2 lg:col-span-2">
              <div className="relative w-[250px] h-[250px] mx-auto mb-6 rounded-lg overflow-hidden bg-black/40  ">
                <div className="absolute inset-0 bg-yellow-400"></div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                SAMPLE
              </h3>
              <p className="text-gray-400 text-center">
                SAMPLE
              </p>
            </div> */}
          </div>
        </div>

          {/* Event Management Section */}
          <div className="mt-20">
            <h3 className="text-pink-600 text-2xl font-bold mb-6">EVENT MANAGEMENT</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Event Management Card 1 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <Image
                      src="/img5.jpg"
                      alt="Bhoomika Roy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Bhoomika Roy</h4>
                  <p className="text-gray-400 mb-4">Event Management</p>
                </div>
              </motion.div>

              {/* Event Management Card 2 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <Image
                      src="/img6.jpg"
                      alt="Vaibhav"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Vaibhav</h4>
                  <p className="text-gray-400 mb-4">Event Management</p>
                </div>
              </motion.div>

              {/* Event Management Card 3 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <Image
                      src="/bhoomika.jpg"
                      alt="bhoomika"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Bhoomika</h4>
                  <p className="text-gray-400 mb-4">Event Management</p>
                </div>
              </motion.div>

              {/* Event Management Card 4 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-bold">SAMPLE</h4>
                  <p className="text-gray-400 mb-4">SAMPLE</p>
                </div>
              </motion.div>

              {/* Event Management Card 5 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-bold">SAMPLE</h4>
                  <p className="text-gray-400 mb-4">SAMPLE</p>
                </div>
              </motion.div>

              {/* Event Management Card 6 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-bold">SAMPLE</h4>
                  <p className="text-gray-400 mb-4">SAMPLE</p>
                </div>
              </motion.div>

              {/* Event Management Card 7 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-bold">SAMPLE</h4>
                  <p className="text-gray-400 mb-4">SAMPLE</p>
                </div>
              </motion.div>

              {/* Event Management Card 8 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-bold">SAMPLE</h4>
                  <p className="text-gray-400 mb-4">SAMPLE</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Media Lead Section */}
          <div className="mt-20">
            <h3 className="text-pink-600 text-2xl font-bold mb-6">SOCIAL MEDIA LEAD</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Social Media Lead Card 1 */}
              <motion.div className="bg-[#1a1a1a] rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-pink-600/50 mb-4">
                    <Image
                      src="/img7.jpg"
                      alt="Arbaz Sheikh"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold">Arbaz Sheikh</h4>
                  <p className="text-gray-400 mb-4">Social Media Lead</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        

        {/* Footer */}
        <footer className="bg-black/80 border-t border-red-700/20 backdrop-blur-sm mt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Contact Section */}
              <div className="space-y-6">
                <h3 className="text-pink-600 text-2xl font-bold">CONTACT</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-pink-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>sample@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-pink-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Greater Noida</span>
                  </div>
                </div>
              </div>

              {/* Connect With Us Section */}
              <div className="space-y-6">
                <h3 className="text-pink-600 text-2xl font-bold">CONNECT WITH US</h3>
                <div className="flex space-x-6">
                  <motion.a whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-pink-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://chat.whatsapp.com/DaCGuryLAbmCgZbKRLs3Uf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }} 
                    className="text-gray-400 hover:text-pink-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/company/bit-builders00/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }} 
                    className="text-gray-400 hover:text-pink-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Copyright Section */}
              <div className="space-y-6">
                <div className="text-gray-400">
                  <p>© 2025 TECH INERTIA. All rights reserved.</p>
                  <p className="mt-2">Made with ❤️ by Aryan Sinha & Sachin Gurjar</p>
                </div>
              </div>
            </div>
          </div>
      </footer>
      </main>

      <style jsx global>{`
        .text-shadow-glow {
          text-shadow: 
            0 0 10px rgba(220, 38, 38, 0.5),
            0 0 20px rgba(220, 38, 38, 0.3),
            0 0 30px rgba(220, 38, 38, 0.2);
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.2);
          border-color: rgba(220, 38, 38, 0.5);
        }
      `}</style>
    </MoneyHeistLayout>
  );
}
