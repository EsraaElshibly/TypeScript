// H ======> Module 
export interface Employee{
    firName: string 
    salary ?: number
    timedWork : number
    DisplayInfo : () => void
}

export class Human1 implements Employee
{
    firName: string 
    timedWork : number
    DisplayInfo()
    {
        console.log("Human 1 is Created...");
    }
}


