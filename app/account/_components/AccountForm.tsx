'use client'
import React, {useState} from 'react';
import {Button, TextField} from "@radix-ui/themes";
import {User} from "@prisma/client";
import {useRouter} from "next/navigation";
import {z} from 'zod'
import {patchUserSchemas} from "@/app/validationSchemas";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import Spinner from "@/app/components/Spinner";

interface Props {
    user?: User
}
type UserData = z.infer<typeof patchUserSchemas>
const AccountForm = ({user}: {user: User}) => {
    const router = useRouter();
    const {register, control, handleSubmit, formState: {errors}} = useForm<UserData>({
        resolver: zodResolver(patchUserSchemas)
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsSubmitting(true);
            await axios.patch('/api/users/'+user.id, data);
            // router.push('/account/'+user.id);
            // router.refresh();
            setIsSubmitting(false);
        } catch (error) {
            setIsSubmitting(false);
            setError('An unexpected error occurred');
        }
    });
    return (
        <div className='max-w-xl'>
            {error && (
                <Callout.Root color='red' className='mb-5'>
                    <Callout.Text>
                        {error}
                    </Callout.Text>
                </Callout.Root>
            )}
            <form className='flex flex-col gap-6' onSubmit={onSubmit}>
                <TextField.Root>
                    <TextField.Slot as='label'>Username</TextField.Slot>
                    <TextField.Input placeholder='Username' defaultValue={user?.name} {...register('name')} />
                </TextField.Root>
                <TextField.Root>
                    <TextField.Slot as='label'>Location</TextField.Slot>
                    <TextField.Input placeholder='Location' defaultValue={user?.location} {...register('location')}  />
                </TextField.Root>
                <TextField.Root>
                    <TextField.Slot as='label'>Bio</TextField.Slot>
                    <TextField.Input placeholder='Bio' defaultValue={user?.bio} {...register('bio')} />
                </TextField.Root>
                <TextField.Root>
                    <TextField.Slot as='label'>Pronouns</TextField.Slot>
                    <TextField.Input placeholder='Pronouns' defaultValue={user?.pronouns} {...register('pronouns')} />
                </TextField.Root>
                <Button disabled={isSubmitting}>
                    {user ? 'Update account details' : 'Submit New User'}{' '}{isSubmitting && <Spinner />}
                </Button>
            </form>
        </div>
    );
};

export default AccountForm;