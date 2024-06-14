import{j as l}from"./jsx-runtime-BZf_YgVj.js";import"./index-CEThVCg_.js";const E="_textField_1bg37_1",p="_textField__main_1bg37_5",m="_textField__input_1bg37_12",u={textField:E,textField__main:p,textField__input:m},n=({disabled:d=!1,view:t="main",placeholder:o="Placeholder",...r})=>{const c=t?u[`textField__${t}`]:u[`textField__${t}`];return l.jsxs("div",{className:u.textField,children:[l.jsx("input",{type:"text",disabled:d,placeholder:o,...r,className:u.textField__input}),l.jsx("label",{className:c})]})};n.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},view:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"main"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Placeholder"',computed:!1}}}};const x={title:"Components/TextField",component:n,tags:["autodocs"],argTypes:{view:{options:["main"],description:"Внешний вид поля",control:"select"},disabled:{description:`Тумблер, указывающий, следует ли отключить или включить поле. 
                Если true, поле отключается; если false, поле включается.`,control:"boolean"},placeholder:{description:"Текст, отображаемый в поле, когда оно пустое.",control:"text"}}},e={parameters:{docs:{description:{story:` 
                <ul>
                    <li>Ввод текста: Пользователь может вводить текст в поле.</li>
                    <li>Оформление: Текстовое поле стилизовано с использованием заданного размера, цветов и радиуса закругления углов.</li>
                    <li>Фокус: При фокусе цвет границы изменяется на указанный с использованием плавного перехода.</li>
                    <li>Отключение: Поле может быть отключено с помощью добавления атрибута disabled, в таком случае текст становится невидимым, а само поле отмечается надписью "Disabled".</li>
                </ul>`}}},args:{view:"main",placeholder:"Placeholder",disabled:!1}};var i,s,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \` 
                <ul>
                    <li>Ввод текста: Пользователь может вводить текст в поле.</li>
                    <li>Оформление: Текстовое поле стилизовано с использованием заданного размера, цветов и радиуса закругления углов.</li>
                    <li>Фокус: При фокусе цвет границы изменяется на указанный с использованием плавного перехода.</li>
                    <li>Отключение: Поле может быть отключено с помощью добавления атрибута disabled, в таком случае текст становится невидимым, а само поле отмечается надписью "Disabled".</li>
                </ul>\`
      }
    }
  },
  args: {
    view: "main",
    placeholder: "Placeholder",
    disabled: false
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const B=["Basic"];export{e as Basic,B as __namedExportsOrder,x as default};
