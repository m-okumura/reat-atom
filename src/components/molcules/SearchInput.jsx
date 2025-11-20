import {PrimaryButton} from "../atoms/button/PrimaryButton";

export const SearchInput = () => {
    return (
        <div>
            <input placeholder="検索条件"></input>
            <PrimaryButton>Search</PrimaryButton>
            <br />
        </div>
    );
};