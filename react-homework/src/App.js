import React, {Component} from 'react';
import { BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";
import PostDetail from './components/PostDetail';
import AddPost from './components/AddPost';
import Posts from './components/Posts';

class App extends Component {

  render(){

  return (
    <div className="App">

    <Router>
      <Switch>
        <Route exact path="/" component={Posts}></Route>
        <Route exact path="/post/:id" component={PostDetail}></Route>  
        <Route exact path="/add-post" component={AddPost}></Route>
      </Switch>
    </Router>

    </div>
  );
}
}

export default App;
