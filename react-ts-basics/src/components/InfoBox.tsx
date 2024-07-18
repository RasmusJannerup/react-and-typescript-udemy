import { PropsWithChildren } from "react";

interface HintBoxProps extends PropsWithChildren {
    mode: "hint"

}

interface WarningBoxProps extends PropsWithChildren {
    mode: "warning"
    severity: "low" | "medium" | "high"
}

export type InfoBoxProps = HintBoxProps | WarningBoxProps;

export const InfoBox = (props: InfoBoxProps) => {

    const { children, mode } = props;
    if (mode === "hint") {
        return <aside className="infobox infobox-hint">
            <p>
                {children}
            </p>
        </aside>
    }

    return <aside className={`infobox infobox-warning warning--${props.severity}`}>
        <h2>
            Warning
        </h2>
        <p>
            {children}
        </p>
    </aside>
};