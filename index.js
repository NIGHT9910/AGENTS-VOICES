var piccs= document.querySelectorAll(".AGENTS").length ;

for (var i=0 ; i<piccs ; i++ ) {
    document.querySelectorAll(".AGENTS")[i].addEventListener( "click" , function() {
       
    var buttoninnerHTML = this.innerHTML ;

          switch (buttoninnerHTML) {
            case "jett":
                var audio = new Audio ("audio/jett.mp3") ;
                audio.play();
            break;
            
            case "neon":
                var audio = new Audio ("audio/neon.mp3") ;
                audio.play();
            break;
              
            case "breach":
                var audio = new Audio ("audio/breach.mp3") ;
                audio.play();
            break;
             
            case "reyna":
                var audio = new Audio ("audio/reyna.mp3") ;
                audio.play();
            break;

            case "sage":
                var audio = new Audio ("audio/sage.mp3") ;
                audio.play();
            break;

            case "pheonix":
                var audio = new Audio ("audio/pheonix.mp3") ;
                audio.play();
            break;

            case "viper":
                var audio = new Audio ("audio/viper.mp3") ;
                audio.play();
            break;

            case "cypher":
                var audio = new Audio ("audio/cypher.mp3") ;
                audio.play();
            break;

            case "omen":
                var audio = new Audio ("audio/omen.mp3") ;
                audio.play();
            break;

            case "brim":
                var audio = new Audio ("audio/brim.mp3") ;
                audio.play();
            break;
            
            case "gekko":
                var audio = new Audio ("audio/gekko.mp3") ;
                audio.play();
            break;

            case "sova":
                var audio = new Audio ("audio/sova.mp3") ;
                audio.play();
            break;

            case "raze":
                var audio = new Audio ("audio/raze.mp3") ;
                audio.play();
            break;

            case "chamber":
                var audio = new Audio ("audio/chamber.mp3") ;
                audio.play();
            break;




            default: console.log() ;
                
          }
    
        }  
    
)} ;
        
