import * as fs from "node:fs";
import {SVNCommand, SVNCommandConfig} from "../src/subversion/define/constant";
import {execute} from "../src/helper";

const main = async () => {
    for (const key in SVNCommandConfig) {
        if (key == SVNCommand.Help) continue;
        const res = await execute(`svn ${key} --help`)
        const res_arr = res.split("有效选项:");
        let info = res_arr[1];
        info = info.replace("(Use '-v' to show global and experimental options.)\n", "");
        let arr = info.split("\n").filter(ele => ele.trim());

        const args_list: Array<Array<string>> = [];
        let temp: Array<string> = [];
        for (let i = 0; i < arr.length; i++) {
            const str = arr[i];
            if (str.startsWith("  -")) {
                if (temp.length > 0) {
                    args_list.push(temp);
                    temp = [];
                }
                temp.push(str)
            } else {
                temp.push(str)
            }
        }
        if (temp.length > 0) args_list.push(temp);


        const propList: string[] = [];

        for (const args of args_list) {
            const info = <string>args.shift();
            let [cmd, mark] = info.split(":");
            const hasARG = cmd.includes("ARG");
            cmd = cmd.replace("ARG", "");
            const matchAliasRes = cmd.match(/\[\-\-(.*)\]/)
            let alias: string = "";
            if (matchAliasRes) {
                const raw = matchAliasRes[0]
                cmd = cmd.replace(raw, "");
                alias = matchAliasRes[1];
            }
            const cMatchRes = cmd.match(/-{1,}(.*)/)
            if (!cMatchRes) throw new Error("无法解析")
            let c: string = cMatchRes[1].trim();

            const m = args.map(ele => ele.trim())
            const marks = [mark, ...m].join(" ")


            const prop = alias || c;
            propList.push(`    /**${marks} */`)
            if (alias) {
                propList.push(`    /** 简称: ${c} */`)
            }
            if (hasARG) {
                propList.push(`    "${prop}"?: string;`)
            } else {
                propList.push(`    "${prop}"?: boolean;`)
            }
            propList.push("");
        }


        const Upper = key.charAt(0).toUpperCase() + key.slice(1)

        const str = `import {SvnShellOption} from "../../../define";
import {SvnCommandParams} from "../../command/abstract-command";

export interface Svn${Upper}Params extends SvnCommandParams {
    /** 命令行参数 */
    cmdOpt?: Svn${Upper}CmdOpt
}

export interface Svn${Upper}CmdOpt extends SvnShellOption {
${propList.join("\n")}
}
`
        fs.writeFileSync(`/Volumes/Project/003_Stread/subversion-command-line/src/subversion/define/command-options/Svn${Upper}CmdOpt.ts`, str)


    }
}

main();