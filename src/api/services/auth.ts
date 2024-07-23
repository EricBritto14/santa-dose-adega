import { selectMethod } from '@Api/methods';
import { findRouter }  from '@Api/mapRouters';
import { User } from '@Models/user';

export async function LoginRequest(user : User) {
    let request = await findRouter("login");

    return selectMethod(
        request.router,
        request.method,
        user
    );
}