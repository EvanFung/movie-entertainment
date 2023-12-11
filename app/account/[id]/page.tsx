import React from 'react';
import {Card, Flex, Heading} from "@radix-ui/themes";
import AccountForm from "@/app/account/_components/AccountForm";
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";

interface Props {
    params: {
        id: string;
    }
}
const AccountDetailPage = async ({params}: Props) => {
    const user = await prisma.user.findUnique({where: {id : params.id}});
    if(!user) notFound();
    return (
        <div className='right-container items-center justify-center mx-auto'>
                <Card className='p-20'>
                    <Flex direction='column' gap='3'>
                        <Heading size='5' mb='3'>Account Details</Heading>
                        <AccountForm user={user} />
                    </Flex>
                </Card>
        </div>
    );
};

export default AccountDetailPage;