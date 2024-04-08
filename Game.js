AFRAME.registerComponent("game-play", {
    schema: {
        elementId: {type:"string", default:"#coin1"}
    },
    colliding_el: function(elementId) {
        const element = document.querySelector(elementId)
        if (elementId.includes("#coin")) {
            console.log(elementId + "Hit");
        } 
        else if (elementId.includes("#fish")) {
            console.log(elementId + "Death");
        }  
    },
    update: function() {
        this.colliding_el(this.data.elementId);
    }
})