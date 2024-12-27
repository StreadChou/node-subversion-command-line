import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnCopyParams, SvnDeleteParams} from "../define/command-options";
import {execute} from "../../helper";

export class SubversionCopy extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnCopyParams) {
        if (params.cmdOpt?.message) params.cmdOpt.message = this.protectMessage(params.cmdOpt.message)

        let cmd = `${this.cml.CommandPath} copy ${params.From} ${params.Target} `;
        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnCopyParams) {
        const cmd = this.getCmd(params);
        console.log(cmd);
        return execute(cmd)
    }
}

