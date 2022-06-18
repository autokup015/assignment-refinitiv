export class Question2Services {

    constructor($axios) {
        this.$axios = $axios
    }

    async getData() {
        const fetchData = await this.$axios.get('https://api.publicapis.org/categories')

        return fetchData
    }

}