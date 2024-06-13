import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
    title: "Components/Switch",
    component: Switch,
    tags: ["autodocs"],
    argTypes: {
        disabled: {
            description: `Тумблер, указывающий, следует ли отключить или включить переключатель. 
                Если true, переключатель отключается; если false, переключатель включается.`,
            control: "boolean",
        },
        id: {
            description: `Уникальный идентификатор для переключателя.`,
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
    parameters: {
        docs: {
            description: {
                story: ` 
                <ul>
                    <li>Переключение состояния: Пользователь может переключать состояние переключателя, кликая на него.</li>
                    <li>Отображение состояния: Переключатель имеет два состояния: включенный и выключенный. Включенный состояние обозначается зеленым цветом.</li>
                    <li>Отключение: Переключатель может быть отключен, при этом изменяется внешний вид для обозначения отключенного состояния.</li>
                </ul>`,
            },
        },
    },
    args: {
        id: "1",
        disabled: false,
    },
};
