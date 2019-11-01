// import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
// import { AppRouter } from '../../router';
// import { RoutesEnum } from '../../shared/enums/channel-key.enum';
// import { ILogin } from '../../shared/interfaces/page.interface';
// import { IUser } from '../../shared/interfaces/user.interface';
// import { LoginService } from '../../shared/services/login.service';
// import { UserService } from '../../shared/services/page.service';

// @Module({
//     name: 'authentication',
//     namespaced: true,
// })
// export default class AuthenticationModule extends VuexModule {
//     user: IUser = null;

//     get isAuthenticated(): boolean {
//         return !!this.user;
//     }

//     @Mutation
//     clearAuthentication(): void {
//         this.user = null;
//     }

//     @Action({ commit: 'clearAuthentication' })
//     unauthenticate(): void {
//         localStorage.removeItem('token');

//         AppRouter.push(RoutesEnum.LOGIN);
//         return;
//     }

//     @Mutation
//     setUserInfo(user: IUser): void {
//         this.user = user;
//     }

//     @Action
//     async authenticate(login: ILogin): Promise<void> {
//         try {
//             const token: string = await LoginService.authenticate(login);
//             localStorage.setItem('token', token);

//             this.getUserInfo();
//         } catch (error) {
//             throw error;
//         }
//     }

//     @Action({ commit: 'setUserInfo' })
//     async getUserInfo(): Promise<IUser> {
//         try {
//             const user: IUser = await UserService.me();

//             AppRouter.push(RoutesEnum.HOME);
//             return user;
//         } catch (error) {
//             throw error;
//         }
//     }
// }
