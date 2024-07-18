import { ComponentPropsWithoutRef, forwardRef } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
    label: string;
    id: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, id, ...props }, ref) => {
    return <p>
        <label htmlFor={id} >{label}</label>
        <input id={id} {...props} ref={ref} />
    </p>
})


