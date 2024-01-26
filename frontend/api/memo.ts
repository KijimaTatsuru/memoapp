import { MemoType } from "../types/memo";
import client from "./client";

export const getMemos = () => {
  return client.get<MemoType[]>("memos");
  // const jsonString = require("../../../testdata/test_data.json");
  // console.log(jsonString);
  // return jsonString;
};
