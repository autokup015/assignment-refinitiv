import { Question2Services } from "~/services/question2/question2.services"

export default (ctx, inject) => {

    const service = {
        question2: new Question2Services(ctx.$axios),
    }

    inject('services', service)
}