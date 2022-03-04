import React from 'react'
import clsx from 'classnames'

type ButtonColor = {
  [K in "green" | "indigo"]: string
};

const filledBgColors: ButtonColor = {
  green: 'bg-green-500',
  indigo: 'bg-indigo-500',
};

const filledBgHoverColors: ButtonColor = {
  green: 'hover:bg-green-700',
  indigo: 'hover:bg-indigo-700',
};

const filledBgFocusColors: ButtonColor = {
  green: 'focus:bg-green-400',
  indigo: 'focus:bg-indigo-400',
};

const filledBgActiveColors: ButtonColor = {
  green: 'active:bg-green-800',
  indigo: 'active:bg-indigo-800',
};

const filledShadowColors: ButtonColor = {
  green: 'shadow-md-green',
  indigo: 'shadow-md-indigo',
};

const filledShadowHoverColors: ButtonColor = {
  green: 'hover:shadow-lg-green',
  indigo: 'hover:shadow-lg-indigo',
};

const outlineTextColors: ButtonColor = {
  green: 'text-black',
  indigo: 'text-indigo-500',
};

const outlineBorderColors: ButtonColor = {
  green: 'border-green-500',
  indigo: 'border-indigo-500',
};

const outlineBgHoverColors: ButtonColor = {
  green: 'hover:bg-green-50',
  indigo: 'hover:bg-indigo-50',
};

const outlineBorderHoverColors: ButtonColor = {
  green: 'hover:border-green-700',
  indigo: 'hover:border-indigo-700',
};

const outlineTextHoverColors: ButtonColor = {
  green: 'hover:text-black',
  indigo: 'hover:text-indigo-700',
};

const outlineBgActiveColors: ButtonColor = {
  green: 'active:bg-green-100',
  indigo: 'active:bg-indigo-100',
};

const initialClasses = 'flex items-center justify-center gap-1 font-bold outline-none tracking-wider focus:outline-none focus:shadow-none transition-all duration-300'

const buttonSizes = {
  sm: 'py-1.5 px-4 text-xs leading-normal',
  lg: 'py-3 px-7 text-sm leading-relaxed',
  regular: 'py-2.5 px-6 text-xs leading-normal'
}


interface IComponentProps {
  children: React.ReactNode;
  color: keyof ButtonColor;
  size?: 'sm' | 'lg' | 'regular';
  buttonType?: 'solid' | 'outline';
  className?: string;
  disabled?: boolean;
  onClick: (e: React.SyntheticEvent) => void;
}

const defaultProps: IComponentProps = {
  children: null,
  color: 'indigo',
  size: 'regular',
  buttonType: 'solid',
  disabled: false,
  onClick: () => new Error('Button onClick not provided'),
}

const Button: React.FC<IComponentProps> = ({ children, color, size, buttonType, className, disabled, ...rest }) => {

  // Ty 2 constanty bych dal mimo komponentu jako funkci ktera bere color a vraci ten array, 
  // pak pridal primo dolu do classnames volani te funkce
  const buttonSolid = [
    'text-white',
    filledBgColors[color],
    filledBgHoverColors[color],
    filledBgFocusColors[color],
    filledBgActiveColors[color],
    filledShadowColors[color],
    filledShadowHoverColors[color],
  ];

  const buttonOutline = [
    'bg-transparent',
    'border',
    'border-solid',
    'shadow-none',
    outlineTextColors[color],
    outlineBorderColors[color],
    outlineBgHoverColors[color],
    outlineBorderHoverColors[color],
    outlineTextHoverColors[color],
    outlineBgHoverColors[color],
    outlineBgActiveColors[color],
  ];

  return (
    <button
      {...rest}
      disabled={disabled}
      className={
        clsx(
          initialClasses,
          buttonSizes[size ?? 'regular'],
          className ?? '',
          disabled ? 'pointer-events-none bg-gray-200' : '',
          ...(buttonType === 'solid' ? buttonSolid : buttonOutline)
        )
      }
    >
      {children}
    </button>
  );
};


Button.defaultProps = defaultProps

export default Button;
