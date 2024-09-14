import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn("uuid")
    uid: string

    @Column()
    name: string

    @Column()
    imageUrl: string

    @OneToMany(() => Category, (category) => category.parent)
    subCategories: Category[]

    @ManyToOne(() => Category, (category) => category.subCategories)
    parent: Category
}