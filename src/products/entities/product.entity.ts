import { Entity, Column, PrimaryGeneratedColumn, IsNull } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    productID: number;
    
    @Column()
    Name: string;
    
    @Column()
    ProductNumber: string;

    @Column()
    MakeFlag: boolean;

    @Column()
    FinishedGoodsFlag: boolean;

    @Column({nullable: true})
    Color: string;

    @Column()
    SafetyStockLevel: number;

    @Column()
    ReorderPoint: number;

    @Column()
    StandardCost: number;

    @Column()
    ListPrice: number;

    @Column({nullable: true})
    Size: string;

    @Column({nullable: true})
    SizeUnitMeasureCode: string;

    @Column({nullable: true})
    WeightUnitMeasureCode: string;

    @Column({nullable: true})
    Weight: number;

    @Column()
    DaysToManufacture: number;

    @Column({nullable: true})
    ProductLine: string;

    @Column({nullable: true})
    Class: string;

    @Column({nullable: true})
    Style: string;

    @Column({nullable: true})
    ProductSubcategoryID: number;

    @Column({nullable: true})
    ProductModelID: number;

    @Column()
    SellStartDate: Date;

    @Column({nullable: true})
    SellEndDate: Date;

    @Column({nullable: true})
    DiscontinuedDate: Date;

    @Column()
    rowguid: string;

    @Column()
    ModifiedDate: Date;
}
