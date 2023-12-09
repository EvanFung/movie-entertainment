export default interface Movie {
    id: number;
    title: string;
    description: string;
    assignedToUserId: number;
    createdAt: Date;
    updatedAt: Date;
}