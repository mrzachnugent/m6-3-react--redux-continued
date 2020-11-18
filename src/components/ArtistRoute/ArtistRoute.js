import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  receiveArtistData,
  receiveArtistDataError,
  requestAritstData,
} from "../../actions";
import { fetchArtistProfile } from "../../helpers/api-helpers";
import { numberShortner } from "../../utilities";
import { Header } from "../App/Header";
import { Tags } from "../App/Tags";

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);
  const currentArtist = useSelector((state) => state.artists.currentArtist);
  const state = useSelector((state) => state);

  const { artistId } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (accessToken !== null) {
      return;
    } else {
      dispatch(requestAritstData());
      fetchArtistProfile(accessToken, artistId)
        .then((json) => dispatch(receiveArtistData(json)))
        .catch((err) => {
          dispatch(receiveArtistDataError());
        });
    }
  }, [accessToken]);

  return (
    <>
      {state.artists.status === "error" && <h1>Error...</h1>}
      {!currentArtist && <h1>Loading...</h1>}
      {currentArtist && (
        <div>
          <Header
            imgSrc={currentArtist.profile.images[0].url}
            name={currentArtist.profile.name}
            followers={numberShortner(currentArtist.profile.followers.total)}
          />
          <Tags
            tag1={currentArtist.profile.genres[0]}
            tag2={currentArtist.profile.genres[1]}
          />
        </div>
      )}
    </>
  );
};

export default ArtistRoute;
