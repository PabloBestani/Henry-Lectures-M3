






const sumar = function(a, b) {
    if (a < 0 || b < 0) throw new Error("Solo valores positivos porfis");
    return a + b;

};

const esIgual = () => {
    return [1, 2, 3];
}

const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();

    console.log(data.name);

    return {
        id: data.id,
        name: data.name,
    };
};

getUser();


module.exports = {
    sumar,
    esIgual,
    getUser,
}