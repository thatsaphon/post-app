import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPostPage from "./pages/AddPostPage";
import SinglePostPage from "./pages/SinglePostPage";
import CounterPage from "./pages/CounterPage"
import EditPostPage from "./pages/EditPostPage"
import "./App.css";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route path="/counter" component={CounterPage} />
          <Route path="/post/:postId" component={SinglePostPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/addpost" component={AddPostPage} />
          <Route path="/editpost/:postId" component={EditPostPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div >
  );
}
export default App;
