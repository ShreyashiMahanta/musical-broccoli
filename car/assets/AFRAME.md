# A FRAME Custom Components



AFRAME.registerComponent (name, definition) name: is the component name; it is of string data type. Here ‘box’ is the name of the component. definition: contains the component definition. It is a JavaScript object

AFRAME.registerComponent (name, definition)

name: is the component name; it is of string data type. Here ‘box’ is the name of the component.

definition: contains the component definition. It is a JavaScript object which has schema and life cycle handler methods(init, update, tick, remove etc)

schema: is an object that defines the property names, its types and default values. Schema defines the shape of the data.

Lifecycle Handler Methods: init: is used to set up the initial state. It is called once when the component is initialised. update: is used to modify the entity. remove: is used to undo all previous modifications to the entity. tick: is used for checking continuous changes. It is called on every render loop of the scene.

Lifecycle Handler Methods: init: is used to set up the initial state. It is called once when the component is initialised.

update: is used to modify the entity. remove: is used to undo all previous modifications to the entity. tick: is used for checking continuous changes. It is called on every render loop of the scene.