// src\assets\icons\chevronRight.ts

interface ChevronRightProps {
    className?:string
}

export const ChevronRight: React.FC<ChevronRightProps> = ({className}) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            className={className}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.21967 5.21967C8.51256 4.92678 8.98744 4.92678 9.28033 5.21967L13.5303 9.46967C13.8232 9.76256 13.8232 10.2374 13.5303 10.5303L9.28033 14.7803C8.98744 15.0732 8.51256 15.0732 8.21967 14.7803C7.92678 14.4874 7.92678 14.0126 8.21967 13.7197L11.9393 10L8.21967 6.28033C7.92678 5.98744 7.92678 5.51256 8.21967 5.21967Z"
        />
    </svg>
);