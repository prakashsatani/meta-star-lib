import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { LegacyRef } from 'react';
export { default as classnames, default as cns } from 'classnames';

interface InputInterface {
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
declare const Input: ({ elementType, type, className, containerClassName, name, label, value, options, selectChildren, forwardedRef, hasSelectArrow, addTruncateFixForIosDevices, ...props }: props) => react_jsx_runtime.JSX.Element | null;

/**
 * classnameWithArraySupport:
 *
 * Adds array support to classname(). Falsy items are ignored.
 * Does not alter or modify any existing 'classname' functionality
 *
 * @example ```
 *    import { classnames, classname } from 'src/util/bem';
 *    let cn = classname(['foo', 'baz', '', undefined, null])
 *    cn('elem') -> ['foo__elem', 'baz_elem']
 * ```
 * @param string[] strArr
 */
declare const classnameWithArraySupport: (block: string | string[], ...rest: any) => (...params: any) => string;

export { Input, type InputInterface, classnameWithArraySupport as classname };
