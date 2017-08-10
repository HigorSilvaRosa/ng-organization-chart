export class NgOrganizationChartHelper {

    firstIds = [];
    nodesRelations = {};
    nodesData = {};
    ids = []

    constructor(data) {
        this.firstIds = this.scanChildren(data)
    }

    private scanChildren(children) {
        let ids = []
        for (let i in children) {
            let child = children[i]
            ids.push(child.id)
            this.ids.push(child.id)
            this.nodesRelations[child.id] = this.scanChildren(child.children)
            this.nodesData[child.id] = child.data
            this.nodesData[child.id] = child.data
        }
        return ids;
    }

    public moveNode(nodeId, destinationNodeId) {
        for (let i in this.ids) {
            let id = this.ids[i]
            this.nodesRelations[id] = this.removeValueFromArray(this.nodesRelations[id], nodeId)
        }
        this.nodesRelations[destinationNodeId].push(nodeId)
    }

    private removeValueFromArray(array, value) {
        let index = array.indexOf(value);
        if (index >= 0) {
            array.splice(index, 1);
        }
        return array;
    }

    public getData(){
        return this.getNodes(this.firstIds);
    }

    private getNodes(ids){
        let nodes = []
        for (let i in ids) {
            let id = ids[i]
            let children = this.getNodes(this.nodesRelations[id])
            nodes.push({
                id: id,
                data: this.nodesData[id],
                children: children
            })
        }
        return nodes;
    }

}
