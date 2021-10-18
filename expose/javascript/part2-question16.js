let statistics = {
	redCars: 21,
	blueCars: 45,
	greenCars: 12,
	raceCars: 5,
	blackCars: 40,
	rareCars: 2
};

for (const property in statistics) {
    let value = statistics[property];
    if (property[0] === 'r' || value % 2 === 1) {
        console.log(value);
    }
}