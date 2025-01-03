import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnCleanupParams} from "../define";
import {execute} from "../../helper";

export class SubversionCleanup extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnCleanupParams) {
        let cmd!: string;
        if (params.PATH) {
            cmd = `cd ${this.cml.wc_abs_path} && ${this.cml.CommandPath} cleanup ${params.PATH} `
        } else {
            cmd = `${this.cml.CommandPath} cleanup ${this.cml.wc_abs_path} `
        }
        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnCleanupParams) {
        const cmd = this.getCmd(params);
        return execute(cmd)
    }
}

