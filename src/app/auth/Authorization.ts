import { CanActivate, RouterStateSnapshot } from "@angular/router";
import { UserCacheService } from '../services/user-cache.service';

class UserAuth{
    constructor(private userCacheService:UserCacheService){
    }

    isLoggedIn():boolean{
        let currentUser = null
        this.userCacheService.getUserData().subscribe(
            (data) => {
                currentUser = data
            },
            () => {
                console.log('Could not get current user data')
            }
        )

        if(currentUser === null) return false;
        return true;
    }
}

export class CanActivateRoutes implements CanActivate{

    constructor(private userAuth:UserAuth){

    }

    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        return this.userAuth.isLoggedIn()
    }
    
}