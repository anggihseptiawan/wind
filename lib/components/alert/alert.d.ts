import { AlertProps as MUIAlertProps } from '@mui/material/Alert';
declare module "@mui/material/Alert" {
    interface AlertPropsVariantOverrides {
        alert: true;
        info: true;
    }
}
export type AlertProps = MUIAlertProps & {
    variant: keyof typeof iconVariant;
};
declare const iconVariant: {
    alert: import("react/jsx-runtime").JSX.Element;
    info: import("react/jsx-runtime").JSX.Element;
};
export declare const Alert: ({ variant, ref, ...props }: AlertProps) => import("react/jsx-runtime").JSX.Element;
export {};
