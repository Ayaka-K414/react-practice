/* eslint-disable react-hooks/exhaustive-deps */
import {
	Center,
	Spinner,
	Wrap,
	WrapItem,
	useDisclosure,
} from '@chakra-ui/react';
import { memo, useCallback, useEffect } from 'react';
import { UserCard } from '../organism/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserDetailModal } from '../organism/user/UserDetailModal';
import { useSelectUser } from '../../hooks/UseSelectUser';

// eslint-disable-next-line
export const UserManagement = memo(() => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { getUsers, loading, users } = useAllUsers();
	const { onSelectUser, selectedUser } = useSelectUser();

	console.log(selectedUser);

	useEffect(() => getUsers(), []);

	const onClickUser = useCallback((id: number) => {
		onSelectUser({ id, users });
		onOpen();
	}, []);

	return (
		<>
			{loading ? (
				<Center h={'100vh'}>
					<Spinner />
				</Center>
			) : (
				<Wrap p={{ base: 4, md: 10 }}>
					{users.map((user) => (
						<WrapItem key={user.id} mx={'auto'}>
							<UserCard
								id={user.id}
								imagePath="/image/sakura.jpg"
								userName={user.username}
								fullName={user.name}
								onClick={onClickUser}
							/>
						</WrapItem>
					))}
				</Wrap>
			)}
			<UserDetailModal isOpen={isOpen} onClose={onClose} />
		</>
	);
});
