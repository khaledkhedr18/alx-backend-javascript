export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

export const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

export interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

export function printTeacher({ firstName, lastName }: printTeacherFunction) {
  const firstInitial = firstName.charAt(0).toUpperCase();
  console.log(`${firstInitial}. ${lastName}`);
}

export interface myStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements myStudentClass {
  private _firstName: string;
  private _lastName: string;
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return `Currently working`;
  }

  displayName() {
    return this._firstName;
  }
}
