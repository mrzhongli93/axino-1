import { Button } from "../button";
import { log } from "../core";
import { Label } from "../label";
import { Div } from "../div";



// Create a basic Div:
var d = new Div(null);
d.appendToApp();
d.vertical();

// Add a label to the Div:
var l = new Label("Clik on B1");
l.appendTo(d);

// Create a Button add to Div:
var b1 = new Button("B1");
b1.appendTo(d);

// Add behaviour to Button b (which acts on label l):
b1.onClick(() => {
    l.setText("<h1>Hello World!</h1>");
    log(l.getText());
});


 
