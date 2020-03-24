(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{223:function(e,t,n){e.exports=n(415)},230:function(e,t,n){},232:function(e,t,n){},415:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(52),i=n.n(r),c=n(59),u=(n(230),n(33)),l=n(121),s=n(31),d=n.n(s),m=n(122),f=n(7),v=n(184),g=n(125),h=n(120);n(232);var S=function(){return o.a.createElement("section",{className:"Footer"},o.a.createElement("p",null,"From Munich with \u2764\ufe0e"),o.a.createElement("span",null,"Data sources: "),o.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports",rel:"noopener noreferrer",target:"_blank"},"WHO"),", ",o.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19",rel:"noopener noreferrer",target:"_blank"},"CSSEGISandData"),", ",o.a.createElement("a",{href:"https://www.worldometers.info/coronavirus/",rel:"noopener noreferrer",target:"_blank"},"worldometers"),", ",o.a.createElement("a",{href:"https://www.arcgis.com/",rel:"noopener noreferrer",target:"_blank"},"arcgis.com/"),", ",o.a.createElement("a",{href:"https://www.morgenpost.de/",rel:"noopener noreferrer",target:"_blank"},"Berliner Morgenpost/"),o.a.createElement("p",null,"This project is open-sourced here: ",o.a.createElement("a",{href:"https://github.com/corona-map/corona-map.github.io",rel:"noopener noreferrer",target:"_blank"},"Github")))},p=n(60),y=n(132),b=n(131),L=n(183),E=n(94),C={confirmed:318228,deaths:13049,recovered:92207},P=function(e){return e.toString().replace(/ |\./g,"")},O=function(e,t){var n=[];return t.split("\n").forEach((function(t){var a=t.split("\t"),o=Object(f.a)(a,2),r=o[0],i=o[1],c=e.find((function(e){return e["Province/State"]===r}));c&&i&&n.push({name:c["Province/State"],lat:c.Latitude,long:c.Longitude,fontSize:+c.fontSize,confirmed:+P(i),country:c["Country/Region"]})})),n},j={Germany:O([{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Nordrhein-Westfalen",Latitude:"51.4332",Longitude:"7.6616"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Bayern",Latitude:"48.7904",Longitude:"11.4979"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Baden-W\xfcrttemberg",Latitude:"48.6616",Longitude:"9.3501"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Berlin",Latitude:"52.4938",Longitude:"13.4553"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Niedersachsen",Latitude:"52.6367",Longitude:"9.8451"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Hessen",Latitude:"50.6521",Longitude:"9.1624"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Hamburg",Latitude:"53.5363",Longitude:"9.9945"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Rheinland-Pfalz",Latitude:"50.1183",Longitude:"7.3090"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Sachsen",Latitude:"51.1045",Longitude:"13.2017"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Bremen",Latitude:"53.1334",Longitude:"8.7585"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Schleswig-Holstein",Latitude:"54.2194",Longitude:"9.6961"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Brandenburg",Latitude:"52.1314",Longitude:"13.2162"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Saarland",Latitude:"49.3964",Longitude:"7.0230"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Sachsen-Anhalt",Latitude:"51.9503",Longitude:"11.6923"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Mecklenburg-Vorpommern",Latitude:"53.6127",Longitude:"12.4296"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Th\xfcringen",Latitude:"51.0110",Longitude:"7.6616"}],"Nordrhein-Westfalen\t7361\t163\t33\t\nBayern\t4457\t21\t22\t\nBaden-W\xfcrttemberg\t4300\t29\t23\t\nNiedersachsen\t1586\t6\t4\t\nHessen\t1267\t6\t3\t\nRheinland-Pfalz\t1149\t1\t2\t\nBerlin\t1071\t6\t1\t\nHamburg\t887\t1\t1\t\nSachsen\t731\t2\t1\t\nSchleswig-Holstein\t436\t0\t1\t\nBrandenburg\t353\t1\t1\t\nSaarland\t318\t0\t1\t\nTh\xfcringen\t307\t27\t1\t\nSachsen-Anhalt\t269\t0\t0\t\nMecklenburg-Vorpommern\t187\t0\t0\t\nBremen\t173\t3\t0\t"),Vietnam:O([{"Country/Region":"Vietnam",fontSize:"1","Province/State":"V\u0129nh Ph\xfac",Latitude:"21.30891",Longitude:"105.60489"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"B\xecnh Thu\u1eadn",Latitude:"10.65993",Longitude:"107.77206"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"H\xe0 N\u1ed9i",Latitude:"21.0245",Longitude:"105.84117"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"TP. H\u1ed3 Ch\xed Minh",Latitude:"10.82302",Longitude:"106.62965"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Qu\u1ea3ng Ninh",Latitude:"21.52471",Longitude:"107.96619"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"\u0110\xe0 N\u1eb5ng",Latitude:"16.06778",Longitude:"108.22083"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Th\u1eeba Thi\xean Hu\u1ebf",Latitude:"16.4619",Longitude:"107.59546"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Qu\u1ea3ng Nam",Latitude:"15.87944",Longitude:"108.335"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"L\xe0o Cai",Latitude:"22.48556",Longitude:"103.97066"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Kh\xe1nh H\xf2a",Latitude:"12.24507",Longitude:"109.19432"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Ninh B\xecnh",Latitude:"20.25809",Longitude:"105.97965"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Thanh H\xf3a",Latitude:"19.8",Longitude:"105.76667"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"B\u1eafc Ninh",Latitude:"21.18608",Longitude:"106.07631"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"H\u1ea3i D\u01b0\u01a1ng",Latitude:"20.94099",Longitude:"106.33302"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Ninh Thu\u1eadn",Latitude:"11.56432",Longitude:"108.98858"}],"H\xe0 N\u1ed9i\t27\t0\t0\nTP. H\u1ed3 Ch\xed Minh\t21\t0\t3\nV\u0129nh Ph\xfac\t11\t0\t11\nB\xecnh Thu\u1eadn\t9\t0\t0\nQu\u1ea3ng Ninh\t6\t0\t0\n\u0110\xe0 N\u1eb5ng\t4\t0\t0\nQu\u1ea3ng Nam\t3\t0\t0\nTh\u1eeba Thi\xean Hu\u1ebf\t2\t0\t0\nL\xe0o Cai\t2\t0\t0\nNinh Thu\u1eadn\t2\t0\t0\nNinh B\xecnh\t1\t0\t1\nB\u1eafc Ninh\t1\t0\t0\nH\u1ea3i D\u01b0\u01a1ng\t1\t0\t0\nKh\xe1nh H\xf2a\t1\t0\t1\nThanh H\xf3a\t1\t0\t1"),Poland:O([{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Lower Silesian",Latitude:"51.1079",Longitude:"17.0385"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Kuyavian-Pomeranian",Latitude:"53.1235",Longitude:"18.0084"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Lublin",Latitude:"51.2465",Longitude:"22.5684"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Lubusz",Latitude:"51.9356",Longitude:"15.5062"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"\u0141\xf3d\u017a",Latitude:"51.7592",Longitude:"19.4560"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Lesser Poland",Latitude:"50.0647",Longitude:"19.9450"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Masovian",Latitude:"52.2297",Longitude:"21.0122"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Opole",Latitude:"50.6683",Longitude:"17.9231"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Subcarpathian",Latitude:"50.0412",Longitude:"21.9991"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Podlaskie",Latitude:"53.1325",Longitude:"23.1688"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Pomeranian",Latitude:"54.3520",Longitude:"18.6466"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Silesian",Latitude:"50.2649",Longitude:"19.0238"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Holy Cross",Latitude:"50.8661",Longitude:"20.6286"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Warmian-Masurian",Latitude:"53.7784",Longitude:"20.4801"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Greater Poland",Latitude:"52.4064",Longitude:"16.9252"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"West Pomeranian",Latitude:"53.4325",Longitude:"14.548056"}],"Lower Silesian\t79\t0\t2\nKuyavian-Pomeranian\t18\t0\t0\nLublin\t37\t0\t1\nLubusz\t11\t0\t0\n\u0141\xf3d\u017a\t106\t0\t0\nLesser Poland\t25\t0\t0\nMasovian\t147\t0\t1\nOpole\t11\t0\t0\nSubcarpathian\t28\t0\t1\nPodlaskie\t5\t0\t0\nPomeranian\t17\t0\t0\nSilesian\t66\t0\t0\nHoly Cross\t7\t0\t0\nWarmian-Masurian\t22\t0\t0\nGreater Poland\t37\t0\t2\nWest Pomeranian\t12\t0\t0")},w={Russia:2.7,France:8,"United States of America":4,Netherlands:30,Spain:10},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=P(e),a=P(t);return"".concat((n/a*100).toFixed(2),"%")},z={US:"United States of America","Cote d'Ivoire":"C\xf4te d'Ivoire"},N=function(e,t,n){return c.a.event({category:e,action:t,label:n})},k=function(e,t,n,a){return c.a.timing({category:e,variable:t,value:n,label:a})},M="#EC475F",B="rgba(0, 0, 0, 0.6)",T="#9F9F9F",H="#E6E6E6",V="#CBCBCB",G="#B1B1B1",A="#EC475F",_="rgba(236, 71, 95, 0.5)",x=Object(y.a)().domain([0,1,10,50,100,1e3,5e3,1e4,5e4,1e5]).range([0,.5,.8,1.7,1.8,2,3,5,10,20]),D=[15,20],W=[15,5],F=Object(a.memo)((function(e){var t=e.features,n=void 0===t?[]:t,r=e.markers,i=void 0===r?[]:r,c=e.setTooltipContent,u=e.selectedCountry,l=e.setSelectedCountry,s=Object(a.useState)(1),d=Object(f.a)(s,2),m=d[0],v=d[1],g=Object(a.useState)(D),h=Object(f.a)(g,2),S=h[0],y=h[1],C=Object(a.useState)({x:0,y:0}),P=Object(f.a)(C,2),O=P[0],j=P[1],R=Object(a.useState)(320),z=Object(f.a)(R,2),k=z[0],M=z[1];return Object(a.useEffect)((function(){var e=n.find((function(e){return e.properties.NAME===u}));if(!e)return y(320===k?D:W),void v(1);if(y(Object(b.a)(e)),w[u])v(w[u]);else{var t=Object(L.a)().projection(Object(E.a)()).bounds(e),a=t[1][0]-t[0][0],o=t[1][1]-t[0][1],r=.8/Math.max(a/800,o/k);v(Math.min(r,50))}}),[n,u,k]),o.a.createElement("div",{className:"Maps"},u&&o.a.createElement("div",{className:"Navigation"},o.a.createElement("button",{onClick:function(){l(""),N("Button","click","back")}},"\u27f5")),o.a.createElement("div",{className:"ButtonsWrapper"},o.a.createElement("button",{onClick:function(){v((function(e){return 1.1*e})),N("Button","click","zoom_in")}},"+"),o.a.createElement("button",{onClick:function(){v((function(e){return e/1.1})),N("Button","click","zoom_out")}},"\u2212")),!u&&o.a.createElement("div",{className:"ExpandBtnWrapper"},o.a.createElement("button",{className:"".concat(320===k?"Collapsed":""),onClick:function(){M((function(e){return 320===e?460:320}))}},"\u203a")),o.a.createElement(p.ComposableMap,{"data-tip":"",width:800,height:k,projectionConfig:{scale:200}},o.a.createElement(p.ZoomableGroup,{zoom:m,center:S},n.length&&o.a.createElement(p.Geographies,{geography:n},(function(e){return e.geographies.map((function(e){return o.a.createElement(p.Geography,{key:e.rsmKey,geography:e,onMouseDown:function(e){return j({x:e.pageX,y:e.pageY})},onMouseUp:(t=e.properties.NAME,function(e){Math.abs(e.pageX-O.x)+Math.abs(e.pageY-O.y)>2||(l(t),N("Country","click",t))}),onMouseEnter:function(){e.properties.NAME!==u&&(N("Country","hover",e.properties.NAME),c(e.properties.NAME))},onMouseLeave:function(){c("")},style:{default:{fill:e.properties.NAME===u?G:H,outline:"none"},hover:{fill:e.properties.NAME===u?G:V,outline:"none"},pressed:{fill:e.properties.NAME===u?G:V,outline:"none"}}});var t}))})),i.map((function(e,t){return o.a.createElement(p.Marker,{key:"marker-".concat(t+1),coordinates:[e.long,e.lat]},o.a.createElement("g",{onClick:function(){return t=e.country,l(t),void N("Marker","click",t);var t},onMouseEnter:function(){c("".concat(e.confirmed," \u2013 confirmed cases")),N("Marker","hover",e.name)},onMouseLeave:function(){c("")}},o.a.createElement("circle",{r:x(e.confirmed/(2*m)),fill:_,stroke:A,strokeWidth:1/m}),e.country===u&&o.a.createElement("text",{textAnchor:"middle",y:1,fontSize:e.fontSize||.8,style:{fontFamily:"Arial",fill:B,cursor:"default"}},e.name)))})))))})),I=n(34);var K=function(e){var t=e.series;return o.a.createElement(o.a.Fragment,null,o.a.createElement(I.e,{height:90},o.a.createElement(I.b,{data:t,margin:{top:20,right:20,bottom:20,left:20}},o.a.createElement(I.g,{type:"category",dataKey:"date",name:"date",tick:{fontSize:8},hide:!0}),o.a.createElement(I.h,{type:"number",dataKey:"value",name:"number of cases",tick:{fontSize:8},hide:!0}),o.a.createElement(I.f,{cursor:!1,allowEscapeViewBox:{x:!0,y:!0},labelFormatter:function(e){return"Date: ".concat(e)},formatter:function(e,t){return"value"===t?[]:e}}),o.a.createElement(I.c,{formatter:function(e,t){var n=t.color;return o.a.createElement("span",{style:{color:n,fontSize:10}},e)}}),o.a.createElement(I.a,{isAnimationActive:!1,dataKey:"value",barSize:1,fill:T,legendType:"none"}),o.a.createElement(I.d,{dot:{stroke:"red",strokeWidth:1,r:1},activeDot:{stroke:"red",strokeWidth:2,r:4},isAnimationActive:!1,dataKey:"value",stroke:M,strokeWidth:2,name:"Total cases",legendType:"none",type:"monotone"}))))},U=n(92),Q=n(197);var J=function(e){var t=e.data,n=e.columns,r=o.a.useMemo((function(){return{width:150}}),[]),i=Object(U.useTable)({columns:n,data:t,defaultColumn:r,disableMultiSort:!0,initialState:{sortBy:[{id:"confirmed",desc:!0}]},autoResetSortBy:!1},U.useSortBy,U.useFlexLayout),c=i.getTableProps,u=i.getTableBodyProps,l=i.headerGroups,s=i.rows,d=i.totalColumnsWidth,m=i.prepareRow,f=Object(a.useCallback)((function(e){var t=e.index,n=e.style,a=s[t];return m(a),o.a.createElement("div",Object.assign({},a.getRowProps({style:n}),{className:"tr"}),a.cells.map((function(e){return o.a.createElement("div",Object.assign({},e.getCellProps(),{className:"td",onClick:function(){return console.log((e.value.isCountry,e.value.value))}}),e.value.isCountry?e.value.value:"".concat(e.value.value," +").concat(e.value.value-e.value.previousValue))})))}),[m,s]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",Object.assign({},c(),{className:"table"}),o.a.createElement("div",{className:"thead"},l.map((function(e){return o.a.createElement("div",Object.assign({},e.getHeaderGroupProps(),{className:"tr"}),e.headers.map((function(e){return o.a.createElement("div",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"th"}),e.render("Header"),o.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""))})))}))),o.a.createElement("div",Object.assign({},u(),{className:"tbody"}),o.a.createElement(Q.a,{height:400,itemCount:s.length,itemSize:35,width:d},f))))};var X=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],i=decodeURIComponent(window.location.hash).slice(1),s=Object(a.useState)(i),p=Object(f.a)(s,2),y=p[0],b=p[1],L=Object(a.useState)(),E=Object(f.a)(L,2),P=E[0],O=E[1],w=Object(a.useState)(59),N=Object(f.a)(w,2),B=N[0],T=N[1],H=Object(a.useState)(),V=Object(f.a)(H,2),G=V[0],A=V[1],_=Object(a.useState)({}),x=Object(f.a)(_,2),D=x[0],W=x[1],I=Object(a.useState)([]),U=Object(f.a)(I,2),Q=U[0],X=U[1],Y=Object(a.useState)([]),Z=Object(f.a)(Y,2),$=Z[0],q=Z[1],ee=Object(a.useState)([]),te=Object(f.a)(ee,2),ne=te[0],ae=te[1],oe=Object(a.useState)([]),re=Object(f.a)(oe,2),ie=re[0],ce=re[1];Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Date.now(),e.next=3,Object(g.b)("".concat("","/world.json"));case 3:n=e.sent,k("Data","load",Date.now()-t,"Maps"),a=Object(h.feature)(n,n.objects[Object.keys(n.objects)[0]]).features,O(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid",t=Date.now(),Promise.all(["Confirmed","Deaths","Recovered"].map((function(e){return Object(g.a)("".concat("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid","-").concat(e,".csv"))}))).then((function(e){k("Data","load",Date.now()-t,"AllSeries");var n,a=Object(f.a)(e,3),o=a[0],r=a[1],i=a[2],c={world:{}},s=Object.keys(o[0]).filter((function(e){return!"Province/StateCountry/RegionLatLong".includes(e)})).slice(-60);q(s);for(var d=0;d<o.length;d+=1)for(var m=o[d],v=m["Province/State"],g=m["Country/Region"],h=m.Lat,S=m.Long,p=z[n=g]||n,y=v===p?"".concat(p," - Mainland"):v,b=0;b<s.length;b+=1){var L=s[b],E={confirmed:+o[d][L],deaths:+r[d][L],recovered:+i[d][L]},C=c.world[L];C?(C.confirmed+=E.confirmed,C.deaths+=E.deaths,C.recovered+=E.recovered):c.world[L]=E;var P,O=y||p,j=!!y;if(c[O])c[O][L]=Object(l.a)({},E);else c[O]=(P={},Object(u.a)(P,L,Object(l.a)({},E)),Object(u.a)(P,"lat",h),Object(u.a)(P,"long",S),Object(u.a)(P,"isState",j),Object(u.a)(P,"country",p),P);if(j)if(c[p]){var w=c[p][L];w?(w.confirmed+=E.confirmed,w.deaths+=E.deaths,w.recovered+=E.recovered):c[p][L]={confirmed:E.confirmed,deaths:E.deaths,recovered:E.recovered},c[p].states.includes(y)||c[p].states.push(y)}else c[p]=Object(u.a)({states:[y],country:p,isState:!1},L,{confirmed:E.confirmed,deaths:E.deaths,recovered:E.recovered})}A(c)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),Object(a.useEffect)((function(){if(G){var e,t,n=$[B],a=$[B-1],o=Object.entries(G).filter((function(e){var t=Object(f.a)(e,2),n=t[0],a=t[1];return"world"!==n&&!a.isState})).map((function(e){var t=Object(f.a)(e,2),o=(t[0],t[1]);return{country:{isCountry:!0,value:o.country},confirmed:{previousValue:o[a].confirmed,value:o[n].confirmed},deaths:{previousValue:o[a].deaths,value:o[n].deaths},recovered:{previousValue:o[a].recovered,value:o[n].recovered}}}));ce(o),y?(e=G[y],t=Object.entries(G).filter((function(e){var t=Object(f.a)(e,2),n=(t[0],t[1]);return n.lat&&n.long&&n.country===y}))):(e=G.world,t=Object.entries(G).filter((function(e){var t=Object(f.a)(e,2),n=(t[0],t[1]);return n.lat&&n.long}))),W(n||y?e[n]||{}:C),X(Object.entries(e).filter((function(e){return Object(f.a)(e,1)[0].includes("/")})).slice(0,B+1).map((function(e){var t=Object(f.a)(e,2);return{date:t[0],value:t[1].confirmed}}))),ae(j[y]&&!n?j[y]:t.map((function(e){var t=Object(f.a)(e,2),a=t[0],o=t[1];return{name:a,confirmed:(o[n]||{}).confirmed||0,lat:o.lat,long:o.long,country:o.country}})))}}),[y,G,B,$]),Object(a.useEffect)((function(){var e;window.location.hash=encodeURIComponent(y),e=y||"The World",c.a.pageview(e),T(59)}),[y]);var ue=Object(a.useMemo)((function(){return e=navigator.userAgent,["android","ios"].includes(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toLowerCase();return t.includes("iphone")||t.includes("ipad")||t.includes("darwin")?"ios":t.includes("macintosh")||t.includes("mac os")?"macos":t.includes("android")?"android":t.includes("windows")?"windows":t.includes("linux")||t.includes("ubuntu")||t.includes("debian")?"linux":null}(e))?[{Header:"Country",accessor:"country"},{Header:"Confirmed",accessor:"confirmed"}]:[{Header:"Country",accessor:"country",sortType:function(e,t){var n=e.values.country.value,a=t.values.country.value;return n>a?1:a>n?-1:0}},{Header:"Confirmed",accessor:"confirmed",sortType:function(e,t){return e.values.confirmed.value-t.values.confirmed.value}},{Header:"Deaths",accessor:"deaths",sortType:function(e,t){return e.values.deaths.value-t.values.deaths.value}},{Header:"Recovered",accessor:"recovered",sortType:function(e,t){return e.values.recovered.value-t.values.recovered.value}}];var e}),[]);return o.a.createElement("div",{className:"App"},o.a.createElement("section",{className:"Header"},o.a.createElement("select",{className:"Selections",value:y,onChange:function(e){b(e.target.value)}},o.a.createElement("option",{value:""},"The World"),(P||[]).map((function(e){return e.properties.NAME})).sort().map((function(e){return o.a.createElement("option",{key:e,value:e},e)}))),o.a.createElement("p",{className:"LastUpdated"},"Last updated: ",(new Date).toLocaleString()),o.a.createElement("h3",{role:"presentation",className:"".concat(y?"Small":""," Title"),onClick:function(){return b("")}},"CORONAVIRUS OUTBREAK LIVE STATS"),y&&o.a.createElement("h3",{className:"SelectedCountry"},y)),o.a.createElement("section",{className:"Content"},o.a.createElement(F,{features:P,markers:ne,setTooltipContent:r,selectedCountry:y,setSelectedCountry:b}),o.a.createElement(v.a,null,n)),o.a.createElement("section",{className:"Slider"},o.a.createElement("input",{type:"range",min:1,max:59,value:B,onChange:function(e){return T(+e.target.value)}}),o.a.createElement("p",null,$[B]||"Today")),o.a.createElement("section",{className:"Info"},o.a.createElement("div",null,o.a.createElement("div",{className:"Left"},o.a.createElement(K,{series:Q})),o.a.createElement("div",{className:"Center"},o.a.createElement("svg",{width:"100%",viewBox:"0 0 100 20",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("text",{x:"50%",y:"60%",alignmentBaseline:"middle",textAnchor:"middle",fontFamily:"Molde-Expanded-Semibold",style:{fill:M}},D.confirmed)),o.a.createElement("p",null,"Confirmed cases in ",y)),o.a.createElement("div",{className:"Right"},o.a.createElement("div",null,o.a.createElement("h2",null,D.recovered),o.a.createElement("h2",null,D.deaths)),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("span",null,"Recovered"),o.a.createElement("span",null,R(D.recovered,D.confirmed))),o.a.createElement("p",null,o.a.createElement("span",null,"Deaths"),o.a.createElement("span",null,R(D.deaths,D.confirmed))))))),o.a.createElement("section",{className:"Table"},o.a.createElement(J,{data:ie,columns:ue})),o.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.initialize("UA-160716450-1",{debug:!1}),i.a.render(o.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[223,1,2]]]);