import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnLogParams, SvnUpdateParams} from "../define/command-options";
import {execute} from "../../helper";
import {SvnLogXmRes, SvnStatusXmRes} from "../define/xml-response";

export class SubversionLog extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnLogParams) {
        let cmd = `${this.cml.CommandPath} log ${params.PATH_REV || this.cml.repo_abs_path} `;
        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnLogParams) {
        const cmd = this.getCmd(params);
        return execute(cmd)
    }

    /** 将XML格式转换成JSON格式 */
    public xmlToJson(xml: string): SvnLogXmRes {
        return super.xmlToJson(xml);
    }
}

