import {LabelHTMLAttributes} from "react";
import "./label.css";
import { classname, cns } from "../../../util/bem";
import React from "react";


const Label = ({ className, children }: LabelHTMLAttributes<any>) => {
  const cn = classname("label-atom");

  return <label className={cns(cn(), className)}>{children}</label>;
};

export default Label;
