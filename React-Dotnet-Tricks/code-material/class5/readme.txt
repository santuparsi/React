# Event Handling
# Forms
# Types of Form
# Submit the form
# Validation
# Refs


# Event
An event is an action that coud be triggered by user interaction
In REact like javascript it has its specific methods to handle events which are conceptually similar to
handling event on DOM element

For example
- Click
- change
- Mouseover
etc

Handling these event thorugh a method is know as event handling
event names are camelCase instead of lowercase

onclick, onchange, onkey
onClick, onChange


<button onclick="display()">Button</button>

<button onClick={display}>Button</button>


this keyword usually return the instance of the class but in javascript if we use this keyword inside any function
it will represent the function in which we use this keyword

if still we want to use this keyword then we have to use bind method to bind the context with this keyword


Arrow function
the this keyword in class component is not defined by default, so with regular fucntion the thids keyword
represent the object that called the method which can be anything like global window object or html button

Arrow fucntion should be used as with arrow function this will always represent the object that defined the arrow function



# Forms
forms are eseential part of any application
can be use to collect data from the user
can be execute different type of task


React form
- controlled components
- uncontrolled components


controlled component
- the form input element is handled by the component itself with mutable state being kept in the state property and 
is on;y updated using setState method




