import express from "express";
import BuyRequest from "./../models/buyRequest";
import SellRequest from "./../models/sellRequest";

export default class Phones {
  /**
   *
   *
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object}
   * @memberof Phones
   */
  static async getRequests(req, res) {
    const { type, page, limit, term, min, max } = req.query;
    let RequestType;

    if (type === "buyrequest") {
      RequestType = BuyRequest;
    }

    if (type === "sellrequest") {
      RequestType = SellRequest;
    }

    const total = await RequestType.countDocuments();
    let totalPages = Math.ceil(total / limit);

    if (!totalPages) totalPages = 1;
    const skip = (page - 1) * limit;
    let obj = {};
    let sortingBy = { id: 1 };
    if (term) {
      obj = { $text: { $search: term } };
      sortingBy = { score: { $meta: "textScore" } };
    }
    

    const result = await RequestType.find(
      { ...obj, price: { $gte: Number(min)|| 40, $lte: Number(max)|| 1500 } },
      // { score: { $meta: "textScore" } }
    )
      .sort(sortingBy)
      .skip(skip)
      .limit(Number(limit));
    return res.json({
      total,
      totalPages,
      limit,
      page,
      [type]: result,
    });
  }
}
