import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MenuItem extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    uid: string

    @Column()
    name: string;
    
    @Column()
    price: number;

    @Column({nullable: true})
    description: string

    @Column()
    categoryUid?: string;

    @Column()
    mealType?: "dinner" | "lunch" | "breakfast"

    @Column()
    imageUrl: string;

    @ManyToOne(() => MenuItem, (menuItem) => menuItem.extraOptions, {nullable: true})
    parent: MenuItem

    @OneToMany(() => MenuItem, (menuItem) => menuItem.parent)
    extraOptions: MenuItem[]
}