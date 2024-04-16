import { Button } from '@chakra-ui/react';
import { ReactNode, memo } from 'react';

type Props = {
	children: ReactNode;
	disabled?: boolean;
	loading?: boolean;
	onClick: () => void;
};

// eslint-disable-next-line
export const PrimaryButton = memo(
	({ children, onClick, disabled, loading }: Props) => {
		return (
			<Button
				bg={'teal.400'}
				color={'white'}
				_hover={{ opacity: 0.8 }}
				isDisabled={disabled || loading}
				isLoading={loading}
				onClick={onClick}
			>
				{children}
			</Button>
		);
	}
);
