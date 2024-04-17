import { ChangeEvent, memo, useEffect, useState } from 'react';
import {
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
} from '@chakra-ui/react';
import { User } from '../../../types/api/user';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';

type Props = {
	user: User | null;
	isOpen: boolean;
	isAdmin?: boolean;
	onClose: () => void;
};
// eslint-disable-next-line
export const UserDetailModal = memo(
	({ isOpen, isAdmin = false, onClose, user }: Props) => {
		const [userName, setUserName] = useState('');
		const [name, setName] = useState('');
		const [email, setEmail] = useState('');
		const [phone, setPhone] = useState('');

		useEffect(() => {
			setUserName(user?.username ?? '');
			setName(user?.name ?? '');
			setEmail(user?.email ?? '');
			setPhone(user?.phone ?? '');
		}, [user]);

		const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
			setUserName(e.target.value);
		};
		const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
			setName(e.target.value);
		};
		const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
			setEmail(e.target.value);
		};
		const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
			setPhone(e.target.value);
		};

		const onClickUpdate = () => alert('更新');

		return (
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				autoFocus={false}
				motionPreset="slideInBottom"
			>
				<ModalOverlay>
					<ModalContent pb={2}>
						<ModalHeader>ユーザー詳細</ModalHeader>
						<ModalCloseButton />
						<ModalBody mx={4}>
							<Stack spacing={4}>
								<FormControl>
									<FormLabel>ユーザー名</FormLabel>
									<Input
										onChange={onChangeUserName}
										value={userName}
										isReadOnly={!isAdmin}
									/>
								</FormControl>
								<FormControl>
									<FormLabel>フルネーム</FormLabel>
									<Input
										onChange={onChangeName}
										value={name}
										isReadOnly={!isAdmin}
									/>
								</FormControl>
								<FormControl>
									<FormLabel>MAIL</FormLabel>
									<Input
										onChange={onChangeEmail}
										value={email}
										isReadOnly={!isAdmin}
									/>
								</FormControl>
								<FormControl>
									<FormLabel>TEL</FormLabel>
									<Input
										onChange={onChangePhone}
										value={phone}
										isReadOnly={!isAdmin}
									/>
								</FormControl>
							</Stack>
						</ModalBody>
						{isAdmin && (
							<ModalFooter>
								<PrimaryButton onClick={onClickUpdate}>
									更新
								</PrimaryButton>
							</ModalFooter>
						)}
					</ModalContent>
				</ModalOverlay>
			</Modal>
		);
	}
);
