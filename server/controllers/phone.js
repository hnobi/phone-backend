import express from "express";
import BuyRequest from "./../models/buyRequest";
import SellRequest from "./../models/sellRequest";

export default class PhoneRequest {

  static async getBuyRequest(req, res) {
    const { type , page, limit} = req.query;
    let RequestType;

    if (type === "buyrequest") {
      RequestType = BuyRequest;
    }

    if (type === "sellrequest") {
      RequestType = SellRequest;
    }

    const total = await RequestType.count()
    let totalPages = Math.ceil(total/limit);

     if (!totalPages) totalPages = 1;
    const skip = (page  - 1) * limit;
    const result = await RequestType.find({}).sort({id:1}).skip(skip).limit(Number(limit));
      return res.json({
           total,
           totalPages,
           limit,
           page,
          [type]: result,
         });
  }
}

