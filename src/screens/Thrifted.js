import { useEffect } from "react";
import thriftEntries from "../entries/thriftEntries";


function ThriftTiles() {
  return (
    thriftEntries.map((entry, index) => {
      return (
        <div className="thrifted-tile text-center col-12 md:col-6 lg2:col-4 mb-4">
          <div className="relative m-4 mb-2 overflow-hidden">
            <img className="w-full" src={entry.image} alt={entry.name}/>
            <div className="thrifted-tile--description absolute top-0 left-0 w-full h-full p-12 overflow-y-scroll text-left text-xl whitespace-pre-line bg-ellie-white/50">
              {entry.description}
            </div>
          </div>
          <div>
            <h3>{entry.name}</h3>
            <em>{entry.cost === '0' ? 'FREE' : `$${entry.cost}`}, {entry.place}{entry.location ? ` (${entry.location})` : null}</em>
          </div>
        </div>
      );
    })
  );
}

function Thrifted() {
  useEffect(() => {
    document.title = "Ellie La - Thrift Finds"
  });

  return (
    <div className="App">
      <div className="container flex-col w-full mx-auto">
        <h1>THRIFT FINDS</h1>
        <div className="w-full max-w-[96rem] px-8">
          <em className="text-left sm:px-8">Just a few favorites I've thrifted over the years :)</em>
          <div className="flex flex-wrap justify-center p-4 mx-auto mb-12">
            <ThriftTiles/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thrifted;