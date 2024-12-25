import {SvnAddCmdOpt, SvnDeleteCmdOpt} from "../command-options";
import {SvnItemStatus} from "../xml-response";

export interface OptAddDelete {
    add?: SvnAddCmdOpt,
    remove?: SvnDeleteCmdOpt,
}

/** 增加和移除所有的命令的返回结果 */
export type AddOrDeleteRes = Array<AddOrDeleteStatusItemRes>

/** 增加和移除所有的命令返回的单个内容 */
export interface AddOrDeleteStatusItemRes {
    file: string;
    before_status: SvnItemStatus,
    after_status: SvnItemStatus;
    res: string;
}