import { Human1 } from './main';
function DisInfo(info) {
    for (var _i = 0, info_1 = info; _i < info_1.length; _i++) {
        var shape = info_1[_i];
        shape.DisplayInfo();
    }
}
var EmpInfo = [new Human1()];
DisInfo(EmpInfo);
