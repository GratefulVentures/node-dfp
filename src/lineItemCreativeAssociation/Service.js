import Service from '../Service'

class LineItemCreativeAssociationService extends Service {
    create(...lineItemCreativeAssociations) {
        // if (! lineItemCreativeAssociations.length) {
        //     return this.createObject(
        //         new LineItem(),
        //         this.create.bind(this)
        //     )
        // }

        if (lineItemCreativeAssociations.length === 1 && Array.isArray(lineItemCreativeAssociations[0])) {
            lineItemCreativeAssociations = lineItemCreativeAssociations[0]
        }

        lineItemCreativeAssociations = lineItemCreativeAssociations.map(obj => {
            if (obj.toObject) {
                return obj.toObject()
            }
            return obj
        })

        return this.createLineItemCreativeAssociations({ lineItemCreativeAssociations })
    }
}

export default LineItemCreativeAssociationService
