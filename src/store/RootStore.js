import { RouterStore, createRouterState, browserHistory, HistoryAdapter } from 'mobx-state-router';
import UserStore from './UserStore';
import ExpensesStore from './ExpensesStore';



const routes = [
    { name: 'login', pattern: '/login' },
    { name: 'pocetna', pattern: '/pocetna' },
    { name: 'troskovi', pattern: '/troskovi' },
    { name: 'statistika', pattern: '/statistika' },
    { name: 'postavke', pattern: '/postavke' },
];

class RootStore {


    constructor() {
        this.userStore = new UserStore(this);
        this.expensesStore = new ExpensesStore(this);

        this.routerStore = new RouterStore(routes, this, createRouterState('login')); 
        this.historyAdapter = new HistoryAdapter(this.routerStore, browserHistory);
        this.historyAdapter.observeRouterStateChanges();
    }
}

const store = new RootStore();
export default store;