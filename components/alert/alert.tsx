import Warning from "@mui/icons-material/Warning"
import Info from "@mui/icons-material/Info"
import MuiAlert, { AlertProps as MUIAlertProps } from "@mui/material/Alert"

declare module "@mui/material/Alert" {
	interface AlertPropsVariantOverrides {
		alert: true
		info: true
	}
}

export type AlertProps = MUIAlertProps & {
	variant: keyof typeof iconVariant
}

const iconVariant = {
	alert: <Warning />,
	info: <Info />
}

export const Alert = ({ variant = "alert", ref, ...props }: AlertProps) => {
	return <MuiAlert ref={ref} variant={variant} {...props} icon={iconVariant[variant]} />
}
