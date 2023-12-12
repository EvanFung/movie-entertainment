import React from 'react';
import {Card, Flex, Heading, Inset, Strong, Text} from "@radix-ui/themes";
import AccountForm from "@/app/account/_components/AccountForm";
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";
import './account-detail.css'
interface Props {
    params: {
        id: string;
    }
}
const AccountDetailPage = async ({params}: Props) => {
    const user = await prisma.user.findUnique({where: {id : params.id}});
    if(!user) notFound();
    return (
        <div className='right-container'>
            <div className='account-detail'>
                <Card size="5">
                    <Heading size='5' mb='3'>Account Details</Heading>
                    <AccountForm user={user} />
                </Card>

            </div>
        </div>
    );
};

export default AccountDetailPage;