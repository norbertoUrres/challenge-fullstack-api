"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDnaResult = exports.checkV = exports.checkH = void 0;
let aAuxArr = [];
const iDepth = 4;
const sHealthy = 'Sano';
const sInfected = 'Infectado';
const sImmune = 'Inmune';
function checkH(iColumn, iRow, iDepth) {
    const sCheck = aAuxArr[iColumn][iRow];
    for (let i = iRow + 1; i < iRow + iDepth; i++) {
        const sCompare = aAuxArr[iColumn][i];
        if (sCheck !== sCompare) {
            return false;
        }
    }
    return true;
}
exports.checkH = checkH;
function checkV(iRow, iColumn, iDepth) {
    const sCheck = aAuxArr[iRow][iColumn];
    for (let i = iRow + 1; i < iRow + iDepth; i++) {
        const sCompare = aAuxArr[i][iColumn];
        if (sCheck !== sCompare) {
            return false;
        }
    }
    return true;
}
exports.checkV = checkV;
function getDnaResult(aDna) {
    // Convert each string position to array.
    aAuxArr = [];
    aDna.forEach((sStringDna) => aAuxArr.push(sStringDna.split("")));
    let iCountH = 0, iCountV = 0, iCount = 0, iRow = 0, iColumn = 0;
    for (iRow = 0; iRow <= aAuxArr.length - iDepth; iRow++) {
        for (iColumn = 0; iColumn < aAuxArr.length; iColumn++) {
            // Check horizontal
            if (checkH(iColumn, iRow, iDepth)) {
                iCountH++;
                iCount++;
            }
            // Check vertical
            if (checkV(iRow, iColumn, iDepth)) {
                iCountV++;
                iCount++;
            }
        }
    }
    console.log(aAuxArr);
    if (iCount < 2) {
        return sHealthy;
    }
    else if (iCount >= 2 && iCount < 4) {
        return sInfected;
    }
    else {
        return sImmune;
    }
}
exports.getDnaResult = getDnaResult;
