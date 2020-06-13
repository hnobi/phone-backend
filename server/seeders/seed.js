import csv from "csv-parser";
import "dotenv/config";
import { createReadStream } from "fs";
import DB from "../models/db";
import BuyRequest from "../models/buyRequest";
import SellRequest from "../models/sellRequest";

const { cloundinaryUrl } = process.env;
const imageMap = {
  "IPhone XS Max": "iphone_xs_max.png",
  "IPhone XS": "iphone_xs.png",
  "IPhone XR": "iphone_xr.png",
  "IPhone X": "X.png",
  "IPhone 8 PLUS": "iphone_8_plus.png",
  "IPhone 8": "iphone_8.png",
  "IPhone 7 PLUS": "iphone_7_plus.png",
  "IPhone 7": "iphone_7.png",
  "IPhone 6S PLUS": "iphone_6s_plus.png",
  "IPhone 6S": "iphone_6S.png",
  "IPhone 6 PLUS": "iphone_6_plus.png",
  "IPhone 6": "iphone_6.png",
  "IPhone SE": "iphone_se.png",
};

DB._connect();

[BuyRequest, SellRequest].map((requestType,index) => {
  const file = ["buy_req_data.csv", "sell_req_data.csv"];
  const datas = [];

 requestType.collection.drop();

  createReadStream(file[index])
    .pipe(csv())
    .on("data", (request) => {
      request.imageUrl = `${cloundinaryUrl}/${imageMap[request.phone_name]}`;
        //  delete request.id
      datas.push(request);
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
      requestType.create(datas);
     DB._disconnect();
    });
})

