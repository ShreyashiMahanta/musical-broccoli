AFRAME.registerComponent("car",{
    schema : {
        model : {
            type : "string",
            defaul : "./assets/tesla/scene.gltf"
        }
    },
    init : function(){
        this.el.setAttribute("gltf-model", this.data.model);
        const position = {x : 0, y : 0,z : 0};
        const rotation = {x : 0, y : -90,z : 0};
        this.el.setAttribute("position",position);
        this.el.setAttribute("rotation",rotation);
    }
})