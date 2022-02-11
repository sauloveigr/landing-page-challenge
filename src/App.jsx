import GlobalStyle from "./theme/globalStyle";
import Header from "./Components/Header";
import Logo from "./Components/Logo";
import NavLink from "./Components/NavLink";
import NavBar from "./Components/NavBar";
import Home from "./Sections/Home/Home";

function App() {
    return (
        <>
            <GlobalStyle />
            <Header>
                <Logo />
                <NavBar>
                    <NavLink>Funcionalidades</NavLink>
                    <NavLink>App</NavLink>
                    <NavLink>Planos</NavLink>
                    <NavLink>Contato</NavLink>
                </NavBar>
            </Header>

            <Home/>
        </>
    );
}

export default App;