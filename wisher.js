
(function (global, $) {
    
    var Wisher = function (firstName, lastName, language) {
        
        return new Wisher.init(firstName, lastName, language);
        
    };
    var supportedLanguages = ["en", "te"];
    
    var Wishes = {
        en : "Hello",
        te : "Namaste"
    };
    
    var FormalWishes = {
        en : "Greetings",
        te : "Abhivadamulu"
    };
    
    var logMessages = {
        en: "Logged in",
        te: "bhadraparachinavi"
    };
    
    Wisher.init = function (firstName, lastName, language) {
     
        var self = this;
        self.firstName = firstName || "Default";
        self.lastName = lastName || "Default";
        self.language = language || "en";
        
        
    }
    
    Wisher.prototype = {
        
        fullName: function(){
            return this.firstName + " " + this.lastName;
        },
        
        validate: function () {
            
            if(supportedLanguages.indexOf(this.language) === -1){
                throw "Invalid Language";
            }
        },
        
        wishme: function () {
            return Wishes[this.language] + " " + this.firstName + "!";
        },
        
        formallyWishme: function() {
            return FormalWishes[this.language] + "," + this.fullName();
        },
        
        log: function() {
            
            if(console) {
                console.lsog(this.logMessages[language]);
            }
            return this;
        },
        wishes: function(formal) {
            var msg;
            
            if(formal) { msg = this.formallyWishme();}
            else {msg = this.wishme();}
            
            if(console){
                console.log(msg);
             }
            
            return this;
            
        },
        
        wish_html: function (selector, formal) {
            if(!$)
            {
                throw "JQuery is not loaded";
            }
    
            if(!selector){
                throw "Selector is not defined";
            }
    
            var msg;
            
            if(formal) { msg = this.formallyWishme();}
            else {msg = this.wishme();}
            
            $(selector).html(msg);
            return this;
            
    }
   
    };
    
    Wisher.init.prototype = Wisher.prototype;
    
    global.Wisher = global.W$ = Wisher;
    
}(window, jQuery));