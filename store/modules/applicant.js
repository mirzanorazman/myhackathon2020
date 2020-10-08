export default {
    state: {
        ic: '',
        icTentera: '',
        name: '',
        status: '',
        numChildren: '',
        homeNum: '',
        officeNum: '',
        mobileNum: '',
        address: '',
        city: '',
        postcode: '',
        state: ''
    },
    getters: {
        name: state => state.name
    },
    mutations: {

    },
    actions: {
        // update(context, payload) {
        //     // clone the existing model
        //     let model = Object.assign({}, context.state.model);
        //     model[payload.schema] = payload.model;
        //     context.commit('model', model);
        // }
    }
};
