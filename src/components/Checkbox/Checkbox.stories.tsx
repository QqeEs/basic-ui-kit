import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    title: "Components/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    argTypes: {
        disabled: {
            description: `Тумблер, указывающий, следует ли отключить или включить флажок. 
                Если true, флажок отключается; если false, флажок включается.`,
            control: "boolean",
        },
        id: {
            description: `Уникальный идентификатор для флажка. Используется для связи с меткой и для однозначной идентификации элемента.`,
        },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
    parameters: {
        docs: {
            description: {
                story: ` 
                <ul>
                    <li>Выбор: Пользователь может кликнуть на флажок, чтобы выбрать или отменить выбор.</li>
                    <li>Отображение состояния: Если флажок выбран, то на него накладываются изображение в виде галочки, указывающее на сделанный выбор.</li>
                    <li>Отключение: Флажок может быть отключён, при этом он становится неактивным и изменяется внешний вид для обозначения отключенного состояния.</li>
                    <li>Идентификация: Флажок принимает проп id, который позволяет уникально идентифицировать каждый флажок.</li>
                </ul>`,
            },
        },
    },
    args: {
        id: "1",
        disabled: false,
    },
};
