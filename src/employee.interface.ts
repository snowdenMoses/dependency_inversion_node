export interface IEmployee{
   getEmployeeThatAreMales(): Promise<ISingleEmployeeRecords[]>
   getEmployeeThatAreFemales(): Promise<ISingleEmployeeRecords[]>
}

export interface ISingleEmployeeRecords{
    name: string
    sex: string
}


// interface IAllEmployeeRecords {
//     ISingleEmployeeRecords: ISingleEmployeeRecords[]
// }