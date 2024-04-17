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
import { User } from '../../../types/api/user';

type Props = {
	user: User | null;
	isOpen: boolean;
	onClose: () => void;
};
// eslint-disable-next-line
export const UserDetailModal = memo(({ isOpen, onClose, user }: Props) => {
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
								<Input value={user?.username} isReadOnly />
							</FormControl>
							<FormControl>
								<FormLabel>フルネーム</FormLabel>
								<Input value={user?.name} isReadOnly />
							</FormControl>
							<FormControl>
								<FormLabel>MAIL</FormLabel>
								<Input value={user?.email} isReadOnly />
							</FormControl>
							<FormControl>
								<FormLabel>TEL</FormLabel>
								<Input value={user?.phone} isReadOnly />
							</FormControl>
						</Stack>
					</ModalBody>
				</ModalContent>
			</ModalOverlay>
		</Modal>
	);
});
