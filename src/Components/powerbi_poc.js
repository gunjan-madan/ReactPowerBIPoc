import React, { useEffect, useState } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import {
  service,
  factories,
  models,
  IEmbedConfiguration,
} from "powerbi-client";
import * as config from "../config";

const PowerBI = () => {
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    console.log(config.reportId);
  }, []);

  const getEmbedUrl = async () => {
    const res = await fetch(
      "https://app.powerbi.com/groups/me/reports/" + config.reportId,
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        method: "GET",
      }
    );
  };

  const getAccessToken = async () => {
    const res = await fetch(
      " https://login.microsoftonline.com/common/oauth2/v2.0/token",
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        method: "GET",
        body: {
          grant_type: "client_credentials",
          client_id: config.clientId,
          client_secret: config.clientSecret,
          scope: "https://analysis.windows.net/powerbi/api/.default",
        },
      }
    );
  };
  return (
    <div
      style={{
        height: "400px",
      }}
    >
      <PowerBIEmbed
        embedConfig={{
          type: "report",
          id: config.reportId,
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=af1e3172-bec8-4ce4-98f3-bee955673a41&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
          accessToken: config.accessToken,

          tokenType: models.TokenType.Aad,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: true,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report Loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report Loaded");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName={"report-container"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      ></PowerBIEmbed>
    </div>
  );
};

export default PowerBI;
