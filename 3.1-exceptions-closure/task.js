// 1

function parseCount(data) { //значение, которое необходимо распарсить
    let parsedData = Number.parseInt(data);
    if (Number.isNaN(parsedData)) { //валидатор
      throw new Error('Невалидное значение');
    }
    return parsedData;
  }
  
  function validateCount(data) {
    try {
      return parseCount(data);
    } catch (error) {
      return error;
    }
  }
  
  // 2
  
class Triangle {
    constructor(a, b, c) { //3 стороны треугольника
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || c + b < a) { //валидатор
        throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() { //периметр треугольника
        return this.a + this.b + this.c;
    }

    getArea(semiPerimeter) { //площадь треугольника
        semiPerimeter = this.getPerimeter() / 2;
        return +Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c)).toFixed(3);
        }
    }

    function getTriangle(a, b, c) {
        let triangleChek = {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
                },
            getArea() {
                return 'Ошибка! Треугольник не существует';
                } 
        };
        
        try {
            triangleChek = new Triangle(a, b, c);
        } catch {
            return triangleChek;
        } 
}

