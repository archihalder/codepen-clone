import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        language="xml"
        heading="HTML"
        icon="/"
        color="red"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language="css"
        heading="CSS"
        icon="*"
        color="#48cae4"
        value={css}
        onChange={setCss}
      />
      <Editor
        language="javascript"
        heading="JS"
        icon="( )"
        color="yellow"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;
