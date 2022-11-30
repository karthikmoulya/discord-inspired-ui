import ChannelBar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}
