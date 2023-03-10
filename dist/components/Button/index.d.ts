/// <reference types="react" />
interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Index contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
declare const ButtonWrapper: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => JSX.Element;
export { ButtonWrapper as Button };
//# sourceMappingURL=index.d.ts.map