import { AlertProps as AlertProps_2 } from '@mui/material/Alert';
import { JSX } from 'react/jsx-runtime';

export declare const Alert: ({ variant, ref, ...props }: AlertProps) => JSX.Element;

export declare type AlertProps = AlertProps_2 & {
    variant: keyof typeof iconVariant;
};

declare const iconVariant: {
    alert: JSX.Element;
    info: JSX.Element;
};

export { }


declare module "@mui/material/Alert" {
    interface AlertPropsVariantOverrides {
        alert: true;
        info: true;
    }
}
