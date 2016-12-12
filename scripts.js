
function Telephone(brand, price, color, camera) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.camera = camera;
}
Telephone.prototype.printInfo = function () {
	console.log('This telephone brand is ' + this.brand + ', price is ' + this.price + ', color is ' + this.color + '. Photos made by ' + this.camera + ' camera are beautiful.');
}
var iPhone6s = new Telephone("Apple", 2500, "goldrose", "12 MP, f/2.2" );
var SamsungGalaxyS7 = new Telephone("Samsung", 899, "black", "12 MP, f/1.7");
var OnePlusOne = new Telephone("One", 1000, "silver", "10MP, f/2.0");

iPhone6s.printInfo();
SamsungGalaxyS7.printInfo();
OnePlusOne.printInfo();