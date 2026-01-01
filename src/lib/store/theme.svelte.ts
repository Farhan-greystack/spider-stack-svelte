export const theme = $state({ current: 'dark' });

export const toggle = () => {
	if (theme.current === 'dark') theme.current = 'light';
	else theme.current = 'dark';
};
