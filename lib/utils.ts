"use server";

import { IResponse } from "./interfaces";

export async function getData(longUrl: string): Promise<IResponse> {
  const BITLY_TOKEN = process.env.BITLY_TOKEN;
  const MOCK_API_TOKEN = process.env.MOCK_API_TOKEN;

  // await fetch(`https://${MOCK_API_TOKEN}.mockapi.io/longUrl/urls`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     response = data;
  //   });
  let response: IResponse = {}
  await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${BITLY_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: longUrl,
      domain: "bit.ly",
      group_guid: "Bo1idMjoFj6",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      response = data
    });
  return response
}
