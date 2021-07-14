import React from 'react';
import clsx from 'classnames';

const filledBgColors: { [key: string]: string } = {
  green: 'bg-green-500',
  indigo: 'bg-indigo-500',
};

const filledBgHoverColors: { [key: string]: string } = {
  green: 'hover:bg-green-700',
  indigo: 'hover:bg-indigo-700',
};

const filledBgFocusColors: { [key: string]: string } = {
  green: 'focus:bg-green-400',
  indigo: 'focus:bg-indigo-400',
};

const filledBgActiveColors: { [key: string]: string } = {
  green: 'active:bg-green-800',
  indigo: 'active:bg-indigo-800',
};

const filledShadowColors: { [key: string]: string } = {
  green: 'shadow-md-green',
  indigo: 'shadow-md-indigo',
};

const filledShadowHoverColors: { [key: string]: string } = {
  green: 'hover:shadow-lg-green',
  indigo: 'hover:shadow-lg-indigo',
};

const outlineTextColors: { [key: string]: string } = {
  green: 'text-black',
  indigo: 'text-indigo-500',
};

const outlineBorderColors: { [key: string]: string } = {
  green: 'border-green-500',
  indigo: 'border-indigo-500',
};

const outlineBgHoverColors: { [key: string]: string } = {
  green: 'hover:bg-green-50',
  indigo: 'hover:bg-indigo-50',
};

const outlineBorderHoverColors: { [key: string]: string } = {
  green: 'hover:border-green-700',
  indigo: 'hover:border-indigo-700',
};

const outlineTextHoverColors: { [key: string]: string } = {
  green: 'hover:text-black',
  indigo: 'hover:text-indigo-700',
};

const outlineBgActiveColors: { [key: string]: string } = {
  green: 'active:bg-green-100',
  indigo: 'active:bg-indigo-100',
};

const Button: React.FC<{
  children: React.ReactNode;
  color: string;
  buttonType?: string;
  size?: string;
  className?: string;
  disabled?: boolean;
  onClick: (e: React.SyntheticEvent) => void;
}> = ({ children, color, buttonType, size, className, disabled, ...rest }) => {
  let classes = [];

  const buttonFilled = [
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

  const buttonSM = ['py-1.5 px-4', 'text-xs', 'leading-normal'];
  const buttonRegular = ['py-2.5 px-6', 'text-xs', 'leading-normal'];
  const buttonLG = ['py-3 px-7', 'text-sm', 'leading-relaxed'];

  if (size === 'sm') {
    classes.push(...buttonSM);
  } else if (size === 'lg') {
    classes.push(...buttonLG);
  } else {
    classes.push(...buttonRegular);
  }

  if (disabled) {
    classes.push('pointer-events-none bg-gray-200');
  } else {
    if (buttonType === 'outline') {
      classes.push(...buttonOutline);
    } else {
      classes.push(...buttonFilled);
    }
  }

  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx({
        'flex items-center justify-center gap-1 font-bold outline-none tracking-wider focus:outline-none focus:shadow-none transition-all duration-300':
          true,
        ...(className && { [className]: true }),
        [classes.join(' ')]: true,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
