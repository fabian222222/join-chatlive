import StreamContainer from "./components/stream/StreamContainer";
import { SocketProvider } from "./providers/SocketProvider";
import { StreamProvider } from "./providers/StreamProvider";

function App() {
  return (
    <>
      <SocketProvider>
        <StreamProvider>
          <StreamContainer />
        </StreamProvider>
      </SocketProvider>
    </>
  );
}

export default App;
