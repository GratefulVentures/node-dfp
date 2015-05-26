import Service from '../Service'

class CreativeWrapperService extends Service {
    create(...creativeWrappers) {
        // if (! creativeWrappers.length) {
        //     return this.createObject(
        //         new LineItem(),
        //         this.create.bind(this)
        //     )
        // }

        if (creativeWrappers.length === 1 && Array.isArray(creativeWrappers[0])) {
            creativeWrappers = creativeWrappers[0]
        }

        creativeWrappers = creativeWrappers.map(obj => {
            if (obj.toObject) {
                return obj.toObject()
            }
            return obj
        })

        return this.createCreativeWrappers({ creativeWrappers })
    }
}

export default CreativeWrapperService
