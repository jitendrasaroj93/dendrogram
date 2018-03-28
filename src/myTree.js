import React,{Component} from 'react';

import * as d3 from 'd3';


var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 960 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;

var i = 0,
    duration = 750,
    root;

var tree = d3.tree()
    .size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
const collapse = (d)=> {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }
const renderTree = function(treeData, svgDomNode) {
    // Add the javascript code that renders the tree from
    // http://bl.ocks.org/d3noob/8329404
    // And replace the line that reads
    // var svg = d3.select("body").append("svg")
    // with 
    // var svg = d3.select(svgDomNode)
}

class MyTree extends Component{
	constructor(props){
		super();
		
	}
	componentDidMount(){
	let mountNode = this.getDOMNode();

	// Render the tree usng d3 after first component mount
	renderTree(this.props.myTreeData, mountNode);
	}

	shouldComponentUpdate(nextProps, nextState){
	// Delegate rendering the tree to a d3 function on prop change
	renderTree(this.props.myTreeData, this.getDOMNode());

	// Do not allow react to render the component on prop change
	return false;
	}

	render() {

	// Render a blank svg node
	return (
			<svg></svg>
		);
	}
}

export default MyTree;