import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';
@Component({
  selector: 'app-third-display',
  templateUrl: './third-display.component.html',
  styleUrls: ['./third-display.component.css']
})
export class ThirdDisplayComponent implements OnInit {
  // creating dummy data based on accurate data from real weather apps
  public title = 'Line Chart';
  // setting 11 days and their historical temperatures to create the graph
  data: any[] = [
  {date: new Date('2021-01-27'), value: 20},
  {date: new Date('2021-01-28'), value: 21},
  {date: new Date('2021-01-29'), value: 21},
  {date: new Date('2021-01-30'), value: 22},
  {date: new Date('2021-01-31'), value: 24},
  {date: new Date('2021-02-01'), value: 27},
  {date: new Date('2021-02-02'), value: 28},
  {date: new Date('2021-02-03'), value: 27},
  {date: new Date('2021-02-04'), value: 24 },
  {date: new Date('2021-02-05'), value: 24 },
  {date: new Date('2021-02-06'), value: 20},
];
//setting variables
private margin = {top: 20, right: 20, bottom: 30, left: 50};
private width: number;
private height: number;
private x: any;
private y: any;
  private svg: any;
  // defining line
private line: d3Shape.Line<[number, number]>; 

constructor () {
  // configure margins and width/height of the graph
  this.width = 700 - this.margin.left - this.margin.right;
  this.height = 400 - this.margin.top - this.margin.bottom;
}
public ngOnInit(): void {
  this.buildSvg();
  this.addXandYAxis();
  this.drawLineAndPath();
}
// d3 method to append the svg element and give size as per the margin 
private buildSvg() {
  this.svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
}
  //generate x & y axis according to dummy data
private addXandYAxis() {
  // range of data configuring
  this.x = d3Scale.scaleTime().range([0, this.width]);
  this.y = d3Scale.scaleLinear().range([this.height, 0]);
  this.x.domain(d3Array.extent(this.data, (d) => d.date ));
  this.y.domain(d3Array.extent(this.data, (d) => d.value ));
  // Configure the X Axis
  this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
  // Configure the Y Axis
  this.svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y));
}

private drawLineAndPath() {
  this.line = d3Shape.line()
      .x( (d: any) => this.x(d.date) )
      .y( (d: any) => this.y(d.value) );
  // Configuring line path
  this.svg.append('path')
      .datum(this.data)
      .attr('class', 'line')
      .attr('d', this.line);
}
}
