import { User } from '../models/User';
import { State, Selector, StateContext, Action } from '@ngxs/store';
import { AddRemoveUser } from '../actions/actions';

export class UserStateModel {
    users: User[];
}

@State<UserStateModel>({
    name: 'UserState',
    defaults: {
        users: [
            {
                id: 1,
                username: 'Kristijan',
                nickname: 'Pula'
            }
        ]
    }
})

export class UserState {
    @Selector()
    static getUsers(user: UserStateModel) {
        return user.users;
    }

    @Action(AddRemoveUser)
    addBook(ctx: StateContext<UserStateModel>, action: AddRemoveUser) {
        const usersState = [...ctx.getState().users];
        const checkIfExists = usersState.some(p => p.id === action.user.id);
        if (checkIfExists) {
            usersState.filter(u => u !== action.user);
        }
        else {
            usersState.push(action.user);
        }
        ctx.patchState({
            users: usersState
        });
    }

}
