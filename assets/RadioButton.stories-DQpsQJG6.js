import{j as t}from"./jsx-runtime-BZf_YgVj.js";import"./index-CEThVCg_.js";const d="_radioButton_8asv2_1",E="_radioButton__input_8asv2_11",c="_radioButton__label_8asv2_19",o={radioButton:d,radioButton__input:E,radioButton__label:c},n=({disabled:r=!1,id:a,...l})=>t.jsxs("div",{className:o.radioButton,children:[t.jsx("input",{type:"radio",className:o.radioButton__input,id:a,disabled:r,...l}),t.jsx("label",{htmlFor:a,className:o.radioButton__label})]});n.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!0,tsType:{name:"string"},description:""}}};const D={title:"Components/RadioButton",component:n,tags:["autodocs"],argTypes:{disabled:{description:`Тумблер, указывающий, следует ли отключить или включить радиокнопку. 
                Если true, радиокнопка отключается; если false, радиокнопка включается.`,control:"boolean"},id:{description:"Уникальный идентификатор для радиокнопки.",control:"text"}}},u={parameters:{docs:{description:{story:` 
                <ul>
                    <li>Выбор: Пользователь может выбрать одну из предложенных опций.</li>
                    <li>Отображение состояния: Выбранная радиокнопка будет отмечена точкой внутри.</li>
                    <li>Отключение: Радиокнопка может быть отключена, при этом изменяется внешний вид для обозначения отключенного состояния.</li>
                    <li>Идентификация: Радиокнопка принимает проп id, который позволяет уникально идентифицировать каждую радиокнопку.</li>
                </ul>`}}},args:{id:"1",disabled:!1}};var e,s,i;u.parameters={...u.parameters,docs:{...(e=u.parameters)==null?void 0:e.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \` 
                <ul>
                    <li>Выбор: Пользователь может выбрать одну из предложенных опций.</li>
                    <li>Отображение состояния: Выбранная радиокнопка будет отмечена точкой внутри.</li>
                    <li>Отключение: Радиокнопка может быть отключена, при этом изменяется внешний вид для обозначения отключенного состояния.</li>
                    <li>Идентификация: Радиокнопка принимает проп id, который позволяет уникально идентифицировать каждую радиокнопку.</li>
                </ul>\`
      }
    }
  },
  args: {
    id: "1",
    disabled: false
  }
}`,...(i=(s=u.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const _=["Basic"];export{u as Basic,_ as __namedExportsOrder,D as default};
