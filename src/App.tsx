import ThemeProvider from './context/theme/themeProvider';
import GithubProvider from './context/github/githubProvider';
import Layout from './components/layout';
import Main from './components/main';
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <GithubProvider>
                <Layout>
                    <Main/>
                </Layout>
            </GithubProvider>
        </ThemeProvider>
    );
}

export default App;
