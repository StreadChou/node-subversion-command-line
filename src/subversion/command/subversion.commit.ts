import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnCommitParams, SvnUpdateParams} from "../define/command-options";
import {execute} from "../../helper";

export class SubversionCommit extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnCommitParams) {
        this.checkWcAbsPathExist();
        if (params.cmdOpt?.message) {
            let message = <string>params.cmdOpt.message;
            message = message.replace(/\"/g, `\\"`)
            params.cmdOpt.message = `"${message}"`
        }
        let cmd!: string;
        if (params.PATH) {
            cmd = `cd ${this.cml.wc_abs_path} && ${this.cml.CommandPath} commit ${params.PATH.join(" ")} `
        } else {
            cmd = `cd ${this.cml.wc_abs_path} && ${this.cml.CommandPath} commit `
        }

        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnCommitParams) {
        const cmd = this.getCmd(params);
        return execute(cmd)
    }
}

