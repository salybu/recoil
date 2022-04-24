import { useRecoilValue } from "recoil";
import { charCountState } from "../selectors/selectors";

export function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Charcter Count: {count}</>;
}
