import { PropsWithChildren } from "react";

export interface HeaderProps extends PropsWithChildren {
    image: {
        src: string;
        alt: string;
    }
}

export const Header = ({
    image,
    children
}: HeaderProps) => {
    return <header>
        <img
            {...image}
        />
        {children}
    </header>
}