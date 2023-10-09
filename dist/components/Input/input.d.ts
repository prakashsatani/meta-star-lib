import React, { LegacyRef } from "react";
import './input.css';
export interface InputInterface {
    elementType?: string;
    className?: string;
    containerClassName?: string;
    name: string;
    value?: any;
    options?: Array<{
        label: string;
        value: string;
    }>;
    type: string;
    selectChildren?: React.ReactNode;
    hasSelectArrow: boolean;
    addTruncateFixForIosDevices: boolean;
    label?: string;
    placeholder?: string;
}
type InputConditionalProps = {
    elementType: "input";
    forwardedRef: LegacyRef<HTMLInputElement> | undefined;
} | {
    elementType: "textarea";
    forwardedRef: LegacyRef<HTMLTextAreaElement> | undefined;
} | {
    elementType: "select";
    forwardedRef: LegacyRef<HTMLSelectElement> | undefined;
};
type props = InputInterface & InputConditionalProps;
declare const Input: ({ elementType, type, className, containerClassName, name, label, value, options, selectChildren, forwardedRef, hasSelectArrow, addTruncateFixForIosDevices, ...props }: props) => React.JSX.Element | null;
export default Input;
