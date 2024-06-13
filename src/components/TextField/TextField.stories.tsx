import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
    title: "Components/TextField",
    component: TextField,
    tags: ["autodocs"],
    argTypes: {
        view: {
            options: ["main"],
            description: "Внешний вид поля",
            control: "select",
        },
        disabled: {
            description: `Тумблер, указывающий, следует ли отключить или включить поле. 
                Если true, поле отключается; если false, поле включается.`,
            control: "boolean",
        },
        placeholder: {
            description: "Текст, отображаемый в поле, когда оно пустое.",
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
    parameters: {
        docs: {
            description: {
                story: ` 
                <ul>
                    <li>Ввод текста: Пользователь может вводить текст в поле.</li>
                    <li>Оформление: Текстовое поле стилизовано с использованием заданного размера, цветов и радиуса закругления углов.</li>
                    <li>Фокус: При фокусе цвет границы изменяется на указанный с использованием плавного перехода.</li>
                    <li>Отключение: Поле может быть отключено с помощью добавления атрибута disabled, в таком случае текст становится невидимым, а само поле отмечается надписью "Disabled".</li>
                </ul>`,
            },
        },
    },
    args: {
        view: "main",
        placeholder: "Placeholder",
        disabled: false,
    },
};
