import { createStore } from "redux";

const initialState = {
  images: [
    { url: "https://picsum.photos/id/10/300/200", alt: "Image 1" },
    { url: "https://picsum.photos/id/20/300/200", alt: "Image 2" },
    { url: "https://picsum.photos/id/30/300/200", alt: "Image 3" },
    { url: "https://picsum.photos/id/40/300/200", alt: "Image 4" },
    { url: "https://picsum.photos/id/50/300/200", alt: "Image 5" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
