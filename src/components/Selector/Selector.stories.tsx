import type { Meta, StoryObj } from "@storybook/react";
import { Selector } from "./Selector";

const meta: Meta<typeof Selector> = {
    title: "Components/Selector",
    component: Selector,
    tags: ["autodocs"],
    argTypes: {
        placeholder: {
            description: "Текст, отображаемый в поле, когда оно пустое.",
            control: "text",
        },
        disabled: {
            description: `Тумблер, указывающий, следует ли отключить или включить селектор. 
                Если true, селектор отключается; если false, селектор включается.`,
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Basic: Story = {
    parameters: {
        docs: {
            description: {
                story: ` 
                <ul>
                    <li>Выбор элемента: Пользователь может выбрать элемент из выпадающего списка.</li>
                    <li>Оформление кнопки: Кнопка отображает текущий выбранный элемент или текст "Disabled", если селектор отключен.</li>
                    <li>Оформление списка: Список элементов стилизован с использованием рамки, цвета фона и перехода при наведении.</li>
                    <li>Полоса прокрутки: Добавлена стилизация полосы прокрутки.</li>
                </ul>`,
            },
        },
    },
    args: {
        placeholder: "Placeholder",
        disabled: false,
    },
};
