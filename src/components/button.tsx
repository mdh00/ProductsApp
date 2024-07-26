import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      type="button"
      className="bg-fuchsia-800 text-white text-xl px-15 py-4 rounded-md mt-10 hover:bg-fuchsia-900 w-40 h-15"
      onClick={onClick} 
      disabled={disabled}
    >
      <span className="text-m">{label}</span>
    </button>
  );
};

export default Button;