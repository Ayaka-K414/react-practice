import { memo } from 'react';
import {
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
    Stack,
} from '@chakra-ui/react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    
}
// eslint-disable-next-line
export const UserDetailModal = memo(({isOpen, onClose}: Props) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			autoFocus={false}
			motionPreset="slideInBottom"
		>
			<ModalOverlay>
				<ModalContent pb={6}>
					<ModalHeader>ユーザー詳細</ModalHeader>
					<ModalCloseButton />
					<ModalBody mx={4}>
						<Stack spacing={4}>
							<FormControl>
								<FormLabel>ユーザー名</FormLabel>
								<Input value={'じゃけぇ'} isReadOnly />
							</FormControl>
							<FormControl>
								<FormLabel>フルネーム</FormLabel>
								<Input value={'Takumi Okada'} isReadOnly />
							</FormControl>
							<FormControl>
								<FormLabel>MAIL</FormLabel>
								<Input value={'aaa@bbb.com'} isReadOnly />
							</FormControl>
							<FormControl>
								<FormLabel>TEL</FormLabel>
								<Input value={'090-1234-5678'} isReadOnly />
							</FormControl>
						</Stack>
					</ModalBody>
				</ModalContent>
			</ModalOverlay>
		</Modal>
	);
});
