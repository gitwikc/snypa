import * as React from "react";
import * as monaco from "monaco-editor";

interface Props {
  language?: string;
}

const CodeEditor = (props: Props) => {
  React.useEffect(() => {
    const editor = monaco.editor.create(document.getElementById("editor")!, {
      value: "// Write your snippet here\n",
      language: "javascript",
      fontFamily: "Fira Code",
      theme: "vs-dark",
      autoClosingBrackets: "always",
      bracketPairColorization: { enabled: true },
      automaticLayout: true,
      lineHeight: 36,
      suggestLineHeight: 38,
      fontLigatures: true,
      fontSize: 14,
    });
    editor.layout({
      height: 512,
      width: 0,
    });

    window.onresize = () => {
      editor.layout({
        height: 512,
        width: 0,
      });
    };

    return () => {
      editor.dispose();
    };
  }, []);

  return (
    <div className="CodeEditor">
      <div id="editor" className="w-full h-full rounded-xl shadow-md"></div>
    </div>
  );
};

export default CodeEditor;
