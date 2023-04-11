import { useEffect, useState } from "react";
import store from "./store";

export default function useStore() {
  const [state, setState] = useState(store.getState());
  useEffect(() => store.subscribe(setState), []);
  return state;
}
