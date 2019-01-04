import {widgetItemsReducer} from './reducers/widgetItemsReducer';
import {IWidgetItem} from '../data/widget-items';
import {ActionReducerMap} from '@ngrx/store';

export interface IStore {
    widgetItems: IWidgetItem[];
}

export const reducers: ActionReducerMap<IStore> = {
    widgetItems: widgetItemsReducer
};
