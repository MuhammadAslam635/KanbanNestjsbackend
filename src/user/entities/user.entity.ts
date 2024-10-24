import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
export enum UserType {
    ADMIN = 'admin',
    MODERATOR = 'moderator',
    USER = 'user'
}
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    firstname: string;

    @Column({ length: 500 })
    lastname: string;

    @Column({ length: 1000 })
    profileUrl: string;

    @Column({ length: 200 })
    email: string;

    @Column({ length: 1000 })
    password: string;

    @Column({
        type: 'enum',
        enum: UserType,
        default: UserType.USER
    })
    userType: UserType;

    @Column({ default: false })
    emailVerified: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date | null;
}