interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount('John', 1);
console.log(user);


function deleteUser(user: User) {

}


function getAdminUser(): User {
	return new UserAccount('Khaled', 2);
}

const adminUser = getAdminUser();
console.log(`The admin user is ${adminUser.name} and his id is ${adminUser.id}`);
