(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    interface Movie{
        cast: string[]
        description: string, 
        rating: number, 
        title: string,
    }
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    function createMovie({ cast, description, rating, title }: Movie ) {
        console.log({ cast, description, rating, title });
    }

    // Crea un nuevo actor
    function checkName( fullName: string ): boolean {
        console.log({ fullName });
        return true;
    }


    function createActor( fullName: string, birthDate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( checkName( fullName ) ) return false;

        console.log('Crear actor', birthDate);
        return true;        

    }

    


})();
