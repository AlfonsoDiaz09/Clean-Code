(() => {

    // No aplicando el principio de responasabilidad única

    type Gender = 'M' | 'F';

    interface PersonProperties {
        name: string;
        gender: Gender; 
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender; 
        public birthdate: Date;

        constructor( {name, gender, birthdate}: PersonProperties ){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProperties {
        email: string;
        role: string;
        name: string;
        gender: Gender; 
        birthdate: Date;
    }

    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor( {email, role, name, gender, birthdate}: UserProperties ) {
            super( {name, gender, birthdate} );
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProperties {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class UserSettings extends User {
        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor( {workingDirectory,lastOpenFolder, email, role, name, gender, birthdate}: UserSettingsProperties ) {
            super( {email, role, name, gender, birthdate} );
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: 'usr/home',
        lastOpenFolder: '/home',
        email: 'fernando@google.com',
        role: 'Admin',
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('2002-03-23')
    });

    console.log({userSettings})

})();