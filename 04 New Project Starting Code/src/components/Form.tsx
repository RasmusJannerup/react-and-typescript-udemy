import { ComponentPropsWithoutRef, FormEvent } from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (data: unknown) => void;
}


export const Form = ({ onSave, ...props }: FormProps) => {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);

    }

    return <form action="" onSubmit={handleSubmit} {...props}>
        {props.children}
    </form>
}