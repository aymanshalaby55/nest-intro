import { Injectable } from '@nestjs/common';

@Injectable() // mean this class i a provider
export class UsersService { // for business logic of our users module
    private fakeusers = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
    fetchusers() {
        return this.fakeusers
    }

    createUser(user) {
      this.fakeusers.push(user);
      return user;
    }
}
