import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnAddParams} from "../define/command-options";
import {execute} from "../../helper";

export class SubversionAdd extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnAddParams) {
        this.checkWcAbsPathExist();
        let cmd = `cd ${this.cml.wc_abs_path} && ${this.cml.CommandPath} add ${params.PATH} `;
        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnAddParams) {
        const cmd = this.getCmd(params);
        return execute(cmd)
    }
}

