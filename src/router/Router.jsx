import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Top} from "../components/pages/Top";
import {DefaultLayout} from "../components/templates/DefaultLayout";
import {Users} from "../components/pages/Users";
import {HeaderOnly} from "../components/templates/HeaderOnly";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <DefaultLayout>
                        <Top />
                    </DefaultLayout>
                } />
                <Route path="/users" element={
                    <HeaderOnly>
                        <Users />
                    </HeaderOnly>
                } />
            </Routes>
        </BrowserRouter>
    );
};