import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Column } from './data-set/column';
import { Row } from './data-set/row';
import { DataSet } from './data-set/data-set';
import { DataSource } from './data-source/data-source';
export declare class Grid {
    createFormShown: boolean;
    source: DataSource;
    settings: any;
    dataSet: DataSet;
    onSelectRowSource: Subject<any>;
    onDeselectRowSource: Subject<any>;
    private sourceOnChangedSubscription;
    private sourceOnUpdatedSubscription;
    constructor(source: DataSource, settings: any);
    detach(): void;
    showActionColumn(position: string): boolean;
    isCurrentActionsPosition(position: string): boolean;
    isActionsVisible(): boolean;
    isMultiSelectVisible(): boolean;
    getNewRow(): Row;
    setSettings(settings: Object): void;
    getDataSet(): DataSet;
    setSource(source: DataSource): void;
    getSetting(name: string, defaultValue?: any): any;
    getColumns(): Array<Column>;
    getRows(): Array<Row>;
    selectRow(row: Row): void;
    multipleSelectRow(row: Row): void;
    onSelectRow(): Observable<any>;
    onDeselectRow(): Observable<any>;
    edit(row: Row): void;
    create(row: Row, confirmEmitter: EventEmitter<any>): void;
    save(row: Row, confirmEmitter: EventEmitter<any>): void;
    delete(row: Row, confirmEmitter: EventEmitter<any>): void;
    processDataChange(changes: any): void;
    shouldProcessChange(changes: any): boolean;
    /**
     * @breaking-change 1.8.0
     * Need to add `| null` in return type
     *
     * TODO: move to selectable? Separate directive
     */
    determineRowToSelect(changes: any): Row;
    prepareSource(source: any): DataSource;
    getInitialSort(): any;
    getSelectedRows(): Array<any>;
    selectAllRows(status: any): void;
    getFirstRow(): Row;
    getLastRow(): Row;
    private getSelectionInfo;
    private getRowIndexToSelect;
    private getPageToSelect;
    private shouldSkipSelection;
}
