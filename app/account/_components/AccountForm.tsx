'use client'
import React, {useState} from 'react';
import {Button, TextField, Callout} from "@radix-ui/themes";
import {User} from "@prisma/client";
import {z} from 'zod'
import {patchUserSchemas} from "@/app/validationSchemas";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import Spinner from "@/app/components/Spinner";

interface Props {
    user: User
}
type UserData = z.infer<typeof patchUserSchemas>
const AccountForm = ({user}: {user: User}) => {
    const {register, control, handleSubmit, formState: {errors}} = useForm<UserData>({
        resolver: zodResolver(patchUserSchemas)
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsSubmitting(true);
            await axios.patch('/api/users/'+user.id, data);
            setIsUpdated(true);
            //callout disappears after 5 seconds
            setInterval(() => {
                setIsUpdated(false);
            }, 5000);
            setIsSubmitting(false);
        } catch (error) {
            setIsSubmitting(false);
            setError('An unexpected error occurred');
        }
    });
    return (
        <div className='max-w-xl'>
            {isUpdated && (
                <Callout.Root color='green' className='mb-5'>
                    <Callout.Text>
                        Account details updated successfully
                    </Callout.Text>
                </Callout.Root>
            )}
            {error && (
                <Callout.Root color='red' className='mb-5'>
                    <Callout.Text>
                        {error}
                    </Callout.Text>
                </Callout.Root>
            )}
            <form className='flex flex-col gap-6' onSubmit={onSubmit}>
                <TextField.Root>
                    <TextField.Slot>Username</TextField.Slot>
                    <TextField.Input placeholder='Username' defaultValue={user!.name || ''} {...register('name')} />
                </TextField.Root>
                <TextField.Root>
                    <TextField.Slot>Location</TextField.Slot>
                    <TextField.Input placeholder='Location' defaultValue={user!.location || ''} {...register('location')}  />
                </TextField.Root>
                <TextField.Root>
                    <TextField.Slot>Bio</TextField.Slot>
                    <TextField.Input placeholder='Bio' defaultValue={user!.bio || ''} {...register('bio')} />
                </TextField.Root>
                <TextField.Root>
                    <TextField.Slot>Pronouns</TextField.Slot>
                    <TextField.Input placeholder='Pronouns' defaultValue={user!.pronouns || ''} {...register('pronouns')} />
                </TextField.Root>
                <Button disabled={isSubmitting}>
                    {user ? 'Update account details' : 'Submit New User'}{' '}{isSubmitting && <Spinner />}
                </Button>
            </form>
        </div>
    );
};

export default AccountForm;