import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnInfoParams} from "../define/command-options";
import {execute} from "../../helper";
import {SvnInfoXMLRes} from "../define/xml-response";

export class SubversionInfo extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnInfoParams) {
        const use = params.use || "repo_abs_path";
        const url = this.cml[use];
        let cmd = `${this.cml.CommandPath} info ${url} `;
        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnInfoParams) {
        const cmd = this.getCmd(params);
        return execute(cmd)
    }

    /** 将XML格式转换成JSON格式 */
    public xmlToJson(xml: string): SvnInfoXMLRes {
        return super.xmlToJson(xml);
    }
}

