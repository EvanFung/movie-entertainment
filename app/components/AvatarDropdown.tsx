import {Avatar, DropdownMenu, Text} from '@radix-ui/themes';
import React from 'react';
import Link from "next/link";
import {useSession} from "next-auth/react";
import Skeleton from "react-loading-skeleton";
import { MdOutlineLogin } from "react-icons/md";



const AvatarDropdown = () => {
    const {status, data: session} = useSession();
    if (status === 'loading') return <Skeleton width='3rem' />
    if (status === 'unauthenticated')
        return (
            <Link className='nav-link' href='/api/auth/signin'><MdOutlineLogin className='w-[28px] h-[28px]' /></Link>
        );

    return (
        <>
            {
                status === 'authenticated' && (
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Avatar
                                src={session?.user!.image!}
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
                                    {session!.user!.email}
                                </Text>
                            </DropdownMenu.Label>
                            <DropdownMenu.Item>
                                <Link href='#'>Profile</Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Link href='/api/auth/signout'>Log out</Link>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                )
            }
        </>
    );
};

export default AvatarDropdown;