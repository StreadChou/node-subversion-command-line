import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnRevertParams} from "../define/command-options";
import {execute} from "../../helper";

export class SubversionRevert extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnRevertParams) {
        let cmd = `cd ${this.cml.wc_abs_path} && ${this.cml.CommandPath} revert ${params.PATH} `;
        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnRevertParams) {
        const cmd = this.getCmd(params);
        return execute(cmd)
    }
}

