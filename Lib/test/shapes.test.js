const {Circle, Square, Triangle} = require('../Shapes')






describe('Circle', () =>{
    it('Renders Correctly', () =>{
        const shape = new Circle();
          shape.setColor("red");
          expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" height="100%" width="100%" fill="red" />`);
    });
});


describe('Square', () =>{
    it('Renders Correctly', () =>{
        const shape = new Square();
          shape.setColor("green");
          expect(shape.render()).toEqual('<rect x="50" height="200" width="200" fill="green" />');
    });
});




describe('Triangle', () =>{
    it('Renders Correctly', () =>{
        const shape = new Triangle();
          shape.setColor("blue");
          expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});
