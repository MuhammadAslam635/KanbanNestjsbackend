import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from "bcrypt";
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

    @Column({ length: 200 })
    password: string;
    @BeforeInsert()
    async hashPassword(){
        if(this.password){
            this.password = await bcrypt.hash(this.password,10);
        }
    }

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