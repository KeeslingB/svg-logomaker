class Shape {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }
  setColor(color){
    this.color = color;
  }
  }

// all shapes classes inherit from shape class

class Triangle extends Shape {
  constructor (color, text){
    super (color, text);
    this.text = text;
    this.color = color
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor (color, text){
    super (color, text);
    this.text = text;
    this.color = color
  }
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}"/>`;
  }
}

class Circle extends Shape {
  constructor (color, text){
    super (color);
    this.text = text;
    this.color = color
  }
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

module.exports = {Shape,Triangle, Circle, Square};


// used to import shapes