/**
 * The Factory Pattern
 * last update: 2014/04/23
 */
 
function createPerson(name, age, job){
        var o  = new Object();
        o.name = name;
        o.age  = age;
        o.job  = job;
        o.sayName = function(){
          console.log(this.name);
        };
        return o;
}
var person1 = createPerson("Nicholas", 29, 'Software Engineer');
var person2 = createPerson("Greg", 27, 'Doctor');
 
 
/**
 * The Constructor Pattern
 * last update: 2014/04/23
 */
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    };
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor"); 

/**
It doesn’t make sense to have two instances of Function that do the same thing, especially when
the this object makes it possible to avoid binding functions to particular objects until runtime. 

It’s possible to work around this limitation by moving the function defi nition outside of the constructor,
as follows:
*/
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}
function sayName(){
    console.log(this.name);
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
person1.sayName(); // Nicholas
var person2 = new Person("Greg", 27, "Doctor"); 
person2.sayName(); // Greg


/**
 * Javascript class boilerplate (Literal version). 
 * required jQuery for $.extend to work. 
 * last update: 2013/09/12
 */
var class_template = {
    type: 'category',
    // act as constructor
    init:function( options ){

         // Get instance
         var self = class_template;
        
         // Setup default settings.
         this.cfg = $.extend({
            status_show_info: true         
         }, options );
        
         self.info('Initializing');
         
         // Start bind_events()
         self.bind_events();
    },
    // to hold functions 
    bind_events:function(){
         // Get instance
         var self = class_template;

         self.info('bind_events(): started');
    },
    // Display message 
    info:function( message ){
          if(this.cfg.status_show_info == true){
             console.info(message);   
          }
     }       
};
class_template.init();



