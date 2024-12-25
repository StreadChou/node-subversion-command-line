import {SvnAddCmdOpt, SvnCommitCmdOpt, SvnDeleteCmdOpt} from "../command-options";

export interface OptAddDeleteCommit {
    add?: SvnAddCmdOpt,
    remove?: SvnDeleteCmdOpt,
    commit?: SvnCommitCmdOpt,
}
