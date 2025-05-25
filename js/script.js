
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  return (
    <div className="text-center mt-8">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="rounded-full w-40 h-40 mx-auto"
      />
      <h1 className="text-3xl mt-4 font-bold">Hi, I’m Ayah</h1>
      <h2 className="text-lg mt-2 text-gray-600">
        <Typewriter
          words={[
            'a computer science student at Georgia Tech, concentrated on Information Internetworks and Intelligence, passionate about quantum computing, data science, and software engineering.',
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </h2>
    </div>
  );
}
// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",  // or "./src/**/*" depending on your setup
    ],
    theme: {
      extend: {
        keyframes: {
          jump: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
        animation: {
          jump: 'jump 1s infinite ease-in-out',
        },
      },
    },
    plugins: [],
  }
  