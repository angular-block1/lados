export interface IOrder {
    bill?: number,
    products?: string[],
    payment?: any,
    shipping?: any,
    user?: string,
    status?: string,
    createdAt?: string,
    updatedAt?: string
}