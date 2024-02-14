// crud.d.ts

import { RowID, RowElement } from './interface';

// Type declarations for crud.js functions
export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;
