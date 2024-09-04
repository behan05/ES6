// Factory Function is that function who return object directly.

let factoryFunction = (name, age, city) => {
  return {
    name: name,
    age: age,
    city: city,
    printDetail() {
      return this.name + " " + this.age + " " + this.city;
    },
  };
};

const result = factoryFunction("behan", 26, "Bihar");
console.log(result.printDetail());

