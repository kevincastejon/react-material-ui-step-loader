!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t();else if("function"===typeof define&&define.amd)define([],t);else{var a=t();for(var A in a)("object"===typeof exports?exports:e)[A]=a[A]}}(this,(function(){return(this["webpackJsonpreact-material-ui-step-loader"]=this["webpackJsonpreact-material-ui-step-loader"]||[]).push([[0],{29:function(e,t){e.exports="data:image/png;base64,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"},30:function(e,t){e.exports="data:image/png;base64,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"},31:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDUvMDYvMjBbuPWZAAANAElEQVRogcWad3xVVbbHv/uUe296CCEJvWaEUKQoIFKeKIIUHSxMxIfz8CnjCIINsSQGDTgjFpTiCFaGqoO8hygQBsH4VMASEBDR0AYJqaSQeu895+z54yTXlJvkBuLn/T6f+/nk7Kyz9v6dtfZaaxchpaS1cNPsxZHfFppjDKle5zHFMBT6WqYVBqCoSikWP+iKPKCrxt5B0Ur6rmXJxa3Vt7hcIj3verZ9vqHf6LW4wUQMsiQdJSJUglZbTgLC/hlCWGUKIktDHtQVdkfrxq6T657JvpxxXDKRmMTUkaWWNse05BQDESwRlzYAJJqQFZoQ20KEuTz//aQvL0lPS4nE3vnsoFLTschriYnGpfTYBFTAIaxt4Zo3JWdjysGWvBswkVfm/0l95l9dUqss5XEToV7KQAOFhjSdqrnkha55ybOXLDMDeScgIh2np8YXetX1bqlc3XqhoWkIwKnIb9rq5l3n1idlNivfHJHoxMXXXTSUD7yI6NYaZEugC1kQrpvTCjYk7W1KrkkiYbeljqsS6scGiqPOPwwTvKYdihwKaJp/Ba0EDcvjwpxcujn5n43JNEqkXeKiMcWGsstHQgAeE9weYtpH0adjW4Qi+SmriOysQnDq4NCgFfNSfTJtdOvGvI1J6QET6Tg9tXu+R8vwokSCBCGg0kObcBcv/HEsd4zqS2SwC4DSSjcf7vuRBe99St6Fcgh2/mZkdCGLYxzm4HPrk043S+S+uY+r67Ijv62SykBfo9ckKsTBZ3/9I/27xNhtEhA1aQ4yswsZ/cR75BRV2Jb5jeBSrEOz40qvemnZX+pEM6W+4Mbc8FR3bRIAbg+vzBpP/y4xSCntHxIp8T3Ht49i5Z9vAm8LsovbaLH13JYycFVuSGr99jpEYu9MSagy1QV1VHtNOnaOZvrIvs12MnVYb3r1iAVPU2SETba8koQe7XDqGlR6AuWBBCpNdUHcnSkJjRIpM12vmoi6VvIaDOgag66ptpbGOpASIQQDu8eC1+tfyJJQUk5cRDB/X3Ar3754DwkdIhnQM7ZJ3fWpmAilxHC+7JdIXGLqcLclxvkZIZpaU0c135umKCD91F1lVQjT4OHEazn11lwSOsfw4OodPDNtJBmvzaJbu9BmLFkDW7dXKhNiExcN9fVb80eJqT3stxbQNY6dK8CSEkWIRn1aCLuDo7/kg15rsru94DEYN6wXK+6fSKfocBb9I50Kt0FK4hg6R0cAcNfovix+d0/AgcIELpraY8A0qLZI9xnPxRhwi983HConT+exPeNEs8o/O3qao5nnwamBaUJJGT3iItiyMJFdz83g4MkcZq3cxrW9u7D0nvF0jo5ASguAmWOvRAsLtt0vQJjIm+PvTo3xESnwqBNMidO/uABV5cE3dpBTXIYQwvf1Ad9zYVkV97++w1YpJVHBDp6+eyxHVz7AkPgO/PfyrZzMLeTN2TczcUi8L9qBbeWecVGMG9wDKtwBEzEkzly3MsFHxLDE+CbXEy4HZ7KKGLXgPdIOnaxDACD9yBlGPfEOP53OA5cOlR5enTWeRTPGcuxsHveu+IhHfj+Cp24fRZBDo37uqnmaNe5KqLZQIJAIvJYYDyCGzn4h8mCuud8rxRV+pQXgtWxfr/KAgF59OnJlt1g0oXAsq4AjP523s39NVvca9IiJ4PMX/osgh8ZDb+9izbybEYgGJHzdVH/H+NlvcCIzG8KDAyKjCXm8bxs5VPXGj55QYSozJMK/a1W6aRsVwvir4unXuyPtO0Th9ppkni/k2LkLFJZV4ghy4DVMO8E5NFBVivJLSD/+C/OmDONMfhGncooZ0C22ERL2Ijgzu4iME9m4HCq5+SW2Pk39laXf7yx1w/Qc0qoM5XophX/6lR6GJ3Tiwyen0SEqrMG/PYaJ22tQ5THIzCnksXd2s+/wWQh1QbCT7/b9zKRFG/lg/m08/HYa08f0Q1A3iNe455u7Mvjq+FlemnkDv+vQlp0ZmbyVdoht357AU1IOQU6/EU2ihHpMfZwIvn3xgUophjaYI1KimRbfvXYvA7rGgpR2eSXs7+APheUV9PnzKvLyigmOCGbS1b0I0lTiO0UR5nQyoHsM1/XrXp08bT2n84pZsuVLesRG8sgtI1CVurpPnL/Amj2HWZd+lDNn80FVbRf2WQSCFfm1qve/foXXUhpSNSzaRYfxXOJodFUNKPEGOxy4nBqKgD2LZjDz+oFMHd6b9elHyCkup8LtYVRCV58rrf3sMO/szuDecYP5w8h+KKLuHBJAVHgwYwd0Z9b4wfTrEYch4VROEZaUPpdzqEQrhmE1EnZtRVYL4jpI7h8/mPYx4XUKneWzbqKk3M26vUcoKq8k/2IFc9/czr9yi1g9ewrDr+hUKxzX1vZrURrs1LlzdD9uG9kbxbTq+KdhmE6liaDbYkgJuqoyfXR/UjalV7dJHKrKu3OnoCC4f/k23tj5DdPHDCDpD2NwBrC6FEJgScnc1Tu4+/nNuAWg1M5loGiaEngGCoiM5Lp+3XBqKtszMn2TWVNVZt44iA92HiS/pJJuMW0Ae2GWX1LeINHWJpFVVMrYpDUs/+ArCA0CpW5dqyhKmSZN8b2AoY05kL/6LxA8cdu1zHsrjdIyN9sPnmTXoVPkXCiD6EiW/2Mfy/9nP7f/RwJXdovD9JpUmSb33jiInnFtfZU0QPqxs/znks2cyy6BNiEN6lYBYHFU0xTza0x1MAj/Ng5giggktaOelJK4yDDuGJHAHQvWQLALghzg0KHSDZpg8jVXMHfycEYldAHg6Nk8lmz5ipfvGU+oy94mWLnjG+b9LQ3TsuwE6SeZCqSpK/I7xaXJTxWoaH64/mFHjwYLTZCS20ckMGXSVdXPQEk5g+Jj+eS5u9iWfKdNonoy9+sSw60jEnhy7aecyi3igVXbmbP0I0xV2DmksZWkkGUOzdildY4I+qww38hGEt5SEkIIMrMK2HP4NA9MHFon6tSs5pfdcwMf7ztOmxAHC++7gQcmXY1aTbx+lBrSM44JCzeyKu17vJUeCAuxlTSxHFYQ2R1C9b3Kt68/VqxifddSEjUD+V3HaM4WlJD+w5kGk1VKSbeYNuxYmEjGa/fx4ORhqELxG2oB9v2cBR4Tr2nZrhjA/NSQGYdWPVWqAOiKTBONTIbmdClCMH/qSNbuPUxZlccvmfGD4unaLtIvgZpodeDnc8x+fYddW6l+XNXv2CS6QhpUl/HRurFTFVxSGJZS0jYsiKnX9OHVj/Y3KtMYgZyiUua88QnXzH+XX/Iu2ht9AUIV0h3jMHf6iJxel5Knwdb6go3Fdn8DnTQknnK3h8+PnW3ynRqdXtNi6db99J+zmpUf7keqmk2iBdtDGmLribXJeT4iAGGasbTOWYGwq9uWnN88essI3v/8KG6v0WhyA/jfAz8x5KHVPLLiEwrKqyAytE6mDgQqEKGaS2uefUTyNibv1xUrzSepqVzILeKVjw4EpFhKSXR4MO3ahJBUXZ4IIezjtmorfH8mhympG5masoEjp/IhIsSeE5ewxaoLuTNnU5LPl+vMqnDV/aiKtHxmCHKSsmYPe482jEiNITI0iJfe28uW/T9SzYbsolIeenMnQx56m4+/PA4hQRAU+FyoDxVphWtVj9Zua7D3Gzpt8fMVlvqkr9XtJSrMxRcv3kOfjm0bXaraYxas3Pkdc5ZsgRAXwxI6ERnq4uvM8xTllFTXSZdXpgogWDX+UvZ+0lO12xvEuRmhhckOYR3yNbgcFBZXMi5pLT9mXWjWMlJK210cOgd++IW0fT9TdLHKLjFaodZ2CuvQ9HYlyfXbGxD52zsvm21161YdWVw9MghxkpVbwugF77LnyJnAopkAXA57Nae1zpGjhiyK0q1bV694scFeot/Mk7Uh6XS4Zv1exfIIqCbjoqCkkhueXstfN39hjzXA8Hy5ENgHPWGqcUvWhoZnI9AIEYCCTU+nu/BOVpCemk00nDpSVXlyVRrXzH+bPYdtnb81IRXL45Lm5ML3k/+vMZkma4GyzSn/jNTMCTpmwa9aFYgIZf+xc1z/5N+5aeF6th44TqXH3oEPcTpa9cRKF7IgQrcmlH7Y+PkhXPbxtIRyu7Lp2rktk6/uRXGFh/W7vwenw5+qgCEAp7C+idKNu7I2PHP5x9M1eH7eTPX57J6pbkt93PB3YcBrQJUXdLXp9UOzkGhgOhVzycudzyb/6eXVrXdhoDZiElMGlVnORR4pJpp+18H1t+AChyZAF3J7mOJOyt208Le5wlEf7RJTR5ZZ2hxDyimmvLxLNaqQFTpiW6hqrMjblPzFJem53GtOPaY/277A9F1zGmxJOlqIEECrr9l3zQlZrgiRpWJlOAS722qeXac2LPz/uebkD+MefD7q8AVzjNsUYzyWMkxRxUCvYboAdE2pkiaHdMU64FSt9EHRzvSdyxYUtlbf/wafcJruPLsStgAAAABJRU5ErkJggg=="},35:function(e,t,a){e.exports=a(46)},40:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var A=a(0),r=a.n(A),n=a(20),o=a.n(n),l=(a(40),a(17)),i=a(59),c=a(61),g=a(63),s=a(28),E=a.n(s),m=a(27),d=a.n(m),u=a(26),I=a.n(u),h=a(25),f=a.n(h);function b(e){var t=e.steps,a=e.color,A=e.height,n=e.variant,o=e.currentStep,l=e.currentProgress,s=e.errors,m=e.skips;return r.a.createElement("div",null,r.a.createElement(i.a,{style:{width:"80%",margin:"auto"},container:!0,spacing:1},t.map((function(e,t){return r.a.createElement(i.a,{key:e.label,container:!0,item:!0,xs:12,spacing:1,direction:"row",justify:"flex-start",alignItems:"center"},r.a.createElement(i.a,{xs:!0,item:!0},r.a.createElement(c.a,{variant:"subtitle2",style:{fontWeight:o>=t?"bold":"normal",color:s.includes(t)?"red":null,fontStyle:o>t?"oblique":"normal"}},s.includes(t)&&e.labelError?e.labelError:m.includes(t)&&e.labelSkip?e.labelSkip:o>t&&e.labelAfter?e.labelAfter:e.label)),r.a.createElement(i.a,{xs:!0,item:!0},r.a.createElement(g.a,{style:{height:A,borderRadius:"square"===n?0:"rounded"===n?5:15},variant:o===t&&-1===l?"indeterminate":"determinate",value:o>t?100:o===t&&l>-1?l:0,color:e.color?e.color:a})),r.a.createElement(i.a,{item:!0},s.includes(t)?r.a.createElement(f.a,{color:"secondary"}):m.includes(t)?r.a.createElement(I.a,{style:{color:"orange"}}):o>t?r.a.createElement(d.a,{style:{color:"green"}}):r.a.createElement(E.a,{style:{color:o===t?"black":"grey"}})))}))))}b.defaultProps={color:"primary",height:2,currentProgress:-1,errors:[],skips:[]};var v=a(62),C=a(29),S=a.n(C),k=a(30),p=a.n(k),y=a(31),V=a.n(y),w=function(){var e=Object(A.useState)(0),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(A.useState)([]),i=Object(l.a)(o,2),g=i[0],s=i[1],E=Object(A.useState)(0),m=Object(l.a)(E,2),d=m[0],u=m[1];return Object(A.useEffect)((function(){var e=[10,5,4,1,8],t=setTimeout((function(){var t=d+e[a];t>=100?(u(0),n(a+1),1===a&&s([1])):u(t)}),20);return function(){clearTimeout(t)}}),[d,a]),r.a.createElement("div",{style:{width:"40%",height:"100%",margin:"auto",textAlign:"center"}},r.a.createElement(c.a,{variant:"overline",style:{fontSize:"2em",marginBottom:20}},"StepLoader Demo"),r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"storybook"},"  ",r.a.createElement("img",{alt:"storybook",style:{height:25,verticalAlign:"middle"},src:p.a})," Storybook playground")),r.a.createElement("li",null,r.a.createElement("a",{href:"documentation"},"  ",r.a.createElement("img",{alt:"documentation",style:{height:25,verticalAlign:"middle"},src:V.a})," Documentation")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/kevincastejon/react-skills"},r.a.createElement("img",{alt:"github",style:{height:25,verticalAlign:"middle"},src:S.a})," Github"))),r.a.createElement("hr",null),r.a.createElement(v.a,{style:{backgroundColor:"#fafdff",width:"80%",margin:"auto",marginBottom:20,marginTop:20}},r.a.createElement(b,{steps:[{label:"Authenticating",labelAfter:"Authenticated"},{label:"Checking updates",labelAfter:"Updated",labelError:"No update found"},{label:"Formatting message",labelAfter:"Message formatted"},{label:"Posting message",labelAfter:"Message posted"},{label:"Verifying",labelAfter:"Verified"}],currentStep:a,currentProgress:3!==a?d:-1,errors:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]])}));
//# sourceMappingURL=main.ce06335a.chunk.js.map