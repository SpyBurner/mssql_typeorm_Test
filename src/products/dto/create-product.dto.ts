export class CreateProductDto {
    Name: string;
    ProductNumber: string;
    MakeFlag: boolean;
    FinishedGoodsFlag: boolean;
    Color?: string;
    SafetyStockLevel: number;
    ReorderPoint: number;
    StandardCost: number;
    ListPrice: number;
    Size?: string;
    SizeUnitMeasureCode?: string;
    WeightUnitMeasureCode?: string;
    Weight?: number;
    DaysToManufacture: number;
    ProductLine?: string;
    Class?: string;
    Style?: string;
    ProductSubcategoryID?: number;
    ProductModelID?: number;
    SellStartDate: Date;
    SellEndDate?: Date;
    DiscontinuedDate?: Date;
}