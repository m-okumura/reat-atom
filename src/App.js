import "./styles.css";
import {PrimaryButton} from "./components/atoms/button/PrimaryButton";
import {SecondaryButton} from "./components/atoms/button/SecondaryButton";
import {SearchInput} from "./components/molcules/SearchInput";

export default function App() {
    return (
        <div className="App">
            <PrimaryButton>Primary</PrimaryButton>
            <SecondaryButton>Secondry</SecondaryButton>
            <br/>
            <SearchInput/>
        </div>
    );
}
