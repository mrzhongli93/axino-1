import { Component } from "./core";

class Div extends Component {
    constructor(props) {
        super(props);
        this.htmlString = /*html*/ `<div style="padding:10px"></div>`;
        this.createNode();
        this.node.style.display = "flex";
        ///
        if (props) {
            if (props.parent) {
                this.appendTo(props.parent);
            }
        }
    }

    vertical() {
        this.node.style.display = "flex";
        this.node.style.flexDirection = "column";
    }

    verticalReverse() {
        this.node.style.display = "flex";
        this.node.style.flexDirection = "column-reverse";
    }

    horizontal() {
        this.node.style.display = "flex";
        this.node.style.flexDirection = "row";
    }

    horizontalReverse() {
        this.node.style.display = "flex";
        this.node.style.flexDirection = "row-reverse";
    }

    alignCenter() {
        this.node.style.display = "flex";
        this.node.style.justifyContent = "center"; 
    }

    alignStretch() {
        this.node.style.display = "flex";
        this.node.style.alignContent = "stretch"; 
    }

    alignCenterSpaceBetween() {
        this.node.style.display = "flex";
        this.node.style.justifyContent = "space-between"; 
    }    
    
    alignCenterSpaceAround() {
        this.node.style.display = "flex";
        this.node.style.justifyContent = "space-around"; 
    }

    alignCenterSpaceEvenly() {
        this.node.style.display = "flex";
        this.node.style.justifyContent = "space-evenly"; 
    }

    alignLeft() {
        this.node.style.display = "flex";
        this.node.style.justifyContent = "flex-start"; 
    } 

    alignRight() {
        this.node.style.display = "flex";
        this.node.style.justifyContent = "flex-end";
    }

}

export { Div };  
