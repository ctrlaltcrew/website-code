import { useEffect, useRef, useState } from 'react';

interface RobotMascotProps {
  size?: 'sm' | 'md' | 'lg';
}

const RobotMascot = ({ size = 'md' }: RobotMascotProps) => {
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!robotRef.current) return;
      const rect = robotRef.current.getBoundingClientRect();
      // Eye center is roughly at 30% height of the robot container
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height * 0.18;

      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const maxDist = 4.5;
      // Clamp distance
      const rawDist = Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY);
      const dist = Math.min(rawDist / 150, 1) * maxDist;

      setPupilOffset({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scale = size === 'sm' ? 0.7 : size === 'lg' ? 1.3 : 1;

  return (
    <div
      ref={robotRef}
      style={{ transform: `scale(${scale})`, transformOrigin: 'bottom center' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient glow behind robot */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Robot body — floating animation */}
      <div className="robot-scene" style={{ position: 'relative', zIndex: 1 }}>

        {/* Head */}
        <div className="robot-head" style={{ transform: isHovered ? 'rotate(-3deg) translateY(-4px)' : undefined, transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}>
          {/* Antennas */}
          <div className="robot-antenna l" />
          <div className="robot-antenna r" />

          {/* Screen */}
          <div className="robot-screen">
            {/* Eyes */}
            <div className="robot-eyes">
              <div className="robot-eye">
                <div
                  className="robot-pupil"
                  style={{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)` }}
                />
              </div>
              <div className="robot-eye">
                <div
                  className="robot-pupil"
                  style={{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)` }}
                />
              </div>
            </div>

            {/* Mouth / LED strip */}
            <div className="robot-mouth-row">
              <div className="robot-tooth" />
              <div className="robot-tooth off" />
              <div className="robot-tooth" />
              <div className="robot-tooth off" />
              <div className="robot-tooth" />
            </div>
          </div>
        </div>

        {/* Neck connector */}
        <div className="robot-neck" />

        {/* Body */}
        <div className="robot-body">
          {/* Left arm */}
          <div className="robot-arm l" />
          {/* Right arm */}
          <div className="robot-arm r" />

          {/* Chest panel */}
          <div className="robot-chest">
            <div className="robot-leds">
              <div className="robot-led" />
              <div className="robot-led" />
              <div className="robot-led" />
            </div>
            <div className="robot-scan-line" />
          </div>
        </div>

        {/* Legs */}
        <div className="robot-legs">
          <div className="robot-leg" />
          <div className="robot-leg" />
        </div>

        {/* Platform */}
        <div className="robot-platform-wrap">
          <div className="robot-platform" style={{ position: 'relative' }} />
          <div className="robot-shadow-ellipse" />
        </div>
      </div>
    </div>
  );
};

export default RobotMascot;
