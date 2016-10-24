function cars(commands) {
    let carCommandInterpreter = (function () {
        let allCars = new Map;

        function create(newObjName, token, protoName) {
            if (token == null) {
                allCars.set(newObjName, {});
                return;
            }

            allCars.set(newObjName, Object.create(allCars.get(protoName)));
        }

        function set(objName, propName, propVal) {
            allCars.get(objName)[propName] = propVal;
        }

        function print(objName) {
            let obj = allCars.get(objName);
            let objKeys = Object.keys(allCars.get(objName))
                .map(k => `${k}:${allCars.get(objName)[k]}`);

            let proto = obj;
            while (proto = Object.getPrototypeOf(proto)) {
                let o =Object.keys(proto).map(k => `${k}:${proto[k]}`);
                objKeys = objKeys.concat(o)
            }

            console.log(objKeys.join(', '));
        }

        return {create, set, print};
    })();

    for (let command of commands) {
        let tokens = command.split(/\s+/);
        let commandName = tokens.shift();
        carCommandInterpreter[commandName](...tokens);
    }
}