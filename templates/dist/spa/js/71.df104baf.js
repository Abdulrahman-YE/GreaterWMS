(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{"4f0d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%",height:"100%","margin-top":"-40px"}},[a("bar-chart")],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-card",{staticClass:"shadow-24"},[a("q-card-section",{staticClass:"text-h6"},[t._v("\n     第三周入库报表\n      "),a("q-btn",{staticClass:"float-right",attrs:{icon:"download",flat:"",dense:""},on:{click:t.SaveImage}},[a("q-tooltip",[t._v("Download PNG")])],1)],1),a("q-card-section",[a("div",{ref:"barchart",style:{height:t.height},attrs:{id:"barChart"}})]),a("q-resize-observer",{on:{resize:t.onResize}})],1)],1)},s=[],o={name:"BarChart",data(){return{height:"",model:!1,options:{legend:{bottom:10},tooltip:{},dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",43.3,85.8,93.7],["Milk Tea",83.1,73.4,55.1],["Cheese Cocoa",86.4,65.2,82.5],["Walnut Brownie",72.4,53.9,39.1]]},grid:{left:"3%",right:"4%",bottom:"20%",top:"5%",containLabel:!0},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]},bar_chart:null}},mounted(){this.init();var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},watch:{"$q.dark.isActive":function(){this.init()}},methods:{SaveImage(){const t=this.bar_chart.getDataURL(),e=document.createElement("a");document.body.appendChild(e),e.href=t,e.target="_self",e.download="BarChart.png",e.click()},init(){const t=document.getElementById("barChart");echarts.dispose(t);const e=this.model?"dark":"light";this.bar_chart=echarts.init(t,e),this.bar_chart.setOption(this.options)},onResize(){this.bar_chart&&this.bar_chart.resize()}}},c=o,h=a("42e1"),l=a("f09f"),d=a("a370"),p=a("9c40"),b=a("05c0"),u=a("3980"),g=a("eebe"),m=a.n(g),f=Object(h["a"])(c,n,s,!1,null,"8e036ffe",null),v=f.exports;m()(f,"components",{QCard:l["a"],QCardSection:d["a"],QBtn:p["a"],QTooltip:b["a"],QResizeObserver:u["a"]});var w={name:"V2",components:{BarChart:v}},C=w,_=Object(h["a"])(C,r,i,!1,null,null,null);e["default"]=_.exports}}]);