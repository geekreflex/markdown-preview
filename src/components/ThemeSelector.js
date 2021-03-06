import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from "lodash";
import { useTheme } from "../theme/useTheme";
import { getFromLS } from "../utils/storage";

const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  margin-right: 5px;
`;

const ButtonWrap = styled.div`
  display: flex;
`;

const Wrapper = styled.div``;

const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 10px 0;
`;

export default (props) => {
  const themesFromStore = getFromLS("all-themes");
  const [data, setData] = useState(themesFromStore.data);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();

  const themeSwitcher = (selectedTheme) => {
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
      <Button onClick={() => themeSwitcher(props.theme)}>
        {props.theme.name}
      </Button>
    );
  };

  return (
    <Wrapper>
      <Container>
        <h3>Themes</h3>
        <ButtonWrap>
          {themes.length > 0 &&
            themes.map((theme) => (
              <ThemeCard theme={data[theme]} key={data[theme].id} />
            ))}
        </ButtonWrap>
      </Container>
    </Wrapper>
  );
};
