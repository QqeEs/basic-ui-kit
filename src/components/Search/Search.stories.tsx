import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./Search";

const meta: Meta<typeof Search> = {
    title: "Components/Search",
    component: Search,
    tags: ["autodocs"],
    argTypes: {
        placeholder: {
            description:
                "Текст, отображаемый в поле для ввода, когда оно пустое.",
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Basic: Story = {
    parameters: {
        docs: {
            description: {
                story: ` 
                <ul>
                    <li>Ввод текста: Пользователь может вводить текст в поле поиска.</li>
                    <li>Очистка текста: При наличии текста в поле поиска появляется иконка крестика, при клике на которую текст в поле очищается.</li>
                    <li>Изображение поиска: Фоновое изображение в поле поиска указывает на функцию поиска.</li>
                    <li>Оформление: Поле поиска стилизовано с использованием различных эффектов при фокусе и наведении, включая изменение цвета границы и фона.</li>
                </ul>`,
            },
        },
    },
    args: {
        placeholder: "Search",
    },
};
