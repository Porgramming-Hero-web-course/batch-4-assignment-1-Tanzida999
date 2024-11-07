// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
type Circle = {
    shape:'circle';
    radius:number;

}

type Rectangle = {
    shape:'rectangle';
    width:number;
    height:number
}
type Shape  = Circle | Rectangle;

const calculateShapeArea = (shape:Shape): number => {
    if(shape.shape === 'circle'){           //Type Guard checking here
        return Math.PI *shape.radius**2;
    }
    else if(shape.shape=== 'rectangle'){
      return shape.width*shape.height;
    }
    throw new Error('Error jani na');   //na dile error ashe function type e
    
}



