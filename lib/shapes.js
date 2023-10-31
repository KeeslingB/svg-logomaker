class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color){
    this.color = color;
  }
  }

// all shapes classes inherit from shape class

class Triangle extends Shape {
  constructor (color){
    super (color);
    this.color = color
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor (color){
    super (color);
    this.color = color
  }
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}"/>`;
  }
}

class Circle extends Shape {
  constructor (color){
    super (color);
    this.color = color
  }
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

module.exports = {Shape,Triangle, Circle, Square};


// used to import shapes