import {Avatar, DropdownMenu, Text} from '@radix-ui/themes';
import React from 'react';
import Link from "next/link";

const AvatarDropdown = () => {
    return (
        <>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Avatar
                        src="/images/avatar.jpeg"
                        fallback="?"
                        size='4'
                        radius='full'
                        className='cursor-pointer'
                        referrerPolicy='no-referrer'
                    />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Label>
                        <Text size="2">
                            evanfung@gmail.com
                        </Text>
                    </DropdownMenu.Label>
                    <DropdownMenu.Item>
                        <Link href='#'>Profile</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <Link href='#'>Log out</Link>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </>
    );
};

export default AvatarDropdown;