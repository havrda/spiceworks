CardFactory = ( function() {

    var cardTemplate = _.template(
        $( "script.template" ).html()
    );
    var defaultImage = "img/default.png";
    var employeeContainer = $("#employees");

    var data = [
        { name: "Mark-Paul Gosselaar", photo_url: "" },
        { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
        { name: "Alf", photo_url: "img/avatars/alf.png" },
        { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
        { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
        { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
        { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
        { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
    ];

    function createCard(superstar){
        if(!superstar.photo_url || !superstar.photo_url.trim() ){
            superstar.photo_url = defaultImage;
        }
        return cardTemplate(superstar);
    }

    function addSuperStar(superstar){
        if(!superstar) throw "Missing argument superstar";

        var result = createCard(superstar);
        employeeContainer.prepend(result);
    }

    function initialize(){
        for(var i = 0, len = data.length; i < len; i++){
            addSuperStar(data[i]);
        }
    }

    initialize();

    // explicitly return public methods when this object is instantiated
    return {
        addStar: addSuperStar
    };

});