import { PropsWithChildren } from "react";

interface InfoBoxProps extends PropsWithChildren {

}

export const InfoBox = ({ children }: InfoBoxProps) => {
    return <aside>
        <h2>
            Info Box
        </h2>
        <p>
            This is an info box
        </p>
    </aside>
};