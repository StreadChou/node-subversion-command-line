import {SubversionCommandLine} from "../subversion-command-line";
import {AbstractHybrid} from "./abstract-hybrid";
import {OptCheckoutUpdate} from "../define";
import * as fs from "node:fs";
import {PathException} from "../../exception/PathException";

export class HybridCheckoutUpdate extends AbstractHybrid {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }


    public async run(opt: OptCheckoutUpdate): Promise<{ result: "checkout" | "update", res: string }> {
        if (!this.cml.wc_abs_path) throw new PathException(`SVN的本地路径定义错误 wc_abs_path: ${this.cml.wc_abs_path}`)
        if (!fs.existsSync(this.cml.wc_abs_path)) {
            let res = await this.cml.checkout.run({cmdOpt: opt.checkout});
            return {result: "checkout", res}
        } else {
            const res = await this.cml.update.run({
                cmdOpt: opt.update,
                cleanup: opt.isCleanup,
                cleanupCmdOpt: opt.cleanup
            });
            return {result: "update", res}
        }
    }

}

