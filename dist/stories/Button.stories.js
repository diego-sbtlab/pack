"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = require("../components/Button");
const Template = (args) => react_1.default.createElement(Button_1.Button, Object.assign({}, args));
/*

//@ts-ignore
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

//@ts-ignore
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

//@ts-ignore
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/
