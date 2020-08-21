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

    @Selector()
    static getUser(user: UserStateModel) {
        return (id: number) => {
            return user.users.find(i => i.id === +id);
        };
    }

    @Action(AddRemoveUser)
    addBook(ctx: StateContext<UserStateModel>, action: AddRemoveUser) {
        const usersState = [...ctx.getState().users];
        const indexOfUser = usersState.findIndex(p => p.id === action.user.id);
        if (indexOfUser !== -1) {
            usersState.splice(indexOfUser, 1);
        }
        else {
            usersState.push(action.user);
        }
        ctx.patchState({
            users: usersState
        });
    }

}
