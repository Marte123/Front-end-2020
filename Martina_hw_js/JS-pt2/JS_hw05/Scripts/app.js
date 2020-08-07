function typeOfParameter (parameter){

    console.log("The type of the entered parameter is " + typeof parameter);
    switch (parameter) {
        case "String":
         return typeof parameter === 'string';
        case "Number":
            return typeof parameter === 'number';
        case "Boolean":
            return typeof parameter === 'boolean';
        case "Undefined":
            return typeof parameter === 'undefined';
            case "Object":
                return typeof parameter === 'object';
        default:
            return "Some other type...";

    }  
}
typeOfParameter ("Hello!");
typeOfParameter (2020);
typeOfParameter (true);
typeOfParameter ();
typeOfParameter (null);
typeOfParameter ([1,2,3]);
typeOfParameter (1236);