import { Schema, model } from "mongoose";

const BuyRequestSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },

    phone_name: {
      type: String,
    },

    storage_capacity: {
      type: String,
    },

    price: {
      type: Number,
    },

    condition: {
      type: String,
    },

    status: {
      type: String,
    },

    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

BuyRequestSchema.index({
  phone_name: "text",
  condition: "text",
  storage_capacity: "text",
});

export default model("BuyRequest", BuyRequestSchema);
