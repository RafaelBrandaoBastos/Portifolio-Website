import logo from './logo.svg';
import './App.css';
import PageComponent from './components/Page/Page'
import TabsProvider from './contexts/TabsProvider';

function App() {
  return (
    <TabsProvider>
      <PageComponent />
    </TabsProvider>
  );
}

export default App;
