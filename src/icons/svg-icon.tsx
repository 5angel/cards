import { ReactNode } from 'react';

export type SvgProps = {
  children?: ReactNode;
  viewBox?: string;
  size?: number;
  className?: string;
};

export default function SvgIcon({
  children,
  size = 24,
  viewBox = `0 0 ${size} ${size}`,
  className,
}: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={className}
    >
      {children}
    </svg>
  );
}
