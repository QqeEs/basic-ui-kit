import{j as a}from"./jsx-runtime-BZf_YgVj.js";import"./index-CEThVCg_.js";const D="_button__primary_ba3us_1",B="_button__secondary_ba3us_22",s={button__primary:D,button__secondary:B},c=({view:r="primary",disabled:p=!1,label:E,...m})=>{const y=r?s[`button__${r}`]:s[`button__${r}`];return a.jsx("div",{className:s.button,children:a.jsx("button",{type:"button",className:y,disabled:p,...m,children:E})})};c.__docgenInfo={description:"",methods:[],displayName:"Buttons",props:{view:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"primary"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const _={title:"Components/Button",component:c,tags:["autodocs"],argTypes:{view:{description:"Внешний вид кнопки",options:["primary","secondary"],control:{type:"select"}},label:{defaultValue:"Primary",description:"Текст внутри кнопки"},disabled:{description:`Тумблер, указывающий, следует ли отключить или включить кнопку. 
                Если true, кнопка отключается; если false, кнопка включается.`,control:"boolean"}}},u={parameters:{docs:{description:{story:` 
                <ul>
                    <li>Кликабельность: Пользователь может кликнуть на кнопку, чтобы выполнить соответствующее действие.</li>
                    <li>Адаптивность: Кнопка реагирует на действия пользователя, изменяя внешний вид при наведении и нажатии.</li>
                </ul>`}}},args:{view:"primary",label:"Primary",disabled:!1}},e={parameters:{docs:{description:{story:`<ul>
                    <li>Стиль: Кнопка имеет внешний вид, который отличается от основной кнопки, что позволяет пользователю различать разные типы действий.</li>
                    <li>Кликабельность: Пользователь может кликнуть на кнопку, чтобы выполнить соответствующее действие.</li>
                    <li>Адаптивность: Кнопка реагирует на действия пользователя, изменяя внешний вид при наведении и нажатии.</li>
                </ul>`}}},args:{view:"secondary",label:"Secondary",disabled:!1}};var n,t,o;u.parameters={...u.parameters,docs:{...(n=u.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \` 
                <ul>
                    <li>Кликабельность: Пользователь может кликнуть на кнопку, чтобы выполнить соответствующее действие.</li>
                    <li>Адаптивность: Кнопка реагирует на действия пользователя, изменяя внешний вид при наведении и нажатии.</li>
                </ul>\`
      }
    }
  },
  args: {
    view: "primary",
    label: "Primary",
    disabled: false
  }
}`,...(o=(t=u.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`<ul>
                    <li>Стиль: Кнопка имеет внешний вид, который отличается от основной кнопки, что позволяет пользователю различать разные типы действий.</li>
                    <li>Кликабельность: Пользователь может кликнуть на кнопку, чтобы выполнить соответствующее действие.</li>
                    <li>Адаптивность: Кнопка реагирует на действия пользователя, изменяя внешний вид при наведении и нажатии.</li>
                </ul>\`
      }
    }
  },
  args: {
    view: "secondary",
    label: "Secondary",
    disabled: false
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const C=["Primary","Secondary"];export{u as Primary,e as Secondary,C as __namedExportsOrder,_ as default};
