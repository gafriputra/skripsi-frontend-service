export default{
    state(){
        return {
            keranjang : []
        }
    },
    getters : {
        keranjang(state){
            return state.keranjang
        }
    },
    mutations : {
        getKeranjang(state, add){
            state.keranjang = add;
        },
        addKeranjang(state, add){
            const found = state.keranjang.find(e => e.id == add.id);
            if (found) {
                found.qty++;
            }else{
                state.keranjang.push(add);
            }
        },
        deleteItem(state, id){
            state.keranjang = state.keranjang.filter(e => e.id != id);
        },
        deleteAllItem(state){
            state.keranjang = [];
            localStorage.removeItem('keranjang');
        },
        setLocalStorage(state){
            const parsed = JSON.stringify(state.keranjang);
            localStorage.setItem('keranjang', parsed);
        }
    },
    actions: {
        getKeranjang({commit}, add){
            commit('getKeranjang', add);
        },
        addKeranjang({commit}, add){
            commit('addKeranjang', add);
            commit('setLocalStorage');
        },
        deleteItem({commit}, id){
            commit('deleteItem', id);
            commit('setLocalStorage');
        },
        deleteAllItem({commit}){
            commit('deleteAllItem');
        }
    }
}