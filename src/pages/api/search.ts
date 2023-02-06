import { API_URL } from "@/config";
import { Search } from "@/interfaces/Search";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Search>
) {
  const { query } = req;

  fetch(`${API_URL}/search/${query.name}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json(data);
    });
}
