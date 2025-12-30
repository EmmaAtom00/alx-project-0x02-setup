import { ButtonProps } from '@/interfaces'
const sizeClasses = {
  small: "px-16 py-8 text-sm",
  medium: "px-32 py-16 text-base",
  large: "px-56 py-24 text-lg",
};

const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({ size = "medium", shape = "rounded-md", children, onClick }) => {
  return (
    <button
      className={`bg-blue-500 text-white font-semibold ${sizeClasses[size]} ${shapeClasses[shape]} hover:bg-blue-600 transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;