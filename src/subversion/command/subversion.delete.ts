import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnDeleteParams} from "../define/command-options";
import {execute} from "../../helper";

export class SubversionDelete extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnDeleteParams) {
        if (params.cmdOpt?.message) params.cmdOpt.message = this.protectMessage(params.cmdOpt.message)
        let cmd!: string;
        if (this.isAbsPath(params.PATH)) {
            cmd = `cd ${this.cml.wc_abs_path} && ${this.cml.CommandPath} delete ${params.PATH} `;
        } else {
            cmd = `${this.cml.CommandPath} delete ${params.PATH} `;
        }

        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnDeleteParams) {
        const cmd = this.getCmd(params);
        return execute(cmd)
    }
}

