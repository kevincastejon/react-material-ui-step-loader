(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1261:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(453);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1285)],module)}.call(this,__webpack_require__(1262)(module))},1285:function(module,exports,__webpack_require__){var map={"./0-StepLoader.stories.js":1301};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1285},1301:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Playground",(function(){return Playground}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Card=__webpack_require__(1319),Grid=(__webpack_require__(104),__webpack_require__(9),__webpack_require__(105),__webpack_require__(1316)),Typography=__webpack_require__(1317),LinearProgress=__webpack_require__(1318),CheckCircleOutline=__webpack_require__(460),CheckCircleOutline_default=__webpack_require__.n(CheckCircleOutline),CheckCircle=__webpack_require__(459),CheckCircle_default=__webpack_require__.n(CheckCircle),Cancel=__webpack_require__(458),Cancel_default=__webpack_require__.n(Cancel),Error=__webpack_require__(454),Error_default=__webpack_require__.n(Error),_ref=react_default.a.createElement(Error_default.a,{color:"secondary"});function StepLoader(props){var steps=props.steps,color=props.color,height=props.height,variant=props.variant,currentStep=props.currentStep,currentProgress=props.currentProgress,errors=props.errors,skips=props.skips;return react_default.a.createElement("div",null,react_default.a.createElement(Grid.a,{style:{width:"80%",margin:"auto"},container:!0,spacing:1},steps.map((function(s,i){return react_default.a.createElement(Grid.a,{key:s.label,container:!0,item:!0,xs:12,spacing:1,direction:"row",justify:"flex-start",alignItems:"center"},react_default.a.createElement(Grid.a,{xs:!0,item:!0},react_default.a.createElement(Typography.a,{variant:"subtitle2",style:{fontWeight:currentStep>=i?"bold":"normal",color:errors.includes(i)?"red":skips.includes(i)?"orange":null,fontStyle:currentStep>i?"oblique":"normal"}},errors.includes(i)&&s.labelError?s.labelError:skips.includes(i)&&s.labelSkip?s.labelSkip:currentStep>i&&s.labelAfter?s.labelAfter:s.label)),react_default.a.createElement(Grid.a,{xs:!0,item:!0},react_default.a.createElement(LinearProgress.a,{style:{height:height,borderRadius:"square"===variant?0:"rounded"===variant?5:15},variant:currentStep===i&&-1===currentProgress?"indeterminate":"determinate",value:currentStep>i?100:currentStep===i&&-1<currentProgress?currentProgress:0,color:s.color?s.color:color})),react_default.a.createElement(Grid.a,{item:!0},errors.includes(i)?_ref:skips.includes(i)?react_default.a.createElement(Cancel_default.a,{style:{color:"orange"}}):currentStep>i?react_default.a.createElement(CheckCircle_default.a,{style:{color:"green"}}):react_default.a.createElement(CheckCircleOutline_default.a,{style:{color:currentStep===i?"black":"grey"}})))}))))}StepLoader.displayName="StepLoader",StepLoader.defaultProps={color:"primary",height:2,currentProgress:-1,errors:[],skips:[]},StepLoader.__docgenInfo={description:"Stepped LinearProgress component using material-ui",methods:[],displayName:"StepLoader",props:{color:{defaultValue:{value:"'primary'",computed:!1},type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1}]},required:!1,description:"The color of the progress bars."},height:{defaultValue:{value:"2",computed:!1},type:{name:"number"},required:!1,description:"The LinearProgress height."},currentProgress:{defaultValue:{value:"-1",computed:!1},type:{name:"number"},required:!1,description:"The current progress [0-100] of the current step. If ommited the LinearProgress will use the 'undeterminate' variant."},errors:{defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"number"}},required:!1,description:"An array of int representing the failed steps."},skips:{defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"number"}},required:!1,description:"An array of int representing the skipped steps."},steps:{type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},labelAfter:{name:"string",required:!1},labelSkip:{name:"string",required:!1},labelError:{name:"string",required:!1},color:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1}],required:!1}}}},required:!0,description:'An array of \'step\' object with the following shape (label:string, [labelAfter:string],[labelSkip:string],[labelError:string],[color:string "primary"\\|"secondary"]).'},currentStep:{type:{name:"number"},required:!0,description:"The current step."},variant:{type:{name:"enum",value:[{value:"'square'",computed:!1},{value:"'rounded'",computed:!1},{value:"'round'",computed:!1}]},required:!1,description:"The variant type for the LinearProgress outline. 'square' \\| 'rounded' \\| 'round'"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\components\\StepLoader.js"]={name:"StepLoader",docgenInfo:StepLoader.__docgenInfo,path:"src\\lib\\components\\StepLoader.js"});var dist=__webpack_require__(69),addSourceDecorator=(__webpack_require__(440).withSource,__webpack_require__(440).addSource),Playground=(__webpack_exports__.default={parameters:{storySource:{source:"import React, {useState, useEffect} from 'react';\r\nimport {\r\n  Typography, Card,\r\n} from '@material-ui/core';\r\nimport StepLoader from '../src/lib/components/StepLoader';\r\nimport { withKnobs, object as obj, select, number } from '@storybook/addon-knobs';\r\n\r\nexport default {\r\n  title: 'StepLoader',\r\n  component: StepLoader,\r\n  decorators: [withKnobs]\r\n};\r\n\r\nexport const Playground = () => {\r\n  const currentProgress = number('CurrentProgress',-1, {range:true, min:-1,max:100});\r\n  const currentStep = number('CurrentStep',0,{range:true, min:-1,max:5});\r\n  const color = select('Color',{Primary:'primary', Secondary:'secondary'},'primary');\r\n  const variant = select('Variant',{Square:'square', Rounded:'rounded', Round:'round'},'square');\r\n  const height = number('Height', 2, {min:1,max:20});\r\n  const stepSkips = obj('Skips (add skipped step indexes into the array)', []);\r\n  const stepErrors = obj('Errors (add failed step indexes into the array)', []);\r\n  const steps = obj('Steps',[\r\n    { label: 'Authenticating', labelAfter: 'Authenticated', labelError: 'Auth failed', labelSkip:'Auth not needed' },\r\n    { label: 'Checking updates', labelAfter: 'Updated', labelError: 'No update found', labelSkip:'Useless' },\r\n    { label: 'Formatting message', labelAfter: 'Message formatted', labelError: 'Bad format', labelSkip:'Already formatted' },\r\n    { label: 'Posting message', labelAfter: 'Message posted', labelError: 'Cannot send', labelSkip:'Empty message' },\r\n    { label: 'Verifying', labelAfter: 'Verified', labelError: 'Check failed', labelSkip:'Check skipped' },\r\n  ]);\r\n  const styles = { root: { width: '40%', margin: 'auto', marginTop:20, textAlign:'center' }};\r\n  return(\r\n    <div style={styles.root}>\r\n        <Card style={{ backgroundColor: '#fafdff', width: '80%', margin: 'auto' }}>\r\n         <StepLoader\r\n           steps={steps}\r\n           currentStep={currentStep}\r\n           currentProgress={currentProgress}\r\n           errors={stepErrors}\r\n           skips={stepSkips}\r\n           color={color}\r\n           height={height}\r\n           variant={variant}\r\n         />\r\n        </Card>\r\n      </div>)\r\n};\r\n",locationsMap:{"steploader--playground":{startLoc:{col:26,line:14},endLoc:{col:1,line:45},startBody:{col:26,line:14},endBody:{col:1,line:45}}}}},title:"StepLoader",component:StepLoader,decorators:[dist.withKnobs]},addSourceDecorator((function(){var currentProgress=Object(dist.number)("CurrentProgress",-1,{range:!0,min:-1,max:100}),currentStep=Object(dist.number)("CurrentStep",0,{range:!0,min:-1,max:5}),color=Object(dist.select)("Color",{Primary:"primary",Secondary:"secondary"},"primary"),variant=Object(dist.select)("Variant",{Square:"square",Rounded:"rounded",Round:"round"},"square"),height=Object(dist.number)("Height",2,{min:1,max:20}),stepSkips=Object(dist.object)("Skips (add skipped step indexes into the array)",[]),stepErrors=Object(dist.object)("Errors (add failed step indexes into the array)",[]),steps=Object(dist.object)("Steps",[{label:"Authenticating",labelAfter:"Authenticated",labelError:"Auth failed",labelSkip:"Auth not needed"},{label:"Checking updates",labelAfter:"Updated",labelError:"No update found",labelSkip:"Useless"},{label:"Formatting message",labelAfter:"Message formatted",labelError:"Bad format",labelSkip:"Already formatted"},{label:"Posting message",labelAfter:"Message posted",labelError:"Cannot send",labelSkip:"Empty message"},{label:"Verifying",labelAfter:"Verified",labelError:"Check failed",labelSkip:"Check skipped"}]);return react_default.a.createElement("div",{style:{width:"40%",margin:"auto",marginTop:20,textAlign:"center"}},react_default.a.createElement(Card.a,{style:{backgroundColor:"#fafdff",width:"80%",margin:"auto"}},react_default.a.createElement(StepLoader,{steps:steps,currentStep:currentStep,currentProgress:currentProgress,errors:stepErrors,skips:stepSkips,color:color,height:height,variant:variant})))}),{__STORY__:"import React, {useState, useEffect} from 'react';\r\nimport {\r\n  Typography, Card,\r\n} from '@material-ui/core';\r\nimport StepLoader from '../src/lib/components/StepLoader';\r\nimport { withKnobs, object as obj, select, number } from '@storybook/addon-knobs';\r\n\r\nexport default {\r\n  title: 'StepLoader',\r\n  component: StepLoader,\r\n  decorators: [withKnobs]\r\n};\r\n\r\nexport const Playground = () => {\r\n  const currentProgress = number('CurrentProgress',-1, {range:true, min:-1,max:100});\r\n  const currentStep = number('CurrentStep',0,{range:true, min:-1,max:5});\r\n  const color = select('Color',{Primary:'primary', Secondary:'secondary'},'primary');\r\n  const variant = select('Variant',{Square:'square', Rounded:'rounded', Round:'round'},'square');\r\n  const height = number('Height', 2, {min:1,max:20});\r\n  const stepSkips = obj('Skips (add skipped step indexes into the array)', []);\r\n  const stepErrors = obj('Errors (add failed step indexes into the array)', []);\r\n  const steps = obj('Steps',[\r\n    { label: 'Authenticating', labelAfter: 'Authenticated', labelError: 'Auth failed', labelSkip:'Auth not needed' },\r\n    { label: 'Checking updates', labelAfter: 'Updated', labelError: 'No update found', labelSkip:'Useless' },\r\n    { label: 'Formatting message', labelAfter: 'Message formatted', labelError: 'Bad format', labelSkip:'Already formatted' },\r\n    { label: 'Posting message', labelAfter: 'Message posted', labelError: 'Cannot send', labelSkip:'Empty message' },\r\n    { label: 'Verifying', labelAfter: 'Verified', labelError: 'Check failed', labelSkip:'Check skipped' },\r\n  ]);\r\n  const styles = { root: { width: '40%', margin: 'auto', marginTop:20, textAlign:'center' }};\r\n  return(\r\n    <div style={styles.root}>\r\n        <Card style={{ backgroundColor: '#fafdff', width: '80%', margin: 'auto' }}>\r\n         <StepLoader\r\n           steps={steps}\r\n           currentStep={currentStep}\r\n           currentProgress={currentProgress}\r\n           errors={stepErrors}\r\n           skips={stepSkips}\r\n           color={color}\r\n           height={height}\r\n           variant={variant}\r\n         />\r\n        </Card>\r\n      </div>)\r\n};\r\n",__ADDS_MAP__:{"steploader--playground":{startLoc:{col:26,line:14},endLoc:{col:1,line:45},startBody:{col:26,line:14},endBody:{col:1,line:45}}},__MAIN_FILE_LOCATION__:"/0-StepLoader.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\pitik\\Documents\\GitHub\\react-material-ui-step-loader\\stories",__IDS_TO_FRAMEWORKS__:{}}))},464:function(module,exports,__webpack_require__){__webpack_require__(465),__webpack_require__(608),__webpack_require__(609),__webpack_require__(1260),module.exports=__webpack_require__(1261)},527:function(module,exports){}},[[464,1,2]]]);
//# sourceMappingURL=main.227895c5d0de8f835d7a.bundle.js.map