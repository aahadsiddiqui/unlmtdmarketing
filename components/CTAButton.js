export function CTAButton({ onClick, children }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#1a5ec3] text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-all hover-scale pulse"
    >
      {children}
    </button>
  );
} 