import {Employee, Human1} from './module'
function DisInfo (info: Employee[]):void{
    for (let shape of info)
    {
        shape.DisplayInfo();
    }
}

let EmpInfo: Employee[]=[new Human1()];
DisInfo(EmpInfo);