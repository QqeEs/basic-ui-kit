import{j as e}from"./jsx-runtime-BZf_YgVj.js";import"./index-CEThVCg_.js";const r="_checkbox_19xzn_1",E="_checkbox__input_19xzn_10",d="_checkbox__label_19xzn_17",s={checkbox:r,checkbox__input:E,checkbox__label:d},l=({disabled:a=!1,id:o,...t})=>e.jsxs("div",{className:s.checkbox,children:[e.jsx("input",{type:"checkbox",className:s.checkbox__input,id:o,disabled:a,...t}),e.jsx("label",{htmlFor:o,className:s.checkbox__label})]});l.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!0,tsType:{name:"string"},description:""}}};const D={title:"Components/Checkbox",component:l,tags:["autodocs"],argTypes:{disabled:{description:`Тумблер, указывающий, следует ли отключить или включить флажок. 
                Если true, флажок отключается; если false, флажок включается.`,control:"boolean"},id:{description:"Уникальный идентификатор для флажка. Используется для связи с меткой и для однозначной идентификации элемента."}}},u={parameters:{docs:{description:{story:` 
                <ul>
                    <li>Выбор: Пользователь может кликнуть на флажок, чтобы выбрать или отменить выбор.</li>
                    <li>Отображение состояния: Если флажок выбран, то на него накладываются изображение в виде галочки, указывающее на сделанный выбор.</li>
                    <li>Отключение: Флажок может быть отключён, при этом он становится неактивным и изменяется внешний вид для обозначения отключенного состояния.</li>
                    <li>Идентификация: Флажок принимает проп id, который позволяет уникально идентифицировать каждый флажок.</li>
                </ul>`}}},args:{id:"1",disabled:!1}};var c,i,n;u.parameters={...u.parameters,docs:{...(c=u.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \` 
                <ul>
                    <li>Выбор: Пользователь может кликнуть на флажок, чтобы выбрать или отменить выбор.</li>
                    <li>Отображение состояния: Если флажок выбран, то на него накладываются изображение в виде галочки, указывающее на сделанный выбор.</li>
                    <li>Отключение: Флажок может быть отключён, при этом он становится неактивным и изменяется внешний вид для обозначения отключенного состояния.</li>
                    <li>Идентификация: Флажок принимает проп id, который позволяет уникально идентифицировать каждый флажок.</li>
                </ul>\`
      }
    }
  },
  args: {
    id: "1",
    disabled: false
  }
}`,...(n=(i=u.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const _=["Basic"];export{u as Basic,_ as __namedExportsOrder,D as default};
