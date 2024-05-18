interface ButtonProps {
	variant: 'primary' | 'secondary' | 'danger',
	label: string,
	onClick: () => void
}

export const Button = ({ variant = "primary", label, onClick }: ButtonProps) => {
	return (
		<>
			<button onClick={onClick} data-variant={variant}>{label}</button>
		</>
	)
}