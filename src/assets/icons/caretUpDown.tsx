// src\assets\icons\caretUpDown.tsx

import { IconProps } from "../../interfaces/IconProps";

export const CaretUpDown: React.FC<IconProps> = ({pathClassName}) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            className={pathClassName}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.21967 10.2197C5.51256 9.92678 5.98744 9.92678 6.28033 10.2197L8 11.9393L9.71967 10.2197C10.0126 9.92678 10.4874 9.92678 10.7803 10.2197C11.0732 10.5126 11.0732 10.9874 10.7803 11.2803L8.53033 13.5303C8.23744 13.8232 7.76256 13.8232 7.46967 13.5303L5.21967 11.2803C4.92678 10.9874 4.92678 10.5126 5.21967 10.2197Z"
        />
        
        <path
            className={pathClassName}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.7803 5.78033C10.4874 6.07322 10.0126 6.07322 9.71967 5.78033L8 4.06066L6.28033 5.78033C5.98744 6.07322 5.51256 6.07322 5.21967 5.78033C4.92678 5.48744 4.92678 5.01256 5.21967 4.71967L7.46967 2.46967C7.76256 2.17678 8.23744 2.17678 8.53033 2.46967L10.7803 4.71967C11.0732 5.01256 11.0732 5.48744 10.7803 5.78033Z"
        />
    </svg>
);