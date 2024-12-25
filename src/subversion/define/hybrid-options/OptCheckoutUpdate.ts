import {SvnCheckoutCmdOpt, SvnCleanupCmdOpt, SvnUpdateCmdOpt} from "../command-options";

export interface OptCheckoutUpdate {
    checkout?: SvnCheckoutCmdOpt,
    update?: SvnUpdateCmdOpt,

    isCleanup?: boolean,
    cleanup?: SvnCleanupCmdOpt,
}
