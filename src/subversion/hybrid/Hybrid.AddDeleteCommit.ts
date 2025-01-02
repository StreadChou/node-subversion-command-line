import {SubversionCommandLine} from "../subversion-command-line";
import {AbstractHybrid} from "./abstract-hybrid";
import {OptAddDelete, OptAddDeleteCommit, SvnItemStatus, SvnStatusEntry} from "../define";
import {HybridAddDelete} from "./Hybrid.AddDelete";

export class HybridAddDeleteCommit extends AbstractHybrid {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    public async run(opt: OptAddDeleteCommit) {
        const status = this.cml.status.xmlToJson(await this.cml.status.run({cmdOpt: {xml: true}}));
        if (!status.status.target.entry) return {status_list: [], changeList: [], commitRes: "NoChange"}
        const status_list: SvnStatusEntry[] = Array.isArray(status.status.target.entry) ? status.status.target.entry : [status.status.target.entry];

        /** 需要提交的类型列表 */
        const needCommitStatusList = [
            SvnItemStatus.Unversioned,
            SvnItemStatus.Modified,
            SvnItemStatus.Added,
            SvnItemStatus.Missing,
            SvnItemStatus.Deleted,
        ]

        if (!status_list.some(ele => needCommitStatusList.includes(ele["wc-status"]._attributes.item))) {
            return {status_list: status_list, changeList: [], commitRes: ""}
        }

        const {changeList} = await this.cml.HybridAddDelete.run({add: opt.add, remove: opt.remove}, status_list);

        const commitRes = await this.cml.commit.run({cmdOpt: opt.commit})
        return {status_list: status_list, changeList: changeList, commitRes: commitRes}
    }


}

