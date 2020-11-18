import React from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  receiveAccessToken,
  requestAccessToken,
  receiveAccessTokenError,
} from "../../actions";
import ArtistRoute from "../ArtistRoute";
import { GlobalStyle } from "./GlobalStyles";

const DEFAULT_ARTIST_ID = "2P5sC9cVZDToPxyomzF1UH";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestAccessToken());

    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveAccessToken(json.access_token));
      })
      .catch((err) => {
        dispatch(receiveAccessTokenError());
      });
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/artists/:artistId">
          <ArtistRoute />
        </Route>
        <Route exact path="/">
          <Redirect to={`/artists/${DEFAULT_ARTIST_ID}`} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
