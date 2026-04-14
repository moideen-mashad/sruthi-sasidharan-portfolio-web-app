'use client';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner = ({ size = 20, color = 'currentColor' }: SpinnerProps) => {
  return (
    <div
      className="inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
      style={{ width: `${size}px`, height: `${size}px`, color }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;

