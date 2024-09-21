import UserStore from './UserStore';
import ExpensesStore from './ExpensesStore';

class Store {
    constructor() {
        this.userStore = UserStore;
        this.expensesStore = ExpensesStore;

    }
}

const store = new Store();
export default store;