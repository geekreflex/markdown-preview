import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from "lodash";
import { useTheme } from "../theme/useTheme";
import { getFromLS } from "../utils/storage";

const ThemedButton = styled.button`
  font-size: 14px;
  cursor: pointer;
`;

const Wrapper = styled.div``;

const Container = styled.div``;

export default (props) => {
  const themesFromStore = getFromLS("all-themes");
  const [data, setData] = useState(themesFromStore.data);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();

  const themeSwitcher = (selectedTheme) => {
    console.log(selectedTheme);
    setMode(selectedTheme);
    props.setter(selectedTheme);
  };

  useEffect(() => {
    setThemes(_.keys(data));
  }, [data]);

  useEffect(() => {
    props.newTheme && updateThemeCard(props.newTheme);
  }, [props.newTheme]);

  const updateThemeCard = (theme) => {
    const key = _.keys(theme)[0];
    const updated = { ...data, [key]: theme[key] };
    setData(updated);
  };

  const ThemeCard = (props) => {
    return (
      <Wrapper>
        <ThemedButton onClick={() => themeSwitcher(props.theme)}>
          {props.theme.name}
        </ThemedButton>
      </Wrapper>
    );
  };

  return (
    <div>
      <Container>
        {themes.length > 0 &&
          themes.map((theme) => (
            <ThemeCard theme={data[theme]} key={data[theme].id} />
          ))}
      </Container>
    </div>
  );
};
