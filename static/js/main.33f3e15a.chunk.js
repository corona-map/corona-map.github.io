(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{221:function(e,t,n){e.exports=n(413)},228:function(e,t,n){},230:function(e,t,n){},413:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(51),i=n.n(r),c=n(58),u=(n(228),n(31)),l=n.n(u),s=n(120),d=n(9),m=n(181),f=n(194),g=n(119);n(230);var v=function(){return o.a.createElement("section",{className:"Footer"},o.a.createElement("p",null,"From Munich with \u2764\ufe0e"),o.a.createElement("span",null,"Data sources: "),o.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports",rel:"noopener noreferrer",target:"_blank"},"WHO"),", ",o.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19",rel:"noopener noreferrer",target:"_blank"},"CSSEGISandData"),", ",o.a.createElement("a",{href:"https://www.worldometers.info/coronavirus/",rel:"noopener noreferrer",target:"_blank"},"worldometers"),", ",o.a.createElement("a",{href:"https://www.arcgis.com/",rel:"noopener noreferrer",target:"_blank"},"arcgis.com/"),", ",o.a.createElement("a",{href:"https://www.morgenpost.de/",rel:"noopener noreferrer",target:"_blank"},"Berliner Morgenpost/"),o.a.createElement("p",null,"This project is open-sourced here: ",o.a.createElement("a",{href:"https://github.com/corona-map/corona-map.github.io",rel:"noopener noreferrer",target:"_blank"},"Github")))},p=n(59),h=n(129),S=n(128),y=n(180),b=n(93),L=function(e){return parseInt(e.toString().replace(/ |,|/g,""),10)},E=function(e){return e&&e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},C=function(e,t){var n=[];return t.split("\n").forEach((function(t){var a=t.split("\t"),o=Object(d.a)(a,2),r=o[0],i=o[1],c=e.find((function(e){return e["Province/State"]===r}));c&&i&&n.push({name:c["Province/State"],lat:c.Latitude,long:c.Longitude,fontSize:+c.fontSize,confirmed:L(i),country:c["Country/Region"]})})),n},P=(C([{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Nordrhein-Westfalen",Latitude:"51.4332",Longitude:"7.6616"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Bayern",Latitude:"48.7904",Longitude:"11.4979"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Baden-W\xfcrttemberg",Latitude:"48.6616",Longitude:"9.3501"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Berlin",Latitude:"52.4938",Longitude:"13.4553"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Niedersachsen",Latitude:"52.6367",Longitude:"9.8451"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Hessen",Latitude:"50.6521",Longitude:"9.1624"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Hamburg",Latitude:"53.5363",Longitude:"9.9945"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Rheinland-Pfalz",Latitude:"50.1183",Longitude:"7.3090"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Sachsen",Latitude:"51.1045",Longitude:"13.2017"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Bremen",Latitude:"53.1334",Longitude:"8.7585"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Schleswig-Holstein",Latitude:"54.2194",Longitude:"9.6961"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Brandenburg",Latitude:"52.1314",Longitude:"13.2162"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Saarland",Latitude:"49.3964",Longitude:"7.0230"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Sachsen-Anhalt",Latitude:"51.9503",Longitude:"11.6923"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Mecklenburg-Vorpommern",Latitude:"53.6127",Longitude:"12.4296"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Th\xfcringen",Latitude:"51.0110",Longitude:"7.6616"}],"Nordrhein-Westfalen\t9764\t755\t66\t\nBayern\t7289\t47\t41\t\nBaden-W\xfcrttemberg\t7252\t186\t56\t\nNiedersachsen\t2313\t83\t8\t\nHessen\t1909\t19\t6\t\nRheinland-Pfalz\t1637\t6\t6\t\nHamburg\t1450\t1\t1\t\nBerlin\t1428\t6\t4\t\nSachsen\t1128\t14\t6\t\nSchleswig-Holstein\t609\t2\t4\t\nBrandenburg\t505\t1\t1\t\nTh\xfcringen\t479\t64\t2\t\nSaarland\t466\t21\t3\t\nSachsen-Anhalt\t420\t2\t1\t\nMecklenburg-Vorpommern\t245\t5\t0\t\nBremen\t204\t35\t1\t"),C([{"Country/Region":"Vietnam",fontSize:"1","Province/State":"V\u0129nh Ph\xfac",Latitude:"21.30891",Longitude:"105.60489"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"B\xecnh Thu\u1eadn",Latitude:"10.65993",Longitude:"107.77206"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"H\xe0 N\u1ed9i",Latitude:"21.0245",Longitude:"105.84117"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"TP. H\u1ed3 Ch\xed Minh",Latitude:"10.82302",Longitude:"106.62965"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Qu\u1ea3ng Ninh",Latitude:"21.52471",Longitude:"107.96619"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"\u0110\xe0 N\u1eb5ng",Latitude:"16.06778",Longitude:"108.22083"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Th\u1eeba Thi\xean Hu\u1ebf",Latitude:"16.4619",Longitude:"107.59546"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Qu\u1ea3ng Nam",Latitude:"15.87944",Longitude:"108.335"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"L\xe0o Cai",Latitude:"22.48556",Longitude:"103.97066"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Kh\xe1nh H\xf2a",Latitude:"12.24507",Longitude:"109.19432"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Ninh B\xecnh",Latitude:"20.25809",Longitude:"105.97965"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Thanh H\xf3a",Latitude:"19.8",Longitude:"105.76667"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"B\u1eafc Ninh",Latitude:"21.18608",Longitude:"106.07631"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"H\u1ea3i D\u01b0\u01a1ng",Latitude:"20.94099",Longitude:"106.33302"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Ninh Thu\u1eadn",Latitude:"11.56432",Longitude:"108.98858"}],"H\xe0 N\u1ed9i\t27\t0\t0\nTP. H\u1ed3 Ch\xed Minh\t21\t0\t3\nV\u0129nh Ph\xfac\t11\t0\t11\nB\xecnh Thu\u1eadn\t9\t0\t0\nQu\u1ea3ng Ninh\t6\t0\t0\n\u0110\xe0 N\u1eb5ng\t4\t0\t0\nQu\u1ea3ng Nam\t3\t0\t0\nTh\u1eeba Thi\xean Hu\u1ebf\t2\t0\t0\nL\xe0o Cai\t2\t0\t0\nNinh Thu\u1eadn\t2\t0\t0\nNinh B\xecnh\t1\t0\t1\nB\u1eafc Ninh\t1\t0\t0\nH\u1ea3i D\u01b0\u01a1ng\t1\t0\t0\nKh\xe1nh H\xf2a\t1\t0\t1\nThanh H\xf3a\t1\t0\t1"),C([{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Lower Silesian",Latitude:"51.1079",Longitude:"17.0385"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Kuyavian-Pomeranian",Latitude:"53.1235",Longitude:"18.0084"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Lublin",Latitude:"51.2465",Longitude:"22.5684"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Lubusz",Latitude:"51.9356",Longitude:"15.5062"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"\u0141\xf3d\u017a",Latitude:"51.7592",Longitude:"19.4560"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Lesser Poland",Latitude:"50.0647",Longitude:"19.9450"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Masovian",Latitude:"52.2297",Longitude:"21.0122"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Opole",Latitude:"50.6683",Longitude:"17.9231"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Subcarpathian",Latitude:"50.0412",Longitude:"21.9991"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Podlaskie",Latitude:"53.1325",Longitude:"23.1688"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Pomeranian",Latitude:"54.3520",Longitude:"18.6466"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Silesian",Latitude:"50.2649",Longitude:"19.0238"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Holy Cross",Latitude:"50.8661",Longitude:"20.6286"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Warmian-Masurian",Latitude:"53.7784",Longitude:"20.4801"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Greater Poland",Latitude:"52.4064",Longitude:"16.9252"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"West Pomeranian",Latitude:"53.4325",Longitude:"14.548056"}],"Lower Silesian\t150\t0\t5\nKuyavian-Pomeranian\t24\t0\t0\nLublin\t61\t0\t2\nLubusz\t20\t0\t0\n\u0141\xf3d\u017a\t144\t0\t0\nLesser Poland\t52\t0\t0\nMasovian\t251\t0\t1\nOpole\t23\t0\t0\nSubcarpathian\t43\t0\t1\nPodlaskie\t9\t0\t0\nPomeranian\t22\t0\t0\nSilesian\t102\t0\t2\nHoly Cross\t12\t0\t0\nWarmian-Masurian\t33\t0\t0\nGreater Poland\t55\t0\t2\nWest Pomeranian\t30\t0\t0"),{Russia:2.7,France:8,USA:4,Netherlands:30,Spain:10}),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=L(e),a=L(t);return"".concat((n/a*100).toFixed(2),"%")},O={"United States of America":"USA","United Kingdom":"UK","United Arab Emirates":"UAE","C\xf4te d'Ivoire":"Cote d'Ivoire","Central African Rep.":"CAR"},w=function(e){return O[e]||e},z=function(e,t,n){return c.a.event({category:e,action:t,label:n})},R=function(e,t,n,a){return c.a.timing({category:e,variable:t,value:n,label:a})},N="#EC475F",k="rgba(0, 0, 0, 0.6)",B="#9F9F9F",M="#E6E6E6",T="#CBCBCB",A="#B1B1B1",x="#EC475F",H="rgba(236, 71, 95, 0.5)",V=Object(h.a)().domain([0,10,100,500,1e3,1e4,5e4,1e5,5e5,1e6,2e6,5e6,1e7,1e8]).range([0,.5,.8,1.7,1.8,2,3,5,8,12,15,18,20,24]),G=[15,20],W=[15,5],D=Object(a.memo)((function(e){var t=e.features,n=void 0===t?[]:t,r=e.markers,i=void 0===r?[]:r,c=e.setTooltipContent,u=e.selectedCountry,l=e.setSelectedCountry,s=Object(a.useState)(1),m=Object(d.a)(s,2),f=m[0],g=m[1],v=Object(a.useState)(G),h=Object(d.a)(v,2),L=h[0],C=h[1],j=Object(a.useState)({x:0,y:0}),O=Object(d.a)(j,2),R=O[0],N=O[1],B=Object(a.useState)(320),D=Object(d.a)(B,2),F=D[0],U=D[1];return Object(a.useEffect)((function(){var e=n.find((function(e){return w(e.properties.NAME)===u}));if(!e)return C(320===F?G:W),void g(1);if(C(Object(S.a)(e)),P[u])g(P[u]);else{var t=Object(y.a)().projection(Object(b.a)()).bounds(e),a=t[1][0]-t[0][0],o=t[1][1]-t[0][1],r=.8/Math.max(a/800,o/F);g(Math.min(r,50))}}),[n,u,F]),o.a.createElement("div",{className:"Maps"},u&&o.a.createElement("div",{className:"Navigation"},o.a.createElement("button",{onClick:function(){l(""),z("Button","click","back")}},"\u27f5")),o.a.createElement("div",{className:"ButtonsWrapper"},o.a.createElement("button",{onClick:function(){g((function(e){return 1.1*e})),z("Button","click","zoom_in")}},"+"),o.a.createElement("button",{onClick:function(){g((function(e){return e/1.1})),z("Button","click","zoom_out")}},"\u2212")),!u&&o.a.createElement("div",{className:"ExpandBtnWrapper"},o.a.createElement("button",{className:"".concat(320===F?"Collapsed":""),onClick:function(){U((function(e){return 320===e?460:320}))}},"\u203a")),o.a.createElement(p.ComposableMap,{"data-tip":"",width:800,height:F,projectionConfig:{scale:200}},o.a.createElement(p.ZoomableGroup,{zoom:f,center:L},n.length&&o.a.createElement(p.Geographies,{geography:n},(function(e){return e.geographies.map((function(e){return o.a.createElement(p.Geography,{key:e.rsmKey,geography:e,onMouseDown:function(e){return N({x:e.pageX,y:e.pageY})},onMouseUp:(t=e.properties.NAME,function(e){if(!(Math.abs(e.pageX-R.x)+Math.abs(e.pageY-R.y)>2)){var n=w(t);l(n),z("Country","click",n)}}),onMouseEnter:function(){e.properties.NAME!==u&&(z("Country","hover",e.properties.NAME),c(e.properties.NAME))},onMouseLeave:function(){c("")},style:{default:{fill:e.properties.NAME===u?A:M,outline:"none"},hover:{fill:e.properties.NAME===u?A:T,outline:"none"},pressed:{fill:e.properties.NAME===u?A:T,outline:"none"}}});var t}))})),i.map((function(e,t){return o.a.createElement(p.Marker,{key:"marker-".concat(t+1),coordinates:[e.long,e.lat]},o.a.createElement("g",{onClick:function(){return t=e.country,l(t),void z("Marker","click",t);var t},onMouseEnter:function(){c("".concat(e.country,": ").concat(E(e.confirmed)," \u2013 confirmed cases")),z("Marker","hover",e.name)},onMouseLeave:function(){c("")}},o.a.createElement("circle",{r:V(e.confirmed/(2*f)),fill:H,stroke:x,strokeWidth:1/f}),e.country===u&&o.a.createElement("text",{textAnchor:"middle",y:1,fontSize:e.fontSize||.8,style:{fontFamily:"Arial",fill:k,cursor:"default"}},e.name)))})))))})),F=n(33);var U=function(e){var t=e.series;return o.a.createElement(o.a.Fragment,null,o.a.createElement(F.e,{height:90},o.a.createElement(F.b,{data:t,margin:{top:20,right:20,bottom:20,left:20}},o.a.createElement(F.g,{type:"category",dataKey:"date",name:"date",tick:{fontSize:8},hide:!0}),o.a.createElement(F.h,{type:"number",dataKey:"value",name:"number of cases",tick:{fontSize:8},hide:!0}),o.a.createElement(F.f,{cursor:!1,allowEscapeViewBox:{x:!0,y:!0},labelFormatter:function(e){return"Date: ".concat(e)},formatter:function(e,t){return"value"===t?[]:E(e)}}),o.a.createElement(F.c,{formatter:function(e,t){var n=t.color;return o.a.createElement("span",{style:{color:n,fontSize:10}},e)}}),o.a.createElement(F.a,{isAnimationActive:!1,dataKey:"value",barSize:1,fill:B,legendType:"none"}),o.a.createElement(F.d,{dot:{stroke:"red",strokeWidth:1,r:1},activeDot:{stroke:"red",strokeWidth:2,r:4},isAnimationActive:!1,dataKey:"value",stroke:N,strokeWidth:2,name:"Total cases",legendType:"none",type:"monotone"}))))},I=n(91),K=n(195);var _=function(e){var t=e.data,n=e.columns,r=e.setSelectedCountry,i=o.a.useMemo((function(){return{width:150}}),[]),c=Object(I.useTable)({columns:n,data:t,defaultColumn:i,disableMultiSort:!0,initialState:{sortBy:[{id:"confirmed",desc:!0}]},autoResetSortBy:!1},I.useSortBy,I.useFlexLayout),u=c.getTableProps,l=c.getTableBodyProps,s=c.headerGroups,d=c.rows,m=c.totalColumnsWidth,f=c.prepareRow,g=Object(a.useCallback)((function(e){var t=e.index,n=e.style,a=d[t];return f(a),o.a.createElement("div",Object.assign({},a.getRowProps({style:n}),{className:"tr","data-index":t}),a.cells.map((function(e){return o.a.createElement("div",Object.assign({},e.getCellProps(),{className:"td ".concat(e.value.isCountry?"country":""),onClick:function(){return e.value.isCountry?r(e.value.value):{}}}),E(e.value.value),!e.value.isCountry&&o.a.createElement("span",{style:{fontSize:10}}," +",E(e.value.value-e.value.previousValue)))})))}),[f,d,r]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",Object.assign({},u(),{className:"table"}),o.a.createElement("div",{className:"thead",style:{marginBottom:8,paddingBottom:8,borderBottom:"1px solid #eee",fontWeight:600}},s.map((function(e){return o.a.createElement("div",Object.assign({},e.getHeaderGroupProps(),{className:"tr"}),e.headers.map((function(e){return o.a.createElement("div",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"th"}),e.render("Header"),o.a.createElement("span",{style:{fontSize:10,display:"inline-block",width:14}},e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""))})))}))),o.a.createElement("div",Object.assign({},l(),{className:"tbody"}),o.a.createElement(K.a,{height:400,itemCount:d.length,itemSize:35,width:m+15},g))))};var Q=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],i=decodeURIComponent(window.location.hash).slice(1),u=Object(a.useState)(i),p=Object(d.a)(u,2),h=p[0],S=p[1],y=Object(a.useState)(),b=Object(d.a)(y,2),L=b[0],C=b[1],P=Object(a.useState)(27),O=Object(d.a)(P,2),z=O[0],k=O[1],B=Object(a.useState)({}),M=Object(d.a)(B,2),T=M[0],A=M[1],x=Object(a.useState)({}),H=Object(d.a)(x,2),V=H[0],G=H[1],W=Object(a.useState)([]),F=Object(d.a)(W,2),I=F[0],K=F[1],Q=Object(a.useState)([]),J=Object(d.a)(Q,2),X=J[0],Y=J[1],Z=Object(a.useState)([]),$=Object(d.a)(Z,2),q=$[0],ee=$[1];Object(a.useEffect)((function(){var e=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Date.now(),e.next=4,Object(f.a)("".concat("","/world.json"));case 4:n=e.sent,R("Data","load",Date.now()-t,"Maps"),a=Object(g.feature)(n,n.objects[Object.keys(n.objects)[0]]).features,C(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Date.now(),e.next=4,fetch("https://corona.openode.io/");case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,A(a),R("Data","load",Date.now()-t,"AllSeries"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),Object(a.useEffect)((function(){var e;window.location.hash=encodeURIComponent(h),e=h||"World",c.a.pageview(e)}),[h]),Object(a.useEffect)((function(){if(T.World){var e,t=T[h||"World"]||{};e=h?Object.entries(T).filter((function(e){var t=Object(d.a)(e,2),n=(t[0],t[1]);return n.lat&&n.long&&n.country===h})):Object.entries(T).filter((function(e){var t=Object(d.a)(e,2),n=(t[0],t[1]);return n.lat&&n.long}));var n=T.dateList[z],a=T.dateList[z-1],o=Object.entries(T).filter((function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];return"World"!==n&&"dateList"!==n&&!a.isState&&a.Now})).map((function(e){var t=Object(d.a)(e,2),o=(t[0],t[1]);return{country:{isCountry:!0,value:o.country},confirmed:{previousValue:o[a].confirmed,value:o[n].confirmed},deaths:{previousValue:o[a].deaths,value:o[n].deaths},recovered:{previousValue:o[a].recovered,value:o[n].recovered}}}));ee(o),Y(e.map((function(e){var t=Object(d.a)(e,2),o=t[0],r=t[1];return{name:o,confirmed:(r[n]||r[a]||{}).confirmed||0,lat:r.lat,long:r.long,country:r.country}}))),G(t[n]||{}),K(Object.entries(t).filter((function(e){var t=Object(d.a)(e,1)[0];return t.includes("/")||"today"===t})).slice(0,z+1).map((function(e){var t=Object(d.a)(e,2);return{date:t[0],value:t[1].confirmed}})))}}),[h,T,z]);var te=Object(a.useMemo)((function(){return e=navigator.userAgent,["android","ios"].includes(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toLowerCase();return t.includes("iphone")||t.includes("ipad")||t.includes("darwin")?"ios":t.includes("macintosh")||t.includes("mac os")?"macos":t.includes("android")?"android":t.includes("windows")?"windows":t.includes("linux")||t.includes("ubuntu")||t.includes("debian")?"linux":null}(e))?[{Header:"Country",accessor:"country",sortType:function(e,t){var n=e.values.country.value,a=t.values.country.value;return n>a?1:a>n?-1:0}},{Header:"Confirmed",accessor:"confirmed",sortType:function(e,t){return e.values.confirmed.value-t.values.confirmed.value}}]:[{Header:"Country",accessor:"country",sortType:function(e,t){var n=e.values.country.value,a=t.values.country.value;return n>a?1:a>n?-1:0}},{Header:"Confirmed",accessor:"confirmed",sortType:function(e,t){return e.values.confirmed.value-t.values.confirmed.value}},{Header:"Deaths",accessor:"deaths",sortType:function(e,t){return e.values.deaths.value-t.values.deaths.value}},{Header:"Recovered",accessor:"recovered",sortType:function(e,t){return e.values.recovered.value-t.values.recovered.value}}];var e}),[]);return o.a.createElement("div",{className:"App"},o.a.createElement("section",{className:"Header"},o.a.createElement("select",{className:"Selections",value:h,onChange:function(e){S(e.target.value)}},o.a.createElement("option",{value:""},"The World"),(L||[]).map((function(e){return e.properties.NAME})).sort().map((function(e){return o.a.createElement("option",{key:w(e),value:w(e)},w(e))}))),o.a.createElement("p",{className:"LastUpdated"},"Last updated: ",(new Date).toLocaleString()),o.a.createElement("h3",{role:"presentation",className:"".concat(h?"Small":""," Title"),onClick:function(){return S("")}},"CORONAVIRUS OUTBREAK LIVE STATS"),h&&o.a.createElement("h3",{className:"SelectedCountry"},h)),o.a.createElement("section",{className:"Content"},o.a.createElement(D,{features:L,markers:X,setTooltipContent:r,selectedCountry:h,setSelectedCountry:S}),o.a.createElement(m.a,null,n)),T.dateList&&T.dateList.length>0&&o.a.createElement("section",{className:"Slider"},o.a.createElement("input",{type:"range",min:1,max:T.dateList.length-1,value:z,onChange:function(e){return k(+e.target.value)}}),o.a.createElement("p",null,T.dateList[z])),o.a.createElement("section",{className:"Info"},o.a.createElement("div",null,o.a.createElement("div",{className:"Left"},o.a.createElement(U,{series:I})),o.a.createElement("div",{className:"Center"},o.a.createElement("svg",{width:"100%",viewBox:"0 0 150 20",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("text",{x:"50%",y:"60%",alignmentBaseline:"middle",textAnchor:"middle",fontFamily:"Molde-Expanded-Semibold",style:{fill:N}},E(V.confirmed))),o.a.createElement("p",null,"Confirmed cases in ",o.a.createElement("strong",null,h||"The World"))),o.a.createElement("div",{className:"Right"},o.a.createElement("div",{className:"Column"},o.a.createElement("h2",null,E(V.recovered)),o.a.createElement("h2",null,E(V.deaths))),o.a.createElement("div",{className:"Column"},o.a.createElement("p",null,o.a.createElement("span",null,"Recovered"),o.a.createElement("span",null,j(V.recovered,V.confirmed))),o.a.createElement("p",null,o.a.createElement("span",null,"Deaths"),o.a.createElement("span",null,j(V.deaths,V.confirmed))))))),o.a.createElement("section",{className:"Table"},o.a.createElement(_,{data:q,columns:te,setSelectedCountry:S})),o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.initialize("UA-160716450-1",{debug:!1}),i.a.render(o.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[221,1,2]]]);