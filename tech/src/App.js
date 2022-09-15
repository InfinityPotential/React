import { Layout} from 'antd';
import './App.css';
import 'antd/dist/antd.css'
import AppHeader from './components/common/header';
import AppHome from './views/home';
import AppFooter from './components/common/footer';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default App;
