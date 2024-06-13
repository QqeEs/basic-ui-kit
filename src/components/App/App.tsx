import { Buttons } from "../Buttons/Buttons.tsx";
import { Checkbox } from "../Checkbox/Checkbox.tsx";
import { RadioButton } from "../RadioButton/RadioButton.tsx";
import { Search } from "../Search/Search.tsx";
import { Selector } from "../Selector/Selector.tsx";
import { Switch } from "../Switch/Switch.tsx";
import { TextField } from "../TextField/TextField.tsx";

import "./_base.scss";
import "./_reset.scss";

function App() {
    return (
        <div className="container">
            <Search />
            <Buttons view="primary" label="Primary" />
            <Buttons view="secondary" label="Secondary" />
            <Checkbox id="c1" />
            <RadioButton id="1" />
            <Switch id="s1" />
            <TextField />
            <Selector />
        </div>
    );
}

export default App;
