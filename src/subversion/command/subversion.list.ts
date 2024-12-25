import {AbstractCommand} from "./abstract-command";
import {SubversionCommandLine} from "../subversion-command-line";
import {SvnListParams} from "../define/command-options";
import {execute} from "../../helper";
import {SvnListXmRes} from "../define/xml-response/SvnListXmlRes";

export class SubversionList extends AbstractCommand {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    /** 生成命令 */
    getCmd(params: SvnListParams) {
        let cmd = `${this.cml.CommandPath} list ${params.TARGET_REV} `;
        cmd = this.cmdAppendOptions(cmd, params);
        return cmd;
    }

    /** 执行 */
    async run(params: SvnListParams) {
        const cmd = this.getCmd(params);
        return execute(cmd)
    }

    /** 将XML格式转换成JSON格式 */
    public xmlToJson(xml: string): SvnListXmRes {
        return super.xmlToJson(xml);
    }
}

