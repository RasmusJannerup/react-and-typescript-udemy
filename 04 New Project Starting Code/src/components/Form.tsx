import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (data: unknown) => void;
}

export interface FormHandle {
    clear: () => void
}

export const Form = forwardRef<FormHandle, FormProps>(({ onSave, children, ...props }: FormProps, ref) => {

    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset();
            }
        }
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    }

    return <form action="" ref={form} onSubmit={handleSubmit} {...props}>
        {children}
    </form>
})
