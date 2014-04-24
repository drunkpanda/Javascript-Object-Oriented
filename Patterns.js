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



function myObject(options) {
    var defaults = {
        start: '1'
    };

    options = $.extend(defaults, options);

    this.doSomething = function () {
        console.log('BOO');
        console.log(options.start);
    }
}
new myObject().doSomething()
new myObject({start:'100'}).doSomething()



