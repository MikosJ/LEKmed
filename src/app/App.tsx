import {Footer} from "./components/Footer.tsx";
import {Header} from "./components/Header.tsx";
import {Bar} from "./components/styled/Bar.ts";
import {Content} from "./components/styled/Content.ts";

export const App = () => {
    return (
        <Content>
            <Bar>
                <Header/>
            </Bar>
            <div>
                
            </div>
            <Bar>
                <Footer/>
            </Bar>
        </Content>
    )
}