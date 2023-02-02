var u=Object.defineProperty;var r=(t,n)=>u(t,"name",{value:n,configurable:!0});import{r as d,a as s,b as p,t as y,n as g,d as b,o as B}from"./vue.esm-bundler-a2d13768.js";const k=r((t,n)=>{const e=t.__vccOpts||t;for(const[o,l]of n)e[o]=l;return e},"_export_sfc"),i={name:"my-button",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(t){return["small","medium","large"].indexOf(t)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(t,{emit:n}){return t=d(t),{classes:s(()=>({"storybook-button":!0,"storybook-button--primary":t.primary,"storybook-button--secondary":!t.primary,[`storybook-button--${t.size||"medium"}`]:!0})),style:s(()=>({backgroundColor:t.backgroundColor})),onClick(){n("click")}}}};function f(t,n,e,o,l,h){return B(),p("button",{type:"button",class:g(o.classes),onClick:n[0]||(n[0]=(...m)=>o.onClick&&o.onClick(...m)),style:b(o.style)},y(e.label),7)}r(f,"_sfc_render");const c=k(i,[["render",f]]);i.__docgenInfo={displayName:"my-button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}]};const z={parameters:{storySource:{source:`import MyButton from './Button.vue';\r
\r
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export\r
export default {\r
  title: 'Example/Button',\r
  component: MyButton,\r
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes\r
  argTypes: {\r
    backgroundColor: { control: 'color' },\r
    onClick: {},\r
    size: {\r
      control: { type: 'select' },\r
      options: ['small', 'medium', 'large'],\r
    },\r
  },\r
};\r
\r
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args\r
const Template = (args) => ({\r
  // Components used in your story \`template\` are defined in the \`components\` object\r
  components: { MyButton },\r
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
  setup() {\r
    return { args };\r
  },\r
  // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
  template: '<my-button v-bind="args" />',\r
});\r
\r
export const Primary = Template.bind({});\r
// More on args: https://storybook.js.org/docs/vue/writing-stories/args\r
Primary.args = {\r
  primary: true,\r
  label: 'Button',\r
};\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
  label: 'Button',\r
};\r
\r
export const Large = Template.bind({});\r
Large.args = {\r
  size: 'large',\r
  label: 'Button',\r
};\r
\r
export const Small = Template.bind({});\r
Small.args = {\r
  size: 'small',\r
  label: 'Button',\r
};\r
`,locationsMap:{primary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},secondary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},large:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},small:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}}}}},title:"Example/Button",component:c,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}},a=r(t=>({components:{MyButton:c},setup(){return{args:t}},template:'<my-button v-bind="args" />'}),"Template"),v=a.bind({});v.args={primary:!0,label:"Button"};const x=a.bind({});x.args={label:"Button"};const C=a.bind({});C.args={size:"large",label:"Button"};const S=a.bind({});S.args={size:"small",label:"Button"};const T=["Primary","Secondary","Large","Small"];export{C as Large,v as Primary,x as Secondary,S as Small,T as __namedExportsOrder,z as default};
//# sourceMappingURL=Button.stories-b257a7bd.js.map
