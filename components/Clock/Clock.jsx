import { styles } from "./Clock.styles";
import { useEffect, useState } from "react";
import { getCurrentTime } from "../../utils/datetime-utils";
import { StyledText } from "../StyledText/StyledText";

export function Clock() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <StyledText style={styles.time}>{time}</StyledText>
    </>
  );
}
