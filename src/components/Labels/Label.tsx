interface LabelProps {
    htmlFor: string;
    label: string;
    isRequired?: boolean;
    fontBold?: boolean;
}

export default function Label({
    htmlFor,
    label,
    isRequired,
    fontBold,
}: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className="text-zinc-600 text-sm tracking-wider font-medium"
        >
            <div className={`w-full flex pb-0.5 ${fontBold && "font-bold"}`}>
                {" "}
                {label}{" "}
                {isRequired && <div className="text-red-500 pl-0.5">*</div>}
            </div>
        </label>
    );
}

Label.defaultProps = {
    isRequired: false,
    fontBold: false,
};
