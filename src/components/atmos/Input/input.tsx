import React, { LegacyRef } from "react";
import './input.css';
import { classname, cns } from "../../../util/bem";
import Label from "../label/label";

export interface InputInterface {
  elementType?: string;
  className?: string;
  containerClassName?: string;
  name: string;
  value?: any;
  options?: Array<{label: string; value: string}>;
  type: string;
  selectChildren?: React.ReactNode;
  hasSelectArrow: boolean;
  addTruncateFixForIosDevices: boolean;
  label?: string;
  placeholder?: string;
}

type InputConditionalProps =
  | {
      elementType: "input";
      forwardedRef: LegacyRef<HTMLInputElement> | undefined;
    }
  | {
      elementType: "textarea";
      forwardedRef: LegacyRef<HTMLTextAreaElement> | undefined;
    }
  | {
      elementType: "select";
      forwardedRef: LegacyRef<HTMLSelectElement> | undefined;
    };

type props = InputInterface & InputConditionalProps;

const Input = ({
  elementType = "input",
  type = "text",
  className = "",
  containerClassName = "",
  name,
  label = "",
  value = undefined,
  options = [],
  selectChildren = undefined,
  forwardedRef,
  hasSelectArrow = false,
  addTruncateFixForIosDevices = false,
  ...props
}: props) => {
  const cn = classname("input-atom");

  // <input>
  if (elementType === "input") {
    return (
      <div className={cns(cn(), containerClassName)}>
        {label && <Label htmlFor={name}>{label}</Label>}
        <input
          className={cns(
            cn(
              {
                [elementType]: true,
                [type]: true,
              },
              className
            )
          )}
          name={name}
          type={type}
          value={value}
          {...props}
        />
      </div>
    );
  }

  // <textarea>
  if (elementType === "textarea") {
    return (
      <div className={cns(cn(), containerClassName)}>
        {label && <Label htmlFor={name}>{label}</Label>}
        <textarea
          className={cns(
            cn(
              {
                [elementType]: true,
              },
              className
            )
          )}
          name={name}
          {...props}
          value={value}
        />
      </div>
    );
  }

  // <select>
  if (elementType === "select") {
    return (
      <div className={cns(cn(), containerClassName)}>
        {label && <Label htmlFor={name}>{label}</Label>}
        <select
          className={cns(
            cn(
              {
                [elementType]: true,
              },
              className
            )
          )}
          name={name}
          value={value}
          {...props}
        >
          {options.length > 0 &&
            options.map(({ label, value = "", ...optionProps }) => (
              <option
                key={value}
                value={value}
                className={cn("option")}
                {...optionProps}
              >
                {label}
              </option>
            ))}
          {selectChildren}
          {addTruncateFixForIosDevices &&
            window.navigator.userAgent.match(/(iPad|iPhone|iPod touch);/i) && (
              <optgroup label="" />
            )}
        </select>
      </div>
    );
  }

  return null;
};

export default Input;
