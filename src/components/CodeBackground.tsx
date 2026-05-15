import React, { useMemo, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { Code2, Cpu, Terminal, Database, Cloud, Binary, Brackets, Globe, Laptop, Smartphone, Rocket, Share2 } from 'lucide-react';

const Particle = ({ mouseX, mouseY, color }: any) => {
  const offset = useMemo(() => ({
    x: (Math.random() - 0.5) * 400,
    y: (Math.random() - 0.5) * 400,
    size: Math.random() * 6 + 2,
    duration: 3 + Math.random() * 5,
    delay: Math.random() * 2
  }), []);

  const x = useSpring(mouseX, { damping: 30 + Math.random() * 60, stiffness: 80 + Math.random() * 150 });
  const y = useSpring(mouseY, { damping: 30 + Math.random() * 60, stiffness: 80 + Math.random() * 150 });

  return (
    <motion.div
      style={{ 
        left: x, 
        top: y,
        translateX: offset.x,
        translateY: offset.y,
        width: offset.size,
        height: offset.size,
      }}
      animate={{ 
        opacity: [0.1, 0.6, 0.1],
        scale: [1, 1.2, 0.8, 1],
      }}
      transition={{
        duration: offset.duration,
        repeat: Infinity,
        delay: offset.delay,
        ease: "linear"
      }}
      className={`absolute rounded-full pointer-events-none ${color} blur-[1.5px]`}
    />
  );
};

const StarField = ({ mouseX, mouseY }: any) => {
  const stars = useMemo(() => Array.from({ length: 150 }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    depth: 0.1 + Math.random() * 0.5,
    flickerDelay: Math.random() * 5,
    opacity: 0.1 + Math.random() * 0.4
  })), []);

  return (
    <div className="absolute inset-0 z-0 opacity-40">
      {stars.map((star, i) => {
        const springX = useSpring(mouseX, { damping: 50 + star.depth * 50, stiffness: 50 + star.depth * 50 });
        const springY = useSpring(mouseY, { damping: 50 + star.depth * 50, stiffness: 50 + star.depth * 50 });

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: star.opacity }}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              translateX: springX,
              translateY: springY,
            }}
            className="absolute rounded-full bg-white/40 blur-[0.5px]"
          >
            <motion.div 
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: star.flickerDelay }}
              className="w-full h-full bg-white rounded-full"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

