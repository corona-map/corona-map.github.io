(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{220:function(e,t,n){e.exports=n(411)},227:function(e,t,n){},229:function(e,t,n){},411:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(51),i=n.n(r),c=n(58),u=(n(227),n(27)),l=n.n(u),d=n(90),s=n(12),m=n(182),f=n(92),g=n(121),v=(n(229),n(59)),S=n(130),h=n(129),p=n(181),y=n(95),L=n(93),C={dailyReport:{confirmed:198150,deaths:81960,recovered:7954,lastUpdated:"Wed, 18 Mar 2020 8:24:02 GMT"},series:[{date:"3/6/20",value:101648},{date:"3/7/20",value:105706},{date:"3/8/20",value:109602},{date:"3/9/20",value:113497},{date:"3/10/20",value:118700},{date:"3/11/20",value:125923},{date:"3/12/20",value:129010},{date:"3/13/20",value:135310},{date:"3/14/20",value:145369},{date:"3/15/20",value:156967},{date:"3/16/20",value:170521},{date:"3/17/20",value:191313}],name:"The World"},b="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/".concat(function(){var e=new Date;e.setDate(e.getDate()-1);var t=e.getFullYear();return(1+e.getMonth()).toString().padStart(2,"0")+"-"+e.getDate().toString().padStart(2,"0")+"-"+t}(),".csv"),E={Germany:{dailyReport:{confirmed:9360,recovered:71,deaths:26,lastUpdated:"Tue, 18 Mar 2020 8:37:12 GMT"},series:[{date:"3/5/20",value:349},{date:"3/6/20",value:534},{date:"3/7/20",value:684},{date:"3/8/20",value:847},{date:"3/9/20",value:1112},{date:"3/10/20",value:1565},{date:"3/11/20",value:1966},{date:"3/12/20",value:2745},{date:"3/13/20",value:3118},{date:"3/14/20",value:3675},{date:"3/15/20",value:5142},{date:"3/16/20",value:5813},{date:"3/17/20",value:9226}],name:"Germany"},Poland:{dailyReport:{confirmed:221,recovered:0,deaths:5,lastUpdated:"Tue, 17 Mar 2020 9:16:36 GMT"},series:[{date:"3/15/20",value:111},{date:"3/16/20",value:150}],name:"Poland"}},P=["Germany","Vietnam","Poland"],R=function(e,t){var n=[];return t.split("\n").forEach((function(t){var a=t.split("\t"),o=Object(s.a)(a,2),r=o[0],i=o[1],c=e.find((function(e){return e["Province/State"]===r}));c&&(c.Confirmed=i.toString(),n.push(c))})),n},w=[].concat(Object(L.a)(R([{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Nordrhein-Westfalen",Latitude:"51.4332",Longitude:"7.6616"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Bayern",Latitude:"48.7904",Longitude:"11.4979"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Baden-W\xfcrttemberg",Latitude:"48.6616",Longitude:"9.3501"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Berlin",Latitude:"52.4938",Longitude:"13.4553"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Niedersachsen",Latitude:"52.6367",Longitude:"9.8451"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Hessen",Latitude:"50.6521",Longitude:"9.1624"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Hamburg",Latitude:"53.5363",Longitude:"9.9945"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Rheinland-Pfalz",Latitude:"50.1183",Longitude:"7.3090"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Sachsen",Latitude:"51.1045",Longitude:"13.2017"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Bremen",Latitude:"53.1334",Longitude:"8.7585"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Schleswig-Holstein",Latitude:"54.2194",Longitude:"9.6961"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Brandenburg",Latitude:"52.1314",Longitude:"13.2162"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Saarland",Latitude:"49.3964",Longitude:"7.0230"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Sachsen-Anhalt",Latitude:"51.9503",Longitude:"11.6923"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Mecklenburg-Vorpommern",Latitude:"53.6127",Longitude:"12.4296"},{"Country/Region":"Germany",fontSize:"0.65","Province/State":"Th\xfcringen",Latitude:"51.0110",Longitude:"7.6616"}],"Nordrhein-Westfalen\t3.375\t39\t13\t\nBaden-W\xfcrttemberg\t1.641\t7\t6\t\nBayern\t1.352\t14\t5\t\nNiedersachsen\t563\t1\t0\t\nRheinland-Pfalz\t435\t1\t0\t\nBerlin\t383\t1\t0\t\nHessen\t381\t2\t1\t\nHamburg\t312\t1\t1\t\nSachsen\t247\t0\t0\t\nSchleswig-Holstein\t145\t0\t0\t\nBrandenburg\t114\t1\t0\t\nSachsen-Anhalt\t105\t0\t0\t\nSaarland\t101\t0\t0\t\nTh\xfcringen\t71\t1\t0\t\nMecklenburg-Vorpommern\t69\t0\t0\t\nBremen\t66\t3\t0\t")),Object(L.a)(R([{"Country/Region":"Vietnam",fontSize:"1","Province/State":"V\u0129nh Ph\xfac",Latitude:"21.30891",Longitude:"105.60489"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"B\xecnh Thu\u1eadn",Latitude:"10.65993",Longitude:"107.77206"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"H\xe0 N\u1ed9i",Latitude:"21.0245",Longitude:"105.84117"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"TP. H\u1ed3 Ch\xed Minh",Latitude:"10.82302",Longitude:"106.62965"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Qu\u1ea3ng Ninh",Latitude:"21.52471",Longitude:"107.96619"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"\u0110\xe0 N\u1eb5ng",Latitude:"16.06778",Longitude:"108.22083"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Th\u1eeba Thi\xean Hu\u1ebf",Latitude:"16.4619",Longitude:"107.59546"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Qu\u1ea3ng Nam",Latitude:"15.87944",Longitude:"108.335"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"L\xe0o Cai",Latitude:"22.48556",Longitude:"103.97066"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Kh\xe1nh H\xf2a",Latitude:"12.24507",Longitude:"109.19432"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Ninh B\xecnh",Latitude:"20.25809",Longitude:"105.97965"},{"Country/Region":"Vietnam",fontSize:"1","Province/State":"Thanh H\xf3a",Latitude:"19.8",Longitude:"105.76667"}],"H\xe0 N\u1ed9i\t11\t0\t0\nV\u0129nh Ph\xfac\t11\t0\t11\nB\xecnh Thu\u1eadn\t9\t0\t0\nTP. H\u1ed3 Ch\xed Minh\t8\t0\t3\nQu\u1ea3ng Ninh\t5\t0\t0\nQu\u1ea3ng Nam\t4\t0\t0\n\u0110\xe0 N\u1eb5ng\t3\t0\t0\nTh\u1eeba Thi\xean Hu\u1ebf\t2\t0\t0\nL\xe0o Cai\t2\t0\t0\nNinh B\xecnh\t1\t0\t0\nKh\xe1nh H\xf2a\t1\t0\t1\nThanh H\xf3a\t1\t0\t1")),Object(L.a)(R([{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Lower Silesian",Latitude:"51.1079",Longitude:"17.0385"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Kuyavian-Pomeranian",Latitude:"53.1235",Longitude:"18.0084"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Lublin",Latitude:"51.2465",Longitude:"22.5684"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Lubusz",Latitude:"51.9356",Longitude:"15.5062"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"\u0141\xf3d\u017a",Latitude:"51.7592",Longitude:"19.4560"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Lesser Poland",Latitude:"50.0647",Longitude:"19.9450"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Masovian",Latitude:"52.2297",Longitude:"21.0122"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Opole",Latitude:"50.6683",Longitude:"17.9231"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Subcarpathian",Latitude:"50.0412",Longitude:"21.9991"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Podlaskie",Latitude:"53.1325",Longitude:"23.1688"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Pomeranian",Latitude:"54.3520",Longitude:"18.6466"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Silesian",Latitude:"50.2649",Longitude:"19.0238"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Holy Cross",Latitude:"50.8661",Longitude:"20.6286"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Warmian-Masurian",Latitude:"53.7784",Longitude:"20.4801"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"Greater Poland",Latitude:"52.4064",Longitude:"16.9252"},{"Country/Region":"Poland",fontSize:"0.65","Province/State":"West Pomeranian",Latitude:"53.4325",Longitude:"14.548056"}],"Lower Silesian\t33\t0\t2\nKuyavian-Pomeranian\t8\t0\t0\nLublin\t22\t0\t1\nLubusz\t2\t0\t0\n\u0141\xf3d\u017a\t34\t0\t0\nLesser Poland\t5\t0\t0\nMasovian\t38\t0\t0\nOpole\t7\t0\t0\nSubcarpathian\t11\t0\t1\nPodlaskie\t0\t0\t0\nPomeranian\t8\t0\t0\nSilesian\t23\t0\t0\nHoly Cross\t4\t0\t0\nWarmian-Masurian\t7\t0\t0\nGreater Poland\t13\t0\t1\nWest Pomeranian\t7\t0\t0"))),z={US:"United States of America",UK:"United Kingdom","Mainland China":"China","Cote d'Ivoire":"C\xf4te d'Ivoire"},O=function(e){return z[e]||e},j={Russia:2.7,France:8,"United States of America":4,Netherlands:30,Spain:10},k=function(e){for(var t=0,n=0,a=0,o=e[0]?e[0]["Last Update"]:"",r=0;r<e.length;r+=1)t+=+e[r].Confirmed,n+=+e[r].Deaths,a+=+e[r].Recovered;return{confirmed:t,deaths:n,recovered:a,lastUpdated:o}},M=function(e){var t=[];if(!e.length)return[];for(var n=Object.keys(e[0]).filter((function(e){return!"Province/StateCountry/RegionLatLong".includes(e)})),a=0;a<n.length;a+=1){for(var o=0,r=0;r<e.length;r+=1)o+=+e[r][n[a]];var i={date:n[a],value:o};t.push(i)}return t},N=function(e,t,n){return c.a.event({category:e,action:t,label:n})},G=function(e,t,n,a){return c.a.timing({category:e,variable:t,value:n,label:a})},B="#EC475F",T="rgba(0, 0, 0, 0.6)",D="#9F9F9F",_="#E6E6E6",x="#CBCBCB",V="#B1B1B1",A="#EC475F",U="rgba(236, 71, 95, 0.5)",H=Object(S.a)().domain([1,10,50,100,1e3,5e3,1e4,5e4,1e5]).range([.5,.8,1.7,1.8,2,3,5,10,20]),W=[15,20],F=[15,5],I=Object(a.memo)((function(e){var t=e.features,n=void 0===t?[]:t,r=e.dailyReports,i=void 0===r?[]:r,c=e.setTooltipContent,u=e.selectedCountry,l=e.setSelectedCountry,d=Object(a.useState)(1),m=Object(s.a)(d,2),f=m[0],g=m[1],S=Object(a.useState)(W),L=Object(s.a)(S,2),C=L[0],b=L[1],E=Object(a.useState)({x:0,y:0}),R=Object(s.a)(E,2),z=R[0],k=R[1],M=Object(a.useState)(320),G=Object(s.a)(M,2),B=G[0],D=G[1];Object(a.useEffect)((function(){var e=n.find((function(e){return e.properties.NAME===u}));if(!e)return b(320===B?W:F),void g(1);if(b(Object(h.a)(e)),j[u])g(j[u]);else{var t=Object(p.a)().projection(Object(y.a)()).bounds(e),a=t[1][0]-t[0][0],o=t[1][1]-t[0][1],r=.8/Math.max(a/800,o/B);g(Math.min(r,50))}}),[n,u,B]);var I=i.filter((function(e){return P.indexOf(O(e["Country/Region"]))<0}));return o.a.createElement("div",{className:"Maps"},u&&o.a.createElement("div",{className:"Navigation"},o.a.createElement("button",{onClick:function(){l(""),N("Button","click","back")}},"\u27f5")),o.a.createElement("div",{className:"ButtonsWrapper"},o.a.createElement("button",{onClick:function(){g((function(e){return 1.1*e})),N("Button","click","zoom_in")}},"+"),o.a.createElement("button",{onClick:function(){g((function(e){return e/1.1})),N("Button","click","zoom_out")}},"\u2212")),!u&&o.a.createElement("div",{className:"ExpandBtnWrapper"},o.a.createElement("button",{className:"".concat(320===B?"Collapsed":""),onClick:function(){D((function(e){return 320===e?460:320}))}},"\u203a")),o.a.createElement(v.ComposableMap,{"data-tip":"",width:800,height:B,projectionConfig:{scale:200}},o.a.createElement(v.ZoomableGroup,{zoom:f,center:C},n.length&&o.a.createElement(v.Geographies,{geography:n},(function(e){return e.geographies.map((function(e){return o.a.createElement(v.Geography,{key:e.rsmKey,geography:e,onMouseDown:function(e){return k({x:e.pageX,y:e.pageY})},onMouseUp:(t=e.properties.NAME,function(e){Math.abs(e.pageX-z.x)+Math.abs(e.pageY-z.y)>2||(l(t),N("Country","click",t))}),onMouseEnter:function(){e.properties.NAME!==u&&(N("Country","hover",e.properties.NAME),c(e.properties.NAME))},onMouseLeave:function(){c("")},style:{default:{fill:e.properties.NAME===u?V:_,outline:"none"},hover:{fill:e.properties.NAME===u?V:x,outline:"none"},pressed:{fill:e.properties.NAME===u?V:x,outline:"none"}}});var t}))})),I.concat(w).map((function(e,t){return o.a.createElement(v.Marker,{key:"marker-".concat(t+1),coordinates:[e.Longitude,e.Latitude]},o.a.createElement("g",{onClick:function(){return t=O(e["Country/Region"]),l(t),void N("Marker","click",t);var t},onMouseEnter:function(){c("".concat(+e.Confirmed," \u2013 confirmed cases")),N("Marker","hover",e["Province/State"]||O(e["Country/Region"]))},onMouseLeave:function(){c("")}},o.a.createElement("circle",{r:H(+e.Confirmed/(2*f)),fill:U,stroke:A,strokeWidth:1/f}),O(e["Country/Region"])===u&&o.a.createElement("text",{textAnchor:"middle",y:1,fontSize:+e.fontSize||.8,style:{fontFamily:"Arial",fill:T,cursor:"default"}},e["Province/State"]||O(e["Country/Region"]))))})))))})),K=n(33);var Q=function(e){var t=e.series;return o.a.createElement(o.a.Fragment,null,o.a.createElement(K.e,{height:90},o.a.createElement(K.b,{data:t.slice(-10),margin:{top:20,right:20,bottom:20,left:20}},o.a.createElement(K.g,{type:"category",dataKey:"date",name:"date",tick:{fontSize:8},hide:!0}),o.a.createElement(K.h,{type:"number",dataKey:"value",name:"number of cases",tick:{fontSize:8},hide:!0}),o.a.createElement(K.f,{cursor:{strokeDasharray:"3 3"},labelFormatter:function(e){return"Date: ".concat(e)},formatter:function(e,t){return"value"===t?[]:e}}),o.a.createElement(K.c,{formatter:function(e,t){var n=t.color;return o.a.createElement("span",{style:{color:n,fontSize:10}},e)}}),o.a.createElement(K.a,{dataKey:"value",barSize:1,fill:D,legendType:"none"}),o.a.createElement(K.d,{dataKey:"value",stroke:B,strokeWidth:4,name:"Total cases",legendType:"none",type:"monotone"}))))};var Y=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=decodeURIComponent(window.location.hash).slice(1),u=Object(a.useState)(i),v=Object(s.a)(u,2),S=v[0],h=v[1],p=Object(a.useState)(),y=Object(s.a)(p,2),L=y[0],P=y[1],R=Object(a.useState)([]),w=Object(s.a)(R,2),z=w[0],j=w[1],N=Object(a.useState)([]),T=Object(s.a)(N,2),D=T[0],_=T[1],x=Object(a.useState)({dailyReport:{},series:[],name:""}),V=Object(s.a)(x,2),A=V[0],U=V[1];Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Date.now(),e.next=3,Object(f.b)("".concat("","/world.json"));case 3:n=e.sent,G("Data","load",Date.now()-t,"Maps"),a=Object(g.feature)(n,n.objects[Object.keys(n.objects)[0]]).features,P(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Date.now(),e.next=3,Object(f.a)(b);case 3:n=e.sent,G("Data","load",Date.now()-t,"DailyReports"),j(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Date.now(),e.next=3,Object(f.a)("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv");case 3:n=e.sent,G("Data","load",Date.now()-t,"TimeSeries"),_(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t(),n()}),[]),Object(a.useEffect)((function(){S?z.length&&D.length&&U(function(e,t,n){if(E[e])return E[e];var a=t.filter((function(t){return O(t["Country/Region"])===e})),o=n.filter((function(t){return O(t["Country/Region"])===e}));return{name:e,dailyReport:k(a),series:M(o)}}(S,z,D)):U(C)}),[z,D,S]),Object(a.useEffect)((function(){var e;window.location.hash=encodeURIComponent(S),e=S||"The World",c.a.pageview(e)}),[S]);var H=A.dailyReport,W=void 0===H?{}:H,F=A.series,K=void 0===F?[]:F,Y=A.name;return o.a.createElement("div",{className:"App"},o.a.createElement("select",{className:"Selections",value:S,onChange:function(e){h(e.target.value)}},o.a.createElement("option",{value:""},"The World"),(L||[]).map((function(e){return e.properties.NAME})).sort().map((function(e){return o.a.createElement("option",{key:e,value:e},e)}))),o.a.createElement("p",{className:"LastUpdated"},"Last updated: ",W.lastUpdated?new Date(W.lastUpdated).toLocaleString():"Unknown"),o.a.createElement("h3",{role:"presentation",className:"".concat(S?"Small":""," Title"),onClick:function(){return h("")}},"CORONAVIRUS OUTBREAK LIVE STATS"),S&&o.a.createElement("h3",{className:"SelectedCountry"},S),o.a.createElement("section",{className:"Content"},o.a.createElement(I,{features:L,dailyReports:z,setTooltipContent:r,selectedCountry:S,setSelectedCountry:h}),o.a.createElement(m.a,null,n)),o.a.createElement("section",{className:"Info"},o.a.createElement("div",null,K.length>0&&o.a.createElement("div",{className:"Left"},o.a.createElement(Q,{series:K})),o.a.createElement("div",{className:"Center"},o.a.createElement("svg",{width:"100%",viewBox:"0 0 90 20",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("text",{x:"50%",y:"60%",alignmentBaseline:"middle",textAnchor:"middle",fontFamily:"Molde-Expanded-Semibold",style:{fill:B}},W.confirmed)),o.a.createElement("p",null,"Confirmed cases in ",Y)),o.a.createElement("div",{className:"Right"},o.a.createElement("div",null,o.a.createElement("h2",null,W.recovered),o.a.createElement("h2",null,W.deaths)),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("span",null,"Recovered"),o.a.createElement("span",null,(W.recovered/W.confirmed*100).toFixed(2),"%")),o.a.createElement("p",null,o.a.createElement("span",null,"Deaths"),o.a.createElement("span",null,(W.deaths/W.confirmed*100).toFixed(2),"%")))))),o.a.createElement("section",{className:"Footer"},o.a.createElement("p",null,"From Munich with \u2764\ufe0e"),o.a.createElement("span",null,"Data sources: "),o.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports",rel:"noopener noreferrer",target:"_blank"},"WHO"),", ",o.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19",rel:"noopener noreferrer",target:"_blank"},"CSSEGISandData"),", ",o.a.createElement("a",{href:"https://www.worldometers.info/coronavirus/",rel:"noopener noreferrer",target:"_blank"},"worldometers"),", ",o.a.createElement("a",{href:"https://www.arcgis.com/",rel:"noopener noreferrer",target:"_blank"},"arcgis.com/"),", ",o.a.createElement("a",{href:"https://www.morgenpost.de/",rel:"noopener noreferrer",target:"_blank"},"Berliner Morgenpost/"),o.a.createElement("p",null,"This project is open-sourced here: ",o.a.createElement("a",{href:"https://github.com/corona-map/corona-map.github.io",rel:"noopener noreferrer",target:"_blank"},"Github"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.initialize("UA-160716450-1",{debug:!1}),i.a.render(o.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[220,1,2]]]);