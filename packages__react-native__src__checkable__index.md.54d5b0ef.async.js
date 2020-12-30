(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"49T4":function(e,l,a){"use strict";a.r(l);var t=a("q1tI"),n=a.n(t),c=(a("B2uJ"),a("+su7"),a("qOys")),r=a.n(c);a("5Yjd");l["default"]=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"checkable-\u5355\u9009\u590d\u9009\u7ec4\u4ef6"},n.a.createElement("a",{"aria-hidden":"true",href:"#checkable-\u5355\u9009\u590d\u9009\u7ec4\u4ef6"},n.a.createElement("span",{className:"icon icon-link"})),"Checkable \u5355\u9009/\u590d\u9009\u7ec4\u4ef6"),n.a.createElement("h2",{id:"\u6548\u679c\u6f14\u793a"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u6548\u679c\u6f14\u793a"},n.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u6f14\u793a"),n.a.createElement("h3",{id:"1-\u9ed8\u8ba4\u6548\u679c"},n.a.createElement("a",{"aria-hidden":"true",href:"#1-\u9ed8\u8ba4\u6548\u679c"},n.a.createElement("span",{className:"icon icon-link"})),"1. \u9ed8\u8ba4\u6548\u679c"),n.a.createElement(r.a,{code:"<Checkable\n  type=\"checkbox\"\n  options={[\n    { label: 'Apple', value: 1 },\n    { label: 'Banana', value: 2 },\n    { label: 'Peer', value: 3 },\n  ]}\n/>\n<WhiteSpace />\n<Checkable\n  type=\"radio\"\n  options={[\n    { label: 'Apple', value: 1 },\n    { label: 'Banana', value: 2 },\n    { label: 'Peer', value: 3 },\n  ]}\n/>\n",lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("div",{style:{display:"flex",width:750}},n.a.createElement("div",{style:{width:375}},"IOS\u6548\u679c\u56fe"),n.a.createElement("div",{style:{width:375}},"Android\u6548\u679c\u56fe"))),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"checkable-ios1.png",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607678501585424472.png",style:{width:375,marginRight:10,border:"1px solid #ddd"}}),n.a.createElement("img",{alt:"checkable-android1.png",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609295536815342303.png",style:{width:375,border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"2-\u7ed9\u5b9a\u5b57\u7b26\u4e32\u6570\u7ec4\u6216\u8005\u6570\u5b57\u6570\u7ec4\u505a\u9009\u9879"},n.a.createElement("a",{"aria-hidden":"true",href:"#2-\u7ed9\u5b9a\u5b57\u7b26\u4e32\u6570\u7ec4\u6216\u8005\u6570\u5b57\u6570\u7ec4\u505a\u9009\u9879"},n.a.createElement("span",{className:"icon icon-link"})),"2. \u7ed9\u5b9a\u5b57\u7b26\u4e32\u6570\u7ec4\u6216\u8005\u6570\u5b57\u6570\u7ec4\u505a\u9009\u9879"),n.a.createElement(r.a,{code:"<Checkable\n  type=\"checkbox\"\n  options={[1, 2, 3]}\n  defaultValue={[1, 3]}\n/>\n<WhiteSpace />\n<Checkable\n  type=\"radio\"\n  options={['\u82f9\u679c', '\u9999\u8549', '\u68a8']}\n/>\n",lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("div",{style:{display:"flex",width:750}},n.a.createElement("div",{style:{width:375}},"IOS\u6548\u679c\u56fe"),n.a.createElement("div",{style:{width:375}},"Android\u6548\u679c\u56fe"))),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"checkable-ios2.png",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607678543257810566.png",style:{width:375,marginRight:10,border:"1px solid #ddd"}}),n.a.createElement("img",{alt:"checkable-android2.png",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609295558637275377.png",style:{width:375,border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"3-defaultvalue-\u548c\u7981\u7528\u6548\u679c"},n.a.createElement("a",{"aria-hidden":"true",href:"#3-defaultvalue-\u548c\u7981\u7528\u6548\u679c"},n.a.createElement("span",{className:"icon icon-link"})),"3. defaultValue \u548c\u7981\u7528\u6548\u679c"),n.a.createElement(r.a,{code:"<Checkable\n  type=\"checkbox\"\n  options={[\n    { label: 'Apple', value: 1 },\n    { label: 'Banana', value: 2 },\n    { label: 'Peer', value: 3 },\n  ]}\n  disabledValue={[1, 2]}\n  defaultValue={[1, 3]}\n  onChange={value => {\n    console.log(value);\n  }}\n/>\n<WhiteSpace />\n<Checkable\n  type=\"radio\"\n  options={[\n    { label: 'Apple', value: 1 },\n    { label: 'Banana', value: 2 },\n    { label: 'Peer', value: 3 },\n  ]}\n  disabledValue={[1, 2]}\n  defaultValue={[1]}\n  onChange={value => {\n    console.log(value);\n  }}\n/>\n\n",lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("div",{style:{display:"flex",width:750}},n.a.createElement("div",{style:{width:375}},"IOS\u6548\u679c\u56fe"),n.a.createElement("div",{style:{width:375}},"Android\u6548\u679c\u56fe"))),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"checkable-ios3.png",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607678606917701812.png",style:{width:375,marginRight:10,border:"1px solid #ddd"}}),n.a.createElement("img",{alt:"checkable-android3.png",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609295558590047292.png",style:{width:375,border:"1px solid #ddd"}}))),n.a.createElement("h3",{id:"4-\u7ed9\u5b9a\u81ea\u5b9a\u4e49\u6837\u5f0f\u6548\u679c"},n.a.createElement("a",{"aria-hidden":"true",href:"#4-\u7ed9\u5b9a\u81ea\u5b9a\u4e49\u6837\u5f0f\u6548\u679c"},n.a.createElement("span",{className:"icon icon-link"})),"4. \u7ed9\u5b9a\u81ea\u5b9a\u4e49\u6837\u5f0f\u6548\u679c"),n.a.createElement(r.a,{code:"<Checkable\n  type=\"checkbox\"\n  options={['apple', 'banana', 'peer', 'apple1', 'banana2', 'peer3']}\n  containerStyle={{ borderWidth: px(1) }}\n  itemStyle={{ width: '100%' }}\n  labelStyle={{ color: 'red' }}\n  value={value}\n  onChange={value => {\n    console.log(value);\n    setValue(value);\n  }}\n/>\n<WhiteSpace />\n<Checkable\n  type=\"radio\"\n  options={['apple', 'banana', 'peer', 'apple1', 'banana2', 'peer3']}\n  containerStyle={{ borderWidth: px(1) }}\n  itemStyle={{ width: '100%' }}\n  labelStyle={{ color: 'red' }}\n  value={value}\n  onChange={value => {\n    console.log(value);\n    setValue(value);\n  }}\n/>\n",lang:"tsx"}),n.a.createElement("center",null,n.a.createElement("div",{style:{display:"flex",width:750}},n.a.createElement("div",{style:{width:375}},"IOS\u6548\u679c\u56fe"),n.a.createElement("div",{style:{width:375}},"Android\u6548\u679c\u56fe"))),n.a.createElement("center",null,n.a.createElement("figure",null,n.a.createElement("img",{alt:"checkable-ios4.png",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607678653652270433.png",style:{width:375,marginRight:10,border:"1px solid #ddd"}}),n.a.createElement("img",{alt:"checkable-android4.png",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609295558657440896.png",style:{width:375,border:"1px solid #ddd"}}))),n.a.createElement("h2",{id:"api"},n.a.createElement("a",{"aria-hidden":"true",href:"#api"},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u5fc5\u586b"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"type"),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"\u7ec4\u4ef6\u7c7b\u578b"),n.a.createElement("td",null,n.a.createElement("code",null,"checkbox"),"| ",n.a.createElement("code",null,"radio")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"options"),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"\u6307\u5b9a\u53ef\u9009\u9879"),n.a.createElement("td",null,n.a.createElement("code",null,"Option[]")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"value"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u503c"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactText[]")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"onChange"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u4e8b\u4ef6\u56de\u8c03"),n.a.createElement("td",null,n.a.createElement("code",null,"(value: ReactText[]) => void")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"disabledValue"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u8bbe\u7f6e\u7981\u7528\u7684\u9879"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactText[]")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultValue"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u9ed8\u8ba4\u9009\u9879"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactText[]")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"size"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u56fe\u6807\u5927\u5c0f"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"20")),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u8bbe\u7f6e\u7981\u7528"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"containerStyle"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u5bb9\u5668\u6837\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"ViewStyle")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"labelStyle"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6587\u672c\u6837\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"TextStyle")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"itemStyle"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49 item \u6837\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"ViewStyle")),n.a.createElement("td",null)))),n.a.createElement("h3",{id:"option-\u7c7b\u578b"},n.a.createElement("a",{"aria-hidden":"true",href:"#option-\u7c7b\u578b"},n.a.createElement("span",{className:"icon icon-link"})),"Option \u7c7b\u578b"),n.a.createElement(r.a,{code:"interface Option {\n  label: ReactNode;\n  value: ReactText;\n}\n",lang:"ts"})))}}}]);