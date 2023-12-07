import React from "react";
import axios from "axios";

const discordWebhook =
  "https://discord.com/api/webhooks/1180249590574895104/Kp-4LsJgRjVL-A1f970xrer8f-Y3EWCRBny7tB2KVOm5dmiPN-P0s3IbjHiYtGfkmKHa";

export default function DiscordService() {
  const [sendResponse, setSendResponse] = React.useState({
    loading: false,
    success: false,
    error: false,
  });

  function resetResponse () {
    setSendResponse({loading: false, success: false, error: false,})
  }

  const send = async (data) => {
    const body = {
      content: "Message Received", 
      tts: false,
      color: "white",
      embeds: [
        {
          title: "Contact Form",
          description: data,
        },
      ],
    };

    try {
      setSendResponse((prev) => {
        return { ...prev, error: false, success: false, loading: true };
      });
      const data = await axios.post(discordWebhook, body);
      setSendResponse((prev) => {
        return { ...prev, success: true, loading: false };
      });
    } catch (error) {
      setSendResponse((prev) => {
        return { ...prev, error: error, loading: false };
      });
    }
  };

  return { send, sendResponse, resetResponse };
}
