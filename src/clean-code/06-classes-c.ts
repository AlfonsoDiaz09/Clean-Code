(() => {

    // Aplicando el principio de responasabilidad única
    // Priorizar la composición frente a la herencia

    type Gender = 'M' | 'F';

    interface PersonProperties {
        birthdate: Date;
        gender: Gender; 
        name: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender; 
        public name: string;

        constructor( {birthdate, gender, name}: PersonProperties ){
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProperties {
        email: string;
        role: string;
    }

    class User {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor( {email, role}: UserProperties ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProperties {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor( {lastOpenFolder, workingDirectory}: SettingsProperties ) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    interface UserSettingsProperties {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor( {
            birthdate, gender, name,
            email, role,
            lastOpenFolder, workingDirectory,
        }: UserSettingsProperties ){
            this.person = new Person( {birthdate, gender, name} );
            this.user = new User( {email, role} );
            this.settings = new Settings( {lastOpenFolder, workingDirectory} );
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date('2002-03-23'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: 'usr/home',
    });

    console.log({userSettings})

})();