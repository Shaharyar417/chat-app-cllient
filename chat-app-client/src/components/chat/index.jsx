import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import CustomHeader from "@/components/customHeader";
import StandardMessageForm from "@/components//customMessageForms/StandardMessageForm";
import Ai from "@/components/customMessageForms/Ai";
import AiCode from "../customMessageForms/AiCode";
import AiAssist from "../customMessageForms/AiAssist";

function Chat() {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "shery",
    "1234"
  );
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <CustomHeader chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiCode_")) {
            return <AiCode props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiAssist_")) {
            return <AiAssist props={props} activeChat={chatProps.chat} />;
          }
          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
}

export default Chat;
