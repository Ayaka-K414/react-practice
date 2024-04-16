import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { memo } from 'react';
// import sakura from '/image/sakura.jpg';

type Props = {
	id: number;
	imagePath: string;
	userName: string;
	fullName: string;
	onClick: (id: number) => void;
};

// eslint-disable-next-line
export const UserCard = memo(({ id, imagePath, userName, fullName, onClick }: Props) => {
	return (
		<Box
			w="260px"
			h={'260px'}
			bg={'white'}
			borderRadius={'10px'}
			shadow={'md'}
			p={4}
			_hover={{ cursor: 'pointer', opacity: 0.8 }}
			onClick={() => onClick(id)}
		>
			<Stack textAlign={'center'}>
				<Image
					src={imagePath}
					alt="userName"
					boxSize={'160px'}
					borderRadius={'full'}
					m="auto"
				/>
				<Text fontSize="lg" fontWeight="bold">
					{userName}
				</Text>
				<Text fontSize={'sm'} color={'gray'}>
					{fullName}
				</Text>
			</Stack>
		</Box>
	);
});
