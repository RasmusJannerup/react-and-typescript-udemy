import { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType> = {
    as?: T;
    children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export const Container = <C extends ElementType>({ as, children, ...props }: ContainerProps<C>) => {
    const Component = as || 'div';

    return <Component {...props}>
        {children}
    </Component>
}