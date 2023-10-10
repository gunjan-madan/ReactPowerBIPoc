import React from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

const PowerBI = () => {
  return (
    <div
      style={{
        height: "800px",
      }}
    >
      <PowerBIEmbed
        embedConfig={{
          type: "report",
          id: "af1e3172-bec8-4ce4-98f3-bee955673a41",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=af1e3172-bec8-4ce4-98f3-bee955673a41&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
          accessToken:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMGMwOTNlM2YtMjFhYy00ZmU1LTgyYjEtNzhiNmQ1Y2E3NmFkLyIsImlhdCI6MTY5NjkyMzAyOCwibmJmIjoxNjk2OTIzMDI4LCJleHAiOjE2OTY5MjgxNDUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUF0bFlNQlpUMVdTRHlFajB1dW5HdXZLenRYZzd0ZU9Ua2xFcmVadVdMRzVHaTN1QTVTcTkwKzE0UWRYQ0JpUEtMIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTWFkYW4iLCJnaXZlbl9uYW1lIjoiR3VuamFuIiwiaXBhZGRyIjoiMjQwMTo0OTAwOjFjNjg6OTY0OTo5MTQ2OjFmNTI6MjBkYjo4NTA5IiwibmFtZSI6Ikd1bmphbiBNYWRhbiIsIm9pZCI6IjViYjZjZDE4LWJhMGQtNDUyNi05ZTIxLWM0Yzc2MGQzNTg5MCIsInB1aWQiOiIxMDAzMjAwMzAyNzg1QkFCIiwicmgiOiIwLkFTc0FQejRKREt3aDVVLUNzWGkyMWNwMnJRa0FBQUFBQUFBQXdBQUFBQUFBQUFEQ0FCSS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiI4VmJydnR2T2Zyelc2MHM3LTJqaUxDa1lRRWVwTlRRbmZ4UVNFRnNiZ05rIiwidGlkIjoiMGMwOTNlM2YtMjFhYy00ZmU1LTgyYjEtNzhiNmQ1Y2E3NmFkIiwidW5pcXVlX25hbWUiOiJHdW5qYW5NYWRhbkBUdXJpbmc5ODIub25taWNyb3NvZnQuY29tIiwidXBuIjoiR3VuamFuTWFkYW5AVHVyaW5nOTgyLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IjRTLVIwa3cwOEVHbE83clA0Zk5JQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfcGwiOiJlbiJ9.El01bKQnsy9PhehBUBXji7M3ZvKwY52WeCaqnozIOsfT5fC81FKo4n_2Yw14z_d3cuwbtvptEzmTdHJLZlILJL4exU_gvJHUMrF8Rgv2xIM-7zQd1NLz053L-0TkYX2d6pUbsLq4gXyRBa2nFDsRLRZ0FT40FqIflbqj7LNUrSilpwSUsK6CM3Shz9EXOj1PhjoQXBH4q2UhYf_bGEQkQs4hGltv-6vQX9cUIzShcIS0WxuNYqh4XD78U_xaY0bB4K39-mEvgTcWgc6HXAv8MkwRDGzuCrexhy822PRU0HbX36qHMbEkp7RE649LF5BG5HbORMtJaGJ2sZHxlWBQnw",

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
