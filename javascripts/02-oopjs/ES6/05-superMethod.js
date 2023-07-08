// Super Method
// super sebenarnya adalah reference ke parent prototype, mirip seperti __proto__

class Shape {
    paint() {
        console.info("Paint Shape");
    }

    paint2() {
        console.info("Bentukk");
    }
}


class Circle extends Shape {
    paint() {
        super.paint(); // memanggil paint() method parent class
        super.paint2();
        console.info("Paint Circle");
    }
}


const circle = new Circle();
circle.paint();