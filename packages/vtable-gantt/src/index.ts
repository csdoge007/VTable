import type { GanttConstructorOptions } from './ts-types';
import type {
  ColumnDefine,
  ColumnsDefine,
  LinkColumnDefine,
  ChartColumnDefine,
  ImageColumnDefine,
  SparklineColumnDefine,
  ProgressbarColumnDefine,
  TextColumnDefine,
  GroupColumnDefine,
  TextAlignType,
  TextBaselineType
} from '@visactor/vtable';
import { Gantt } from './Gantt';

export const version = __VERSION__;
/**
 * @namespace VTable
 */
export {
  /**
   * Types
   * @namespace VTable.TYPES
   */

  GanttConstructorOptions,
  Gantt,
  ColumnsDefine,
  ColumnDefine,
  LinkColumnDefine,
  ChartColumnDefine,
  ImageColumnDefine,
  SparklineColumnDefine,
  ProgressbarColumnDefine,
  TextColumnDefine,
  GroupColumnDefine,
  TextAlignType,
  TextBaselineType
};
