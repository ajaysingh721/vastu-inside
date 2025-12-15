interface WaveDividerProps {
  flip?: boolean;
  color?: 'primary' | 'secondary' | 'white' | 'gray';
}

export default function WaveDivider({ flip = false, color = 'white' }: WaveDividerProps) {
  const colors = {
    primary: '#8b5cf6',
    secondary: '#ec4899',
    white: '#ffffff',
    gray: '#f3f4f6',
  };

  const fillColor = colors[color];

  return (
    <div className={`w-full ${flip ? 'transform rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
