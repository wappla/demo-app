import Factory from '@dashdot/factory'

export default class KnexFactory extends Factory {
    static persist(records) {
        return this.table().insert(records).returning('*')
    }
}
