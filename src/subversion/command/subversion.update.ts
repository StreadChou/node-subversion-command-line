import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnUpdateParams} from "../define/command-options";
import {execute} from "../../helper";

export class SubversionUpdate extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnUpdateParams) {
        let cmd = `${this.cml.CommandPath} update ${params.Path || this.cml.wc_abs_path} `;
        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnUpdateParams) {
        const cmd = this.getCmd(params);
        return execute(cmd)
    }
}