const GalaxyBackground = ({ mouseX, mouseY }: any) => {
  const nebulae = useMemo(() => [
    { x: '15%', y: '20%', size: '600px', color: 'bg-gold/5', duration: 20 },
    { x: '80%', y: '15%', size: '500px', color: 'bg-blue-500/5', duration: 25 },
    { x: '25%', y: '70%', size: '700px', color: 'bg-purple-500/5', duration: 30 },
    { x: '70%', y: '80%', size: '550px', color: 'bg-gold/5', duration: 22 },
  ], []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <StarField mouseX={mouseX} mouseY={mouseY} />
      
      {nebulae.map((nebula, i) => {
        const nebulaX = useSpring(mouseX, { damping: 150, stiffness: 30 });
        const nebulaY = useSpring(mouseY, { damping: 150, stiffness: 30 });

        return (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: nebula.duration, repeat: Infinity, ease: "easeInOut" }}
            style={{
              left: nebula.x,
              top: nebula.y,
              width: nebula.size,
              height: nebula.size,
              translateX: nebulaX,
              translateY: nebulaY,
            }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] ${nebula.color}`}
          />
        );
      })}
    </div>
  );
};

const InteractiveSpotlight = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePos);
    return () => window.removeEventListener('mousemove', updateMousePos);
  }, [mouseX, mouseY]);

  const particles = useMemo(() => [
    ...Array(30).fill('bg-gold'),
    ...Array(15).fill('bg-blue-400'),
    ...Array(10).fill('bg-gold/40')
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <GalaxyBackground mouseX={mouseX} mouseY={mouseY} />
      {/* Primary ambient glow stays as base */}
      <motion.div
        style={{
          left: useSpring(mouseX, { damping: 100, stiffness: 200 }),
          top: useSpring(mouseY, { damping: 100, stiffness: 200 }),
        }}
        className="absolute w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden opacity-10"
      >
        <div className="absolute inset-0 bg-gold/10 blur-[200px]" />
      </motion.div>

      {/* Scattered Particles */}
      {particles.map((color, i) => (
        <Particle 
          key={i} 
          mouseX={mouseX} 
          mouseY={mouseY} 
          color={color}
        />
      ))}
    </div>
  );
};

const CodeElement = ({ children, delay, duration, initialX, initialY, rotate, color }: any) => (
  <motion.div
    initial={{ opacity: 0, x: initialX, y: initialY, rotate: rotate }}
    animate={{ 
      opacity: [0.1, 0.4, 0.1],
      y: [`${parseFloat(initialY)}%`, `${parseFloat(initialY) - 10}%`, `${parseFloat(initialY)}%`],
      rotate: [rotate, rotate + 15, rotate]
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut" 
    }}
    style={{ left: initialX, top: initialY }}
    className={`absolute pointer-events-none select-none ${color} blur-[1px] md:blur-none z-0`}
  >
    {children}
  </motion.div>
);

const GridBackground = () => (
  <div className="absolute inset-0 z-0 opacity-[0.03]">
    <div className="absolute inset-0" style={{ 
      backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }} />
  </div>
);

export const CodeBackground = () => {
  const codeSnippets = useMemo(() => [
    { text: 'const stack = "React/Vite";', color: 'text-gold/30', x: '10%', y: '15%', rotate: -15 },
    { text: 'if (isScaling) { grow(); }', color: 'text-blue-400/20', x: '85%', y: '10%', rotate: 10 },
    { text: 'while (ai) { learn(); }', color: 'text-purple-400/20', x: '12%', y: '75%', rotate: 5 },
    { text: '<div>{smartUI}</div>', color: 'text-emerald-400/20', x: '78%', y: '80%', rotate: -20 },
    { text: 'export default Business;', color: 'text-gold/20', x: '55%', y: '5%', rotate: 0 },
    { text: 'npm run excellence', color: 'text-rose-400/20', x: '92%', y: '40%', rotate: 12 },
    { text: '[...insights]', color: 'text-orange-400/20', x: '3%', y: '35%', rotate: -8 },
    { text: 'await deploy();', color: 'text-blue-300/20', x: '65%', y: '65%', rotate: 15 },
    { text: 'git commit -m "Success"', color: 'text-emerald-300/20', x: '25%', y: '90%', rotate: -5 },
  ], []);

  const icons = useMemo(() => [
    { icon: <Code2 size={24} />, color: 'text-gold/15', x: '20%', y: '25%' },
    { icon: <Cpu size={20} />, color: 'text-blue-400/15', x: '70%', y: '18%' },
    { icon: <Terminal size={22} />, color: 'text-purple-400/15', x: '45%', y: '65%' },
    { icon: <Database size={18} />, color: 'text-emerald-400/15', x: '8%', y: '85%' },
    { icon: <Cloud size={24} />, color: 'text-gold/15', x: '95%', y: '85%' },
    { icon: <Binary size={20} />, color: 'text-rose-400/15', x: '18%', y: '55%' },
    { icon: <Brackets size={26} />, color: 'text-orange-400/15', x: '88%', y: '35%' },
    { icon: <Globe size={22} />, color: 'text-blue-400/15', x: '58%', y: '90%' },
    { icon: <Rocket size={24} />, color: 'text-gold/15', x: '35%', y: '10%' },
    { icon: <Laptop size={20} />, color: 'text-purple-300/15', x: '75%', y: '50%' },
    { icon: <Smartphone size={22} />, color: 'text-emerald-300/15', x: '5%', y: '15%' },
    { icon: <Share2 size={20} />, color: 'text-rose-300/15', x: '82%', y: '70%' },
  ], []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <InteractiveSpotlight />
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-body/0 via-body/20 to-body z-10" />
      
      <div className="relative w-full h-full">
        {codeSnippets.map((snippet, i) => (
          <CodeElement
            key={`code-${i}`}
            initialX={snippet.x}
            initialY={snippet.y}
            rotate={snippet.rotate}
            color={snippet.color}
            delay={i * 0.5}
            duration={10 + (i % 4) * 2}
          >
            <span className="font-mono text-xs md:text-sm font-medium tracking-tight whitespace-nowrap opacity-60">
              {snippet.text}
            </span>
          </CodeElement>
        ))}

        {icons.map((item, i) => (
          <CodeElement
            key={`icon-${i}`}
            initialX={item.x}
            initialY={item.y}
            rotate={0}
            color={item.color}
            delay={i * 0.8}
            duration={12 + (i % 3) * 3}
          >
            {item.icon}
          </CodeElement>
        ))}
      </div>
      
      {/* Dynamic light spots */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/10 blur-[180px] rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 18, repeat: Infinity, delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full"
      />
    </div>
  );
};

