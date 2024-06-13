import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
    title: "Components/RadioButton",
    component: RadioButton,
    tags: ["autodocs"],
    argTypes: {
        disabled: {
            description: `Тумблер, указывающий, следует ли отключить или включить радиокнопку. 
                Если true, радиокнопка отключается; если false, радиокнопка включается.`,
            control: "boolean",
        },
        id: {
            description: `Уникальный идентификатор для радиокнопки.`,
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Basic: Story = {
    parameters: {
        docs: {
            description: {
                story: ` 
                <ul>
                    <li>Выбор: Пользователь может выбрать одну из предложенных опций.</li>
                    <li>Отображение состояния: Выбранная радиокнопка будет отмечена точкой внутри.</li>
                    <li>Отключение: Радиокнопка может быть отключена, при этом изменяется внешний вид для обозначения отключенного состояния.</li>
                    <li>Идентификация: Радиокнопка принимает проп id, который позволяет уникально идентифицировать каждую радиокнопку.</li>
                </ul>`,
            },
        },
    },
    args: {
        id: "1",
        disabled: false,
    },
};
