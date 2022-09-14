import { Layout} from 'antd';
import './App.css';
import 'antd/dist/antd.css'
import AppHeader from './components/common/header';
import AppHome from './views/home';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
      </Content>
    </Layout>
  );
}

export default App;
