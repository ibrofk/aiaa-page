import React from 'react';

interface SquaresProps {
  direction?: string;
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  className?: string;
}

export declare function Squares(props: SquaresProps): React.JSX.Element;
