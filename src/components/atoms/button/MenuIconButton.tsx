import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
    onOpen: () => void;
}

// eslint-disable-next-line
export const MenuIconButton = memo(({onOpen}: Props) => {
	return (
		<IconButton
			icon={<HamburgerIcon />}
			area-label="menu button"
			size="sm"
			variant="unstyled"
			display={{ base: 'block', md: 'none' }}
			onClick={onOpen}
		/>
	);
});
