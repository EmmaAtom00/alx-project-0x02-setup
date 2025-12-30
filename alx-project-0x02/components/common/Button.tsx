import { type ButtonProps } from "@/interfaces";
const sizeClasses = {
  small: "max-w-sm mx-auto py-4 text-sm",
  medium: "max-w-md mx-auto py-8 text-base",
  large: "max-w-lg mx-auto py-12 text-lg",
};


const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  children,
  onClick,
}) => {
  return (
    <button
      className={`w-full bg-blue-500 text-white font-semibold ${sizeClasses[size]} ${shapeClasses[shape]} hover:bg-blue-600 transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
