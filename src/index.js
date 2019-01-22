import Welcome from './Components/Welcome/index'

function App() {
  return (
    <div>
      <Welcome name="World" />
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
