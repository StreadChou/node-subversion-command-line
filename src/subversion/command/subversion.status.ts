import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnStatusParams} from "../define/command-options";
import {execute} from "../../helper";
import {SvnListXmRes} from "../define/xml-response/SvnListXmlRes";
import {SvnStatusXmRes} from "../define/xml-response";

export class SubversionStatus extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnStatusParams) {
        this.checkWcAbsPathExist();
        let cmd = `${this.cml.CommandPath} status ${this.cml.wc_abs_path} `;
        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnStatusParams) {
        const cmd = this.getCmd(params);
        return execute(cmd)
    }

    /** 将XML格式转换成JSON格式 */
    public xmlToJson(xml: string): SvnStatusXmRes {
        return super.xmlToJson(xml);
    }
}

