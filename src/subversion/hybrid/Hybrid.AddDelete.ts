import {SubversionCommandLine} from "../subversion-command-line";
import {AbstractHybrid} from "./abstract-hybrid";
import {
    AddOrDeleteRes,
    AddOrDeleteStatusItemRes,
    OptAddDelete,
    SvnAddCmdOpt,
    SvnDeleteCmdOpt,
    SvnItemStatus,
    SvnStatusEntry, SvnStatusXmRes
} from "../define";

export class HybridAddDelete extends AbstractHybrid {

    public constructor(cml: SubversionCommandLine) {
        super(cml);
    }

    public async run(opt: OptAddDelete, status_list?: SvnStatusEntry[]) {
        // 如果没有 status 的变更列表. 则字节获取
        if (!status_list) {
            const status = this.cml.status.xmlToJson(await this.cml.status.run({cmdOpt: {xml: true}}));
            status_list = Array.isArray(status.status.target.entry) ? status.status.target.entry : [status.status.target.entry];
        }

        const changeList: AddOrDeleteRes = [];

        for (const item of status_list) {
            const res = await this.AddOrDeleteStatusItem(item, opt.add, opt.remove)
            if (res) changeList.push(res);
        }

        return {
            changeList,
            status_list,
        };
    }


    public async AddOrDeleteStatusItem(item: SvnStatusEntry, add?: SvnAddCmdOpt, remove?: SvnDeleteCmdOpt,): Promise<AddOrDeleteStatusItemRes | null> {
        const _path = item._attributes.path;
        if (item["wc-status"]._attributes.item == SvnItemStatus.Unversioned) {
            const res = await this.cml.add.run({PATH: _path, cmdOpt: add})
            return {file: _path, before_status: SvnItemStatus.Unversioned, after_status: SvnItemStatus.Added, res}
        }
        if (item["wc-status"]._attributes.item == SvnItemStatus.Missing) {
            const res = await this.cml.remove.run({PATH: _path, cmdOpt: remove})
            return {file: _path, before_status: SvnItemStatus.Missing, after_status: SvnItemStatus.Deleted, res}
        }
        return null;
    }


}

