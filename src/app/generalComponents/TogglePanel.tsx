interface TogglePanelProps {
    isActive: boolean;
    onToggle: () => void;
  }
  
  export const TogglePanel = ({ isActive, onToggle }: TogglePanelProps) => {
    return (
      <div className="absolute top-0 w-full h-full z-10 overflow-hidden">
        <div className="absolute top-0 w-full h-full bg-[#7494ec] rounded-[150px] transform transition-transform duration-1000 ease-in-out">
          <div className="absolute top-0 w-1/2 h-full flex flex-col items-center justify-center text-white p-10 transition-[left] duration-700 ease-in-out delay-500">
            <h1 className="text-4xl font-semibold mb-4">Hello, Welcome!</h1>
            <p className="text-sm">Don't have an account?</p>
            <button
              onClick={onToggle}
              className="w-40 h-10 mt-4 border-2 border-white rounded-lg bg-transparent text-white font-semibold cursor-pointer"
            >
              Register
            </button>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center text-white p-10 transition-[right] duration-700 ease-in-out delay-500">
            <h1 className="text-4xl font-semibold mb-4">Welcome Back!</h1>
            <p className="text-sm">Already have an account?</p>
            <button
              onClick={onToggle}
              className="w-40 h-10 mt-4 border-2 border-white rounded-lg bg-transparent text-white font-semibold cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  };