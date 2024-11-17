
import Header from './components/header/Header';
import Menu from './components/menu/Menu';

const App = () => {
  const header = {
    logo: {
      className: "logo",
      text: "PIZZA DAY",
    },
    input: {
      type: "text",
      className: "search-bar",
      placeholder: "Search for the order #",
    },
    name: {
      className: "username",
      text: "VLAD",
    }

  };

  return (
    <div>
      <Header info={header} />
      <Menu />
    </div>
  );
};

export default App;
