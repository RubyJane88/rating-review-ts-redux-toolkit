import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Button, CardContent, Container } from "@material-ui/core";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
import "./App.css";
import { RootState } from "./store/reducers";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  addRatingStarReviewAction,
  removeRatingStarReviewAction,
} from "./features/starsratingreview/pages/starsratingreview-slice";

const App: FC = () => {
  const { rate } = useSelector((state: RootState) => state.starsRatingReview);
  const { stars } = useSelector((state: RootState) => state.starsRatingReview);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <CssBaseline>
      <BrowserRouter>
        <Container>
          <div
            className="App"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "100%",
            }}
          >
            <CardContent>
              <div>
                <h1>Stars Rating Review</h1>
              </div>
            </CardContent>

            <CardContent>{rate}</CardContent>

            <CardContent>{stars}</CardContent>

            <CardContent style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <Button
                  variant={"contained"}
                  style={{ backgroundColor: "orange", marginBottom: "10px" }}
                  onClick={() => dispatch(addRatingStarReviewAction())}
                >
                  <AddCircleSharpIcon />
                </Button>
              </div>
              <div>
                <Button
                  variant={"contained"}
                  style={{ backgroundColor: "green" }}
                  onClick={() => dispatch(removeRatingStarReviewAction())}
                >
                  <RemoveSharpIcon />
                </Button>
              </div>
            </CardContent>
          </div>
        </Container>
      </BrowserRouter>
    </CssBaseline>
  );
};
export default App;
