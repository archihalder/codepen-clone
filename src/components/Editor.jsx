import { useState } from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "../App.css";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

const HeaderTitle = styled(Box)`
  background: #1d1e22;
  color: #aaa;
  display: flex;
  padding: 9px 12px;
`;

const HeaderIcon = styled(Box)`
  height: 20px;
  width: 25px;
  display: flex;
  border-radius: 6px;
  place-content: center;
  margin-right: 5px;
  padding: 1px;
  color: #000;
`;

const HeaderBar = styled(Box)`
  background: #000;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const Editor = ({ heading, color, language, icon, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <HeaderBar>
        <HeaderTitle>
          <HeaderIcon component="span" style={{ background: color }}>
            {icon}
          </HeaderIcon>
          {heading}
        </HeaderTitle>
        <CloseIcon onClick={() => setOpen((prevState) => !prevState)} />
      </HeaderBar>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          mode: language,
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
          lint: true,
        }}
      />
    </Container>
  );
};

export default Editor;
