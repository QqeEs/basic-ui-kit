import type { Preview } from "@storybook/react";
import "./../src/components/App/_reset.scss";
import "./../src/components/App/_base.scss";
import "./../src/components/Buttons/_buttons.module.scss";
import "./../src/components/RadioButton/_radioButton.module.scss";
import "./../src/components/Checkbox/_checkbox.module.scss";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
