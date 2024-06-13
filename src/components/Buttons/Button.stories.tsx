import type { Meta, StoryObj } from "@storybook/react";
import { Buttons } from "./Buttons";

const meta: Meta<typeof Buttons> = {
    title: "Components/Button",
    component: Buttons,
    tags: ["autodocs"],
    argTypes: {
        view: {
            description: "Внешний вид кнопки",
            options: ["primary", "secondary"],
            control: {
                type: "select",
            },
        },
        label: {
            defaultValue: "Primary",
            description: "Текст внутри кнопки",
        },
        disabled: {
            description: `Тумблер, указывающий, следует ли отключить или включить кнопку. 
                Если true, кнопка отключается; если false, кнопка включается.`,
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Buttons>;

export const Primary: Story = {
    parameters: {
        docs: {
            description: {
                story: ` 
                <ul>
                    <li>Кликабельность: Пользователь может кликнуть на кнопку, чтобы выполнить соответствующее действие.</li>
                    <li>Адаптивность: Кнопка реагирует на действия пользователя, изменяя внешний вид при наведении и нажатии.</li>
                </ul>`,
            },
        },
    },
    args: {
        view: "primary",
        label: "Primary",
        disabled: false,
    },
};

export const Secondary: Story = {
    parameters: {
        docs: {
            description: {
                story: `<ul>
                    <li>Стиль: Кнопка имеет внешний вид, который отличается от основной кнопки, что позволяет пользователю различать разные типы действий.</li>
                    <li>Кликабельность: Пользователь может кликнуть на кнопку, чтобы выполнить соответствующее действие.</li>
                    <li>Адаптивность: Кнопка реагирует на действия пользователя, изменяя внешний вид при наведении и нажатии.</li>
                </ul>`,
            },
        },
    },
    args: {
        view: "secondary",
        label: "Secondary",
        disabled: false,
    },
};
